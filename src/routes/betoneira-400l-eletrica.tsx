import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CTAFinal } from "@/components/CTAFinal";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon, PhoneIcon, WhatsappIcon } from "@/components/icons/Icons";
import betoneira400 from "@/assets/betoneira-400l.webp";

export const Route = createFileRoute("/betoneira-400l-eletrica")({
  head: () => ({
    meta: [
      { title: "Betoneira 400L Elétrica em Osasco | Aluguel | Betoneiras Osasco" },
      { name: "description", content: "Aluguel de betoneira 400L elétrica em Osasco SP. Motor 2 cv, 220V monofásico, para obras de médio porte, muros e calçadas longas. Entrega no mesmo dia." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/betoneira-400l-eletrica/" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/betoneira-400l-eletrica/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://betoneiraosasco.com.br/betoneira-400l-eletrica/#webpage",
          "url": "https://betoneiraosasco.com.br/betoneira-400l-eletrica/",
          "name": "Betoneira 400L Elétrica em Osasco | Aluguel | Betoneiras Osasco",
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
              { "@type": "ListItem", position: 2, name: "Betoneira 400L Elétrica", item: "https://betoneiraosasco.com.br/betoneira-400l-eletrica/" },
            ],
          },
          "mainEntity": {
            "@type": "Service",
            "@id": "https://betoneiraosasco.com.br/betoneira-400l-eletrica/#service",
            "name": "Aluguel de Betoneira 400L Elétrica em Osasco",
            "serviceType": "Construction Equipment Rental",
            "description": "Locação de betoneira 400 litros elétrica em Osasco SP. Motor 2 cv, 220V monofásico. Para obras de médio porte, muros e calçadas longas.",
            "provider": { "@id": "https://betoneiraosasco.com.br/#business" },
            "areaServed": { "@type": "City", name: "Osasco" },
            "url": "https://betoneiraosasco.com.br/betoneira-400l-eletrica/",
            "potentialAction": {
              "@type": "RentAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://wa.me/5511975465766?text=Quero%20alugar%20betoneira%20400l%20eletrica",
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
  component: Betoneira400EPage,
});

function Betoneira400EPage() {
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
                <span className="text-[var(--brand-yellow)]">/ Betoneira 400L Elétrica</span>
              </nav>
              <h1 className="reveal mt-4 font-display text-[3rem] leading-[0.92] tracking-tight md:text-[4.5rem]">
                Betoneira <span className="text-[var(--brand-yellow)]">400L Elétrica</span> em Osasco
              </h1>
              <p className="reveal mt-6 max-w-md text-white/80 leading-relaxed">
                Aluguel de betoneira 400 litros elétrica em Osasco SP. Motor 2 cv, 220V monofásico. Para obras de médio porte, muros, calçadas longas e concretagem de maior volume. Entrega no mesmo dia.
              </p>
              <div className="reveal mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5511975465766?text=Quero%20alugar%20betoneira%20400L%20el%C3%A9trica" target="_blank" rel="noopener" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow">
                  <WhatsappIcon size={16} /> Orçamento no WhatsApp <ArrowIcon size={16} />
                </a>
                <a href="tel:+5511975465766" className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10">
                  <PhoneIcon size={16} /> (11) 97546-5766
                </a>
              </div>
            </div>
            <aside className="reveal flex items-center justify-center">
              <img src={betoneira400} alt="Betoneira 400 litros elétrica para obras de médio porte em Osasco" width={600} height={600} className="w-full max-w-sm object-contain" loading="eager" />
            </aside>
          </div>
        </section>
        <TrustBar />
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="reveal flex items-center gap-3"><span className="h-px w-10 bg-[var(--brand-ink)]" /><span className="spec-label">Ficha Técnica</span></div>
          <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">Especificações <span className="font-editorial text-[var(--brand-navy)]">técnicas</span></h2>
          <div className="reveal mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[{ label: "Capacidade", value: "400 litros" }, { label: "Motor", value: "2 cv elétrico" }, { label: "Voltagem", value: "220V monofásico" }, { label: "Peso", value: "~155 kg" }, { label: "Uso indicado", value: "Obras de médio porte" }, { label: "Entrega", value: "Mesmo dia" }, { label: "Prazo mínimo", value: "1 diária" }, { label: "Pagamento", value: "PIX, dinheiro ou cartão" }].map((s) => (
              <div key={s.label} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)]">
                <div className="spec-label text-[var(--brand-navy)]">{s.label}</div>
                <div className="mt-2 font-display text-xl text-[var(--brand-ink)]">{s.value}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[var(--brand-concrete)] border-y-2 border-[var(--brand-ink)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3"><span className="h-px w-10 bg-[var(--brand-ink)]" /><span className="spec-label">Quando usar</span></div>
            <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">Para <span className="font-editorial text-[var(--brand-navy)]">obras de médio porte</span></h2>
            <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {["Muro grande", "Calçada longa", "Laje comercial", "Dois pavimentos", "Piscina", "Baldrame", "Piso industrial", "Reforma ampla"].map((a) => (
                <li key={a} className="rounded-2xl bg-white p-4 text-center text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">{a}</li>
              ))}
            </ul>
          </div>
        </section>
        <CTAFinal
          title="Aluguel de betoneira 400L elétrica em Osasco"
          highlight="com entrega no mesmo dia."
          eyebrow="Alta produtividade"
          waText="Quero alugar betoneira 400L elétrica em Osasco"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
