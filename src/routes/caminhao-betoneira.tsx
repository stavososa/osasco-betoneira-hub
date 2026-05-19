import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon, PhoneIcon } from "@/components/icons/Icons";
import caminhaoBetoneira from "@/assets/caminhao-betoneira.webp";

export const Route = createFileRoute("/caminhao-betoneira")({
  head: () => ({
    meta: [
      { title: "Caminhão Betoneira em Osasco | Mixer Truck | Betoneiras Osasco" },
      { name: "description", content: "Caminhão betoneira (mixer truck) em Osasco SP para obras de grande porte. Concretagem pesada, 8m³, operador incluso, diesel. Solicite orçamento pelo WhatsApp." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/caminhao-betoneira" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/caminhao-betoneira" }],
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
          name: "Caminhão Betoneira (Mixer Truck) em Osasco",
          serviceType: "Concrete Mixer Truck Rental",
          description: "Locação de caminhão betoneira para concretagem pesada em Osasco e Grande São Paulo. Capacidade 8m³, operador incluso.",
          provider: { "@id": "https://betoneiraosasco.com.br/#business" },
          areaServed: [
            { "@type": "City", name: "Osasco" },
          ],
          url: "https://betoneiraosasco.com.br/caminhao-betoneira",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "https://betoneiraosasco.com.br/" },
            { "@type": "ListItem", position: 2, name: "Caminhão Betoneira", item: "https://betoneiraosasco.com.br/caminhao-betoneira" },
          ],
        }),
      },
    ],
  }),
  component: CaminhaoBetoPage,
});

function CaminhaoBetoPage() {
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
                <span className="text-[var(--brand-yellow)]">/ Caminhão Betoneira</span>
              </nav>
              <div className="reveal mt-4 inline-flex items-center gap-2 bg-[var(--brand-yellow)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)]">
                🚛 Grande Porte
              </div>
              <h1 className="reveal mt-3 font-display text-[3rem] leading-[0.92] tracking-tight md:text-[4.5rem]">
                Caminhão <span className="text-[var(--brand-yellow)]">Betoneira</span> em Osasco
              </h1>
              <p className="reveal mt-6 max-w-md text-white/80 leading-relaxed">
                Caminhão betoneira (mixer truck) para obras de grande porte em Osasco SP e Grande São Paulo. Capacidade de 8m³ por viagem, operador incluso, movido a diesel. Ideal para concretagem pesada onde betoneiras convencionais não dão conta.
              </p>
              <div className="reveal mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5511975465766?text=Quero%20orçamento%20de%20caminhão%20betoneira%20em%20Osasco" target="_blank" rel="noopener" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow">
                  Orçamento no WhatsApp <ArrowIcon size={16} />
                </a>
                <a href="tel:+5511975465766" className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10">
                  <PhoneIcon size={16} /> (11) 97546-5766
                </a>
              </div>
            </div>
            <aside className="reveal flex items-center justify-center">
              <img src={caminhaoBetoneira} alt="Caminhão betoneira amarelo para concretagem de grande porte em Osasco" width={700} height={500} className="w-full max-w-md object-contain" loading="eager" />
            </aside>
          </div>
        </section>
        <TrustBar />

        {/* DIFERENCIAIS */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="reveal flex items-center gap-3"><span className="h-px w-10 bg-[var(--brand-ink)]" /><span className="spec-label">Por que o caminhão betoneira?</span></div>
          <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">Quando a betoneira <span className="font-editorial text-[var(--brand-navy)]">não é suficiente</span></h2>
          <p className="reveal mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Para obras que exigem grandes volumes de concreto em pouco tempo, como lajes comerciais, fundações e pisos industriais, o caminhão betoneira entrega concreto pronto diretamente na obra, eliminando o custo com traço manual e reduzindo drasticamente o tempo de execução.
          </p>
          <div className="reveal mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Capacidade por viagem", value: "8 m³ de concreto" },
              { label: "Operador", value: "Incluso" },
              { label: "Combustível", value: "Diesel" },
              { label: "Cobertura", value: "Osasco e Grande SP" },
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
            <div className="reveal flex items-center gap-3"><span className="h-px w-10 bg-[var(--brand-ink)]" /><span className="spec-label">Aplicações</span></div>
            <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">Ideal para <span className="font-editorial text-[var(--brand-navy)]">grandes obras</span></h2>
            <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {["Laje comercial", "Fundação profunda", "Piso industrial", "Galpão", "Estacionamento", "Muro de contenção", "Obra institucional", "Condomínio"].map((a) => (
                <li key={a} className="rounded-2xl bg-white p-4 text-center text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">{a}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* COMPARATIVO */}
        <section className="mx-auto max-w-4xl px-4 py-20">
          <div className="reveal flex items-center gap-3"><span className="h-px w-10 bg-[var(--brand-ink)]" /><span className="spec-label">Comparativo</span></div>
          <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">Betoneira vs <span className="font-editorial text-[var(--brand-navy)]">Caminhão Betoneira</span></h2>
          <div className="reveal mt-8 overflow-hidden rounded-2xl border-2 border-[var(--brand-ink)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--brand-ink)] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-display">Critério</th>
                  <th className="px-6 py-4 text-left font-display">Betoneira 400L</th>
                  <th className="px-6 py-4 text-left font-display">Caminhão Betoneira</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--brand-ink)]/10">
                {[
                  ["Volume por carga", "400 litros", "8.000 litros (8m³)"],
                  ["Indicado para", "Obras residenciais", "Obras comerciais/industriais"],
                  ["Operador", "Você mesmo", "Incluso"],
                  ["Traço", "Você mistura", "Concreto pronto entregue"],
                  ["Velocidade", "Ciclo por ciclo", "Grande volume de uma vez"],
                ].map(([c, b, t]) => (
                  <tr key={c} className="even:bg-[var(--brand-concrete)]">
                    <td className="px-6 py-3 font-bold text-[var(--brand-ink)]">{c}</td>
                    <td className="px-6 py-3 text-muted-foreground">{b}</td>
                    <td className="px-6 py-3 font-bold text-[var(--brand-navy)]">{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="relative noise-overlay bg-[var(--brand-yellow)] py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <div className="spec-label !text-[var(--brand-ink)]/70">Grande volume, entrega rápida</div>
              <h2 className="mt-1 font-display text-3xl leading-tight text-[var(--brand-ink)] md:text-4xl">Caminhão betoneira em Osasco<br /><span className="font-editorial">solicite orçamento agora.</span></h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/5511975465766?text=Quero%20orçamento%20de%20caminhão%20betoneira%20em%20Osasco" target="_blank" rel="noopener" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow">WhatsApp <ArrowIcon size={16} /></a>
              <a href="tel:+5511975465766" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-ink)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-yellow)] hard-shadow"><PhoneIcon size={16} /> (11) 97546-5766</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
