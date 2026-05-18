import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapEmbed } from "@/components/MapEmbed";
import { HazardStripe } from "@/components/HazardStripe";
import { TrustBar } from "@/components/TrustBar";
import { Steps } from "@/components/Steps";
import { ModelCard, type Modelo } from "@/components/ModelCard";
import { useReveal } from "@/lib/useReveal";
import { BAIRROS } from "@/lib/bairros";
import { ArrowIcon, PhoneIcon } from "@/components/icons/Icons";

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

const MODELOS: Modelo[] = [
  { volume: "150L", motor: "1/2 cv elétrica", voltagem: "110/220V", uso: "Reformas pequenas" },
  { volume: "250L", motor: "2 cv elétrica", voltagem: "220V mono", uso: "Obras residenciais", destaque: true },
  { volume: "400L", motor: "5,5 hp gasolina", voltagem: "Gasolina", uso: "Médio porte" },
];

const DESTAQUES = BAIRROS.slice(0, 8);

function HomePage() {
  useReveal();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* HERO */}
        <section className="relative noise-overlay bg-[var(--brand-navy)] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
            <div>
              <div className="reveal flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--brand-yellow)]" />
                <span className="spec-label !text-white/70">Osasco · SP</span>
              </div>
              <h1 className="reveal reveal-delay-1 mt-3 font-display text-5xl leading-[0.95] md:text-7xl">
                Betoneira na <span className="text-[var(--brand-yellow)]">sua obra</span><br />no mesmo dia.
              </h1>
              <p className="reveal reveal-delay-2 mt-5 max-w-lg text-white/85">
                Locação e venda em toda Osasco. Equipamentos revisados, diária, semanal ou mensal — sem burocracia.
              </p>
              <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5511975465766"
                  target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow"
                >
                  Pedir orçamento <ArrowIcon size={16} />
                </a>
                <a
                  href="tel:+5511975465766"
                  className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10"
                >
                  <PhoneIcon size={16} /> (11) 97546-5766
                </a>
              </div>

              {/* Régua de stats */}
              <div className="reveal reveal-delay-4 mt-12 grid grid-cols-3 divide-x divide-white/20 border-y border-white/20 py-4">
                {[
                  ["+50", "Bairros"],
                  ["Hoje", "Entrega"],
                  ["150–400L", "Modelos"],
                ].map(([k, v]) => (
                  <div key={v} className="px-2 text-center">
                    <div className="numeric text-2xl text-[var(--brand-yellow)] md:text-3xl">{k}</div>
                    <div className="spec-label !text-white/70 mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Painel "ficha técnica" */}
            <aside className="reveal reveal-delay-2 self-center">
              <div className="cut-corner-tl relative border-2 border-[var(--brand-yellow)] bg-[var(--brand-ink)] p-6">
                <div className="spec-label !text-[var(--brand-yellow)]">Ficha · Locação</div>
                <div className="mt-2 font-display text-3xl text-white">Pronta-entrega</div>
                <dl className="mt-5 space-y-2 text-sm">
                  {[
                    ["Diária", "a partir de R$ 80"],
                    ["Semanal", "5% de desconto"],
                    ["Mensal", "até 20% off"],
                    ["Frete", "incluso em Osasco"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-3 border-b border-dashed border-white/15 pb-1">
                      <dt className="spec-label !text-white/60">{k}</dt>
                      <dd className="font-mono text-white">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a href="https://wa.me/5511975465766" target="_blank" rel="noopener" className="mt-5 block w-full border-2 border-[var(--brand-yellow)] bg-[var(--brand-yellow)] py-2 text-center text-xs font-bold uppercase tracking-widest text-[var(--brand-ink)]">
                  Solicitar agora
                </a>
              </div>
            </aside>
          </div>
          <HazardStripe />
        </section>

        <TrustBar />
        <Steps />

        {/* MODELOS */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Catálogo</span>
          </div>
          <div className="reveal mt-2 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-3xl text-[var(--brand-ink)] md:text-4xl">Modelos disponíveis</h2>
            <Link to="/servicos" className="text-sm font-bold uppercase tracking-wider text-[var(--brand-navy)] hover:underline">
              Ver todos os serviços →
            </Link>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {MODELOS.map((m, i) => (
              <div key={m.volume} className={`reveal reveal-delay-${i + 1}`}>
                <ModelCard m={m} />
              </div>
            ))}
          </div>
        </section>

        {/* SERVIÇOS - faixa horizontal */}
        <section className="border-y-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] py-14">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
            {[
              { t: "Locação", d: "Diária, semanal ou mensal. 150L a 400L revisadas." },
              { t: "Venda", d: "Equipamentos novos e seminovos com garantia." },
              { t: "Entrega & Retirada", d: "Logística rápida em todos os bairros." },
            ].map((s, i) => (
              <div key={s.t} className={`reveal reveal-delay-${i + 1} flex items-start gap-4`}>
                <span className="numeric text-3xl text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)]">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-[var(--brand-ink)]">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MAPA OSASCO */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="reveal flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--brand-ink)]" />
                <span className="spec-label">Área de cobertura</span>
              </div>
              <h2 className="reveal font-display text-3xl text-[var(--brand-ink)] md:text-4xl">
                Toda <span className="text-[var(--brand-navy)]">Osasco</span>,<br />de ponta a ponta.
              </h2>
              <p className="reveal mt-4 max-w-md text-muted-foreground">
                Da Zona Norte à Zona Sul, do Centro aos jardins. Entrega e retirada no mesmo dia em todos os bairros.
              </p>
              <ul className="reveal mt-6 flex flex-wrap gap-2">
                {DESTAQUES.map((b) => (
                  <li key={b.slug}>
                    <Link
                      to="/alugar-betoneira-em-osasco/$bairro"
                      params={{ bairro: b.slug }}
                      className="inline-block border border-[var(--brand-ink)] bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)] transition-colors hover:bg-[var(--brand-yellow)]"
                    >
                      {b.nome}
                    </Link>
                  </li>
                ))}
                <li className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  + {BAIRROS.length - DESTAQUES.length} bairros
                </li>
              </ul>
            </div>
            <div className="reveal">
              <MapEmbed query="Osasco, SP, Brasil" title="Mapa de Osasco — área de atendimento" />
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="bg-[var(--brand-concrete)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Quem já usou</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-4xl">Obras atendidas em Osasco</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { n: "Carlos M.", b: "Bussocaba", o: "Laje residencial", t: "Chegaram no horário combinado e o equipamento veio limpo. Combinei pelo WhatsApp e em 2h tava na obra." },
                { n: "Renata S.", b: "Centro", o: "Reforma de quintal", t: "Aluguel por diária, sem complicação. O preço foi justo e a retirada também foi tranquila." },
                { n: "João P.", b: "Quitaúna", o: "Construção 2 pavimentos", t: "Aluguei a 400L por 3 semanas. Funcionou direto, sem dor de cabeça. Recomendo." },
              ].map((d, i) => (
                <figure key={d.n} className={`reveal reveal-delay-${i + 1} cut-corner border-2 border-[var(--brand-ink)] bg-white p-6 hard-shadow`}>
                  <div className="spec-label">{d.b} · {d.o}</div>
                  <blockquote className="mt-3 text-sm text-[var(--brand-ink)]">
                    “{d.t}”
                  </blockquote>
                  <figcaption className="mt-4 font-display text-base text-[var(--brand-navy)]">— {d.n}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-20">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Dúvidas frequentes</span>
          </div>
          <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-4xl">Perguntas frequentes</h2>
          <div className="reveal mt-8 divide-y-2 divide-[var(--brand-ink)] border-y-2 border-[var(--brand-ink)]">
            {[
              { q: "Vocês entregam no mesmo dia?", a: "Sim. Pedidos confirmados até o início da tarde são entregues no mesmo dia em toda Osasco." },
              { q: "Qual o prazo mínimo de aluguel?", a: "A diária é o prazo mínimo, mas oferecemos descontos para semanais e mensais." },
              { q: "Precisa de caução?", a: "Sim, uma pequena caução é solicitada e devolvida na retirada do equipamento sem avarias." },
              { q: "Quais modelos vocês trabalham?", a: "Betoneiras de 150L, 250L e 400L, elétricas (110V/220V) e a gasolina." },
              { q: "Atendem fora de Osasco?", a: "Atendemos bairros vizinhos sob consulta — chame no WhatsApp com o endereço." },
            ].map((f) => (
              <details key={f.q} className="faq-item group py-5">
                <summary className="flex items-center justify-between gap-4">
                  <span className="font-display text-lg text-[var(--brand-ink)]">{f.q}</span>
                  <span aria-hidden className="chev numeric text-2xl text-[var(--brand-yellow)]">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative noise-overlay bg-[var(--brand-yellow)] py-16">
          <HazardStripe className="absolute inset-x-0 top-0" />
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <div className="spec-label !text-[var(--brand-ink)]/70">Precisa hoje?</div>
              <h2 className="mt-1 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">
                Chame agora e entregamos<br />no mesmo dia.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/5511975465766" target="_blank" rel="noopener" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow">
                WhatsApp <ArrowIcon size={16} />
              </a>
              <a href="tel:+5511975465766" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-ink)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-yellow)] hard-shadow">
                <PhoneIcon size={16} /> (11) 97546-5766
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
