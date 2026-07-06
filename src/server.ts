import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

// Matches wrangler.jsonc's assets.run_worker_first — these paths are routed
// here instead of being served directly by Cloudflare, specifically so we
// can attach SECURITY_HEADERS to them below.
const STATIC_ASSET_PATTERNS = [
  /^\/assets\//,
  /^\/favicon\.png$/,
  /^\/robots\.txt$/,
  /^\/sitemap\.xsl$/,
  /^\/llms\.txt$/,
];

function isStaticAssetPath(pathname: string): boolean {
  return STATIC_ASSET_PATTERNS.some((pattern) => pattern.test(pathname));
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

// Applied to every response so Screaming Frog / browsers see them on all
// 94 crawled URLs, not just the ones with a route-level headers() export.
const SECURITY_HEADERS: Record<string, string> = {
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'self';",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
};

function withSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// React's SSR renderer self-closes void elements (e.g. <meta .../>), which
// the W3C validator flags: "Trailing slash on void elements has no effect
// and interacts badly with unquoted attribute values." Strip it before the
// HTML reaches the client.
const VOID_ELEMENTS =
  "area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr";
const VOID_ELEMENT_SELF_CLOSE_RE = new RegExp(
  `<(${VOID_ELEMENTS})((?:[^>]*[^/>])?)\\s*/>`,
  "gi",
);

async function stripVoidElementSelfClose(response: Response): Promise<Response> {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;

  const body = await response.text();
  const fixed = body.replace(VOID_ELEMENT_SELF_CLOSE_RE, "<$1$2>");
  return new Response(fixed, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const pathname = new URL(request.url).pathname;
      const assets = (env as { ASSETS?: { fetch: typeof fetch } } | undefined)?.ASSETS;
      if (assets && isStaticAssetPath(pathname)) {
        return withSecurityHeaders(await assets.fetch(request));
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);
      return withSecurityHeaders(await stripVoidElementSelfClose(normalized));
    } catch (error) {
      console.error(error);
      return withSecurityHeaders(brandedErrorResponse());
    }
  },
};
