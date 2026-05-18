import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapEmbed } from "@/components/MapEmbed";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Betoneira Osasco — Locação e Venda de Betoneiras" },
      { name: "description", content: "Locação e venda de betoneiras em Osasco. Entrega e retirada no mesmo dia, equipamentos revisados. WhatsApp (11) 97546-5766." },
      { property: "og:title", content: "Betoneira Osasco — Locação e Venda" },
      { property: "og:description", content: "Locação e venda de betoneiras em Osasco. Entrega e retirada no mesmo dia." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[var(--brand-navy)] to-[#0f1b3f] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <span className="inline-block rounded-full bg-[var(--brand-yellow)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-navy)]">
                Atendimento em toda Osasco
              </span>
              <h1 className="mt-4 font-display text-4xl uppercase leading-tight md:text-6xl">
                Locação e venda de <span className="text-[var(--brand-yellow)]">betoneiras</span> em Osasco
              </h1>
              <p className="mt-4 max-w-lg text-white/85">
                Entrega e retirada no mesmo dia. Equipamentos revisados, prontos para sua obra — diária, semanal ou mensal.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://wa.me/5511975465766" target="_blank" rel="noopener" className="rounded-md bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold text-[var(--brand-navy)] shadow hover:brightness-95">
                  Falar no WhatsApp
                </a>
                <a href="tel:+5511975465766" className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  (11) 97546-5766
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 self-center text-center text-sm">
              {[
                ["+50", "Bairros atendidos"],
                ["Mesmo dia", "Entrega e retirada"],
                ["150L–400L", "Modelos disponíveis"],
              ].map(([k, v]) => (
                <div key={v} className="rounded-lg border border-white/15 bg-white/5 p-4">
                  <div className="font-display text-3xl text-[var(--brand-yellow)]">{k}</div>
                  <div className="mt-1 text-white/75">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-3xl uppercase text-[var(--brand-navy)]">Nossos serviços</h2>
          <p className="mt-2 text-muted-foreground">Tudo o que você precisa para concretar sem atraso.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Locação", d: "Diária, semanal ou mensal. Betoneiras de 150L a 400L revisadas e prontas para uso." },
              { t: "Venda", d: "Equipamentos novos e seminovos com garantia. Modelos elétricos e a gasolina." },
              { t: "Entrega e Retirada", d: "Logística rápida em toda Osasco. Entregamos e buscamos onde sua obra estiver." },
            ].map((s) => (
              <article key={s.t} className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-3 h-1 w-10 rounded bg-[var(--brand-yellow)]" />
                <h3 className="font-display text-xl uppercase text-[var(--brand-navy)]">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/servicos" className="text-sm font-semibold text-[var(--brand-navy)] underline-offset-4 hover:underline">
              Ver detalhes dos serviços →
            </Link>
          </div>
        </section>

        {/* Mapa Osasco */}
        <section className="bg-muted/40 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-display text-3xl uppercase text-[var(--brand-navy)]">Atendemos toda <span className="text-[var(--brand-yellow)]">Osasco</span></h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Da Zona Norte à Zona Sul, do Centro aos jardins. Entrega e retirada no mesmo dia em todos os bairros da cidade.
            </p>
            <div className="mt-6">
              <MapEmbed query="Osasco, SP, Brasil" title="Mapa de Osasco — área de atendimento" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="font-display text-3xl uppercase text-[var(--brand-navy)]">Perguntas frequentes</h2>
          <div className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
            {[
              { q: "Vocês entregam no mesmo dia?", a: "Sim. Pedidos confirmados até o início da tarde são entregues no mesmo dia em toda Osasco." },
              { q: "Qual o prazo mínimo de aluguel?", a: "A diária é o prazo mínimo, mas oferecemos descontos para semanais e mensais." },
              { q: "Precisa de caução?", a: "Sim, uma pequena caução é solicitada e devolvida na retirada do equipamento sem avarias." },
              { q: "Quais modelos de betoneira vocês trabalham?", a: "Betoneiras de 150L, 250L e 400L, elétricas e a gasolina." },
            ].map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="cursor-pointer list-none font-semibold text-[var(--brand-navy)]">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
