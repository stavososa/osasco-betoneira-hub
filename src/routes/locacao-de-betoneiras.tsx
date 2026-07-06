import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CTAFinal } from "@/components/CTAFinal";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon, PhoneIcon, WhatsappIcon, CheckIcon } from "@/components/icons/Icons";
import heroImg from "@/assets/betoneira-hero.webp";

export const Route = createFileRoute("/locacao-de-betoneiras")({
  head: () => ({
    meta: [
      { title: "Locação de Betoneiras em Osasco | Aluguel Rápido e Barato" },
      { name: "description", content: "Locação de betoneiras em Osasco com entrega rápida. Modelos de 120L, 150L, 250L e 400L. Diária, semanal e mensal. Solicite orçamento!" },
      { property: "og:url", content: "https://betoneiraosasco.com.br/locacao-de-betoneiras/" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/locacao-de-betoneiras/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://betoneiraosasco.com.br/locacao-de-betoneiras/#webpage",
          "url": "https://betoneiraosasco.com.br/locacao-de-betoneiras/",
          "name": "Locação de Betoneiras em Osasco | Aluguel Rápido e Barato",
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
              { "@type": "ListItem", position: 2, name: "Locação de Betoneiras", item: "https://betoneiraosasco.com.br/locacao-de-betoneiras/" },
            ],
          },
          "mainEntity": {
            "@type": "Service",
            "@id": "https://betoneiraosasco.com.br/locacao-de-betoneiras/#service",
            "name": "Locação de Betoneiras em Osasco",
            "serviceType": "Construction equipment rental",
            "provider": { "@id": "https://betoneiraosasco.com.br/#business" },
            "areaServed": [
              { "@type": "City", name: "Osasco" },
            ],
            "description": "Locação de betoneiras em Osasco com entrega rápida. Modelos de 120L, 150L, 250L e 400L.",
            "url": "https://betoneiraosasco.com.br/locacao-de-betoneiras/",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "itemListElement": [
                { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 120L Elétrica", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "56" } } },
                { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 150L Elétrica", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "74" } } },
                { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 250L Elétrica", aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "128" } } },
                { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 400L Elétrica", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "82" } } },
              ],
            },
            "potentialAction": {
              "@type": "RentAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://wa.me/5511975465766?text=Quero%20alugar%20betoneira",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              }
            }
          }
        }),
      },
    ],
  }),
  component: LocacaoDeBetoneirasPage,
});

function LocacaoDeBetoneirasPage() {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative noise-overlay overflow-hidden text-white bg-[var(--brand-navy)]">
          <div className="mx-auto grid min-h-[60vh] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_1fr] md:gap-16 md:py-0">
            <div>
              <nav aria-label="breadcrumb" className="reveal flex items-center gap-2 spec-label !text-white/70">
                <Link to="/" className="hover:text-[var(--brand-yellow)]">Início</Link>
                <span className="text-white/50">/</span>
                <Link to="/servicos" className="hover:text-[var(--brand-yellow)]">Serviços</Link>
                <span className="text-[var(--brand-yellow)]">/ Locação de Betoneiras</span>
              </nav>
              <h1 className="reveal mt-3 font-display text-[3rem] leading-[0.92] tracking-tight md:text-[4.5rem]">
                Locação de <span className="text-[var(--brand-yellow)]">Betoneiras</span> em Osasco
              </h1>
              <p className="reveal mt-6 max-w-md text-white/80 leading-relaxed">
                Aumente a produtividade da sua obra alugando betoneiras revisadas de 120L a 400L. Atendimento focado em agilidade para não deixar seu pedreiro parado. Planos diários, semanais e mensais.
              </p>
              <div className="reveal mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5511975465766?text=Quero%20orçamento%20de%20locação%20de%20betoneira%20em%20Osasco" target="_blank" rel="noopener" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow">
                  <WhatsappIcon size={16} /> Ver Catálogo e Preços <ArrowIcon size={16} />
                </a>
              </div>
            </div>
            <aside className="reveal flex items-center justify-center">
              <img src={heroImg} alt="Betoneira amarela para locação em Osasco" width={700} height={500} className="w-full max-w-md object-contain" loading="eager" />
            </aside>
          </div>
        </section>
        <TrustBar />

        {/* POR QUE ALUGAR */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="reveal flex items-center gap-3"><span className="h-px w-10 bg-[var(--brand-ink)]" /><span className="spec-label">Vantagens</span></div>
          <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">Por que escolher o <span className="font-editorial text-[var(--brand-navy)]">nosso aluguel?</span></h2>
          <div className="reveal mt-10 grid gap-6 md:grid-cols-3">
            {[
              { label: "Equipamentos Revisados", value: "Menos risco de quebra na obra" },
              { label: "Economia Real", value: "Você paga apenas pelo tempo que usa" },
              { label: "Variedade", value: "De 120L para reforma até 400L para laje" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)]">
                <div className="spec-label text-[var(--brand-navy)]">{s.label}</div>
                <div className="mt-2 font-display text-xl text-[var(--brand-ink)]">{s.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PLANOS */}
        <section className="bg-[var(--brand-concrete)] border-y-2 border-[var(--brand-ink)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3"><span className="h-px w-10 bg-[var(--brand-ink)]" /><span className="spec-label">Planos Flexíveis</span></div>
            <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">Alugue pelo <span className="font-editorial text-[var(--brand-navy)]">tempo certo</span></h2>
            <div className="reveal mt-10 grid gap-6 md:grid-cols-3">
              <div className="border-2 border-[var(--brand-ink)] bg-white p-6 hard-shadow rounded-lg">
                <span className="numeric text-2xl text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] block">DIÁRIA</span>
                <h3 className="font-display text-lg text-[var(--brand-ink)] mt-2">Obras de Curto Prazo</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Ideal para pequenas reformas ou contrapisos rápidos.</p>
              </div>
              <div className="border-2 border-[var(--brand-ink)] bg-white p-6 hard-shadow rounded-lg">
                <span className="numeric text-2xl text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] block">SEMANAL</span>
                <h3 className="font-display text-lg text-[var(--brand-ink)] mt-2">Construções Médias</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Perfeito para etapas de alvenaria e pilares.</p>
              </div>
              <div className="border-2 border-[var(--brand-ink)] bg-white p-6 hard-shadow rounded-lg">
                <span className="numeric text-2xl text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] block">MENSAL</span>
                <h3 className="font-display text-lg text-[var(--brand-ink)] mt-2">Grandes Cronogramas</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Recomendado para construtoras e fundações longas.</p>
              </div>
            </div>
          </div>
        </section>

        <CTAFinal
          title="Locação de Betoneiras"
          highlight="rápida e sem burocracia."
          eyebrow="Temos todos os tamanhos"
          waText="Quero ver modelos e preços de betoneira em Osasco"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
