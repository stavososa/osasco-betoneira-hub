import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HazardStripe } from "@/components/HazardStripe";
import { useReveal } from "@/lib/useReveal";
import { HelmetIcon, TruckIcon, ClockIcon, CheckIcon } from "@/components/icons/Icons";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Quem Somos, Missão e Nossa História | Betoneira Osasco" },
      { name: "description", content: "Empresa local de Osasco especializada em locação e venda de betoneiras. Conheça nossa história, missão e valores baseados na segurança." },
      { property: "og:title", content: "Quem Somos, Missão e História | Betoneira Osasco" },
      { property: "og:description", content: "Locação e venda de betoneiras em Osasco com frota 100% revisada e atendimento ágil." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/sobre/" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/sobre/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": "https://betoneiraosasco.com.br/sobre/#webpage",
          "url": "https://betoneiraosasco.com.br/sobre/",
          "name": "Quem Somos, Missão e Nossa História | Betoneira Osasco",
          "description": "Empresa local de Osasco especializada em locação e venda de betoneiras. Atendimento ágil, equipamentos revisados e preço justo.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", position: 1, name: "Início", item: "https://betoneiraosasco.com.br/" },
              { "@type": "ListItem", position: 2, name: "Sobre", item: "https://betoneiraosasco.com.br/sobre/" }
            ]
          },
          "mainEntity": {
            "@id": "https://betoneiraosasco.com.br/#business"
          }
        }),
      },
    ],
  }),
  component: SobrePage,
});

const PILARES = [
  { Icon: HelmetIcon, t: "Atendimento local", d: "Somos de Osasco e conhecemos a cidade , chegamos rápido onde sua obra estiver." },
  { Icon: CheckIcon, t: "Equipamentos revisados", d: "Cada betoneira passa por manutenção antes da locação." },
  { Icon: ClockIcon, t: "Preço justo", d: "Diária, semanal e mensal com descontos progressivos." },
  { Icon: TruckIcon, t: "Logística inclusa", d: "Cuidamos da entrega e retirada para você focar na obra." },
];

function SobrePage() {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative noise-overlay bg-[var(--brand-navy)] py-16 text-white">
          <div className="mx-auto max-w-4xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-yellow)]" />
              <span className="spec-label !text-white/70">Quem somos</span>
            </div>
            <h1 className="reveal reveal-delay-1 mt-3 font-display text-4xl md:text-6xl">
              Sobre a <span className="text-[var(--brand-yellow)]">Betoneira Osasco</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-4 text-white/85">Atendendo construtores, pedreiros e reformas residenciais em Osasco e região.</p>
          </div>
          <HazardStripe />
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16">
          <div className="reveal space-y-6 text-base text-foreground/90 leading-relaxed">
            <p>A <strong>Betoneira Osasco</strong> nasceu no coração de Osasco com a missão clara de resolver um dos maiores gargalos logísticos e operacionais da construção civil na região: o acesso simplificado, rápido e desburocratizado a misturadores de concreto de alto desempenho. Em meados da última década, observamos que construtores autônomos, mestres de obras e incorporadoras enfrentavam frequentes interrupções em seus cronogramas devido à escassez de equipamentos revisados ou à morosidade das grandes locadoras para realizar entregas nos bairros periféricos e residenciais da cidade.</p>
            
            <p>Focando no atendimento hiper-local, estruturamos uma central de atendimento ágil capaz de despachar betoneiras limpas, testadas e perfeitamente lubrificadas no mesmo dia da solicitação, como pode ser visto em nosso <Link to="/servicos" className="text-[var(--brand-navy)] hover:underline font-bold">catálogo de serviços</Link>. Com nossa própria <Link to="/entrega-e-retirada-de-betoneira" className="text-[var(--brand-navy)] hover:underline font-bold">logística de entrega e retirada</Link>, cobrimos com rapidez cirúrgica todos os 62 bairros e distritos de Osasco de forma ininterrupta, garantindo que o cronograma de concretagem das lajes e vigas da sua obra nunca fique paralisado, mesmo que precise de um <Link to="/locacao-caminhao-betoneira" className="text-[var(--brand-navy)] hover:underline font-bold">caminhão betoneira</Link>.</p>

            <h3 className="font-display text-xl uppercase text-[var(--brand-ink)] pt-4">Compromisso Ecológico e Lavagem Sustentável</h3>
            <p>Entendemos que a construção civil exige práticas alinhadas à preservação ambiental. Por isso, desenvolvemos um protocolo proprietário de lavagem e manutenção ecológica para nossa frota de betoneiras. O processo de higienização mecânica pós-obra é realizado utilizando sistemas de recirculação de água que minimizam o desperdício hídrico em até 70%. Toda a calda residual alcalina gerada no tambor de concreto é direcionada a caixas de decantação e neutralização de pH em nosso pátio técnico antes do descarte. Além disso, todos os motores elétricos de nossa frota possuem alto rendimento energético, diminuindo sensivelmente a poluição sonora no entorno dos canteiros residenciais de Osasco.</p>

            <h3 className="font-display text-xl uppercase text-[var(--brand-ink)] pt-4">Capacitação Técnica e Apoio ao Pedreiro Local</h3>
            <p>Muito além da simples locação de maquinário, a Betoneira Osasco atua ativamente na valorização e profissionalização da mão de obra de nossa cidade. Fornecemos cartilhas ilustradas de segurança no trabalho (em total conformidade com as normas regulamentadoras NR-18 e NR-12) e realizamos orientações práticas no momento da entrega das máquinas para pedreiros e serventes. Acreditamos que um operador bem instruído sobre o posicionamento ideal, o aterramento preventivo e o carregamento do tambor trabalha mais seguro, reduz sensivelmente as perdas de cimento e areia, e garante uma massa muito mais homogênea e durável para a edificação.</p>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="reveal mt-16 grid gap-6 md:grid-cols-3">
            <div className="border-2 border-[var(--brand-ink)] bg-white p-6 hard-shadow rounded-lg">
              <span className="text-3xl">🎯</span>
              <h3 className="font-display text-lg uppercase text-[var(--brand-ink)] mt-3">Nossa Missão</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Oferecer soluções de locação de betoneiras com agilidade incomparável, equipamentos 100% confiáveis e atendimento humanizado para impulsionar o sucesso e a produtividade de todas as obras em Osasco.
              </p>
            </div>
            <div className="border-2 border-[var(--brand-ink)] bg-white p-6 hard-shadow rounded-lg">
              <span className="text-3xl">👁️</span>
              <h3 className="font-display text-lg uppercase text-[var(--brand-ink)] mt-3">Nossa Visão</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Ser reconhecida como a principal referência e parceira preferencial em locação de betoneiras na região de Osasco, destacando-se pela excelência logística e conservação impecável do maquinário.
              </p>
            </div>
            <div className="border-2 border-[var(--brand-ink)] bg-white p-6 hard-shadow rounded-lg">
              <span className="text-3xl">🤝</span>
              <h3 className="font-display text-lg uppercase text-[var(--brand-ink)] mt-3">Nossos Valores</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Segurança absoluta dos operadores, pontualidade britânica em todas as entregas, transparência inegociável nos contratos e profundo compromisso com o resultado da sua construção ou reforma.
              </p>
            </div>
          </div>

          <h2 className="reveal mt-16 font-display text-3xl text-[var(--brand-ink)] uppercase tracking-tight">Nossos Diferenciais Técnicos</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {PILARES.map(({ Icon, t, d }, i) => (
              <div key={t} className={`reveal reveal-delay-${i + 1} flex gap-4 border-l-4 border-[var(--brand-yellow)] bg-[var(--brand-concrete)] p-5`}>
                <Icon size={32} className="shrink-0 text-[var(--brand-navy)]" />
                <div>
                  <h3 className="font-display text-lg text-[var(--brand-ink)]">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Como Funcionamos - 4 Passos Práticos */}
          <section className="reveal mt-20 border-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-8 hard-shadow rounded-lg">
            <span className="spec-label !text-[var(--brand-navy)] font-bold">Processo Simplificado</span>
            <h2 className="font-display text-2xl md:text-3xl uppercase text-[var(--brand-ink)] mt-2">Como funcionamos em 4 passos práticos</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              <div className="space-y-2">
                <span className="numeric text-3xl text-[var(--brand-yellow)] [text-shadow:_2px_2px_0_var(--brand-ink)] block">01</span>
                <h3 className="font-display text-sm uppercase text-[var(--brand-ink)]">Orçamento Rápido</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Fale conosco pelo WhatsApp, tire suas dúvidas de capacidade e receba valores claros instantaneamente.</p>
              </div>
              <div className="space-y-2">
                <span className="numeric text-3xl text-[var(--brand-yellow)] [text-shadow:_2px_2px_0_var(--brand-ink)] block">02</span>
                <h3 className="font-display text-sm uppercase text-[var(--brand-ink)]">Entrega no Canteiro</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Nossa equipe de logística realiza a entrega no endereço da sua obra em toda Osasco com frete ágil.</p>
              </div>
              <div className="space-y-2">
                <span className="numeric text-3xl text-[var(--brand-yellow)] [text-shadow:_2px_2px_0_var(--brand-ink)] block">03</span>
                <h3 className="font-display text-sm uppercase text-[var(--brand-ink)]">Uso Produtivo</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Trabalhe com um equipamento revisado, seguro e altamente produtivo para obter um concreto homogêneo.</p>
              </div>
              <div className="space-y-2">
                <span className="numeric text-3xl text-[var(--brand-yellow)] [text-shadow:_2px_2px_0_var(--brand-ink)] block">04</span>
                <h3 className="font-display text-sm uppercase text-[var(--brand-ink)]">Retirada Agendada</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Finalizou o serviço? Basta nos notificar e realizamos a coleta do maquinário no local sem burocracias.</p>
              </div>
            </div>
          </section>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
