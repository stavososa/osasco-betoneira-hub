import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon, PhoneIcon } from "@/components/icons/Icons";
import betoneira250 from "@/assets/betoneira-250l.webp";

export const Route = createFileRoute("/betoneira-250l")({
  head: () => ({
    meta: [
      { title: "Betoneira 250L em Osasco | Mais Alugada | Betoneiras Osasco" },
      { name: "description", content: "Aluguel de betoneira 250L em Osasco SP. A mais pedida para laje, contrapiso e obras residenciais. Elétrica 220V mono, entrega no mesmo dia." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/betoneira-250l" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/betoneira-250l" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
          "@id": "https://betoneiraosasco.com.br/#business",
          name: "Betoneiras Osasco",
          url: "https://betoneiraosasco.com.br",
          telephone: "+5511975465766",
          address: { "@type": "PostalAddress", addressLocality: "Osasco", addressRegion: "SP", addressCountry: "BR" },
          geo: { "@type": "GeoCoordinates", latitude: -23.5324, longitude: -46.7919 },
          hasMap: "https://www.google.com/maps/search/?api=1&query=-23.5324,-46.7919",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Aluguel de Betoneira 250L em Osasco",
          serviceType: "Construction Equipment Rental",
          description: "Locação da betoneira mais alugada em Osasco: 250 litros, elétrica monofásica 220V, motor 1-2 cv. Ideal para laje, contrapiso e concretagem residencial.",
          provider: { "@id": "https://betoneiraosasco.com.br/#business" },
          areaServed: { "@type": "City", name: "Osasco" },
          url: "https://betoneiraosasco.com.br/betoneira-250l",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            itemListElement: [{ "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 250L Elétrica Monofásica", description: "A betoneira mais alugada em Osasco. 250 litros, elétrica 220V monofásica, motor 2 cv." } }],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "https://betoneiraosasco.com.br/" },
            { "@type": "ListItem", position: 2, name: "Betoneira 250L", item: "https://betoneiraosasco.com.br/betoneira-250l" },
          ],
        }),
      },
    ],
  }),
  component: Betoneira250Page,
});

function Betoneira250Page() {
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
                <span className="text-[var(--brand-yellow)]">/ Betoneira 250L</span>
              </nav>
              <div className="reveal mt-4 inline-flex items-center gap-2 bg-[var(--brand-yellow)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)]">
                ⭐ Mais Alugada
              </div>
              <h1 className="reveal mt-3 font-display text-[3rem] leading-[0.92] tracking-tight md:text-[4.5rem]">
                Betoneira <span className="text-[var(--brand-yellow)]">250L</span> em Osasco
              </h1>
              <p className="reveal mt-6 max-w-md text-white/80 leading-relaxed">
                O aluguel de betoneira 250L mais pedido em Osasco SP. Elétrica monofásica 220V, motor 1–2 cv. Ideal para laje residencial, contrapiso e concretagem. Entrega no mesmo dia.
              </p>
              <div className="reveal mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5511975465766?text=Quero%20alugar%20betoneira%20250L" target="_blank" rel="noopener" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow">
                  Orçamento no WhatsApp <ArrowIcon size={16} />
                </a>
                <a href="tel:+5511975465766" className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10">
                  <PhoneIcon size={16} /> (11) 97546-5766
                </a>
              </div>
            </div>
            <aside className="reveal flex items-center justify-center">
              <img src={betoneira250} alt="Betoneira 250 litros amarela mais alugada em Osasco" width={600} height={600} className="w-full max-w-sm object-contain" loading="eager" />
            </aside>
          </div>
        </section>
        <TrustBar />
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="reveal flex items-center gap-3"><span className="h-px w-10 bg-[var(--brand-ink)]" /><span className="spec-label">Ficha Técnica</span></div>
          <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">Especificações <span className="font-editorial text-[var(--brand-navy)]">técnicas</span></h2>
          <div className="reveal mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[{ label: "Capacidade", value: "250 litros" }, { label: "Motor", value: "1–2 cv elétrico" }, { label: "Voltagem", value: "220V monofásico" }, { label: "Peso", value: "~120 kg" }, { label: "Uso indicado", value: "Laje, contrapiso, concretagem" }, { label: "Entrega", value: "Mesmo dia" }, { label: "Prazo mínimo", value: "1 diária" }, { label: "Pagamento", value: "PIX, dinheiro ou cartão" }].map((s) => (
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
            <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">A queridinha das <span className="font-editorial text-[var(--brand-navy)]">obras residenciais</span></h2>
            <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {["Laje residencial", "Contrapiso", "Concretagem", "Calçada", "Muro", "Quintal", "Escada", "Fundação"].map((a) => (
                <li key={a} className="rounded-2xl bg-white p-4 text-center text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">{a}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="relative noise-overlay bg-[var(--brand-yellow)] py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <div className="spec-label !text-[var(--brand-ink)]/70">A mais pedida</div>
              <h2 className="mt-1 font-display text-3xl leading-tight text-[var(--brand-ink)] md:text-4xl">Aluguel de betoneira 250L em Osasco<br /><span className="font-editorial">com entrega no mesmo dia.</span></h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/5511975465766?text=Quero%20alugar%20betoneira%20250L" target="_blank" rel="noopener" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow">WhatsApp <ArrowIcon size={16} /></a>
              <a href="tel:+5511975465766" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-ink)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-yellow)] hard-shadow"><PhoneIcon size={16} /> (11) 97546-5766</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
