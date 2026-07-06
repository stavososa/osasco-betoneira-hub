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
import { ArrowIcon, PhoneIcon, CheckIcon, HelmetIcon, ClockIcon, TruckIcon, MixerIcon, WhatsappIcon } from "@/components/icons/Icons";
import { CTAFinal } from "@/components/CTAFinal";
import { getBairro, bairrosProximos } from "@/lib/bairros";
import betoneiraHero from "@/assets/betoneira-hero.webp";
import alugarBetoneiraOsasco from "@/assets/alugar-betoneira-osasco.webp";
import betoneiraOsascoAluga from "@/assets/betoneira-osasco-aluga.webp";
import betoneiraParaAlugarEmOsasco from "@/assets/betoneira-para-alugar-em-osasco.webp";

const PRECOS_LOCACAO = [
  {
    modelo: "Betoneira 120L",
    tag: "Reparos e Acabamentos",
    motor: "Motor 1/3 cv · 110/220V bivolt · ~60 kg",
    diaria: "Sob consulta",
    semanal: "Sob consulta",
    quinzenal: "Sob consulta",
    mensal: "Sob consulta",
  },
  {
    modelo: "Betoneira 150L",
    tag: "Reformas Pequenas",
    motor: "Motor ½ cv · 110/220V bivolt · ~70 kg",
    diaria: "Sob consulta",
    semanal: "Sob consulta",
    quinzenal: "Sob consulta",
    mensal: "Sob consulta",
  },
  {
    modelo: "Betoneira 250L",
    tag: "Obras Residenciais · Mais Alugada",
    motor: "Motor 1–2 cv · 220V mono · ~120 kg",
    diaria: "Sob consulta",
    semanal: "Sob consulta",
    quinzenal: "Sob consulta",
    mensal: "Sob consulta",
    destaque: true,
  },
  {
    modelo: "Betoneira 400L Elétrica",
    tag: "Obras de Médio Porte",
    motor: "Motor 2 cv · 220V mono · ~155 kg",
    diaria: "Sob consulta",
    semanal: "Sob consulta",
    quinzenal: "Sob consulta",
    mensal: "Sob consulta",
  },
  {
    modelo: "Betoneira 400L Gasolina",
    tag: "Sem Energia Elétrica / Obras Externas",
    motor: "Motor 5,5 hp gasolina · Alta mobilidade",
    diaria: "Sob consulta",
    semanal: "Sob consulta",
    quinzenal: "Sob consulta",
    mensal: "Sob consulta",
  },
  {
    modelo: "Caminhão Betoneira",
    tag: "Obras de Grande Porte · Concretagem Pesada",
    motor: "Mixer truck 8m³ · Operador incluso · Diesel",
    diaria: "Sob consulta",
    semanal: "Sob consulta",
    quinzenal: "Sob consulta",
    mensal: "Sob consulta",
  },
];

const SERVICOS = [
  {
    n: "01",
    t: "Locação de betoneira",
    d: "Aluguel de betoneira em Osasco por diária, semana ou mês. Frota de 120L, 150L, 250L e 400L sempre revisada. Atende pedreiro, empreiteiro e construtora, sem letras miúdas.",
    image: alugarBetoneiraOsasco,
    alt: "Aluguel de betoneiras em Osasco SP",
  },
  {
    n: "02",
    t: "Venda de betoneira",
    d: "Betoneiras novas e seminovas com garantia. Indicamos entre elétrica monofásica (110V/220V) e a gasolina conforme o porte da sua obra residencial ou de médio porte.",
    image: betoneiraOsascoAluga,
    alt: "Venda de betoneira em Osasco",
  },
  {
    n: "03",
    t: "Entrega e Retirada",
    d: "Logística própria em toda Osasco e região, do Centro à Zona Norte e Zona Sul. Confirmou até o início da tarde, entregamos no mesmo dia. Retirada agendada sem dor de cabeça.",
    image: betoneiraParaAlugarEmOsasco,
    alt: "Serviço de entrega e retirada de betoneiras em Osasco",
  },
];

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function getFaqLocal(bairro: any) {
  return [
    {
      q: `Vocês entregam no mesmo dia no bairro ${bairro.nome}?`,
      a: `Sim, realizamos a entrega e a retirada de betoneiras de 120L, 150L, 250L e 400L no mesmo dia em todas as ruas, condomínios e canteiros de obras do bairro ${bairro.nome}, em Osasco, inclusive nas proximidades da ${bairro.avenidaPrincipal} e imediações do ${bairro.pontoReferencia}. Para que possamos programar nossa logística própria de entrega rápida, solicitamos que o agendamento seja confirmado pelo WhatsApp até o meio-dia.`,
    },
    {
      q: `Qual é o preço do frete de betoneira para o bairro ${bairro.nome}?`,
      a: `Como somos uma empresa sediada em Osasco com logística própria, conseguimos oferecer taxas de frete extremamente econômicas ou mesmo isenção completa do frete para contratos de aluguel semanais, quinzenais ou mensais no bairro ${bairro.nome}, atendendo com agilidade o entorno da ${bairro.avenidaPrincipal} e perto do ${bairro.pontoReferencia}. Peça um orçamento rápido mandando sua localização!`,
    },
    {
      q: `Qual modelo de betoneira escolher para ${bairro.caracteristicaObra}?`,
      a: `Para ${bairro.caracteristicaObra} no bairro ${bairro.nome}, a betoneira de 150L ou 250L bivolt (110V/220V) é altamente recomendada para reformas de pequeno e médio porte. Já para concretagens de grande volume, lajes ou fundações, a locação de uma betoneira de 400L elétrica ou com motor a gasolina é a mais produtiva e robusta. Nossos consultores ajudam você a escolher o modelo ideal pelo WhatsApp.`,
    },
    {
      q: `Como funciona o agendamento de locação de betoneiras para o ${bairro.nome}?`,
      a: `O processo de aluguel de betoneiras para o bairro ${bairro.nome} é rápido e sem burocracia. Basta falar com nossa equipe pelo WhatsApp, selecionar o equipamento e agendar a data de entrega. A máquina chega limpa, inspecionada em 12 pontos e pronta para uso em sua obra. Ao final do contrato, recolhemos o equipamento pontualmente sem qualquer dor de cabeça para você.`,
    },
  ];
}

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    if (!params.slug.startsWith("alugar-betoneira-em-")) throw notFound();
    const slug = params.slug.replace("alugar-betoneira-em-", "");
    const bairro = getBairro(slug);
    if (!bairro) throw notFound();
    const proximos = bairrosProximos(bairro.slug, 12);
    return { bairro, proximos };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Bairro não encontrado" }] };
    const { bairro } = loaderData;
    const title = `Aluguel de Betoneiras em ${bairro.nome} | Betoneiras Osasco`;
    const desc = `Aluguel de betoneiras em ${bairro.nome} em Osasco, diversos tipos de betoneiras com o melhor preço e atendimento mais rápido`;
    const url = `https://betoneiraosasco.com.br/${params.slug}/`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: "https://betoneiraosasco.com.br/assets/betoneira-hero.webp" },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "preload", href: betoneiraHero, as: "image", fetchPriority: "high" as any },
      ],
      scripts: [
        {
          // Schema Unificado — WebPage Raiz com Entidades Aninhadas
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url: url,
            name: title,
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://betoneiraosasco.com.br/#website",
              url: "https://betoneiraosasco.com.br/",
              name: "Betoneira Osasco",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: "https://betoneiraosasco.com.br/" },
                { "@type": "ListItem", position: 2, name: `Aluguel em ${bairro.nome}`, item: url },
              ],
            },
            mainEntity: {
              "@type": "Service",
              "@id": `${url}#service`,
              name: `Aluguel de Betoneiras em ${bairro.nome}, Osasco`,
              serviceType: "Construction Equipment Rental",
              description: `Locação de betoneiras no bairro ${bairro.nome} em Osasco SP. Entrega no mesmo dia, equipamentos revisados de 120L, 150L, 250L e 400L elétrica e a gasolina. Ligue ou chame no WhatsApp: (11) 97546-5766.`,
              url: url,
              telephone: "+5511975465766",
              provider: {
                "@type": "HomeAndConstructionBusiness",
                "@id": "https://betoneiraosasco.com.br/#business",
                name: "Betoneiras Osasco",
                alternateName: "Betoneira Osasco",
                description: "Aluguel e venda de betoneiras em Osasco SP. Locação diária, semanal e mensal de misturadores de concreto e argamassa de 120L, 150L, 250L e 400L, com entrega no mesmo dia.",
                url: "https://betoneiraosasco.com.br",
                telephone: "+5511975465766",
                image: "https://betoneiraosasco.com.br/assets/betoneira-hero.webp",
                logo: "https://betoneiraosasco.com.br/assets/logo-betoneira-osasco.webp",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Rua Narciso Sturlini, 201",
                  addressLocality: "Osasco",
                  addressRegion: "SP",
                  postalCode: "06018-100",
                  addressCountry: "BR",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: -23.5325,
                  longitude: -46.7917,
                },
                hasMap: "https://www.google.com/maps/search/?api=1&query=-23.5325,-46.7917",
                areaServed: [
                  { "@type": "City", name: "Osasco" },
                ],
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    opens: "07:00",
                    closes: "19:00",
                  },
                ],
                potentialAction: {
                  "@type": "RentAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://wa.me/5511975465766?text=Quero%20alugar%20betoneira",
                    actionPlatform: [
                      "http://schema.org/DesktopWebPlatform",
                      "http://schema.org/MobileWebPlatform",
                    ],
                  },
                },
                sameAs: ["https://wa.me/5511975465766"],
              },
              areaServed: {
                "@type": "Place",
                name: `${bairro.nome}, Osasco, SP`,
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: bairro.lat,
                  longitude: bairro.lng,
                },
                hasMap: `https://www.google.com/maps/search/?api=1&query=${bairro.lat},${bairro.lng}`,
                containedInPlace: { "@type": "City", name: "Osasco" },
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "07:00",
                  closes: "19:00",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: `Betoneiras disponíveis para aluguel em ${bairro.nome}`,
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 120L Elétrica", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "56" } } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 150L Elétrica", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "74" } } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 250L Elétrica", aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "128" } } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 400L Elétrica", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "82" } } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 400L Gasolina", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "45" } } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Caminhão Betoneira", aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "31" } } },
                ],
              },
              potentialAction: {
                "@type": "RentAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `https://wa.me/5511975465766?text=Quero%20alugar%20betoneira%20em%20${encodeURIComponent(bairro.nome)}`,
                  actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform",
                  ],
                },
              },
              sameAs: ["https://wa.me/5511975465766"],
            },
            subjectOf: {
              "@type": "FAQPage",
              mainEntity: getFaqLocal(bairro).map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
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
  const FAQ_LOCAL = getFaqLocal(bairro);

  const DEPOIMENTOS_LOCAL = [
    { 
      n: "Carlos Mendes", 
      b: bairro.nome, 
      o: `Reforma de calçada na ${bairro.avenidaPrincipal}`, 
      t: `Excelente atendimento. Moro aqui no bairro ${bairro.nome} e precisei de uma betoneira para uma reforma perto da ${bairro.avenidaPrincipal}. O equipamento de 250L chegou super rápido (menos de 2 horas), limpo e funcionando perfeitamente. Facilitou muito nossa concretagem.` 
    },
    { 
      n: "Renata Souza", 
      b: bairro.nome, 
      o: `Laje de sobrado perto do ${bairro.pontoReferencia}`, 
      t: `Alugamos a betoneira de 400L por uma semana para a concretagem de laje do sobrado perto do ${bairro.pontoReferencia} aqui em ${bairro.nome}. Atendimento ágil, entrega pontual e suporte nota 10. A máquina é muito potente!` 
    },
    { 
      n: "João Pereira", 
      b: bairro.nome, 
      o: `Muro de contenção para ${bairro.caracteristicaObra}`, 
      t: `Preço altamente competitivo e atendimento via WhatsApp super desburocratizado. Alugar a betoneira de 150L para nosso projeto de ${bairro.caracteristicaObra} no ${bairro.nome} foi a melhor decisão. Indico de olhos fechados.` 
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative noise-overlay overflow-hidden text-white bg-[var(--brand-navy)]">
          <div className="mx-auto grid min-h-[calc(100dvh-80px)] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_1fr] md:gap-16 md:py-0">
            {/* Coluna esquerda */}
            <div className="relative">
              <nav aria-label="breadcrumb" className="reveal flex items-center gap-2 spec-label !text-white/70" style={{ ["--i" as never]: 0 }}>
                <Link to="/" className="hover:text-[var(--brand-yellow)]">Início</Link>
                <span className="text-[var(--brand-yellow)]">/ Aluguel em {bairro.nome}</span>
              </nav>

              <h1 className="reveal mt-4 font-display text-[3.25rem] leading-[0.92] tracking-tight md:text-[5.75rem]" style={{ ["--i" as never]: 1 }}>
                Aluguel de Betoneiras em <span className="text-[var(--brand-yellow)]">{bairro.nome}</span>
              </h1>

              <p className="reveal mt-6 max-w-md text-white/80 leading-relaxed" style={{ ["--i" as never]: 2 }}>
                O melhor aluguel de betoneira em {bairro.nome}. Fornecemos modelos elétricos (110V/220V) e a gasolina de 120L, 150L, 250L e 400L. Se você busca uma <Link to="/" className="font-bold underline hover:text-[var(--brand-yellow)]">betoneira perto de mim</Link> para {bairro.caracteristicaObra}, conte com nossa entrega ágil na região da {bairro.avenidaPrincipal}.
              </p>

              <div className="reveal mt-8 flex flex-wrap gap-4" style={{ ["--i" as never]: 3 }}>
                <a
                  href={`https://wa.me/5511975465766?text=${encodeURIComponent(`Olá! Quero alugar uma betoneira no bairro ${bairro.nome}, Osasco.`)}`}
                  target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow"
                >
                  <WhatsappIcon size={16} /> Orçamento no WhatsApp <ArrowIcon size={16} />
                </a>
                <a
                  href="tel:+5511975465766"
                  className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                >
                  <PhoneIcon size={16} /> (11) 97546-5766
                </a>
              </div>
            </div>

            {/* Coluna direita */}
            <aside className="reveal relative" style={{ ["--i" as never]: 2 }}>
              <img
                src={betoneiraHero}
                alt={`Betoneira 400L amarela e azul para aluguel no ${bairro.nome} em Osasco SP`}
                width={720}
                height={780}
                className="relative z-10 ml-auto w-full max-w-3xl md:max-w-none lg:scale-[1.25] lg:translate-x-16 xl:translate-x-24 object-contain"
                loading="eager"
                fetchPriority="high"
              />
            </aside>
          </div>
        </section>

        <TrustBar />

        {/* STEPS */}
        <Steps bairro={bairro.nome} />

        {/* CATÁLOGO DE MODELOS */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Catálogo</span>
            <span className="text-muted-foreground/30">•</span>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--brand-navy)]">Locação de betoneira Osasco</h3>
          </div>
          <div className="reveal mt-2 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Modelos <span className="font-editorial text-[var(--brand-navy)]">disponíveis</span>
            </h2>
            <Link to="/servicos" className="text-sm font-bold uppercase tracking-wider text-[var(--brand-navy)] hover:underline">
              Ver todos os serviços →
            </Link>
          </div>
          <p className="reveal mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            <Link to="/locacao-de-betoneiras" className="font-bold text-[var(--brand-navy)] hover:underline">Locação de betoneiras</Link> de 120L, 150L, 250L e 400L no bairro {bairro.nome}. Se você precisa de uma betoneira para misturar concreto, argamassa e cimento para {bairro.caracteristicaObra} nas proximidades do {bairro.pontoReferencia}, temos a solução. Oferecemos também nosso serviço focado em <Link to="/entrega-e-retirada-de-betoneira" className="font-bold text-[var(--brand-navy)] hover:underline">entrega e retirada</Link> ágil, além do <Link to="/locacao-caminhao-betoneira" className="font-bold text-[var(--brand-navy)] hover:underline">caminhão betoneira</Link> para grandes demandas.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {MODELOS.map((m, i) => (
              <div key={m.volume} className="reveal" style={{ ["--i" as never]: i }}>
                <ModelCard m={m} />
              </div>
            ))}
          </div>
        </section>

        {/* GREEN CTA 1: MEIO DA PÁGINA */}
        <section className="relative overflow-hidden border-b-2 border-[var(--brand-ink)] bg-[#25D366] py-12 text-[var(--brand-ink)] noise-overlay">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
            <div>
              <span className="spec-label !text-[var(--brand-ink)]/80">Entrega Expressa</span>
              <h3 className="mt-2 font-display text-2xl md:text-4xl tracking-tight leading-tight">
                Entrega prioritária no bairro <span className="underline decoration-2">{bairro.nome}</span> em até 24h! <br />
                <span className="font-editorial text-[var(--brand-navy)]">Para {bairro.caracteristicaObra} e obras próximas à {bairro.avenidaPrincipal}.</span>
              </h3>
            </div>
            <div>
              <a
                href={`https://wa.me/5511975465766?text=${encodeURIComponent(`Olá! Quero alugar uma betoneira no bairro ${bairro.nome}, Osasco.`)}`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow hover:translate-y-[1px] transition-all"
              >
                <WhatsappIcon size={18} /> Orçamento em {bairro.nome} <ArrowIcon size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* O QUE FAZEMOS */}
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
                <div key={s.t} className={`zigzag-row reveal ${i % 2 === 1 ? "reverse" : ""}`} style={{ ["--i" as never]: i }}>
                  <div>
                    <div className="spec-label">Serviço {s.n}</div>
                    <div className="mt-2 flex items-baseline gap-4">
                      <span className="numeric text-7xl leading-none text-[var(--brand-yellow)] [text-shadow:_2px_2px_0_var(--brand-ink)] md:text-8xl">{s.n}</span>
                      <h3 className="font-display text-3xl text-[var(--brand-ink)] md:text-4xl">{s.t}</h3>
                    </div>
                    <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="relative z-10 flex aspect-[5/4] w-full items-center justify-center rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APLICAÇÕES */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Aplicações</span>
          </div>
          <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Para que serve <span className="font-editorial text-[var(--brand-navy)]">a betoneira</span>
          </h2>
          <p className="reveal mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Misturador de concreto, argamassa e cimento para construção civil e {bairro.caracteristicaObra} no {bairro.nome}. Mistura uniforme de areia, brita e cimento no traço perfeito nas imediações da {bairro.avenidaPrincipal} e toda a região.
          </p>
          <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {["Laje", "Contrapiso", "Concretagem", "Calçada de concreto", "Muro", "Piscina", "Quintal", "Reboco", "Chapisco", "Emboço", "Alvenaria", "Fundação", "Baldrame", "Piso de concreto", "Escada", "Puxadinho", "Reforma residencial", "Construção civil"].map((a) => (
              <li key={a} className="rounded-2xl bg-white p-4 text-center text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1">{a}</li>
            ))}
          </ul>
        </section>

        {/* GREEN CTA 2: LOCAÇÃO SEM BUROCRACIA */}
        <section className="relative overflow-hidden border-b-2 border-[var(--brand-ink)] bg-[#25D366] py-16 text-[var(--brand-ink)] noise-overlay">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="spec-label !text-[var(--brand-ink)]/80">Locação Sem Burocracia</span>
            <h3 className="mt-2 font-display text-3xl md:text-5xl tracking-tight leading-tight">
              Locação ágil para {bairro.caracteristicaObra} <br />
              <span className="font-editorial text-[var(--brand-navy)]">no bairro {bairro.nome}!</span>
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-sm text-[var(--brand-ink)]/90 leading-relaxed">
              Equipamentos novos, revisados e higienizados entregues direto no seu canteiro de obras em {bairro.nome}, facilitando a logística na {bairro.avenidaPrincipal}. Fale conosco pelo WhatsApp agora mesmo.
            </p>
            <div className="mt-8">
              <a
                href={`https://wa.me/5511975465766?text=${encodeURIComponent(`Olá! Quero alugar uma betoneira no bairro ${bairro.nome}, Osasco.`)}`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-8 py-4 text-base font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow hover:translate-y-[1px] transition-all"
              >
                <WhatsappIcon size={20} /> Conversar no WhatsApp <ArrowIcon size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* DETALHES DO ATENDIMENTO LOCAL (MAPA) */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-24 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Cobertura Localizada</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Toda <span className="text-[var(--brand-navy)]">Osasco</span>,<br />
              <span className="font-editorial">de ponta a ponta.</span>
            </h2>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                A <strong>Betoneira Osasco</strong> é referência em locação de betoneira em Osasco. Atendemos de forma prioritária todas as ruas e canteiros de obras do bairro <strong>{bairro.nome}</strong>, com forte presença e entregas frequentes ao longo da <strong>{bairro.avenidaPrincipal}</strong>. Nossa logística própria garante agilidade na entrega perto de referências como o <strong>{bairro.pontoReferencia}</strong>.
              </p>
              <p>
                Quer alugar betoneira em Osasco com entrega no mesmo dia? Se você está planejando uma atividade de <strong>{bairro.caracteristicaObra}</strong>, nossos misturadores de concreto chegam lubrificados, limpos e revisados. Você foca no andamento da sua obra em {bairro.nome} e nossa equipe cuida de toda a logística e coleta técnica.
              </p>
            </div>
          </div>
          <div className="reveal">
            <MapEmbed query={`${bairro.nome}, Osasco SP Brasil`} title={`Área de entrega no bairro ${bairro.nome} em Osasco`} />
            <p className="spec-label mt-3 text-center text-xs">Entrega garantida nas ruas de {bairro.nome}</p>
          </div>
        </section>

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
                <figure key={d.n} className="reveal rounded-2xl bg-white p-7 text-[var(--brand-ink)] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
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

        {/* TABELA DE PREÇOS COMPLETA COM BASE NA IMAGEM */}
        <section className="bg-[var(--brand-concrete)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Valores Transparentes</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl text-[var(--brand-ink)] md:text-5xl">
              Alugar betoneira <span className="font-editorial text-[var(--brand-navy)]">em {bairro.nome}: preço e prazos</span>
            </h2>
            <p className="reveal mt-4 max-w-2xl text-sm text-muted-foreground">
              Valores sob consulta para locação no bairro {bairro.nome}. Ideal para {bairro.caracteristicaObra} com suporte na {bairro.avenidaPrincipal}. Atendimento sem burocracias, com total facilidade no pagamento e faturamento descomplicado.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PRECOS_LOCACAO.map((p) => (
                <article key={p.modelo} className={`reveal rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1 ${p.destaque ? "ring-2 ring-[var(--brand-yellow)]" : ""}`}>
                  <span className="spec-label text-[var(--brand-navy)]">{p.tag}</span>
                  <h3 className="mt-2 font-display text-xl text-[var(--brand-ink)]">{p.modelo}</h3>
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground">{p.motor}</p>
                  <div className="mt-5 border-t border-dashed border-[var(--brand-ink)]/10 pt-4 text-center">
                    <span className="font-display text-lg text-[var(--brand-navy)]">Sob consulta</span>
                  </div>
                  <a href={`https://wa.me/5511975465766?text=${encodeURIComponent(`Olá! Quero orçamento para aluguel de ${p.modelo} no bairro ${bairro.nome}, Osasco.`)}`} target="_blank" rel="noopener" className="mt-6 inline-flex w-full justify-center items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] py-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)]">
                    <WhatsappIcon size={12} /> Confirmar Valores <ArrowIcon size={12} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DÚVIDAS FREQUENTES LOCALIZADAS */}
        <section className="mx-auto max-w-4xl px-4 py-20 md:py-24">
          <div className="reveal flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">FAQ Localizado</span>
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
          </div>
          <h2 className="reveal mt-2 text-center font-display text-3xl text-[var(--brand-ink)] md:text-5xl">
            Dúvidas frequentes no <span className="font-editorial text-[var(--brand-navy)]">{bairro.nome}</span>
          </h2>
          <div className="reveal mt-10 divide-y-2 divide-[var(--brand-ink)] border-y-2 border-[var(--brand-ink)] bg-white p-6 md:p-10 shadow-sm">
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
                    to="/$slug"
                    params={{ slug: `alugar-betoneira-em-${b.slug}` }}
                    className="inline-block border border-[var(--brand-ink)] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)] transition-colors hover:bg-[var(--brand-yellow)]"
                  >
                    Alugar em {b.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA FINAL */}
        <CTAFinal
          title={`Aluguel de betoneiras em ${bairro.nome}`}
          highlight={`perto do ${bairro.pontoReferencia}`}
          waText={`Olá! Quero alugar uma betoneira no bairro ${bairro.nome}, Osasco.`}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
