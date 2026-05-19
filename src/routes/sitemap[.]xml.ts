import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://betoneiraosasco.com.br";
const TODAY = new Date().toISOString().split("T")[0];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>`,
          `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          `  <sitemap>`,
          `    <loc>${BASE_URL}/page-sitemap.xml</loc>`,
          `    <lastmod>${TODAY}</lastmod>`,
          `  </sitemap>`,
          `  <sitemap>`,
          `    <loc>${BASE_URL}/post-sitemap.xml</loc>`,
          `    <lastmod>${TODAY}</lastmod>`,
          `  </sitemap>`,
          `  <sitemap>`,
          `    <loc>${BASE_URL}/local-sitemap.xml</loc>`,
          `    <lastmod>${TODAY}</lastmod>`,
          `  </sitemap>`,
          `</sitemapindex>`,
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
