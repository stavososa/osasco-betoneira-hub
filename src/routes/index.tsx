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
import { ArrowIcon, PhoneIcon, TruckIcon, CheckIcon, MixerIcon } from "@/components/icons/Icons";
import betoneiraHero from "@/assets/betoneira-hero.png";

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
  { volume: "250L", motor: "2 cv elétrica", voltagem: "220V mono", uso: "Obras residenciais", destaque: true },
  { volume: "150L", motor: "1/2 cv elétrica", voltagem: "110/220V", uso: "Reformas pequenas" },
  { volume: "400L", motor: "5,5 hp gasolina", voltagem: "Gasolina", uso: "Médio porte" },
];

const SERVICOS = [
  {
    n: "01",
    t: "Locação",
    d: "Diária, semanal ou mensal. Frota 150L a 400L, sempre revisada antes da saída. Sem letras miúdas — você paga pelo dia que usa.",
    Icon: MixerIcon,
  },
  {
    n: "02",
    t: "Venda",
    d: "Novas e seminovas com garantia. Indicamos o modelo certo para o porte da sua obra antes de fechar negócio.",
    Icon: CheckIcon,
  },
  {
    n: "03",
    t: "Entrega & Retirada",
    d: "Logística própria em Osasco. Confirmou até o início da tarde, entregamos no mesmo dia. Retirada agendada sem dor de cabeça.",
    Icon: TruckIcon,
  },
];

const DEPOIMENTOS = [
  { n: "Carlos M.", b: "Bussocaba", o: "Laje residencial", t: "Chegaram no horário combinado e o equipamento veio limpo. Combinei pelo WhatsApp e em 2h tava na obra." },
  { n: "Renata S.", b: "Centro", o: "Reforma de quintal", t: "Aluguel por diária, sem complicação. Preço justo e a retirada também foi tranquila." },
  { n: "João P.", b: "Quitaúna", o: "Construção 2 pavimentos", t: "Aluguei a 400L por 3 semanas. Funcionou direto, sem dor de cabeça. Recomendo." },
];

const DESTAQUES = BAIRROS.slice(0, 8);

function HomePage() {
  useReveal();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* HERO — assimétrico 3fr/2fr, min-h-[100dvh] */}
        <section className="relative noise-overlay overflow-hidden bg-[var(--brand-navy)] text-white">
          <div className="mx-auto grid min-h-[calc(100dvh-80px)] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[3fr_2fr] md:gap-16 md:py-0">
            {/* Coluna esquerda */}
            <div className="relative">
              {/* eyebrow vertical */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-2 top-2 hidden -rotate-90 origin-top-left md:block"
              >
                <span className="spec-label !text-white/50">OSC · 011 · 2025</span>
              </div>

              <div className="reveal flex items-center gap-3" style={{ ["--i" as never]: 0 }}>
                <span className="h-px w-10 bg-[var(--brand-yellow)]" />
                <span className="spec-label !text-white/70">Osasco · SP · Locação & Venda</span>
              </div>

              <h1 className="reveal mt-4 font-display text-[3.25rem] leading-[0.92] tracking-tight md:text-[5.75rem]" style={{ ["--i" as never]: 1 }}>
                Betoneira na
                <br />
                <span className="inline-block translate-x-2 text-[var(--brand-yellow)] md:translate-x-6">sua obra</span>
                <br />
                <span className="font-editorial italic text-white/90">no mesmo dia.</span>
              </h1>

              <p className="reveal mt-6 max-w-md text-white/80 leading-relaxed" style={{ ["--i" as never]: 2 }}>
                Locação e venda em toda Osasco. Equipamento revisado, contrato direto, entrega rápida — sem burocracia de balcão.
              </p>

              <div className="reveal mt-8 flex flex-wrap gap-4" style={{ ["--i" as never]: 3 }}>
                <a
                  href="https://wa.me/5511975465766"
                  target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow"
                >
                  Pedir orçamento <ArrowIcon size={16} />
                </a>
                <a
                  href="tel:+5511975465766"
                  className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                >
                  <PhoneIcon size={16} /> (11) 97546-5766
                </a>
              </div>

              {/* Stats em linha */}
              <div className="reveal mt-12 grid max-w-md grid-cols-3 divide-x divide-white/15 border-y border-white/15 py-4" style={{ ["--i" as never]: 4 }}>
                {[
                  ["+50", "Bairros"],
                  ["Hoje", "Entrega"],
                  ["150–400L", "Modelos"],
                ].map(([k, v]) => (
                  <div key={v} className="px-3">
                    <div className="numeric text-2xl text-[var(--brand-yellow)] md:text-3xl">{k}</div>
                    <div className="spec-label !text-white/60 mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna direita — betoneira flutuando */}
            <aside className="reveal relative" style={{ ["--i" as never]: 2 }}>
              {/* etiquetas técnicas flutuantes */}
              <div aria-hidden className="absolute -left-2 top-6 hidden border-l-2 border-[var(--brand-yellow)] pl-3 md:block">
                <div className="spec-label !text-white/60">Modelo</div>
                <div className="font-mono text-sm text-white">400L · 5,5 hp</div>
              </div>
              <div aria-hidden className="absolute -right-2 bottom-12 hidden border-r-2 border-[var(--brand-yellow)] pr-3 text-right md:block">
                <div className="spec-label !text-white/60">Status</div>
                <div className="font-mono text-sm text-white">Disponível</div>
              </div>

              <img
                src={betoneiraHero}
                alt="Betoneira amarela e azul de 400L para locação em Osasco"
                width={720}
                height={780}
                className="relative z-10 mx-auto w-full max-w-md float-soft drop-shadow-[0_30px_30px_rgba(0,0,0,0.45)]"
                loading="eager"
              />
            </aside>
          </div>
          <HazardStripe />
        </section>

        {/* MARQUEE — kinetic */}
        <TrustBar />

        {/* STEPS */}
        <Steps />

        {/* MODELOS — Bento assimétrico (2fr 1fr) */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Catálogo</span>
          </div>
          <div className="reveal mt-2 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Modelos <span className="font-editorial italic text-[var(--brand-navy)]">disponíveis</span>
            </h2>
            <Link to="/servicos" className="text-sm font-bold uppercase tracking-wider text-[var(--brand-navy)] hover:underline">
              Ver todos os serviços →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-[2fr_1fr]">
            {/* Card grande — destaque */}
            <div className="reveal" style={{ ["--i" as never]: 0 }}>
              <ModelCard m={MODELOS[0]} size="lg" />
            </div>
            {/* Coluna de 2 cards menores */}
            <div className="grid gap-6">
              <div className="reveal" style={{ ["--i" as never]: 1 }}>
                <ModelCard m={MODELOS[1]} />
              </div>
              <div className="reveal" style={{ ["--i" as never]: 2 }}>
                <ModelCard m={MODELOS[2]} />
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS — Zig-zag (era 3 cards iguais) */}
        <section className="border-y-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">O que fazemos</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Três jeitos de <span className="font-editorial italic text-[var(--brand-navy)]">resolver</span> sua obra.
            </h2>

            <div className="mt-14 space-y-20">
              {SERVICOS.map((s, i) => (
                <div
                  key={s.t}
                  className={`zigzag-row reveal ${i % 2 === 1 ? "reverse" : ""}`}
                  style={{ ["--i" as never]: i }}
                >
                  {/* texto */}
                  <div>
                    <div className="spec-label">Serviço {s.n}</div>
                    <div className="mt-2 flex items-baseline gap-4">
                      <span className="numeric text-7xl leading-none text-[var(--brand-yellow)] [text-shadow:_2px_2px_0_var(--brand-ink)] md:text-8xl">
                        {s.n}
                      </span>
                      <h3 className="font-display text-3xl text-[var(--brand-ink)] md:text-4xl">{s.t}</h3>
                    </div>
                    <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>

                  {/* visual */}
                  <div className="relative flex items-center justify-center">
                    <div
                      aria-hidden
                      className={`absolute inset-x-6 inset-y-2 -z-0 border-2 border-[var(--brand-ink)] ${
                        i % 2 === 0 ? "translate-x-3 translate-y-3" : "-translate-x-3 translate-y-3"
                      }`}
                    />
                    <div className="relative z-10 flex aspect-[5/4] w-full items-center justify-center border-2 border-[var(--brand-ink)] bg-white">
                      <s.Icon size={120} className="text-[var(--brand-navy)]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAPA — cobertura */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="reveal flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--brand-ink)]" />
                <span className="spec-label">Área de cobertura</span>
              </div>
              <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
                Toda <span className="text-[var(--brand-navy)]">Osasco</span>,<br />
                <span className="font-editorial italic">de ponta a ponta.</span>
              </h2>
              <p className="reveal mt-5 max-w-md text-muted-foreground leading-relaxed">
                Da Zona Norte à Zona Sul, do Centro aos jardins. Entrega e retirada no mesmo dia.
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
              <MapEmbed query="Osasco SP Brasil" title="Mapa de Osasco — área de atendimento" />
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS — sem cards, divide-y editorial */}
        <section className="bg-[var(--brand-concrete)] py-24">
          <div className="mx-auto max-w-4xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Quem já usou</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Obras <span className="font-editorial italic text-[var(--brand-navy)]">atendidas</span> em Osasco
            </h2>

            <div className="mt-12 divide-y-2 divide-[var(--brand-ink)]/15 border-y-2 border-[var(--brand-ink)]/15">
              {DEPOIMENTOS.map((d, i) => (
                <figure
                  key={d.n}
                  className="reveal grid gap-6 py-10 md:grid-cols-[auto_1fr]"
                  style={{ ["--i" as never]: i }}
                >
                  <div className="md:w-40">
                    <div className="spec-label">{d.b}</div>
                    <div className="mt-1 font-mono text-xs text-[var(--brand-ink)]/70">{d.o}</div>
                    <div className="mt-4 font-display text-lg text-[var(--brand-navy)]">— {d.n}</div>
                  </div>
                  <blockquote className="font-editorial text-2xl leading-snug text-[var(--brand-ink)] md:text-3xl">
                    “{d.t}”
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-24">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Dúvidas frequentes</span>
          </div>
          <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Perguntas <span className="font-editorial italic text-[var(--brand-navy)]">frequentes</span>
          </h2>
          <div className="reveal mt-10 divide-y-2 divide-[var(--brand-ink)] border-y-2 border-[var(--brand-ink)]">
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
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative noise-overlay bg-[var(--brand-yellow)] py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <div className="spec-label !text-[var(--brand-ink)]/70">Precisa hoje?</div>
              <h2 className="mt-1 font-display text-3xl leading-[0.95] tracking-tight text-[var(--brand-ink)] md:text-5xl">
                Chame agora e entregamos<br />
                <span className="font-editorial italic">no mesmo dia.</span>
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
