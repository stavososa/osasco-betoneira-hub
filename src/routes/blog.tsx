import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HazardStripe } from "@/components/HazardStripe";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon } from "@/components/icons/Icons";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Betoneira Osasco" },
      { name: "description", content: "Dicas, guias e novidades sobre locação e venda de betoneiras em Osasco. Aprenda a escolher, operar e economizar na sua obra." },
      { property: "og:title", content: "Blog | Betoneira Osasco" },
      { property: "og:description", content: "Dicas e guias sobre betoneiras para sua obra em Osasco." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/blog" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/blog" }],
  }),
  component: BlogPage,
});

const POSTS = [
  {
    slug: "como-escolher-betoneira",
    titulo: "Como escolher a betoneira ideal para sua obra",
    resumo: "Capacidade, tipo de motor e voltagem , entenda os critérios para acertar na escolha.",
    data: "12 Mai 2026",
    categoria: "Guia",
  },
  {
    slug: "alugar-ou-comprar-betoneira",
    titulo: "Alugar ou comprar betoneira: o que vale mais a pena?",
    resumo: "Compare custos, tempo de obra e manutenção antes de tomar a decisão.",
    data: "05 Mai 2026",
    categoria: "Comparativo",
  },
  {
    slug: "manutencao-betoneira",
    titulo: "Manutenção de betoneira: dicas para prolongar a vida útil",
    resumo: "Limpeza correta, lubrificação e cuidados elétricos que evitam problemas.",
    data: "28 Abr 2026",
    categoria: "Manutenção",
  },
  {
    slug: "seguranca-obra-betoneira",
    titulo: "Segurança ao operar betoneira na obra",
    resumo: "EPIs obrigatórios, posicionamento e boas práticas para evitar acidentes.",
    data: "20 Abr 2026",
    categoria: "Segurança",
  },
  {
    slug: "betoneira-eletrica-vs-gasolina",
    titulo: "Betoneira elétrica x gasolina: qual escolher?",
    resumo: "Cada motor tem seu lugar , veja as vantagens e limitações de cada tipo.",
    data: "12 Abr 2026",
    categoria: "Comparativo",
  },
  {
    slug: "calculo-concreto-obra",
    titulo: "Como calcular a quantidade de concreto para sua obra",
    resumo: "Fórmula simples para evitar desperdício e economizar material.",
    data: "03 Abr 2026",
    categoria: "Guia",
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
          <HazardStripe />
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <article
                key={p.slug}
                className="reveal cut-corner flex flex-col border-2 border-[var(--brand-ink)] bg-card p-6 hard-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="spec-label">{p.categoria}</span>
                  <span className="font-mono text-xs text-muted-foreground">{p.data}</span>
                </div>
                <h2 className="mt-3 font-display text-xl text-[var(--brand-ink)]">{p.titulo}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.resumo}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--brand-navy)]">
                  Em breve <ArrowIcon size={14} />
                </span>
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
