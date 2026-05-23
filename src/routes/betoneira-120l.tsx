import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CTAFinal } from "@/components/CTAFinal";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon, PhoneIcon, WhatsappIcon } from "@/components/icons/Icons";
import betoneira120 from "@/assets/betoneira-120l.webp";

export const Route = createFileRoute("/betoneira-120l")({
  head: () => ({
    meta: [
      { title: "Betoneira 120L em Osasco | Aluguel e Venda | Betoneiras Osasco" },
      { name: "description", content: "Aluguel de betoneira 120L em Osasco SP. Modelo compacto elétrico 110/220V bivolt, ideal para reparos, reboco e acabamentos. Entrega no mesmo dia." },
      { property: "og:title", content: "Betoneira 120L em Osasco | Aluguel e Venda" },
      { property: "og:url", content: "https://betoneiraosasco.com.br/betoneira-120l" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/betoneira-120l" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://betoneiraosasco.com.br/betoneira-120l#webpage",
          "url": "https://betoneiraosasco.com.br/betoneira-120l",
          "name": "Betoneira 120L em Osasco | Aluguel e Venda | Betoneiras Osasco",
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
              { "@type": "ListItem", position: 2, name: "Betoneira 120L", item: "https://betoneiraosasco.com.br/betoneira-120l" },
            ],
          },
          "mainEntity": {
            "@type": "Service",
            "@id": "https://betoneiraosasco.com.br/betoneira-120l#service",
            "name": "Aluguel de Betoneira 120L em Osasco",
            "serviceType": "Construction Equipment Rental",
            "description": "Locação de betoneira 120 litros elétrica bivolt em Osasco SP. Motor 1/3 cv, ideal para reparos e acabamentos.",
            "provider": { "@id": "https://betoneiraosasco.com.br/#business" },
            "areaServed": { "@type": "City", name: "Osasco" },
            "url": "https://betoneiraosasco.com.br/betoneira-120l",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "itemListElement": [{ "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 120L Elétrica", description: "Betoneira compacta de 120 litros, elétrica bivolt 110V/220V, motor 1/3 cv.", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "56" } } }],
            },
            "potentialAction": {
              "@type": "RentAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://wa.me/5511975465766?text=Quero%20alugar%20betoneira%20120l",
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
  component: Betoneira120Page,
});

function Betoneira120Page() {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative noise-overlay overflow-hidden text-white bg-[var(--brand-navy)]">
          <div className="mx-auto grid min-h-[60vh] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_1fr] md:gap-16 md:py-0">
            <div className="relative">
              <nav aria-label="breadcrumb" className="reveal flex items-center gap-2 spec-label !text-white/70">
                <Link to="/" className="hover:text-[var(--brand-yellow)]">Início</Link>
                <span className="text-[var(--brand-yellow)]">/ Betoneira 120L</span>
              </nav>
              <h1 className="reveal mt-4 font-display text-[3rem] leading-[0.92] tracking-tight md:text-[4.5rem]">
                Betoneira <span className="text-[var(--brand-yellow)]">120L</span> em Osasco
              </h1>
              <p className="reveal mt-6 max-w-md text-white/80 leading-relaxed">
                Aluguel de betoneira 120 litros em Osasco SP. Modelo compacto elétrico bivolt 110V/220V, motor 1/3 cv. Perfeita para reparos, reboco e acabamentos em espaços reduzidos. Entrega no mesmo dia.
              </p>
              <div className="reveal mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5511975465766?text=Quero%20alugar%20betoneira%20120L%20em%20Osasco" target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow">
                  <WhatsappIcon size={16} /> Orçamento no WhatsApp <ArrowIcon size={16} />
                </a>
                <a href="tel:+5511975465766" className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10">
                  <PhoneIcon size={16} /> (11) 97546-5766
                </a>
              </div>
            </div>
            <aside className="reveal relative flex items-center justify-center">
              <img src={betoneira120} alt="Betoneira 120 litros compacta para reparos em Osasco" width={600} height={600} className="relative z-10 w-full max-w-sm object-contain" loading="eager" />
            </aside>
          </div>
        </section>

        <TrustBar />

        {/* SPECS */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Ficha Técnica</span>
          </div>
          <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">
            Especificações <span className="font-editorial text-[var(--brand-navy)]">técnicas</span>
          </h2>
          <div className="reveal mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Capacidade", value: "120 litros" },
              { label: "Motor", value: "1/3 cv elétrico" },
              { label: "Voltagem", value: "110V / 220V bivolt" },
              { label: "Peso", value: "~60 kg" },
              { label: "Uso indicado", value: "Reparos e acabamentos" },
              { label: "Entrega", value: "Mesmo dia" },
              { label: "Prazo mínimo", value: "1 diária" },
              { label: "Pagamento", value: "PIX, dinheiro ou cartão" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)]">
                <div className="spec-label text-[var(--brand-navy)]">{s.label}</div>
                <div className="mt-2 font-display text-xl text-[var(--brand-ink)]">{s.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* QUANDO USAR */}
        <section className="bg-[var(--brand-concrete)] border-y-2 border-[var(--brand-ink)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Quando usar</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">
              Ideal para <span className="font-editorial text-[var(--brand-navy)]">pequenos serviços</span>
            </h2>
            <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {["Reboco de parede", "Chapisco", "Emboço", "Rejunte", "Contrapiso pequeno", "Assentamento de tijolos", "Acabamento geral", "Reparo de calçada"].map((a) => (
                <li key={a} className="rounded-2xl bg-white p-4 text-center text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">{a}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <CTAFinal
          title="Aluguel de betoneira 120L em Osasco"
          highlight="com entrega no mesmo dia."
          eyebrow="Pronto para usar"
          waText="Quero alugar betoneira 120L em Osasco"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
