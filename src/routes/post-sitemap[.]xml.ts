import { createFileRoute } from "@tanstack/react-router";
import { POSTS } from "./blog.index";

const BASE_URL = "https://betoneiraosasco.com.br";
const TODAY = new Date().toISOString().split("T")[0];

const BLOG_POSTS = POSTS.filter((p) => p.active).map((p) => p.slug);

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/post-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/blog", changefreq: "weekly", priority: "0.7", lastmod: TODAY },
          ...BLOG_POSTS.map((slug) => ({
            path: `/blog/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
            lastmod: TODAY,
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n")
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
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
