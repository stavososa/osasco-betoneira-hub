import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon } from "@/components/icons/Icons";
import melhoresMarcasImg from "@/assets/quais-as-melhores-marcas-de-betoneiras.webp";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Betoneira Osasco" },
      { name: "description", content: "Dicas, guias e novidades sobre locação e venda de betoneiras em Osasco. Aprenda a escolher, operar e economizar na sua obra." },
      { property: "og:title", content: "Blog | Betoneira Osasco" },
      { property: "og:description", content: "Dicas e guias sobre betoneiras para sua obra em Osasco." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/blog" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": "https://betoneiraosasco.com.br/blog#webpage",
          "url": "https://betoneiraosasco.com.br/blog",
          "name": "Blog | Betoneira Osasco",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://betoneiraosasco.com.br/#website",
            "url": "https://betoneiraosasco.com.br/",
            "name": "Betoneira Osasco"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", position: 1, name: "Início", item: "https://betoneiraosasco.com.br/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://betoneiraosasco.com.br/blog" },
            ],
          },
          "mainEntity": {
            "@type": "Blog",
            "@id": "https://betoneiraosasco.com.br/blog#blog",
            "url": "https://betoneiraosasco.com.br/blog",
            "name": "Blog Betoneira Osasco",
            "description": "Dicas, guias e novidades sobre locação e venda de betoneiras em Osasco. Aprenda a escolher, operar e economizar na sua obra.",
            "publisher": {
              "@id": "https://betoneiraosasco.com.br/#business"
            },
            "blogPost": POSTS.filter((p) => p.active).map((p) => ({
              "@type": "BlogPosting",
              "@id": `https://betoneiraosasco.com.br/blog/${p.slug}#entry`,
              "headline": p.titulo,
              "description": p.resumo,
              "url": `https://betoneiraosasco.com.br/blog/${p.slug}`,
              "datePublished": "2026-05-19",
              "author": {
                "@type": "Person",
                "name": "Beto Vieira"
              }
            }))
          }
        }),
      },
    ],
  }),
  component: BlogPage,
});

export const POSTS = [
  {
    slug: "melhores-marcas-de-betoneira",
    titulo: "Quais as Melhores Marcas de Betoneira? Guia Completo 2026",
    resumo: "Descubra quais são as melhores marcas de betoneira do mercado brasileiro, compare capacidades, preços e saiba qual escolher.",
    data: "19 Mai 2026",
    categoria: "Guia",
    imagem: melhoresMarcasImg,
    active: true,
  },
];

function BlogPage() {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative noise-overlay bg-[var(--brand-navy)] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-yellow)]" />
              <span className="spec-label !text-white/70">Conteúdo</span>
            </div>
            <h1 className="reveal reveal-delay-1 mt-3 font-display text-4xl md:text-6xl">
              Blog <span className="text-[var(--brand-yellow)]">Betoneira Osasco</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-white/85">
              Guias, dicas e comparativos para você acertar na escolha da betoneira e tocar sua obra com tranquilidade.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <article
                key={p.slug}
                className="reveal cut-corner flex flex-col border-2 border-[var(--brand-ink)] bg-card p-0 hard-shadow animate-reveal overflow-hidden"
              >
                {p.imagem && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-[var(--brand-ink)] bg-[var(--brand-ink)]/5">
                    <img
                      src={p.imagem}
                      alt={p.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between">
                    <span className="spec-label">{p.categoria}</span>
                    <span className="font-mono text-xs text-muted-foreground">{p.data}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl text-[var(--brand-ink)]">{p.titulo}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.resumo}</p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--brand-navy)] hover:text-[var(--brand-yellow)] transition-colors"
                  >
                    Ler guia completo <ArrowIcon size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 border-l-4 border-[var(--brand-yellow)] bg-[var(--brand-concrete)] p-6">
            <span className="spec-label">Precisa agora?</span>
            <h2 className="mt-1 font-display text-2xl text-[var(--brand-ink)]">
              Fale com a gente e tire suas dúvidas sobre betoneiras
            </h2>
            <Link
              to="/contato"
              className="mt-4 inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow"
            >
              Falar com especialista <ArrowIcon size={16} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
