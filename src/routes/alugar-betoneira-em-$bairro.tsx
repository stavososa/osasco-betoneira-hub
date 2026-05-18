import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapEmbed } from "@/components/MapEmbed";
import { HazardStripe } from "@/components/HazardStripe";
import { TrustBar } from "@/components/TrustBar";
import { Steps } from "@/components/Steps";
import { ModelCard } from "@/components/ModelCard";
import { MODELOS } from "@/lib/modelos";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon, PhoneIcon, CheckIcon, HelmetIcon, ClockIcon, TruckIcon } from "@/components/icons/Icons";
import { getBairro, bairrosProximos } from "@/lib/bairros";

const PRECOS_LOCACAO = [
  {
    modelo: "Betoneira 120L",
    tag: "Reparos e Acabamentos",
    motor: "Motor 1/3 cv · 110/220V bivolt · ~60 kg",
    diaria: "R$ 70–110",
    semanal: "R$ 180–320",
    quinzenal: "R$ 320–500",
    mensal: "R$ 400–650",
  },
  {
    modelo: "Betoneira 150L",
    tag: "Reformas Pequenas",
    motor: "Motor ½ cv · 110/220V bivolt · ~70 kg",
    diaria: "R$ 80–120",
    semanal: "R$ 200–350",
    quinzenal: "R$ 350–550",
    mensal: "R$ 450–700",
  },
  {
    modelo: "Betoneira 250L",
    tag: "Obras Residenciais · Mais Alugada",
    motor: "Motor 1–2 cv · 220V mono · ~120 kg",
    diaria: "R$ 120–180",
    semanal: "R$ 350–550",
    quinzenal: "R$ 550–850",
    mensal: "R$ 700–1.100",
    destaque: true,
  },
  {
    modelo: "Betoneira 400L Elétrica",
    tag: "Obras de Médio Porte",
    motor: "Motor 2 cv · 220V mono · ~155 kg",
    diaria: "R$ 160–220",
    semanal: "R$ 500–750",
    quinzenal: "R$ 800–1.200",
    mensal: "R$ 1.000–1.600",
  },
  {
    modelo: "Betoneira 400L Gasolina",
    tag: "Sem Energia Elétrica / Obras Externas",
    motor: "Motor 5,5 hp gasolina · Alta mobilidade",
    diaria: "R$ 200–280",
    semanal: "R$ 650–950",
    quinzenal: "R$ 1.000–1.500",
    mensal: "R$ 1.400–2.000",
  },
];

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export const Route = createFileRoute("/alugar-betoneira-em-$bairro")({
  loader: ({ params }) => {
    const bairro = getBairro(params.bairro);
    if (!bairro) throw notFound();
    const proximos = bairrosProximos(bairro.slug, 12);
    return { bairro, proximos };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Bairro não encontrado" }] };
    const { bairro } = loaderData;
    const title = `Alugar Betoneira em ${bairro.nome}, Osasco | Entrega Hoje R$ 80`;
    const desc = `Locação de betoneiras em ${bairro.nome}, Osasco SP. Betoneiras de 150L, 250L e 400L elétricas e a gasolina com entrega e retirada no mesmo dia. WhatsApp (11) 97546-5766.`;
    const url = `https://betoneiraosasco.com.br/alugar-betoneira-em-${params.bairro}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Aluguel de Betoneira em ${bairro.nome}`,
            serviceType: "Construction equipment rental",
            provider: {
              "@type": "LocalBusiness",
              name: "Betoneira Osasco",
              telephone: "+5511975465766",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Osasco",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              url: "https://betoneiraosasco.com.br",
            },
            areaServed: { "@type": "Place", name: `${bairro.nome}, Osasco, SP` },
            url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: "https://betoneiraosasco.com.br/" },
              { "@type": "ListItem", position: 2, name: `Aluguel em ${bairro.nome}`, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `Vocês entregam no mesmo dia no bairro ${bairro.nome}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Sim, entregamos betoneiras no mesmo dia em toda a região do ${bairro.nome}, em Osasco. Para garantir o recebimento na rota diária, pedimos apenas que confirme seu agendamento conosco pelo WhatsApp até o início da tarde.`,
                },
              },
              {
                "@type": "Question",
                name: `Qual é o preço do frete para o bairro ${bairro.nome}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Como somos de Osasco e nossa base logística é estratégica, oferecemos taxas de entrega e retirada extremamente acessíveis (e em locações semanais ou mensais o frete pode sair grátis). Manda a sua rua no ${bairro.nome} pelo WhatsApp que passamos o valor do frete na hora.`,
                },
              },
              {
                "@type": "Question",
                name: "Qual modelo de betoneira escolher para reforma residencial?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Para reformas internas e rebocos comuns, a betoneira de 150L elétrica já resolve perfeitamente. Para concretagem de calçadas, muros e lajes residenciais, o modelo de 250L é o mais equilibrado e roda em tomadas elétricas padrão. O modelo de 400L é ideal para obras rápidas de médio e grande volume.",
                },
              },
              {
                "@type": "Question",
                name: `Como funciona o agendamento de locação para o ${bairro.nome}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "É extremamente simples e sem burocracias. Você nos chama no WhatsApp, passa o modelo de betoneira que precisa, o tempo de locação (diária, semanal ou mensal) e o endereço completo de entrega. A máquina chega limpa e revisada, e o pagamento é feito apenas no ato da entrega.",
                },
              },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-4 py-20 text-center">
        <div>
          <h1 className="font-display text-3xl">Bairro não encontrado</h1>
          <Link to="/" className="mt-4 inline-block text-[var(--brand-navy)] underline">Voltar ao início</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
  component: BairroPage,
});

function BairroPage() {
  useReveal();
  const { bairro, proximos } = Route.useLoaderData();

  const FAQ_LOCAL = [
    {
      q: `Vocês entregam no mesmo dia no bairro ${bairro.nome}?`,
      a: `Sim, entregamos betoneiras no mesmo dia em toda a região do ${bairro.nome}, em Osasco. Para garantir o recebimento na rota diária, pedimos apenas que confirme seu agendamento conosco pelo WhatsApp até o início da tarde.`,
    },
    {
      q: `Qual é o preço do frete para o bairro ${bairro.nome}?`,
      a: `Como somos de Osasco e nossa base logística é estratégica, oferecemos taxas de entrega e retirada extremamente acessíveis (e em locações semanais ou mensais o frete pode sair grátis). Manda a sua rua no ${bairro.nome} pelo WhatsApp que passamos o valor do frete na hora.`,
    },
    {
      q: "Qual modelo de betoneira escolher para reforma residencial?",
      a: "Para reformas internas e rebocos comuns, a betoneira de 150L elétrica já resolve perfeitamente. Para concretagem de calçadas, muros e lajes residenciais, o modelo de 250L é o mais equilibrado e roda em tomadas elétricas padrão. O modelo de 400L é ideal para obras rápidas de médio e grande volume.",
    },
    {
      q: `Como funciona o agendamento de locação para o ${bairro.nome}?`,
      a: "É extremamente simples e sem burocracias. Você nos chama no WhatsApp, passa o modelo de betoneira que precisa, o tempo de locação (diária, semanal ou mensal) e o endereço completo de entrega. A máquina chega limpa e revisada, e o pagamento é feito apenas no ato da entrega.",
    },
  ];

  const DEPOIMENTOS_LOCAL = [
    { n: "Carlos Mendes", b: bairro.nome, o: "Reforma de calçada", t: "Excelente atendimento. Moro aqui no bairro e o equipamento chegou em menos de 2 horas na minha obra, limpo e pronto para rodar. Facilitou muito a concretagem." },
    { n: "Renata Souza", b: bairro.nome, o: "Laje de sobrado", t: "Aluguei o modelo de 250L por uma semana e funcionou perfeitamente, sem nenhuma falha. A retirada também foi super pontual no dia combinado." },
    { n: "João Pereira", b: bairro.nome, o: "Muro de arrimo", t: "Preço super competitivo e atendimento direto por WhatsApp de forma muito ágil. Recomendo a todos da região que precisarem de betoneira de qualidade." },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative noise-overlay bg-[var(--brand-navy)] py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <nav aria-label="breadcrumb" className="reveal spec-label !text-white/60">
              <Link to="/" className="hover:text-[var(--brand-yellow)]">Início</Link> / <span className="text-[var(--brand-yellow)]">Aluguel em {bairro.nome}</span>
            </nav>
            <h1 className="reveal reveal-delay-1 mt-4 font-display text-4xl leading-[0.95] tracking-tight md:text-7xl">
              Aluguel de Betoneira em <span className="text-[var(--brand-yellow)]">{bairro.nome}</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-white/80 leading-relaxed">
              Locação de betoneiras elétricas 110V/220V e a gasolina de 150L, 250L e 400L no bairro <strong>{bairro.nome}</strong> em Osasco SP. Equipamentos revisados, prontos para uso e com entrega hoje sem burocracias.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/5511975465766?text=${encodeURIComponent(`Olá! Quero alugar uma betoneira no bairro ${bairro.nome}, Osasco.`)}`}
                target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow"
              >
                Orçamento no WhatsApp <ArrowIcon size={16} />
              </a>
              <a href="tel:+5511975465766" className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10">
                <PhoneIcon size={16} /> (11) 97546-5766
              </a>
            </div>
          </div>
          <HazardStripe />
        </section>

        <TrustBar />

        {/* DETALHES DO ATENDIMENTO LOCAL */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:py-24">
          <div className="reveal flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Cobertura Localizada</span>
            </div>
            <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--brand-ink)] md:text-5xl">
              Locação rápida para obras no {bairro.nome}
            </h2>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                A <strong>Betoneira Osasco</strong> atende de forma prioritária todas as ruas, avenidas e canteiros de obras do bairro <strong>{bairro.nome}</strong>. Nossa logística própria permite agilidade máxima na entrega de misturadores de cimento, concreto e argamassa de alta performance.
              </p>
              <p>
                Oferecemos equipamentos totalmente higienizados, lubrificados e revisados por equipe mecânica especializada antes do envio. Você economiza tempo e evita atrasos na sua concretagem, focado apenas no progresso da sua construção no {bairro.nome}.
              </p>
            </div>
          </div>
          <div className="reveal">
            <MapEmbed query={`${bairro.nome}, Osasco SP Brasil`} title={`Área de entrega no bairro ${bairro.nome} em Osasco`} />
            <p className="spec-label mt-3 text-center text-xs">Entrega garantida nas ruas de {bairro.nome}</p>
          </div>
        </section>

        {/* CATÁLOGO DE MODELOS */}
        <section className="bg-[var(--brand-concrete)] border-y-2 border-[var(--brand-ink)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Modelos para Aluguel</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">
              Equipamentos para <span className="font-editorial text-[var(--brand-navy)]">locação</span> em {bairro.nome}
            </h2>
            <p className="reveal mt-4 max-w-2xl text-sm text-muted-foreground">
              Escolha a betoneira ideal para a sua obra de reforma ou concretagem no {bairro.nome}. Modelos 150L para pequenos reparos, 250L monofásica equilibrada e 400L para alta produtividade de massa.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-[2fr_1fr]">
              <div className="reveal">
                <ModelCard m={MODELOS[0]} size="lg" />
              </div>
              <div className="grid gap-6">
                <div className="reveal">
                  <ModelCard m={MODELOS[1]} />
                </div>
                <div className="reveal">
                  <ModelCard m={MODELOS[2]} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TABELA DE PREÇOS COMPLETA COM BASE NA IMAGEM */}
        <section className="mx-auto max-w-6xl px-4 py-20 md:py-24">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Valores Transparentes</span>
          </div>
          <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">
            Tabela de preços de <span className="font-editorial text-[var(--brand-navy)]">aluguel</span> em {bairro.nome}
          </h2>
          <p className="reveal mt-4 max-w-2xl text-sm text-muted-foreground">
            Valores médios por período de uso para o bairro {bairro.nome}. Atendimento sem burocracias, com pagamento flexível (PIX, dinheiro ou cartão) na entrega.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRECOS_LOCACAO.map((p) => (
              <article
                key={p.modelo}
                className={`reveal rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1 ${
                  p.destaque ? "ring-2 ring-[var(--brand-yellow)]" : ""
                }`}
              >
                <span className="spec-label text-[var(--brand-navy)]">{p.tag}</span>
                <h3 className="mt-2 font-display text-xl text-[var(--brand-ink)]">{p.modelo}</h3>
                <p className="mt-1 font-mono text-[10px] text-muted-foreground">{p.motor}</p>
                
                <div className="mt-5 space-y-2 border-t border-dashed border-[var(--brand-ink)]/10 pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Diária:</span>
                    <strong className="text-[var(--brand-ink)] font-mono">{p.diaria}</strong>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Semanal:</span>
                    <strong className="text-[var(--brand-ink)] font-mono">{p.semanal}</strong>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Quinzenal:</span>
                    <strong className="text-[var(--brand-ink)] font-mono">{p.quinzenal}</strong>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Mensal:</span>
                    <strong className="text-[var(--brand-navy)] font-mono font-bold">{p.mensal}</strong>
                  </div>
                </div>

                <a
                  href={`https://wa.me/5511975465766?text=${encodeURIComponent(`Olá! Quero orçamento para aluguel de ${p.modelo} no bairro ${bairro.nome}, Osasco.`)}`}
                  target="_blank" rel="noopener"
                  className="mt-6 inline-flex w-full justify-center items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] py-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)]"
                >
                  Confirmar Valores <ArrowIcon size={12} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <Steps bairro={bairro.nome} />

        {/* DEPOIMENTOS LOCALIZADOS DO BAIRRO */}
        <section className="relative noise-overlay bg-[var(--brand-navy)] py-20 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-yellow)]" />
              <span className="spec-label !text-white/70">Opinião de Clientes</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl md:text-5xl">
              Quem já alugou no <span className="text-[var(--brand-yellow)]">{bairro.nome}</span>
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {DEPOIMENTOS_LOCAL.map((d, i) => (
                <figure
                  key={d.n}
                  className="reveal rounded-2xl bg-white p-7 text-[var(--brand-ink)] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
                >
                  <div className="flex gap-0.5 text-[var(--brand-yellow)]">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} />)}
                  </div>
                  <blockquote className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                    “{d.t}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-[var(--brand-ink)]/10 pt-4">
                    <div className="font-display text-base text-[var(--brand-ink)]">{d.n}</div>
                    <div className="spec-label mt-1 text-xs">{d.b}</div>
                    <div className="mt-1 font-mono text-[10px] text-muted-foreground">{d.o}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* DÚVIDAS FREQUENTES LOCALIZADAS */}
        <section className="mx-auto max-w-4xl px-4 py-20 md:py-24">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">FAQ Localizado</span>
          </div>
          <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">
            Dúvidas frequentes no <span className="font-editorial text-[var(--brand-navy)]">{bairro.nome}</span>
          </h2>
          <div className="reveal mt-10 divide-y-2 divide-[var(--brand-ink)] border-y-2 border-[var(--brand-ink)]">
            {FAQ_LOCAL.map((f) => (
              <details key={f.q} className="faq-item group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer">
                  <span className="font-display text-base md:text-lg text-[var(--brand-ink)]">{f.q}</span>
                  <span aria-hidden className="chev numeric text-2xl text-[var(--brand-yellow)]">+</span>
                </summary>
                <p className="mt-3 text-sm md:text-base text-foreground/80 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* OUTROS BAIRROS PRÓXIMOS */}
        <section className="bg-[var(--brand-concrete)] border-t-2 border-[var(--brand-ink)] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Áreas de Atendimento</span>
            </div>
            <h2 className="reveal mt-2 font-display text-2xl text-[var(--brand-ink)] md:text-3xl">Locações em bairros vizinhos</h2>
            <ul className="reveal mt-6 flex flex-wrap gap-2">
              {proximos.map((b: { slug: string; nome: string }) => (
                <li key={b.slug}>
                  <Link
                    to="/alugar-betoneira-em-$bairro"
                    params={{ bairro: b.slug }}
                    className="inline-block border border-[var(--brand-ink)] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)] transition-colors hover:bg-[var(--brand-yellow)]"
                  >
                    Alugar em {b.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
