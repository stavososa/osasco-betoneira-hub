import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CTAFinal } from "@/components/CTAFinal";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon, PhoneIcon, WhatsappIcon } from "@/components/icons/Icons";
import caminhaoBetoneira from "@/assets/caminhao-betoneira.webp";

export const Route = createFileRoute("/locacao-caminhao-betoneira")({
  head: () => ({
    meta: [
      { title: "Locação de Caminhão Betoneira em Osasco | Betoneiras Osasco" },
      { name: "description", content: "Locação de caminhão betoneira (mixer truck) em Osasco SP para obras de grande porte. Concretagem pesada de 8m³ com operador incluso. Orçamento no WhatsApp." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/locacao-caminhao-betoneira/" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/locacao-caminhao-betoneira/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://betoneiraosasco.com.br/locacao-caminhao-betoneira/#webpage",
          "url": "https://betoneiraosasco.com.br/locacao-caminhao-betoneira/",
          "name": "Locação de Caminhão Betoneira em Osasco | Betoneiras Osasco",
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
              { "@type": "ListItem", position: 2, name: "Locação de Caminhão Betoneira", item: "https://betoneiraosasco.com.br/locacao-caminhao-betoneira/" },
            ],
          },
          "mainEntity": {
            "@type": "Service",
            "@id": "https://betoneiraosasco.com.br/locacao-caminhao-betoneira/#service",
            "name": "Locação de Caminhão Betoneira (Mixer Truck) em Osasco",
            "serviceType": "Concrete Mixer Truck Rental",
            "description": "Locação de caminhão betoneira para concretagem pesada em Osasco e Grande São Paulo. Capacidade 8m³, operador incluso.",
            "provider": { "@id": "https://betoneiraosasco.com.br/#business" },
            "areaServed": [
              { "@type": "City", name: "Osasco" },
            ],
            "url": "https://betoneiraosasco.com.br/locacao-caminhao-betoneira/",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "itemListElement": [{ "@type": "Offer", itemOffered: { "@type": "Product", name: "Caminhão Betoneira", description: "Locação de caminhão betoneira 8m³ com operador.", aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "31" } } }],
            },
            "potentialAction": {
              "@type": "RentAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://wa.me/5511975465766?text=Quero%20alugar%20caminhao%20betoneira",
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
  component: LocacaoCaminhaoBetoPage,
});

function LocacaoCaminhaoBetoPage() {
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
                <span className="text-[var(--brand-yellow)]">/ Caminhão Betoneira</span>
              </nav>
              <div className="reveal mt-4 inline-flex items-center gap-2 bg-[var(--brand-yellow)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)]">
                🚛 Grande Porte
              </div>
              <h1 className="reveal mt-3 font-display text-[3rem] leading-[0.92] tracking-tight md:text-[4.5rem]">
                Locação de Caminhão <span className="text-[var(--brand-yellow)]">Betoneira</span> em Osasco
              </h1>
              <p className="reveal mt-6 max-w-md text-white/80 leading-relaxed">
                Aluguel de caminhão betoneira (mixer truck) para obras de grande porte em Osasco SP e Grande São Paulo. Capacidade de 8m³ por viagem, operador incluso, movido a diesel. Ideal para concretagem pesada onde betoneiras convencionais não dão conta.
              </p>
              <div className="reveal mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5511975465766?text=Quero%20orçamento%20de%20caminhão%20betoneira%20em%20Osasco" target="_blank" rel="noopener" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow">
                  <WhatsappIcon size={16} /> Orçamento no WhatsApp <ArrowIcon size={16} />
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

        {/* FAQ Caminhão Betoneira */}
        <section className="bg-[var(--brand-navy)] text-white py-20 relative noise-overlay">
          <div className="mx-auto max-w-4xl px-4">
            <div className="reveal flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-yellow)]" />
              <span className="spec-label !text-white/70">Dúvidas Frequentes</span>
              <span className="h-px w-10 bg-[var(--brand-yellow)]" />
            </div>
            <h2 className="reveal mt-2 text-center font-display text-3xl text-white md:text-5xl">
              Perguntas sobre <span className="font-editorial text-[var(--brand-yellow)]">Caminhão Betoneira</span>
            </h2>
            <div className="reveal mt-12 divide-y-2 divide-white/10 border-y-2 border-white/10">
              <details className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-xl">
                  <span>Qual a capacidade de um caminhão betoneira?</span>
                  <span className="text-[var(--brand-yellow)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Trabalhamos com misturadores (mixer trucks) com capacidade para 8 m³ de concreto por viagem. Isso equivale a aproximadamente 20 vezes a capacidade de uma betoneira elétrica padrão de 400 litros.
                </p>
              </details>
              <details className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-xl">
                  <span>O operador e o combustível estão inclusos no aluguel?</span>
                  <span className="text-[var(--brand-yellow)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Sim. O aluguel do caminhão betoneira inclui o veículo rodando com diesel, bem como um operador qualificado para dirigir e operar a bica de despejo durante todo o processo de concretagem na sua obra em Osasco e região.
                </p>
              </details>
              <details className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-xl">
                  <span>Vocês também fornecem o concreto usinado?</span>
                  <span className="text-[var(--brand-yellow)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Nosso serviço principal é a locação do equipamento (caminhão betoneira) para quem já possui a central misturadora ou o insumo. Caso precise da solução completa (concreto usinado + caminhão), entre em contato via WhatsApp para verificarmos a disponibilidade do fornecimento de concreto na sua região.
                </p>
              </details>
              <details className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-xl">
                  <span>Como é calculado o valor da locação?</span>
                  <span className="text-[var(--brand-yellow)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  O valor da locação varia conforme a distância do canteiro de obras e o volume de viagens ou horas contratadas. Oferecemos pacotes flexíveis e personalizados para construtoras, empresas de engenharia e grandes empreiteiras. Peça sua cotação rápida clicando nos botões de contato.
                </p>
              </details>
            </div>
          </div>
        </section>

        <CTAFinal
          title="Locação de Caminhão Betoneira em Osasco"
          highlight="solicite orçamento agora."
          eyebrow="Grande volume, entrega rápida"
          waText="Quero orçamento de caminhão betoneira em Osasco"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
