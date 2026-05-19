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
import { ArrowIcon, PhoneIcon, CheckIcon, HelmetIcon, ClockIcon, TruckIcon, MixerIcon } from "@/components/icons/Icons";
import { CTAFinal } from "@/components/CTAFinal";
import { getBairro, bairrosProximos } from "@/lib/bairros";
import betoneiraHero from "@/assets/betoneira-hero.webp";

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
    t: "Locação",
    d: "Aluguel de betoneira em Osasco por diária, semana ou mês. Frota de 120L, 150L, 250L e 400L sempre revisada. Atende pedreiro, empreiteiro e construtora, sem letras miúdas.",
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

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
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
    const url = `https://betoneiraosasco.com.br/${params.slug}`;
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
          // Schema 1 — HomeAndConstructionBusiness + LocalBusiness (único bloco raiz, referenciado por @id)
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
            "@id": "https://betoneiraosasco.com.br/#business",
            name: "Betoneiras Osasco",
            alternateName: "Betoneira Osasco",
            url: "https://betoneiraosasco.com.br",
            telephone: "+5511975465766",
            image: "https://betoneiraosasco.com.br/assets/betoneira-hero.webp",
            logo: "https://betoneiraosasco.com.br/assets/logo-betoneira-osasco.webp",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Avenida dos Autonomistas, 896",
              addressLocality: "Osasco",
              addressRegion: "SP",
              postalCode: "06020-010",
              addressCountry: "BR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -23.52681,
              longitude: -46.79496,
            },
            hasMap: "https://www.google.com/maps/search/?api=1&query=-23.52681,-46.79496",
            areaServed: [
              { "@type": "City", name: "Osasco" },
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                opens: "07:00",
                closes: "19:00",
              },
            ],
            sameAs: ["https://wa.me/5511975465766"],
          }),
        },
        {
          // Schema 2 — Service para o bairro específico (provider via @id)
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Aluguel de Betoneiras em ${bairro.nome}, Osasco`,
            serviceType: "Construction Equipment Rental",
            description: `Locação de betoneiras no bairro ${bairro.nome} em Osasco SP. Entrega no mesmo dia, equipamentos revisados de 120L, 150L, 250L, 400L elétrica e a gasolina.`,
            provider: { "@id": "https://betoneiraosasco.com.br/#business" },
            areaServed: {
              "@type": "Place",
              name: `${bairro.nome}, Osasco, SP`,
              geo: {
                "@type": "GeoCoordinates",
                latitude: bairro.lat,
                longitude: bairro.lng,
              },
              hasMap: `https://www.google.com/maps/search/?api=1&query=${bairro.lat},${bairro.lng}`,
            },
            url,
          }),
        },
        {
          // Schema 3 — Place com geocoordinadas exatas do bairro
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "@id": `${url}#place`,
            name: `${bairro.nome}, Osasco, SP`,
            geo: {
              "@type": "GeoCoordinates",
              latitude: bairro.lat,
              longitude: bairro.lng,
            },
            hasMap: `https://www.google.com/maps/search/?api=1&query=${bairro.lat},${bairro.lng}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Osasco",
              addressRegion: "SP",
              addressCountry: "BR",
            },
            containedInPlace: {
              "@type": "City",
              name: "Osasco",
            },
          }),
        },
        {
          // Schema 4 — BreadcrumbList (permitido repetir)
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
          // Schema 5 — FAQPage (permitido repetir, conteúdo dinâmico por bairro)
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `Vocês entregam no mesmo dia no bairro ${bairro.nome}?`,
                acceptedAnswer: { "@type": "Answer", text: `Sim, entregamos betoneiras no mesmo dia em toda a região do ${bairro.nome}, em Osasco. Para garantir o recebimento na rota diária, pedimos apenas que confirme seu agendamento conosco pelo WhatsApp até o início da tarde.` },
              },
              {
                "@type": "Question",
                name: `Qual é o preço do frete para o bairro ${bairro.nome}?`,
                acceptedAnswer: { "@type": "Answer", text: `Como somos de Osasco e nossa base logística é estratégica, oferecemos taxas de entrega e retirada extremamente acessíveis (e em locações semanais ou mensais o frete pode sair grátis). Manda a sua rua no ${bairro.nome} pelo WhatsApp que passamos o valor do frete na hora.` },
              },
              {
                "@type": "Question",
                name: "Qual modelo de betoneira escolher para reforma residencial?",
                acceptedAnswer: { "@type": "Answer", text: "Para reformas internas e rebocos comuns, a betoneira de 150L elétrica já resolve perfeitamente. Para concretagem de calçadas, muros e lajes residenciais, o modelo de 250L é o mais equilibrado e roda em tomadas elétricas padrão. O modelo de 400L é ideal para obras rápidas de médio e grande volume." },
              },
              {
                "@type": "Question",
                name: `Como funciona o agendamento de locação para o ${bairro.nome}?`,
                acceptedAnswer: { "@type": "Answer", text: "É extremamente simples e sem burocracias. Você nos chama no WhatsApp, passa o modelo de betoneira que precisa, o tempo de locação (diária, semanal ou mensal) e o endereço completo de entrega. A máquina chega limpa e revisada, e o pagamento é feito apenas no ato da entrega." },
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

  const obraVariations = [
    "obras residenciais",
    "reformas e lajes",
    "construções e reparos",
    "obras de médio porte",
    "reformas rápidas"
  ];
  const variantIndex = bairro.nome.length % obraVariations.length;
  const tipoObra = obraVariations[variantIndex];

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
                O melhor serviço de aluguel de betoneiras em {bairro.nome}. Fornecemos betoneiras elétricas 110V/220V e a gasolina de 120L, 150L, 250L e 400L. Referência em aluguel de betoneiras em Osasco com entrega rápida para {tipoObra}.
              </p>

              <div className="reveal mt-8 flex flex-wrap gap-4" style={{ ["--i" as never]: 3 }}>
                <a
                  href={`https://wa.me/5511975465766?text=${encodeURIComponent(`Olá! Quero alugar uma betoneira no bairro ${bairro.nome}, Osasco.`)}`}
                  target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow"
                >
                  Orçamento no WhatsApp <ArrowIcon size={16} />
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
            Betoneiras de 120L, 150L, 250L e 400L para aluguel em {bairro.nome}, nas versões elétricas monofásicas (110V/220V) e a gasolina, ideais para misturar concreto, argamassa, contrapiso e cimento em obras residenciais e de médio porte.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {MODELOS.map((m, i) => (
              <div key={m.volume} className="reveal" style={{ ["--i" as never]: i }}>
                <ModelCard m={m} />
              </div>
            ))}
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
                    <div className="relative z-10 flex aspect-[5/4] w-full items-center justify-center rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
                      <s.Icon size={120} className="text-[var(--brand-navy)]" />
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
            Misturador de concreto, argamassa e cimento para construção civil e reforma no {bairro.nome}. Mistura uniforme de areia, brita e cimento no traço certo para cada etapa da obra.
          </p>
          <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {["Laje", "Contrapiso", "Concretagem", "Calçada de concreto", "Muro", "Piscina", "Quintal", "Reboco", "Chapisco", "Emboço", "Alvenaria", "Fundação", "Baldrame", "Piso de concreto", "Escada", "Puxadinho", "Reforma residencial", "Construção civil"].map((a) => (
              <li key={a} className="rounded-2xl bg-white p-4 text-center text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1">{a}</li>
            ))}
          </ul>
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
                A <strong>Betoneira Osasco</strong> é referência em locação de betoneira em Osasco. Atendemos de forma prioritária todas as ruas e canteiros de obras do bairro <strong>{bairro.nome}</strong>. Nossa logística própria permite agilidade máxima na entrega.
              </p>
              <p>
                Quer alugar betoneira em Osasco com entrega no mesmo dia? Nossos equipamentos chegam higienizados, lubrificados e revisados. Você foca no progresso da obra em {bairro.nome} e a gente cuida do resto.
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
              Aluguel de <span className="font-editorial text-[var(--brand-navy)]">betoneiras</span> em {bairro.nome}
            </h2>
            <p className="reveal mt-4 max-w-2xl text-sm text-muted-foreground">
              Valores sob consulta para locação no bairro {bairro.nome}. Atendimento sem burocracias, com pagamento flexível (PIX, dinheiro ou cartão) na entrega.
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
                    Confirmar Valores <ArrowIcon size={12} />
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
          highlight="com entrega em 24 a 48h."
          waText={`Olá! Quero alugar uma betoneira no bairro ${bairro.nome}, Osasco.`}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
