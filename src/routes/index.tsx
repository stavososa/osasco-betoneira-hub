import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapEmbed } from "@/components/MapEmbed";
import { HazardStripe } from "@/components/HazardStripe";
import { TrustBar } from "@/components/TrustBar";
import { Steps } from "@/components/Steps";
import { ModelCard } from "@/components/ModelCard";
import { MODELOS } from "@/lib/modelos";
import { useReveal } from "@/lib/useReveal";
import { BAIRROS } from "@/lib/bairros";
import { ArrowIcon, PhoneIcon, TruckIcon, CheckIcon, MixerIcon, HelmetIcon, ClockIcon } from "@/components/icons/Icons";
import betoneiraHero from "@/assets/betoneira-hero.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aluguel de Betoneiras em Osasco | Betoneiras Osasco" },
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
      { property: "og:url", content: "https://betoneiraosasco.com.br/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/" }],
    scripts: [
      {
        // Schema 1 — Organization + LocalBusiness + HomeAndConstructionBusiness com Service aninhado
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
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
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "07:00",
              closes: "19:00",
            },
          ],
          sameAs: ["https://wa.me/5511975465766"],
          service: {
            "@type": "Service",
            name: "Aluguel de Betoneiras em Osasco",
            serviceType: "Construction Equipment Rental",
            description: "Locação diária, semanal e mensal de betoneiras de 120L, 150L, 250L e 400L, elétricas 110V/220V e a gasolina, com entrega no mesmo dia em Osasco SP.",
            provider: { "@id": "https://betoneiraosasco.com.br/#business" },
            areaServed: { "@type": "City", name: "Osasco" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Catálogo de betoneiras para aluguel",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 120L Elétrica" } },
                { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 150L Elétrica" } },
                { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 250L Elétrica" } },
                { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 400L Elétrica" } },
                { "@type": "Offer", itemOffered: { "@type": "Product", name: "Betoneira 400L Gasolina" } },
                { "@type": "Offer", itemOffered: { "@type": "Product", name: "Caminhão Betoneira" } },
              ],
            },
            potentialAction: {
              "@type": "RentAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://wa.me/5511975465766?text=Quero%20alugar%20betoneira",
                actionPlatform: [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              }
            },
          },
        }),
      },
      {
        // Schema 3 — Place com GeoCoordinates do endereço principal
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "@id": "https://betoneiraosasco.com.br/#place",
          name: "Osasco",
          geo: {
            "@type": "GeoCoordinates",
            latitude: -23.52681,
            longitude: -46.79496,
          },
          hasMap: "https://www.google.com/maps/search/?api=1&query=-23.52681,-46.79496",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Osasco",
            addressRegion: "SP",
            addressCountry: "BR",
          },
        }),
      },
      {
        // Schema 4 — FAQPage (permitido repetir por ser conteúdo dinâmico)
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
    a: "Trabalhamos com betoneiras de 120L, 150L, 250L e 400L, em versões elétricas 110V e 220V monofásicas e a gasolina. A 250L é a mais procurada para obras residenciais. Se você não sabe qual escolher, manda o tamanho da obra que a gente indica o modelo ideal.",
  },
  {
    q: "Vocês atendem fora de Osasco?",
    a: "Atendemos bairros vizinhos sob consulta, como Carapicuíba, Cotia, Barueri e algumas regiões da zona oeste de São Paulo. Manda o endereço pelo WhatsApp que retornamos com prazo de entrega e valor do frete para o seu local.",
  },
  {
    q: "Posso pagar de qual forma?",
    a: "Aceitamos PIX, dinheiro, cartão de débito e crédito. Para locações longas, dá para parcelar combinando direto com a gente. O pagamento acontece no momento da entrega do equipamento na sua obra.",
  },
  {
    q: "Vale a pena alugar ou comprar uma betoneira?",
    a: "Depende do volume e da duração da obra. Para reformas, lajes residenciais e contrapisos pontuais, alugar uma betoneira em Osasco sai bem mais barato e ainda tem entrega no mesmo dia. Para quem usa direto, como construtora ou empreiteiro com obras seguidas, a venda compensa em poucos meses. Manda o cenário pelo WhatsApp que a gente faz a conta junto.",
  },
  {
    q: "Qual betoneira usar para laje: 250 ou 400 litros?",
    a: "Para a maioria das lajes residenciais em Osasco, a betoneira de 250 litros elétrica dá conta com folga e ainda usa tomada comum 110V ou 220V. A de 400 litros a gasolina é melhor para obras de médio porte, muro grande, calçada longa ou quando não tem energia disponível na obra. Na dúvida, a gente indica pelo m² da laje.",
  },
  {
    q: "Quanto custa alugar uma betoneira em Osasco?",
    a: "O valor do aluguel de betoneira em Osasco é definido sob consulta conforme o modelo (120L, 150L, 250L ou 400L), o tipo (elétrica ou a gasolina) e o prazo de locação. Manda o modelo e os dias pelo WhatsApp que a gente passa o orçamento na hora.",
  },
  {
    q: "Como funciona o aluguel de betoneira em Osasco?",
    a: "É simples: você manda o modelo e o endereço pelo WhatsApp, a gente confirma o orçamento, agenda a entrega no mesmo dia (se confirmado até o início da tarde) e a betoneira chega revisada, pronta para misturar concreto ou argamassa. No fim do prazo, a gente passa para retirar. Pagamento em PIX, dinheiro ou cartão.",
  },
  {
    q: "Quanto rende uma betoneira de 250 litros por hora?",
    a: "Uma betoneira de 250 litros tem capacidade útil de mistura por volta de 150 a 180 litros por carga e roda entre 8 e 12 misturas por hora, dependendo do traço e do operador. Na prática, dá para concretar uma laje residencial pequena em poucas horas. Para obras maiores, a 400L rende mais por ciclo.",
  },
  {
    q: "Qual tamanho de betoneira usar para reforma residencial?",
    a: "Para reformas pequenas, reboco e contrapiso de cômodos isolados, a betoneira de 150 litros já resolve e ocupa pouco espaço. Para lajes residenciais, calçadas e reformas maiores, a 250 litros é a escolha mais equilibrada. A 400 litros é indicada quando a obra é de médio porte ou tem muito volume de concreto.",
  },
  {
    q: "Vocês também vendem betoneira em Osasco?",
    a: "Sim. Trabalhamos com betoneiras novas e seminovas em Osasco, com garantia, nota fiscal e parcelamento. Para detalhes, modelos disponíveis e cotação, veja a página Comprar Betoneira ou chame no WhatsApp.",
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
                Aluguel de Betoneiras em Osasco
              </h1>

              <p className="reveal mt-6 max-w-md text-white/80 leading-relaxed" style={{ ["--i" as never]: 2 }}>
                O melhor aluguel de betoneiras em Osasco SP por diária, semana ou mês. Oferecemos betoneiras de 120L, 150L, 250L e 400L, elétricas 110V/220V ou a gasolina, com entrega no mesmo dia sem burocracia.
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
            Locação de betoneira em Osasco para qualquer etapa da sua obra. Misturador de concreto, argamassa e cimento para construção civil e reforma em toda a Grande São Paulo. Mistura uniforme de areia, brita e cimento no traço certo.
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
                O aluguel de betoneiras em Osasco cobre toda a cidade (Centro, Zona Norte, Zona Sul, Bussocaba, Quitaúna e Presidente Altino), além de cidades vizinhas como Carapicuíba, Cotia, Barueri, Jandira e a zona oeste de São Paulo. Entrega e retirada no mesmo dia.
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
        <section className="mx-auto max-w-6xl px-4 pb-10">
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
        </section>

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
              Aluguel de <span className="font-editorial text-[var(--brand-navy)]">betoneiras em Osasco</span>
            </h2>
            <p className="reveal mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Valores sob consulta para cada período de locação. Aluguel de betoneiras em Osasco SP com entrega no mesmo dia, sem burocracias e pagamento flexível na entrega.
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
                  <div className="mt-2 font-display text-xl text-[var(--brand-ink)]">{p.modelo}</div>
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground">{p.motor}</p>
                  
                  <div className="mt-5 border-t border-dashed border-[var(--brand-ink)]/10 pt-4 text-center">
                    <span className="font-display text-lg text-[var(--brand-navy)]">Sob consulta</span>
                  </div>

                  <a
                    href="https://wa.me/5511975465766"
                    target="_blank" rel="noopener"
                    className="mt-6 inline-flex w-full justify-center items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] py-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)]"
                  >
                    Orçamento WhatsApp <ArrowIcon size={12} />
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
        <section className="relative noise-overlay bg-[var(--brand-yellow)] py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <div className="spec-label !text-[var(--brand-ink)]/70">Precisa hoje?</div>
              <h2 className="mt-1 font-display text-3xl leading-[0.95] tracking-tight text-[var(--brand-ink)] md:text-5xl">
                Aluguel de betoneiras em Osasco<br />
                <span className="font-editorial">com entrega de 24 a 48h.</span>
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
