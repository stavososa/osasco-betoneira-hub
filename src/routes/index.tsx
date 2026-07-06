import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CTAFinal } from "@/components/CTAFinal";
import { MapEmbed } from "@/components/MapEmbed";
import { HazardStripe } from "@/components/HazardStripe";
import { TrustBar } from "@/components/TrustBar";
import { Steps } from "@/components/Steps";
import { ModelCard } from "@/components/ModelCard";
import { MODELOS } from "@/lib/modelos";
import { useReveal } from "@/lib/useReveal";
import { BAIRROS } from "@/lib/bairros";
import { ArrowIcon, PhoneIcon, TruckIcon, CheckIcon, MixerIcon, HelmetIcon, ClockIcon, WhatsappIcon } from "@/components/icons/Icons";
import betoneiraHero from "@/assets/betoneira-hero.webp";
import alugarBetoneiraOsasco from "@/assets/alugar-betoneira-osasco.webp";
import betoneiraOsascoAluga from "@/assets/betoneira-osasco-aluga.webp";
import betoneiraParaAlugarEmOsasco from "@/assets/betoneira-para-alugar-em-osasco.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aluguel de Betoneira em Osasco | Perto de Mim" },
      {
        name: "description",
        content:
          "Aluguel de betoneiras em Osasco com entrega no mesmo dia. Betoneiras de 120L, 150L, 250L e 400L elétricas e a gasolina. Melhor preço e atendimento rápido.",
      },
      { property: "og:title", content: "Aluguel de Betoneira em Osasco SP | 120L, 150L, 250L e 400L" },
      {
        property: "og:description",
        content:
          "Locação de betoneira em Osasco com entrega no mesmo dia. Misturador de concreto e argamassa para obras residenciais e de médio porte.",
      },
      { property: "og:image", content: "https://betoneiraosasco.com.br/assets/betoneira-hero.webp" },
      { property: "og:url", content: "https://betoneiraosasco.com.br/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://betoneiraosasco.com.br/" },
      { rel: "preload", href: betoneiraHero, as: "image", fetchPriority: "high" as any },
    ],
    scripts: [
      {
        // Schema Unificado — WebPage Raiz com Entidades Aninhadas
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://betoneiraosasco.com.br/#webpage",
          url: "https://betoneiraosasco.com.br/",
          name: "Betoneira Osasco - Aluguel de Betoneiras em Osasco",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://betoneiraosasco.com.br/#website",
            url: "https://betoneiraosasco.com.br/",
            name: "Betoneira Osasco",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://betoneiraosasco.com.br/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
          about: {
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
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Catálogo de betoneiras para aluguel",
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
                urlTemplate: "https://wa.me/5511975465766?text=Quero%20alugar%20betoneira",
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
            mainEntity: FAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

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

const DIFERENCIAIS = [
  { Icon: TruckIcon, t: "Entrega no mesmo dia", d: "Confirmou até a tarde, sua betoneira chega ainda hoje em toda Osasco." },
  { Icon: CheckIcon, t: "Equipamento revisado", d: "Cada máquina é conferida antes de sair, você recebe pronta para ligar e trabalhar." },
  { Icon: HelmetIcon, t: "Atendimento local", d: <>Somos de Osasco. Falar com a gente é falar direto com quem entrega, sem call center. Conheça um pouco mais <Link to="/sobre" className="font-bold underline hover:text-[var(--brand-yellow)]">sobre nós</Link>.</> },
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
    a: "Sim, realizamos entregas no mesmo dia em todos os 62 bairros da cidade de Osasco. Para garantir que o equipamento seja incluído na rota de entregas diárias, solicitamos que a confirmação do aluguel da betoneira seja feita com nossa equipe de atendimento pelo WhatsApp até o início da tarde. Como operamos com frota logística própria de caminhões e utilitários, conseguimos oferecer alta flexibilidade de horário, agilizando o envio de misturadores diretamente para o canteiro de obras residencial ou comercial.",
  },
  {
    q: "Qual é o prazo mínimo de aluguel?",
    a: "O período mínimo para locação de betoneiras em nossa empresa é de 1 diária, que compreende um ciclo de 24 horas de uso contínuo no local da obra. Para construtores, pedreiros e proprietários que necessitam de prazos estendidos, oferecemos planos semanais, quinzenais e mensais com descontos progressivos altamente vantajosos. A contratação é flexível: caso sua obra atrase ou necessite de mais dias de uso do misturador, basta nos acionar pelo WhatsApp para renovar o prazo sem burocracia.",
  },
  {
    q: "Precisa pagar caução?",
    a: "Sim, solicitamos uma caução simples para a locação dos equipamentos, a qual é integralmente estornada no ato da retirada da betoneira, desde que esta retorne limpa e sem avarias que impeçam seu funcionamento básico. O valor exato da caução é informado detalhadamente junto com o orçamento de frete e locação, garantindo total transparência. Todo o processo é formalizado em um contrato simplificado de prestação de serviços para segurança jurídica de ambas as partes.",
  },
  {
    q: "Quais modelos vocês trabalham?",
    a: "Nossa frota em Osasco conta com betoneiras profissionais e compactas de 120 litros, 150 litros, 250 litros e as robustas de 400 litros. Dispomos de opções elétricas com motores monofásicos compatíveis com redes 110V ou 220V residenciais, além de modelos de 400L equipados com motor a gasolina de 5,5 HP, ideais para terrenos e loteamentos novos que ainda não contam com fornecimento de energia elétrica. Todos os equipamentos passam por testes antes da entrega.",
  },
  {
    q: "Vocês atendem fora de Osasco?",
    a: "Além de cobrir 100% de Osasco, atendemos cidades vizinhas da Grande São Paulo e região oeste, como Carapicuíba, Cotia (incluindo Granja Viana), Barueri (Alphaville e Tamboré), Jandira, Itapevi e bairros da zona oeste da capital paulista. As taxas de entrega e os prazos são sob consulta. Basta enviar o endereço completo ou CEP da obra via WhatsApp que nossa equipe calcula a logística de envio imediato.",
  },
  {
    q: "Posso pagar de qual forma?",
    a: "Disponibilizamos métodos de pagamento práticos para nossos clientes. Aceitamos transferência via PIX, dinheiro em espécie, cartões de débito e cartões de crédito de todas as bandeiras. Para pacotes de locação mensais ou contratos corporativos de construtoras, podemos negociar condições de faturamento flexíveis. Oferecemos total flexibilidade de pagamento com faturamento simplificado para você ter máxima tranquilidade.",
  },
  {
    q: "Vale a pena alugar ou comprar uma betoneira?",
    a: "Para reformas de curto prazo, reparos domésticos e lajes residenciais isoladas, o aluguel é infinitamente mais econômico, pois elimina os custos de aquisição, manutenção e transporte da betoneira, além de garantir suporte rápido em caso de problemas. A compra só se torna vantajosa para construtoras e empreiteiros com fluxo ininterrupto de obras por vários meses seguidos. Nós realizamos ambos os serviços: locação ágil e venda de betoneiras novas e seminovas.",
  },
  {
    q: "Qual betoneira usar para laje: 250 ou 400 litros?",
    a: "A betoneira de 250 litros é o modelo mais indicado e alugado para a maioria das obras residenciais em Osasco. Ela possui capacidade útil para misturar de 150 a 180 litros de concreto ou argamassa por ciclo de trabalho e funciona perfeitamente em tomadas elétricas comuns de 110V ou 220V monofásicas disponíveis no canteiro de obras. Para misturas pesadas de lajes, muros de arrimo ou calçadas de grande extensão que necessitem de maior rendimento contínuo de concreto, a locação da betoneira de 400 litros (elétrica ou com motor a gasolina) torna-se a opção mais produtiva e ágil. Oferecemos orçamentos personalizados sob consulta via WhatsApp. Para mais dicas de obras, confira o nosso blog.",
  },
  {
    q: "Quanto custa alugar uma betoneira em Osasco?",
    a: "O preço médio do aluguel de betoneira em Osasco depende do modelo escolhido (120L, 150L, 250L ou 400L), da fonte de energia (elétrica ou a gasolina) e da duração do contrato (diário, semanal ou mensal). Oferecemos orçamentos sob consulta rápida no WhatsApp, garantindo o melhor custo-benefício da região. Em contratos de períodos maiores, como locações mensais, o valor da diária torna-se significativamente menor e oferecemos frete grátis para diversas regiões.",
  },
  {
    q: "Como funciona o aluguel de betoneira em Osasco?",
    a: "O processo é totalmente simplificado e sem burocracias: você entra em contato pelo WhatsApp, escolhe o volume da betoneira e informa o endereço e período desejado. Nós confirmamos o orçamento na hora e agendamos o envio. Nossa equipe entrega o misturador higienizado e testado diretamente no canteiro de forma rápida. Ao final do contrato de locação, enviamos nosso caminhão para retirar o equipamento de forma organizada.",
  },
  {
    q: "Quanto rende uma betoneira de 250 litros por hora?",
    a: "Uma betoneira de 250 litros com capacidade de mistura de 150 a 180 litros por ciclo consegue realizar entre 8 e 12 misturas completas de concreto por hora de trabalho, variando conforme a agilidade do operador e o traço utilizado. Na prática, isso representa um rendimento médio de 1,2 a 2 metros cúbicos de concreto ou argamassa por hora, sendo perfeitamente suficiente para concretagens residenciais e assentamentos de tamanho médio.",
  },
  {
    q: "Qual tamanho de betoneira usar para reforma residencial?",
    a: "Para reformas pequenas, reboco interno e reparos rápidos de alvenaria, o misturador de 120 ou 150 litros é ideal devido à facilidade de movimentação em espaços estreitos e baixo consumo elétrico. Para lajes, muros e concretagens de quintal de médio porte, a de 250 litros oferece o equilíbrio perfeito entre rendimento e mobilidade. Deixamos as betoneiras de 400 litros para obras maiores e fundações de alto volume.",
  },
  {
    q: "Vocês também vendem betoneira em Osasco?",
    a: "Sim, além do serviço líder de locação, atuamos com a venda de betoneiras novas e usadas/seminovas de marcas consagradas no mercado com garantia total. Parcelamos a compra e oferecemos entrega rápida em toda a Grande São Paulo. Se você é construtor ou possui demandas constantes de concretagem, fale com nossos consultores de vendas via WhatsApp para receber a cotação dos modelos disponíveis em estoque físico.",
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
        <section className="relative noise-overlay overflow-hidden text-white" style={{ backgroundColor: "#132762" }}>
          <div className="mx-auto grid min-h-[calc(100dvh-80px)] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_1fr] md:gap-16 md:py-0">
            {/* Coluna esquerda */}
            <div className="relative">
              <div className="reveal flex items-center gap-3" style={{ ["--i" as never]: 0 }}>
                <span className="h-px w-10 bg-[var(--brand-yellow)]" />
                <span className="spec-label !text-white/70">Osasco, SP · Grande São Paulo</span>
              </div>

              <h1 className="reveal mt-4 font-display text-[3.25rem] leading-[0.92] tracking-tight md:text-[5.75rem]" style={{ ["--i" as never]: 1 }}>
                Aluguel de Betoneiras <span className="text-[var(--brand-yellow)]">em Osasco</span>
              </h1>

              <p className="reveal mt-6 max-w-md text-white/80 leading-relaxed" style={{ ["--i" as never]: 2 }}>
                O melhor aluguel de betoneiras em Osasco SP por diária, semana ou mês. Oferecemos betoneiras de 120L, 150L, 250L e 400L, elétricas 110V/220V ou a gasolina. Se você procura uma <Link to="/" className="font-bold underline hover:text-[var(--brand-yellow)]">betoneira perto de mim</Link> com entrega no mesmo dia sem burocracia, entre em contato com a gente.
              </p>

              <div className="reveal mt-8 flex flex-wrap gap-4" style={{ ["--i" as never]: 3 }}>
                <a
                  href="https://wa.me/5511975465766"
                  target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow"
                >
                  <WhatsappIcon size={16} /> Pedir orçamento <ArrowIcon size={16} />
                </a>
                <a
                  href="tel:+5511975465766"
                  className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                >
                  <PhoneIcon size={16} /> (11) 97546-5766
                </a>
              </div>

              <p className="reveal mt-4 text-xs text-white/60" style={{ ["--i" as never]: 3 }}>
                Procurando comprar?{" "}
                <Link to="/comprar-betoneira" className="font-bold text-[var(--brand-yellow)] underline-offset-4 hover:underline">
                  Ver opções de venda →
                </Link>
              </p>

            </div>

            {/* Coluna direita */}
            <aside className="reveal relative" style={{ ["--i" as never]: 2 }}>
              <img
                src={betoneiraHero}
                alt="Betoneira 400L amarela e azul para aluguel em Osasco SP"
                width={720}
                height={780}
                className="relative z-10 ml-auto w-full max-w-3xl md:max-w-none lg:scale-[1.25] lg:translate-x-16 xl:translate-x-24 object-contain"
                loading="eager"
                fetchPriority="high"
              />
            </aside>
          </div>
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
            Betoneiras de 120, 120, 150, 250 e 400 litros para aluguel em Osasco, nas versões elétricas monofásicas (110V/220V) e a gasolina, ideais para misturar concreto, argamassa, contrapiso e cimento em obras residenciais e de médio porte.
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
              <span className="spec-label !text-[var(--brand-ink)]/80">Atendimento Imediato</span>
              <h3 className="mt-2 font-display text-2xl md:text-4xl tracking-tight leading-tight">
                Entrega urgente de betoneira em Osasco? <br />
                <span className="font-editorial text-[var(--brand-navy)]">Fale agora com nossa equipe.</span>
              </h3>
            </div>
            <div>
              <a
                href="https://wa.me/5511975465766?text=Vim%20do%20site%20gostaria%20de%20fazer%20or%C3%A7amento"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow hover:translate-y-[1px] transition-all"
              >
                <WhatsappIcon size={18} /> Orçamento no WhatsApp <ArrowIcon size={18} />
              </a>
            </div>
          </div>
        </section>

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
            <Link to="/locacao-de-betoneiras" className="font-bold text-[var(--brand-navy)] hover:underline">Locação de betoneira em Osasco</Link> para qualquer etapa da sua obra. Misturador de concreto, argamassa e cimento para construção civil e reforma em toda a Grande São Paulo. Oferecemos também <Link to="/comprar-betoneira" className="font-bold text-[var(--brand-navy)] hover:underline">venda de betoneiras</Link> novas e seminovas, além de <Link to="/locacao-caminhao-betoneira" className="font-bold text-[var(--brand-navy)] hover:underline">caminhão betoneira</Link> para demandas de grande porte, sempre com serviço especializado de <Link to="/entrega-e-retirada-de-betoneira" className="font-bold text-[var(--brand-navy)] hover:underline">entrega e retirada</Link>.
          </p>
          <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {[
              "Laje",
              "Contrapiso",
              "Concretagem",
              "Calçada de concreto",
              "Muro",
              "Piscina",
              "Quintal",
              "Reboco",
              "Chapisco",
              "Emboço",
              "Alvenaria",
              "Fundação",
              "Baldrame",
              "Piso de concreto",
              "Escada",
              "Puxadinho",
              "Reforma residencial",
              "Construção civil",
            ].map((a) => (
              <li
                key={a}
                className="rounded-2xl bg-white p-4 text-center text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1"
              >
                {a}
              </li>
            ))}
          </ul>
        </section>

        {/* GREEN CTA 2: NEGOCIAÇÃO DIRETA */}
        <section className="relative overflow-hidden border-b-2 border-[var(--brand-ink)] bg-[#25D366] py-16 text-[var(--brand-ink)] noise-overlay">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="spec-label !text-[var(--brand-ink)]/80">Negociação Direta</span>
            <h3 className="mt-2 font-display text-3xl md:text-5xl tracking-tight leading-tight">
              Alugue sem burocracia e pague <br />
              <span className="font-editorial text-[var(--brand-navy)]">somente no ato da entrega!</span>
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-sm text-[var(--brand-ink)]/90 leading-relaxed">
              Aceitamos PIX, dinheiro ou cartão na entrega do equipamento. Fale direto com um especialista pelo WhatsApp e confirme a melhor diária para o seu projeto.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/5511975465766?text=Vim%20do%20site%20gostaria%20de%20fazer%20or%C3%A7amento"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-8 py-4 text-base font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow hover:translate-y-[1px] transition-all"
              >
                <WhatsappIcon size={20} /> Conversar no WhatsApp <ArrowIcon size={20} />
              </a>
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
              <div className="reveal mt-4 text-xs font-bold uppercase tracking-wider text-[var(--brand-navy)]">
                <h3>Betoneira perto de mim</h3>
              </div>
              <p className="reveal mt-5 max-w-md text-muted-foreground leading-relaxed">
                O aluguel de betoneiras em Osasco cobre toda a cidade (Centro, Zona Norte, Zona Sul, Bussocaba, Quitaúna e Presidente Altino), além de cidades vizinhas como Carapicuíba, Cotia, Barueri, Jandira e a zona oeste de São Paulo. Garantimos entrega e retirada rápida no mesmo dia em qualquer localização.
              </p>
              <ul className="reveal mt-6 flex flex-wrap gap-2">
                {DESTAQUES.map((b) => (
                  <li key={b.slug}>
                    <Link
                      to="/$slug"
                      params={{ slug: `alugar-betoneira-em-${b.slug}` }}
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

        {/* TAMBÉM VENDE */}
        <div className="mx-auto max-w-6xl px-4 pb-10">
          <div className="reveal flex flex-col items-start justify-between gap-4 rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)] md:flex-row md:items-center md:p-8">
            <div>
              <div className="spec-label text-[var(--brand-navy)]">Venda de betoneira em Osasco</div>
              <p className="mt-1 font-display text-xl text-[var(--brand-ink)] md:text-2xl">
                Quer comprar em vez de alugar? Trabalhamos com betoneiras novas e seminovas.
              </p>
            </div>
            <Link
              to="/comprar-betoneira"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--brand-ink)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-yellow)] transition-transform hover:-translate-y-0.5"
            >
              Ver opções de venda <ArrowIcon size={14} />
            </Link>
          </div>
        </div>

        {/* DEPOIMENTOS, fundo navy, cards arredondados */}
        <section className="relative noise-overlay bg-[var(--brand-navy)] py-24 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-yellow)]" />
              <span className="spec-label !text-white/70">Quem já usou</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl tracking-tight md:text-5xl">
              Obras <span className="text-[var(--brand-yellow)]">atendidas</span> em Osasco com aluguel de betoneiras
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

        {/* PREÇOS E PRAZOS */}
        <section className="bg-[var(--brand-concrete)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Valores Transparentes</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Alugar betoneira <span className="font-editorial text-[var(--brand-navy)]">em Osasco: preço e prazos</span>
            </h2>
            <p className="reveal mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Valores sob consulta para cada período de locação. Aluguel de betoneiras em Osasco SP com entrega no mesmo dia, sem burocracias e facilidade no pagamento.
            </p>

            <div className="reveal mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PRECOS_LOCACAO.map((p) => (
                <article
                  key={p.modelo}
                  className={`rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1 ${
                    p.destaque ? "ring-2 ring-[var(--brand-yellow)]" : ""
                  }`}
                >
                  <span className="spec-label text-[var(--brand-navy)]">{p.tag}</span>
                  <h3 className="mt-2 font-display text-xl text-[var(--brand-ink)]">{p.modelo}</h3>
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground">{p.motor}</p>
                  
                  <div className="mt-5 border-t border-dashed border-[var(--brand-ink)]/10 pt-4 text-center">
                    <span className="font-display text-lg text-[var(--brand-navy)]">Sob consulta</span>
                  </div>

                  <a
                    href="https://wa.me/5511975465766?text=Vim%20do%20site%20gostaria%20de%20fazer%20or%C3%A7amento"
                    target="_blank" rel="noopener"
                    className="mt-6 inline-flex w-full justify-center items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] py-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)]"
                  >
                    <WhatsappIcon size={12} /> Orçamento WhatsApp <ArrowIcon size={12} />
                  </a>
                </article>
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
        <CTAFinal
          title="Aluguel de betoneiras em Osasco"
          highlight="com entrega de 24 a 48h."
          eyebrow="Precisa hoje?"
          waText="Vim do site gostaria de fazer orçamento"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
