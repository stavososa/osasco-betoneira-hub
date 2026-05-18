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
      { title: "Serviços , Locação, Venda e Entrega de Betoneiras" },
      { name: "description", content: "Locação diária/semanal/mensal, venda de betoneiras 150L–400L e entrega/retirada em Osasco. Solicite um orçamento." },
      { property: "og:title", content: "Serviços | Betoneira Osasco" },
      { property: "og:description", content: "Locação, venda e logística de betoneiras em Osasco." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/servicos" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/servicos" }],
  }),
  component: ServicosPage,
});

const SERVICOS = [
  { n: "01", titulo: "Locação de Betoneiras", desc: "150L, 250L e 400L para diária, semanal ou mensal. Equipamentos revisados.", itens: ["Diária a partir de R$ 80", "Descontos semanal/mensal", "Elétricas e a gasolina"] },
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

          <div className="reveal mt-14 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] p-8 text-center hard-shadow">
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
