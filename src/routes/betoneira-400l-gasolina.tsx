import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CTAFinal } from "@/components/CTAFinal";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon, PhoneIcon, WhatsappIcon } from "@/components/icons/Icons";
import betoneira400 from "@/assets/betoneira-400l.webp";

export const Route = createFileRoute("/betoneira-400l-gasolina")({
  head: () => ({
    meta: [
      { title: "Betoneira 400L Gasolina em Osasco | Sem Energia | Betoneiras Osasco" },
      { name: "description", content: "Aluguel de betoneira 400L a gasolina em Osasco SP. Motor 5,5 hp, sem necessidade de energia elétrica. Ideal para obras externas e locais sem tomada. Entrega no mesmo dia." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/betoneira-400l-gasolina/" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/betoneira-400l-gasolina/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://betoneiraosasco.com.br/betoneira-400l-gasolina/#webpage",
          "url": "https://betoneiraosasco.com.br/betoneira-400l-gasolina/",
          "name": "Betoneira 400L Gasolina em Osasco | Sem Energia | Betoneiras Osasco",
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
              { "@type": "ListItem", position: 2, name: "Betoneira 400L Gasolina", item: "https://betoneiraosasco.com.br/betoneira-400l-gasolina/" },
            ],
          },
          "mainEntity": {
            "@type": "Service",
            "@id": "https://betoneiraosasco.com.br/betoneira-400l-gasolina/#service",
            "name": "Aluguel de Betoneira 400L Gasolina em Osasco",
            "serviceType": "Construction Equipment Rental",
            "description": "Locação de betoneira 400 litros a gasolina em Osasco SP. Motor 5,5 hp, sem necessidade de energia elétrica. Ideal para obras externas.",
            "provider": { "@id": "https://betoneiraosasco.com.br/#business" },
            "areaServed": { "@type": "City", name: "Osasco" },
            "url": "https://betoneiraosasco.com.br/betoneira-400l-gasolina/",
            "potentialAction": {
              "@type": "RentAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://wa.me/5511975465766?text=Quero%20alugar%20betoneira%20400l%20gasolina",
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
  component: Betoneira400GPage,
});

function Betoneira400GPage() {
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
                <span className="text-[var(--brand-yellow)]">/ Betoneira 400L Gasolina</span>
              </nav>
              <h1 className="reveal mt-4 font-display text-[3rem] leading-[0.92] tracking-tight md:text-[4.5rem]">
                Betoneira <span className="text-[var(--brand-yellow)]">400L Gasolina</span> em Osasco
              </h1>
              <p className="reveal mt-6 max-w-md text-white/80 leading-relaxed">
                Aluguel de betoneira 400 litros a gasolina em Osasco SP. Motor 5,5 hp, alta mobilidade, sem necessidade de energia elétrica. Perfeita para obras externas, terrenos sem tomada e locais remotos.
              </p>
              <div className="reveal mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5511975465766?text=Quero%20alugar%20betoneira%20400L%20gasolina" target="_blank" rel="noopener" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow">
                  <WhatsappIcon size={16} /> Orçamento no WhatsApp <ArrowIcon size={16} />
                </a>
                <a href="tel:+5511975465766" className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10">
                  <PhoneIcon size={16} /> (11) 97546-5766
                </a>
              </div>
            </div>
            <aside className="reveal flex items-center justify-center">
              <img src={betoneira400} alt="Betoneira 400 litros a gasolina para obras sem energia em Osasco" width={600} height={600} className="w-full max-w-sm object-contain" loading="eager" />
            </aside>
          </div>
        </section>
        <TrustBar />
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="reveal flex items-center gap-3"><span className="h-px w-10 bg-[var(--brand-ink)]" /><span className="spec-label">Ficha Técnica</span></div>
          <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">Especificações <span className="font-editorial text-[var(--brand-navy)]">técnicas</span></h2>
          <div className="reveal mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[{ label: "Capacidade", value: "400 litros" }, { label: "Motor", value: "5,5 hp gasolina" }, { label: "Energia", value: "Sem tomada necessária" }, { label: "Peso", value: "~180 kg" }, { label: "Uso indicado", value: "Obras externas / sem energia" }, { label: "Entrega", value: "Mesmo dia" }, { label: "Prazo mínimo", value: "1 diária" }, { label: "Pagamento", value: "PIX, dinheiro ou cartão" }].map((s) => (
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
            <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">Liberdade para obras <span className="font-editorial text-[var(--brand-navy)]">sem energia</span></h2>
            <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {["Obra sem tomada", "Terreno externo", "Área rural", "Calçada pública", "Obra de muro", "Reforma isolada", "Concretagem pesada", "Serviço em lote vago"].map((a) => (
                <li key={a} className="rounded-2xl bg-white p-4 text-center text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">{a}</li>
              ))}
            </ul>
          </div>
        </section>
        <CTAFinal
          title="Aluguel de betoneira 400L gasolina em Osasco"
          highlight="com entrega no mesmo dia."
          eyebrow="Sem depender de energia"
          waText="Quero alugar betoneira 400L gasolina em Osasco"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
