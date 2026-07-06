import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CTAFinal } from "@/components/CTAFinal";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon, PhoneIcon, WhatsappIcon, TruckIcon } from "@/components/icons/Icons";

export const Route = createFileRoute("/entrega-e-retirada-de-betoneira")({
  head: () => ({
    meta: [
      { title: "Entrega e Retirada de Betoneira em Osasco | Frete Rápido" },
      { name: "description", content: "Logística especializada de betoneiras em Osasco. Entrega no mesmo dia e retirada agendada direto na sua obra. Não deixe sua equipe parada!" },
      { property: "og:url", content: "https://betoneiraosasco.com.br/entrega-e-retirada-de-betoneira/" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/entrega-e-retirada-de-betoneira/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://betoneiraosasco.com.br/entrega-e-retirada-de-betoneira/#webpage",
          "url": "https://betoneiraosasco.com.br/entrega-e-retirada-de-betoneira/",
          "name": "Entrega e Retirada de Betoneira em Osasco | Frete Rápido",
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
              { "@type": "ListItem", position: 2, name: "Entrega e Retirada", item: "https://betoneiraosasco.com.br/entrega-e-retirada-de-betoneira/" },
            ],
          },
          "mainEntity": {
            "@type": "Service",
            "@id": "https://betoneiraosasco.com.br/entrega-e-retirada-de-betoneira/#service",
            "name": "Logística e Frete de Betoneiras",
            "serviceType": "Equipment delivery and pickup",
            "provider": { "@id": "https://betoneiraosasco.com.br/#business" },
            "areaServed": [
              { "@type": "City", name: "Osasco" },
            ],
            "description": "Entrega e retirada expressa de betoneiras em todas as regiões de Osasco.",
            "url": "https://betoneiraosasco.com.br/entrega-e-retirada-de-betoneira/",
          }
        }),
      },
    ],
  }),
  component: EntregaRetiradaPage,
});

function EntregaRetiradaPage() {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative noise-overlay overflow-hidden text-[var(--brand-ink)] bg-[var(--brand-yellow)]">
          <div className="mx-auto grid min-h-[50vh] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_1fr] md:gap-16 md:py-0">
            <div>
              <nav aria-label="breadcrumb" className="reveal flex items-center gap-2 spec-label !text-[var(--brand-ink)]/70">
                <Link to="/" className="hover:text-[var(--brand-navy)]">Início</Link>
                <span className="text-[var(--brand-ink)]/50">/</span>
                <Link to="/servicos" className="hover:text-[var(--brand-navy)]">Serviços</Link>
                <span className="text-[var(--brand-navy)]">/ Logística</span>
              </nav>
              <h1 className="reveal mt-3 font-display text-[3rem] leading-[0.92] tracking-tight md:text-[4.5rem]">
                Entrega e Retirada de <span className="text-white [text-shadow:_2px_2px_0_var(--brand-ink)]">Betoneiras</span>
              </h1>
              <p className="reveal mt-6 max-w-md text-[var(--brand-ink)]/80 leading-relaxed font-medium">
                Logística dedicada para levar sua betoneira até a porta da sua obra em Osasco. Agilidade na entrega para sua equipe não perder tempo, e praticidade na retirada quando o trabalho terminar.
              </p>
              <div className="reveal mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5511975465766?text=Quero%20orçamento%20com%20entrega%20de%20betoneira%20em%20Osasco" target="_blank" rel="noopener" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-ink)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-yellow)] hard-shadow">
                  <TruckIcon size={16} /> Consultar Frete <ArrowIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <TrustBar />

        {/* COMO FUNCIONA */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="reveal flex items-center gap-3"><span className="h-px w-10 bg-[var(--brand-ink)]" /><span className="spec-label">Processo de Logística</span></div>
          <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">Como funciona <span className="font-editorial text-[var(--brand-navy)]">nossa entrega</span></h2>
          <div className="reveal mt-10 grid gap-6 md:grid-cols-3">
            {[
              { num: "01", label: "Pedido Rápido", value: "Você fecha o aluguel pelo WhatsApp e informa o endereço completo em Osasco." },
              { num: "02", label: "Despacho Imediato", value: "Nossa equipe confere o equipamento de 12 pontos e embarca no veículo apropriado." },
              { num: "03", label: "Na Porta da Obra", value: "Descarregamos o equipamento com segurança e damos instruções básicas se precisar." },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-[var(--brand-concrete)] border-2 border-[var(--brand-ink)] p-6 hard-shadow">
                <div className="numeric text-4xl text-[var(--brand-yellow)] [text-shadow:_2px_2px_0_var(--brand-ink)]">{s.num}</div>
                <h3 className="mt-4 font-display text-xl text-[var(--brand-ink)]">{s.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.value}</p>
              </div>
            ))}
          </div>
        </section>

        <CTAFinal
          title="Precisa de uma betoneira pra hoje?"
          highlight="Chama no Zap."
          eyebrow="Logística Expressa"
          waText="Preciso de uma betoneira com entrega em Osasco"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
