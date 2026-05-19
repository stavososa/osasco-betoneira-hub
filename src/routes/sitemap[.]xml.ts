import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BAIRROS } from "@/lib/bairros";
import { POSTS } from "./blog.index";

const BASE_URL = "https://betoneiraosasco.com.br";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
  lastmod?: string;
}

const TODAY = new Date().toISOString().split("T")[0];

const BLOG_POSTS = POSTS.filter((p) => p.active).map((p) => p.slug);

const BETONEIRAS_SLUGS = [
  "betoneira-120l",
  "betoneira-150l",
  "betoneira-250l",
  "betoneira-400l-eletrica",
  "betoneira-400l-gasolina",
  "caminhao-betoneira",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: TODAY },
          { path: "/comprar-betoneira", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
          { path: "/servicos", changefreq: "monthly", priority: "0.7", lastmod: TODAY },
          { path: "/blog", changefreq: "weekly", priority: "0.7", lastmod: TODAY },
          { path: "/sobre", changefreq: "monthly", priority: "0.5", lastmod: TODAY },
          { path: "/contato", changefreq: "monthly", priority: "0.5", lastmod: TODAY },
          ...BETONEIRAS_SLUGS.map((b) => ({
            path: `/${b}`,
            changefreq: "monthly" as const,
            priority: "0.8",
            lastmod: TODAY,
          })),
          ...BLOG_POSTS.map((slug) => ({
            path: `/blog/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
            lastmod: TODAY,
          })),
          ...BAIRROS.map((b) => ({
            path: `/alugar-betoneira-em-${b.slug}`,
            changefreq: "monthly" as const,
            priority: "0.9",
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
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
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
