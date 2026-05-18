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
import { ArrowIcon, PhoneIcon, TruckIcon, CheckIcon, MixerIcon, HelmetIcon, ClockIcon } from "@/components/icons/Icons";
import betoneiraHero from "@/assets/betoneira-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aluguel de Betoneira em Osasco | Locação 150L, 250L e 400L" },
      {
        name: "description",
        content:
          "Aluguel e locação de betoneira em Osasco SP: modelos de 150, 250 e 400 litros, elétricas 110V/220V e a gasolina. Entrega no mesmo dia, sem burocracia. WhatsApp (11) 97546-5766.",
      },
      { property: "og:title", content: "Aluguel de Betoneira em Osasco SP | 150L, 250L e 400L" },
      {
        property: "og:description",
        content:
          "Locação de betoneira em Osasco com entrega no mesmo dia. Misturador de concreto e argamassa para obras residenciais e de médio porte.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Betoneira Osasco",
          description:
            "Aluguel e venda de betoneiras em Osasco e região: locação diária, semanal e mensal de misturadores de concreto e argamassa de 150, 250 e 400 litros.",
          telephone: "+55 11 97546-5766",
          areaServed: [
            { "@type": "City", name: "Osasco" },
            { "@type": "AdministrativeArea", name: "Grande São Paulo" },
          ],
          priceRange: "$$",
          address: { "@type": "PostalAddress", addressLocality: "Osasco", addressRegion: "SP", addressCountry: "BR" },
          url: "/",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

const MODELOS: Modelo[] = [
  { volume: "250L", motor: "2 cv elétrica", voltagem: "220V mono", uso: "Lajes e contrapiso", destaque: true },
  { volume: "150L", motor: "1/2 cv elétrica", voltagem: "110/220V", uso: "Reformas e reboco" },
  { volume: "400L", motor: "5,5 hp gasolina", voltagem: "Gasolina", uso: "Muro e calçada" },
];

const SERVICOS = [
  {
    n: "01",
    t: "Locação",
    d: "Aluguel de betoneira em Osasco por diária, semana ou mês. Frota de 150L, 250L e 400L sempre revisada. Atende pedreiro, empreiteiro e construtora, sem letras miúdas.",
    Icon: MixerIcon,
  },
  {
    n: "02",
    t: "Venda",
    d: "Betoneiras novas e seminovas com garantia. Indicamos entre elétrica monofásica (110V/220V) e a gasolina conforme o porte da sua obra residencial ou de médio porte.",
    Icon: CheckIcon,
  },
  {
    n: "03",
    t: "Entrega e Retirada",
    d: "Logística própria em toda Osasco e região, do Centro à Zona Norte e Zona Sul. Confirmou até o início da tarde, entregamos no mesmo dia. Retirada agendada sem dor de cabeça.",
    Icon: TruckIcon,
  },
];

const DIFERENCIAIS = [
  { Icon: TruckIcon, t: "Entrega no mesmo dia", d: "Confirmou até a tarde, sua betoneira chega ainda hoje em toda Osasco." },
  { Icon: CheckIcon, t: "Equipamento revisado", d: "Cada máquina é conferida antes de sair, você recebe pronta para ligar e trabalhar." },
  { Icon: HelmetIcon, t: "Atendimento local", d: "Somos de Osasco. Falar com a gente é falar direto com quem entrega, sem call center." },
  { Icon: ClockIcon, t: "Sem burocracia", d: "Combina pelo WhatsApp, paga PIX ou dinheiro e a obra continua sem parar." },
];

const DEPOIMENTOS = [
  { n: "Carlos Mendes", b: "Bussocaba", o: "Laje residencial", t: "Chegou no horário combinado e a betoneira veio limpinha, pronta pra usar. Combinei pelo WhatsApp de manhã e em duas horas tava na obra. Atendimento de primeira, recomendo demais." },
  { n: "Renata Souza", b: "Centro", o: "Reforma de quintal", t: "Aluguei por diária e foi tudo muito tranquilo. Preço justo, equipamento bom e a retirada também foi no horário. Já é a segunda vez que chamo e sempre fui muito bem atendida." },
  { n: "João Pereira", b: "Quitaúna", o: "Construção de dois pavimentos", t: "Fiquei três semanas com a 400L e não tive um único problema. Funcionou direto, sem dor de cabeça, e o pessoal sempre disponível pra tirar dúvida. Pode fechar de olhos fechados." },
];

const FAQ = [
  {
    q: "Vocês entregam no mesmo dia?",
    a: "Sim, entregamos no mesmo dia em toda Osasco. Para garantir, é só confirmar o pedido com a gente até o início da tarde pelo WhatsApp. A nossa logística é própria, então temos flexibilidade para encaixar sua obra na rota do dia.",
  },
  {
    q: "Qual é o prazo mínimo de aluguel?",
    a: "O prazo mínimo é de uma diária, que cobre 24 horas de uso. Para obras mais longas, oferecemos pacotes semanais e mensais com desconto progressivo, sempre combinados antes de fechar. Se precisar estender no meio do caminho, é só avisar que a gente ajusta.",
  },
  {
    q: "Precisa pagar caução?",
    a: "Sim, pedimos uma pequena caução por equipamento, devolvida integralmente na retirada caso esteja sem avarias além do uso normal. O valor é combinado junto do orçamento, para você não ser pego de surpresa. Tudo é registrado em recibo simples e claro.",
  },
  {
    q: "Quais modelos vocês trabalham?",
    a: "Trabalhamos com betoneiras de 150L, 250L e 400L, em versões elétricas 110V e 220V monofásicas e a gasolina. A 250L é a mais procurada para obras residenciais. Se você não sabe qual escolher, manda o tamanho da obra que a gente indica o modelo ideal.",
  },
  {
    q: "Vocês atendem fora de Osasco?",
    a: "Atendemos bairros vizinhos sob consulta, como Carapicuíba, Cotia, Barueri e algumas regiões da zona oeste de São Paulo. Manda o endereço pelo WhatsApp que retornamos com prazo de entrega e valor do frete para o seu local.",
  },
  {
    q: "Posso pagar de qual forma?",
    a: "Aceitamos PIX, dinheiro, cartão de débito e crédito. Para locações longas, dá para parcelar combinando direto com a gente. O pagamento da diária ou da entrada acontece no momento da entrega do equipamento na sua obra.",
  },
];

const DESTAQUES = BAIRROS.slice(0, 8);

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function HomePage() {
  useReveal();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* HERO */}
        <section className="relative noise-overlay overflow-hidden bg-[var(--brand-navy)] text-white">
          <div className="mx-auto grid min-h-[calc(100dvh-80px)] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[3fr_2fr] md:gap-16 md:py-0">
            {/* Coluna esquerda */}
            <div className="relative">
              <div className="reveal flex items-center gap-3" style={{ ["--i" as never]: 0 }}>
                <span className="h-px w-10 bg-[var(--brand-yellow)]" />
                <span className="spec-label !text-white/70">Osasco, SP</span>
              </div>

              <h1 className="reveal mt-4 font-display text-[3.25rem] leading-[0.92] tracking-tight md:text-[5.75rem]" style={{ ["--i" as never]: 1 }}>
                Aluguel de Betoneira em Osasco
              </h1>

              <p className="reveal mt-6 max-w-md text-white/80 leading-relaxed" style={{ ["--i" as never]: 2 }}>
                Locação e venda em toda Osasco. Equipamento revisado, contrato direto e entrega rápida, sem burocracia de balcão.
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

              <div className="reveal mt-12 grid max-w-md grid-cols-3 divide-x divide-white/15 border-y border-white/15 py-4" style={{ ["--i" as never]: 4 }}>
                {[
                  ["+50", "Bairros"],
                  ["Hoje", "Entrega"],
                  ["150 a 400L", "Modelos"],
                ].map(([k, v]) => (
                  <div key={v} className="px-3">
                    <div className="numeric text-2xl text-[var(--brand-yellow)] md:text-3xl">{k}</div>
                    <div className="spec-label !text-white/60 mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna direita */}
            <aside className="reveal relative" style={{ ["--i" as never]: 2 }}>
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

        {/* MARQUEE */}
        <TrustBar />

        {/* STEPS */}
        <Steps />

        {/* MODELOS, bento */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Catálogo</span>
          </div>
          <div className="reveal mt-2 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Modelos <span className="font-editorial text-[var(--brand-navy)]">disponíveis</span>
            </h2>
            <Link to="/servicos" className="text-sm font-bold uppercase tracking-wider text-[var(--brand-navy)] hover:underline">
              Ver todos os serviços →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="reveal" style={{ ["--i" as never]: 0 }}>
              <ModelCard m={MODELOS[0]} size="lg" />
            </div>
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

        {/* SERVIÇOS, zig-zag */}
        <section className="border-y-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">O que fazemos</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Três jeitos de <span className="font-editorial text-[var(--brand-navy)]">resolver</span> sua obra.
            </h2>

            <div className="mt-14 space-y-20">
              {SERVICOS.map((s, i) => (
                <div
                  key={s.t}
                  className={`zigzag-row reveal ${i % 2 === 1 ? "reverse" : ""}`}
                  style={{ ["--i" as never]: i }}
                >
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

                  <div className="relative flex items-center justify-center">
                    <div className="relative z-10 flex aspect-[5/4] w-full items-center justify-center rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
                      <s.Icon size={120} className="text-[var(--brand-navy)]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAPA */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="reveal flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--brand-ink)]" />
                <span className="spec-label">Área de cobertura</span>
              </div>
              <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
                Toda <span className="text-[var(--brand-navy)]">Osasco</span>,<br />
                <span className="font-editorial">de ponta a ponta.</span>
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
              <MapEmbed query="Osasco SP Brasil" title="Mapa de Osasco, área de atendimento" />
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS, fundo navy, cards arredondados */}
        <section className="relative noise-overlay bg-[var(--brand-navy)] py-24 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-yellow)]" />
              <span className="spec-label !text-white/70">Quem já usou</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl tracking-tight md:text-5xl">
              Obras <span className="text-[var(--brand-yellow)]">atendidas</span> em Osasco
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {DEPOIMENTOS.map((d, i) => (
                <figure
                  key={d.n}
                  className="reveal rounded-2xl bg-white p-7 text-[var(--brand-ink)] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
                  style={{ ["--i" as never]: i }}
                >
                  <div className="flex gap-0.5 text-[var(--brand-yellow)]">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} />)}
                  </div>
                  <blockquote className="mt-4 font-sans text-base leading-relaxed text-[var(--brand-ink)]">
                    “{d.t}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-[var(--brand-ink)]/10 pt-4">
                    <div className="font-display text-base text-[var(--brand-ink)]">{d.n}</div>
                    <div className="spec-label mt-1">{d.b}</div>
                    <div className="mt-1 font-mono text-xs text-[var(--brand-ink)]/70">{d.o}</div>
                  </figcaption>
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
            Perguntas <span className="font-editorial text-[var(--brand-navy)]">frequentes</span>
          </h2>
          <div className="reveal mt-10 divide-y-2 divide-[var(--brand-ink)] border-y-2 border-[var(--brand-ink)]">
            {FAQ.map((f) => (
              <details key={f.q} className="faq-item group py-5">
                <summary className="flex items-center justify-between gap-4">
                  <span className="font-display text-lg text-[var(--brand-ink)]">{f.q}</span>
                  <span aria-hidden className="chev numeric text-2xl text-[var(--brand-yellow)]">+</span>
                </summary>
                <p className="mt-3 text-base text-foreground/80 leading-relaxed">{f.a}</p>
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
                <span className="font-editorial">no mesmo dia.</span>
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
