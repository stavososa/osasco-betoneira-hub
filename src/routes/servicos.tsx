import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HazardStripe } from "@/components/HazardStripe";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import { CheckIcon, ArrowIcon } from "@/components/icons/Icons";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de Locação, Venda e Assistência de Betoneiras em Osasco" },
      { name: "description", content: "Locação diária, semanal e mensal de betoneiras de 120L a 400L e venda de equipamentos com assistência técnica especializada e entrega rápida em Osasco." },
      { property: "og:title", content: "Serviços de Locação e Venda de Betoneiras | Betoneira Osasco" },
      { property: "og:description", content: "Locação de betoneiras elétricas e a gasolina com frete rápido e manutenção preventiva completa em Osasco SP." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/servicos" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/servicos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://betoneiraosasco.com.br/servicos#service",
          "url": "https://betoneiraosasco.com.br/servicos",
          "name": "Serviços de Locação, Venda e Assistência de Betoneiras em Osasco",
          "serviceType": "Construction Equipment Rental and Sales",
          "description": "Locação diária/semanal/mensal, venda de betoneiras 120L–400L e entrega/retirada em Osasco. Solicite um orçamento.",
          "provider": {
            "@type": "LocalBusiness",
            "@id": "https://betoneiraosasco.com.br/#business"
          },
          "areaServed": [
            { "@type": "City", name: "Osasco" }
          ],
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", position: 1, name: "Início", item: "https://betoneiraosasco.com.br/" },
              { "@type": "ListItem", position: 2, name: "Serviços", item: "https://betoneiraosasco.com.br/servicos" }
            ]
          }
        }),
      },
    ],
  }),
  component: ServicosPage,
});

const SERVICOS = [
  { n: "01", titulo: "Locação de Betoneiras", desc: "120L, 150L, 250L e 400L para diária, semanal ou mensal. Equipamentos revisados.", itens: ["Sob consulta", "Descontos semanal/mensal", "Elétricas e a gasolina"] },
  { n: "02", titulo: "Venda de Betoneiras", desc: "Novos e seminovos com garantia. Ideal para construtoras e profissionais.", itens: ["Novas e seminovas", "Garantia de fábrica", "Assistência em Osasco"] },
  { n: "03", titulo: "Entrega & Retirada", desc: "Logística rápida em toda Osasco. Entregamos onde sua obra estiver.", itens: ["Entrega no mesmo dia", "Retirada agendada", "Todos os bairros"] },
];

function ServicosPage() {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative noise-overlay bg-[var(--brand-navy)] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-yellow)]" />
              <span className="spec-label !text-white/70">O que fazemos</span>
            </div>
            <h1 className="reveal reveal-delay-1 mt-3 font-display text-4xl md:text-6xl">Nossos <span className="text-[var(--brand-yellow)]">serviços</span></h1>
            <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-white/85">Locação, venda e logística de betoneiras em Osasco. Tudo o que sua obra precisa, sem complicação.</p>
          </div>
          <HazardStripe />
        </section>

        <TrustBar />

        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {SERVICOS.map((s, i) => (
              <article key={s.titulo} className={`reveal reveal-delay-${i + 1} cut-corner border-2 border-[var(--brand-ink)] bg-card p-6 hard-shadow`}>
                <div className="flex items-baseline justify-between">
                  <span className="numeric text-4xl text-[var(--brand-yellow)] [text-shadow:_2px_2px_0_var(--brand-ink)]">{s.n}</span>
                  <span className="spec-label">Serviço</span>
                </div>
                <h2 className="mt-3 font-display text-xl text-[var(--brand-ink)]">{s.titulo}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-2 border-t border-dashed border-[var(--brand-ink)]/30 pt-4 text-sm">
                  {s.itens.map((i2) => (
                    <li key={i2} className="flex items-start gap-2">
                      <CheckIcon size={16} className="mt-0.5 shrink-0 text-[var(--brand-yellow)]" />
                      <span>{i2}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Inspeção Preventiva de 12 Pontos */}
          <section className="reveal mt-20 border-2 border-[var(--brand-ink)] bg-white p-8 hard-shadow rounded-lg">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Qualidade Garantida</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl uppercase text-[var(--brand-ink)] mt-2">Inspeção técnica de 12 pontos antes do envio</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">Cada betoneira da nossa frota passa por uma verificação técnica rigorosa antes de ser transportada para qualquer obra em Osasco. Isso anula riscos de quebra e atrasos no seu cronograma de concretagem.</p>
            
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-xs">
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)]">
                <strong className="block text-[var(--brand-navy)] uppercase">1. Pinhão e Cremalheira</strong>
                <span className="text-muted-foreground mt-1 block">Ajuste de folga e lubrificação técnica para mistura sem travamentos.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)]">
                <strong className="block text-[var(--brand-navy)] uppercase">2. Isolamento Elétrico</strong>
                <span className="text-muted-foreground mt-1 block">Varredura de isolamento e conexões contra choques no canteiro.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)]">
                <strong className="block text-[var(--brand-navy)] uppercase">3. Cabo de Alimentação</strong>
                <span className="text-muted-foreground mt-1 block">Inspeção de plugues e fios contra rachaduras ou desgaste.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)]">
                <strong className="block text-[var(--brand-navy)] uppercase">4. Tambor e Palhetas</strong>
                <span className="text-muted-foreground mt-1 block">Remoção de resíduos acumulados e verificação de soldas internas.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)]">
                <strong className="block text-[var(--brand-navy)] uppercase">5. Botão de Emergência</strong>
                <span className="text-muted-foreground mt-1 block">Teste físico do botão Liga/Desliga e sistema de parada rápida.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)]">
                <strong className="block text-[var(--brand-navy)] uppercase">6. Pneus e Rolamento</strong>
                <span className="text-muted-foreground mt-1 block">Lubrificação dos eixos e estabilidade das rodas para transporte seguro.</span>
              </div>
            </div>
          </section>

          {/* Formatos Flexíveis de Parceria */}
          <section className="reveal mt-16">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Planos Personalizados</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl uppercase text-[var(--brand-ink)] mt-2">Formatos flexíveis de locação</h2>
            
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="border-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-6 hard-shadow rounded-lg">
                <span className="numeric text-2xl text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] block">DIÁRIO</span>
                <h3 className="font-display text-lg text-[var(--brand-ink)] mt-2">Obras de Curto Prazo</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Ideal para pequenas reformas residenciais, reparos em calçadas ou fundações rápidas que necessitam do equipamento por poucos dias.</p>
              </div>
              <div className="border-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-6 hard-shadow rounded-lg">
                <span className="numeric text-2xl text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] block">SEMANAL</span>
                <h3 className="font-display text-lg text-[var(--brand-ink)] mt-2">Construções Médias</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Perfeito para etapas de alvenaria e pilares que duram cerca de uma a duas semanas, aliando excelente custo-benefício à flexibilidade.</p>
              </div>
              <div className="border-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-6 hard-shadow rounded-lg">
                <span className="numeric text-2xl text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] block">MENSAL</span>
                <h3 className="font-display text-lg text-[var(--brand-ink)] mt-2">Grandes Cronogramas</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Recomendado para construtoras e incorporadoras que demandam o misturador durante toda a execução da fundação e estrutura.</p>
              </div>
            </div>
          </section>

          <div className="reveal mt-16 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] p-8 text-center hard-shadow rounded-lg">
            <div className="spec-label !text-[var(--brand-ink)]/70">Atendimento rápido</div>
            <h2 className="mt-1 font-display text-3xl text-[var(--brand-ink)] md:text-4xl">Solicite um orçamento agora</h2>
            <p className="mt-2 text-sm text-[var(--brand-ink)]/80">Resposta em minutos pelo WhatsApp.</p>
            <a href="https://wa.me/5511975465766" target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-ink)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-yellow)]">
              Falar no WhatsApp <ArrowIcon size={16} />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
