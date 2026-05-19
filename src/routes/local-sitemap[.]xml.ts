import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://betoneiraosasco.com.br";

export const Route = createFileRoute("/local-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:local="http://www.google.com/schemas/sitemap-local/1.0">`,
          `  <url>`,
          `    <loc>${BASE_URL}</loc>`,
          `    <local:location>`,
          `      <local:name>Betoneira Osasco</local:name>`,
          `      <local:address>Rua Narciso Sturlini, 201</local:address>`,
          `      <local:telephone>+5511975465766</local:telephone>`,
          `      <local:latitude>-23.5325</local:latitude>`,
          `      <local:longitude>-46.7917</local:longitude>`,
          `    </local:location>`,
          `  </url>`,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
