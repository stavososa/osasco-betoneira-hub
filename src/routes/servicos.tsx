import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HazardStripe } from "@/components/HazardStripe";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import { CheckIcon, ArrowIcon } from "@/components/icons/Icons";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de Locação, Venda e Assistência de Betoneiras em Osasco" },
      { name: "description", content: "Locação diária, semanal e mensal de betoneiras de 120L a 400L e venda de equipamentos com assistência técnica especializada e entrega rápida em Osasco." },
      { property: "og:title", content: "Serviços de Locação e Venda de Betoneiras | Betoneira Osasco" },
      { property: "og:description", content: "Locação de betoneiras elétricas e a gasolina com frete rápido e manutenção preventiva completa em Osasco SP." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/servicos" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/servicos" }],
    scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://betoneiraosasco.com.br/servicos#webpage",
            "url": "https://betoneiraosasco.com.br/servicos",
            "name": "Serviços de Locação, Venda e Assistência de Betoneiras em Osasco",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://betoneiraosasco.com.br/#website",
              "url": "https://betoneiraosasco.com.br/",
              "name": "Betoneira Osasco"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", position: 1, name: "Início", item: "https://betoneiraosasco.com.br/" },
                { "@type": "ListItem", position: 2, name: "Serviços", item: "https://betoneiraosasco.com.br/servicos" }
              ]
            },
            "mainEntity": {
              "@type": "Service",
              "@id": "https://betoneiraosasco.com.br/servicos#service",
              "url": "https://betoneiraosasco.com.br/servicos",
              "name": "Serviços de Locação, Venda e Assistência de Betoneiras em Osasco",
              "serviceType": "Construction Equipment Rental and Sales",
              "description": "Locação diária/semanal/mensal, venda de betoneiras 120L–400L e entrega/retirada em Osasco. Solicite um orçamento.",
              "provider": {
                "@id": "https://betoneiraosasco.com.br/#business"
              },
              "areaServed": [
                { "@type": "City", name: "Osasco" }
              ],
              "potentialAction": {
                "@type": "RentAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://wa.me/5511975465766?text=Quero%20alugar%20betoneira",
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                  ]
                }
              }
            }
          }),
        },
    ],
  }),
  component: ServicosPage,
});

const SERVICOS = [
  { n: "01", titulo: "Locação de Betoneiras", desc: "120L, 150L, 250L e 400L para diária, semanal ou mensal. Equipamentos revisados.", itens: ["Sob consulta", "Descontos semanal/mensal", "Elétricas e a gasolina"], link: "/locacao-de-betoneiras" },
  { n: "02", titulo: "Venda de Betoneiras", desc: "Novos e seminovos com garantia. Ideal para construtoras e profissionais.", itens: ["Novas e seminovas", "Garantia de fábrica", "Assistência em Osasco"], link: "/comprar-betoneira" },
  { n: "03", titulo: "Caminhão Betoneira", desc: "Mixer trucks de 8m³ para grandes lajes e fundações. Operador incluso.", itens: ["Alta capacidade", "Concreto pronto", "Obras pesadas"], link: "/locacao-caminhao-betoneira" },
  { n: "04", titulo: "Entrega & Retirada", desc: "Logística rápida em toda Osasco. Entregamos onde sua obra estiver.", itens: ["Entrega no mesmo dia", "Retirada agendada", "Todos os bairros"], link: "/entrega-e-retirada-de-betoneira" },
];

function ServicosPage() {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative noise-overlay bg-[var(--brand-navy)] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-yellow)]" />
              <span className="spec-label !text-white/70">O que fazemos</span>
            </div>
            <h1 className="reveal reveal-delay-1 mt-3 font-display text-4xl md:text-6xl">Nossos <span className="text-[var(--brand-yellow)]">serviços</span></h1>
            <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-white/85">Descubra as soluções que temos para a sua obra em Osasco. Desde aluguel e venda até a logística de entrega.</p>
          </div>
          <HazardStripe />
        </section>

        <TrustBar />

        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {SERVICOS.map((s, i) => (
              <article key={s.titulo} className={`reveal reveal-delay-${i + 1} cut-corner flex flex-col justify-between border-2 border-[var(--brand-ink)] bg-card p-6 hard-shadow`}>
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="numeric text-4xl text-[var(--brand-yellow)] [text-shadow:_2px_2px_0_var(--brand-ink)]">{s.n}</span>
                    <span className="spec-label">Serviço</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl text-[var(--brand-ink)]">{s.titulo}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 space-y-2 border-t border-dashed border-[var(--brand-ink)]/30 pt-4 text-sm mb-6">
                    {s.itens.map((i2) => (
                      <li key={i2} className="flex items-start gap-2">
                        <CheckIcon size={16} className="mt-0.5 shrink-0 text-[var(--brand-yellow)]" />
                        <span>{i2}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={s.link} className="inline-flex items-center justify-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--brand-ink)]">
                  Saiba mais <ArrowIcon size={14} />
                </Link>
              </article>
            ))}
          </div>

          {/* Especificações de Máquinas (E-E-A-T) */}
          <section className="reveal mt-20 border-2 border-[var(--brand-ink)] bg-white p-8 hard-shadow rounded-lg">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Guia de Equipamentos</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl uppercase text-[var(--brand-ink)] mt-2">Especificações Técnicas de Nossas Betoneiras</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-3xl leading-relaxed">
              Trabalhamos exclusivamente com marcas consagradas no mercado nacional de construção civil, equipadas com motores elétricos e a combustão de alto torque. Conheça as capacidades reais e indicações de uso para cada tipo de projeto em Osasco.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="border border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base uppercase text-[var(--brand-navy)]">Betoneira 120 Litros</h3>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mt-0.5">Compacta e Ágil</span>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    Perfeita para pequenas reformas internas, acabamentos rápidos, assentamentos e reparos em calçadas. Sua principal vantagem é a facilidade de movimentação em espaços confinados e passagem facilitada por portas padrão.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-dashed border-[var(--brand-ink)]/20 text-xs space-y-1 text-[var(--brand-ink)]">
                  <div><strong>Capacidade de Mistura:</strong> 80 Litros</div>
                  <div><strong>Motorização:</strong> Monofásica (0.5 CV)</div>
                  <div><strong>Rendimento Médio:</strong> Até 1.2 m³/h</div>
                </div>
              </div>

              <div className="border border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base uppercase text-[var(--brand-navy)]">Betoneira 150 Litros</h3>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mt-0.5">Versatilidade Residencial</span>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    O tamanho ideal para pedreiros e construtores independentes que necessitam rodar concretagem de vigas estruturais, sapatas pequenas e alvenaria em geral sem desperdício de insumos.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-dashed border-[var(--brand-ink)]/20 text-xs space-y-1 text-[var(--brand-ink)]">
                  <div><strong>Capacidade de Mistura:</strong> 100 Litros</div>
                  <div><strong>Motorização:</strong> Monofásica (0.75 CV)</div>
                  <div><strong>Rendimento Médio:</strong> Até 1.5 m³/h</div>
                </div>
              </div>

              <div className="border border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base uppercase text-[var(--brand-navy)]">Betoneira 250 Litros</h3>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mt-0.5">Produtividade Intermediária</span>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    Projetada para obras residenciais de médio a grande porte e reformas comerciais. Garante um excelente ciclo de mistura homogênea, atendendo equipes estruturadas com demanda constante de argamassa e concreto.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-dashed border-[var(--brand-ink)]/20 text-xs space-y-1 text-[var(--brand-ink)]">
                  <div><strong>Capacidade de Mistura:</strong> 170 Litros</div>
                  <div><strong>Motorização:</strong> Monofásica ou Trifásica (1.0 CV)</div>
                  <div><strong>Rendimento Médio:</strong> Até 2.2 m³/h</div>
                </div>
              </div>

              <div className="border border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base uppercase text-[var(--brand-navy)]">Betoneira 400L Elétrica</h3>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mt-0.5">Padrão Profissional das Construtoras</span>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    O cavalo de batalha das construtoras civis em Osasco. Tambor em chapa de aço ultra-reforçada, engrenagens com proteção integrada e altíssimo rendimento para fundações pesadas e sapatas complexas.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-dashed border-[var(--brand-ink)]/20 text-xs space-y-1 text-[var(--brand-ink)]">
                  <div><strong>Capacidade de Mistura:</strong> 280 Litros</div>
                  <div><strong>Motorização:</strong> Trifásica ou Monofásica (2.0 CV)</div>
                  <div><strong>Rendimento Médio:</strong> Até 3.0 m³/h</div>
                </div>
              </div>

              <div className="border border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base uppercase text-[var(--brand-navy)]">Betoneira 400L a Gasolina</h3>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mt-0.5">Autonomia Sem Rede Elétrica</span>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    Desenvolvida estrategicamente para canteiros de obras iniciais, terraplenagem ou locais remotos onde ainda não há fornecimento elétrico estável ou provisório. Garante operação contínua e força máxima de torque.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-dashed border-[var(--brand-ink)]/20 text-xs space-y-1 text-[var(--brand-ink)]">
                  <div><strong>Capacidade de Mistura:</strong> 280 Litros</div>
                  <div><strong>Motorização:</strong> Combustão 4 Tempos (5.5 ou 6.0 HP)</div>
                  <div><strong>Rendimento Médio:</strong> Até 3.0 m³/h</div>
                </div>
              </div>

              <div className="border border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base uppercase text-[var(--brand-navy)]">Caminhão Betoneira</h3>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mt-0.5">Demanda Industrial Pesada</span>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    Ideal para concretagem estrutural massiva (lajes de grande extensão, blocos de fundação residencial/comercial, radier). Concreto dosado em central fornecido de forma contínua com bombeamento sob medida.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-dashed border-[var(--brand-ink)]/20 text-xs space-y-1 text-[var(--brand-ink)]">
                  <div><strong>Capacidade de Mistura:</strong> 8.000 a 10.000 Litros</div>
                  <div><strong>Motorização:</strong> Diesel (Potência Dedicada)</div>
                  <div><strong>Rendimento Médio:</strong> De acordo com programação industrial</div>
                </div>
              </div>
            </div>
          </section>

          {/* O Traço Perfeito de Concreto - Educativo E-E-A-T */}
          <section className="reveal mt-20 border-2 border-[var(--brand-ink)] bg-white p-8 hard-shadow rounded-lg">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Dosagem Correta (Traço)</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl uppercase text-[var(--brand-ink)] mt-2">Guia Prático: Como Rodar o Concreto Perfeito</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-3xl leading-relaxed">
              A qualidade estrutural de sua obra em Osasco depende diretamente da dosagem exata de cimento, areia, brita e água. O excesso de água reduz a resistência mecânica final em até 50%. Siga nossa tabela referencial para obter misturas coesas e seguras.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border-collapse border border-[var(--brand-ink)] text-xs">
                <thead>
                  <tr className="bg-[var(--brand-navy)] text-white font-display uppercase tracking-wider">
                    <th className="p-3 border border-[var(--brand-ink)]">Aplicação Estrutural</th>
                    <th className="p-3 border border-[var(--brand-ink)]">Cimento (Saco)</th>
                    <th className="p-3 border border-[var(--brand-ink)]">Areia Média (Latas 18L)</th>
                    <th className="p-3 border border-[var(--brand-ink)]">Brita 1 (Latas 18L)</th>
                    <th className="p-3 border border-[var(--brand-ink)]">Água (Latas 18L)</th>
                    <th className="p-3 border border-[var(--brand-ink)]">Resistência Típica (FCK)</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--brand-ink)]">
                  <tr className="bg-[var(--brand-concrete)]">
                    <td className="p-3 border border-[var(--brand-ink)] font-bold">Lajes e Vigas de Sustentação</td>
                    <td className="p-3 border border-[var(--brand-ink)]">1 Saco (50kg)</td>
                    <td className="p-3 border border-[var(--brand-ink)]">4 Latas</td>
                    <td className="p-3 border border-[var(--brand-ink)]">5.5 Latas</td>
                    <td className="p-3 border border-[var(--brand-ink)]">1.25 Latas</td>
                    <td className="p-3 border border-[var(--brand-ink)] font-semibold">25 a 30 MPa</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[var(--brand-ink)] font-bold">Pilares, Colunas e Sapata</td>
                    <td className="p-3 border border-[var(--brand-ink)]">1 Saco (50kg)</td>
                    <td className="p-3 border border-[var(--brand-ink)]">3 Latas</td>
                    <td className="p-3 border border-[var(--brand-ink)]">4.5 Latas</td>
                    <td className="p-3 border border-[var(--brand-ink)]">1.1 Latas</td>
                    <td className="p-3 border border-[var(--brand-ink)] font-semibold">20 a 25 MPa</td>
                  </tr>
                  <tr className="bg-[var(--brand-concrete)]">
                    <td className="p-3 border border-[var(--brand-ink)] font-bold">Contra-pisos e Calçamentos</td>
                    <td className="p-3 border border-[var(--brand-ink)]">1 Saco (50kg)</td>
                    <td className="p-3 border border(--brand-ink)">5 Latas</td>
                    <td className="p-3 border border-[var(--brand-ink)]">6.5 Latas</td>
                    <td className="p-3 border border-[var(--brand-ink)]">1.5 Latas</td>
                    <td className="p-3 border border-[var(--brand-ink)] font-semibold">15 MPa</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[var(--brand-ink)] font-bold">Argamassa para Assentamento</td>
                    <td className="p-3 border border-[var(--brand-ink)]">1 Saco (50kg)</td>
                    <td className="p-3 border border-[var(--brand-ink)]">6 Latas</td>
                    <td className="p-3 border border-[var(--brand-ink)]">Sem Brita</td>
                    <td className="p-3 border border-[var(--brand-ink)]">1.75 Latas (Aprox.)</td>
                    <td className="p-3 border border-[var(--brand-ink)] font-semibold">N/A (Traço Cal)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 border-l-4 border-[var(--brand-yellow)] bg-[var(--brand-concrete)] text-xs text-muted-foreground leading-relaxed">
              <strong>💡 Dica do Técnico:</strong> Adicione sempre cerca de 75% da água planejada no tambor juntamente com a brita antes de jogar o cimento e a areia. Isso impede que o pó do cimento empelote e crie torrões nas palhetas internas, garantindo uma homogeneidade muito maior na mistura final e conservando o motor da sua betoneira contra travamentos.
            </div>
          </section>

          {/* Checklist de Operação Segura (E-E-A-T) */}
          <section className="reveal mt-20 border-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-8 hard-shadow rounded-lg">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-navy)]" />
              <span className="spec-label !text-[var(--brand-navy)] font-bold">Segurança no Trabalho (NR-18)</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl uppercase text-[var(--brand-ink)] mt-2">Checklist de Operação Segura para Misturadores</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-3xl leading-relaxed">
              Trabalhar com equipamentos de mistura exige atenção e rigor técnico para prevenir acidentes. Nossa equipe apoia a conformidade com as normas regulamentadoras brasileiras (NR-18 e NR-12). Siga sempre estas cinco regras vitais antes de ligar a betoneira no canteiro.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border border-[var(--brand-ink)]/20 p-4 bg-white rounded flex gap-3">
                <span className="text-xl font-display text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] font-bold">1</span>
                <div>
                  <h3 className="font-semibold text-xs text-[var(--brand-navy)] uppercase">Posicionamento Nivelado</h3>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Certifique-se de instalar o maquinário sobre piso plano, firme e perfeitamente nivelado. Utilize calços mecânicos nas rodas para travar o chassi e mitigar vibrações excessivas que possam tombar a betoneira durante rotações cheias.
                  </p>
                </div>
              </div>

              <div className="border border-[var(--brand-ink)]/20 p-4 bg-white rounded flex gap-3">
                <span className="text-xl font-display text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] font-bold">2</span>
                <div>
                  <h3 className="font-semibold text-xs text-[var(--brand-navy)] uppercase">Instalações Elétricas Aterradas</h3>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Nunca utilize extensões desencapadas ou adaptadores improvisados (gambiarras). Garanta a conexão de aterramento elétrico contra fugas de corrente e ligue o plugue industrial blindado diretamente a um disjuntor de segurança do canteiro.
                  </p>
                </div>
              </div>

              <div className="border border-[var(--brand-ink)]/20 p-4 bg-white rounded flex gap-3">
                <span className="text-xl font-display text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] font-bold">3</span>
                <div>
                  <h3 className="font-semibold text-xs text-[var(--brand-navy)] uppercase">Uso de EPI Obrigatório</h3>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    A calda do concreto fresco é altamente alcalina e provoca queimaduras químicas. O operador deve vestir botas de PVC impermeáveis, óculos com vedação contra respingos de pedra, luvas nitrílicas robustas e máscara contra a inalação do pó de cimento.
                  </p>
                </div>
              </div>

              <div className="border border-[var(--brand-ink)]/20 p-4 bg-white rounded flex gap-3">
                <span className="text-xl font-display text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] font-bold">4</span>
                <div>
                  <h3 className="font-semibold text-xs text-[var(--brand-navy)] uppercase">Proibição de Contato Físico Interno</h3>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Jamais tente puxar amostras de argamassa, limpar crostas ou introduzir ferramentas metálicas (pás, enxadas, colheres de pedreiro) dentro da boca do tambor com a betoneira em rotação ativa. Isso anula riscos de fraturas graves.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 border border-[var(--brand-ink)]/20 p-4 bg-white rounded flex gap-3">
              <span className="text-xl font-display text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] font-bold">5</span>
              <div>
                <h3 className="font-semibold text-xs text-[var(--brand-navy)] uppercase">Bloqueio Energético para Limpeza</h3>
                <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                  Para efetuar a limpeza interna mecânica das crostas secas ao término do expediente, retire obrigatoriamente o cabo de alimentação da tomada elétrica (bloqueio físico). Caso o equipamento seja a gasolina, feche a torneira de combustível e solte o cabo da vela.
                </p>
              </div>
            </div>
          </section>

          {/* Inspeção Preventiva de 12 Pontos (E-E-A-T Completo) */}
          <section className="reveal mt-20 border-2 border-[var(--brand-ink)] bg-white p-8 hard-shadow rounded-lg">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Qualidade Garantida e Sem Paradas</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl uppercase text-[var(--brand-ink)] mt-2">Inspeção Técnica de 12 Pontos Antes de Cada Envio</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-3xl leading-relaxed">
              O atraso de uma concretagem devido à quebra de maquinário compromete a resistência final do concreto e gera prejuízos trabalhistas na obra. Para mitigar riscos e assegurar 100% de atividade (Uptime), nossa equipe mecânica executa uma inspeção de 12 pontos antes do despacho de qualquer equipamento em Osasco:
            </p>
            
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-[11px] leading-relaxed">
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)] rounded">
                <strong className="block text-[var(--brand-navy)] uppercase">1. Pinhão e Cremalheira</strong>
                <span className="text-muted-foreground mt-1 block">Ajuste microscópico de dentes e aplicação de graxa protetora contra desgaste prematuro.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)] rounded">
                <strong className="block text-[var(--brand-navy)] uppercase">2. Isolamento de Chassi</strong>
                <span className="text-muted-foreground mt-1 block">Varredura com megômetro para certificar isolamento total contra fuga elétrica para o volante de manobra.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)] rounded">
                <strong className="block text-[var(--brand-navy)] uppercase">3. Cabo ABNT Blindado</strong>
                <span className="text-muted-foreground mt-1 block">Inspeção do revestimento de borracha flexível, sem remendos expostos, e substituição preventiva de plugues.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)] rounded">
                <strong className="block text-[var(--brand-navy)] uppercase">4. Tambor e Palhetas</strong>
                <span className="text-muted-foreground mt-1 block">Higienização e remoção de qualquer crosta de cimento antiga. Avaliação de trincas nas soldas internas.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)] rounded">
                <strong className="block text-[var(--brand-navy)] uppercase">5. Botão de Emergência</strong>
                <span className="text-muted-foreground mt-1 block">Teste exaustivo da chave de segurança estanque, certificando o desarme imediato sob carga de acionamento.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)] rounded">
                <strong className="block text-[var(--brand-navy)] uppercase">6. Pneus e Rolamento de Eixo</strong>
                <span className="text-muted-foreground mt-1 block">Lubrificação geral dos cubos de rodas para assegurar mobilidade e verificação da estrutura da roda pneumática.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)] rounded">
                <strong className="block text-[var(--brand-navy)] uppercase">7. Tensão da Correia</strong>
                <span className="text-muted-foreground mt-1 block">Verificação do alinhamento da polia do motor e ajuste da tensão para evitar perdas de torque durante a carga máxima.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)] rounded">
                <strong className="block text-[var(--brand-navy)] uppercase">8. Rolamento Traseiro de Cuba</strong>
                <span className="text-muted-foreground mt-1 block">Manutenção mecânica das graxeiras traseiras e selagem contra a entrada de poeiras abrasivas ou argamassa fresca.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)] rounded">
                <strong className="block text-[var(--brand-navy)] uppercase">9. Soldas de Chassi e Estrutura</strong>
                <span className="text-muted-foreground mt-1 block">Varredura visual na estrutura metálica do cavalete contra fadiga estrutural, prevenindo colapsos de coluna.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)] rounded">
                <strong className="block text-[var(--brand-navy)] uppercase">10. Medição de Corrente Nominal</strong>
                <span className="text-muted-foreground mt-1 block">Uso de alicate amperímetro para certificar que o motor elétrico está trabalhando na faixa de corrente indicada.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)] rounded">
                <strong className="block text-[var(--brand-navy)] uppercase">11. Pintura Epóxi Anticorrosiva</strong>
                <span className="text-muted-foreground mt-1 block">Tratamento de pontos expostos de aço com tinta epóxi de alta espessura para evitar que o pH alcalino do cimento corroa.</span>
              </div>
              <div className="border border-dashed border-[var(--brand-ink)]/30 p-4 bg-[var(--brand-concrete)] rounded">
                <strong className="block text-[var(--brand-navy)] uppercase">12. Teste Operacional Sob Carga</strong>
                <span className="text-muted-foreground mt-1 block">Funcionamento de 15 minutos em regime contínuo, testando inclinação e estabilidade antes do embarque logístico.</span>
              </div>
            </div>
          </section>

          {/* Formatos Flexíveis de Parceria */}
          <section className="reveal mt-16">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Planos Personalizados</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl uppercase text-[var(--brand-ink)] mt-2">Formatos Flexíveis de Locação de Betoneiras</h2>
            
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="border-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-6 hard-shadow rounded-lg">
                <span className="numeric text-2xl text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] block">DIÁRIO</span>
                <h3 className="font-display text-lg text-[var(--brand-ink)] mt-2">Obras de Curto Prazo</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Ideal para pequenas reformas residenciais, reparos em calçadas ou fundações rápidas que necessitam do equipamento por poucos dias.</p>
              </div>
              <div className="border-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-6 hard-shadow rounded-lg">
                <span className="numeric text-2xl text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] block">SEMANAL</span>
                <h3 className="font-display text-lg text-[var(--brand-ink)] mt-2">Construções Médias</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Perfeito para etapas de alvenaria e pilares que duram cerca de uma a duas semanas, aliando excelente custo-benefício à flexibilidade.</p>
              </div>
              <div className="border-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-6 hard-shadow rounded-lg">
                <span className="numeric text-2xl text-[var(--brand-yellow)] [text-shadow:_1px_1px_0_var(--brand-ink)] block">MENSAL</span>
                <h3 className="font-display text-lg text-[var(--brand-ink)] mt-2">Grandes Cronogramas</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Recomendado para construtoras e incorporadoras que demandam o misturador durante toda a execução da fundação e estrutura.</p>
              </div>
            </div>
          </section>

          <div className="reveal mt-16 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] p-8 text-center hard-shadow rounded-lg">
            <div className="spec-label !text-[var(--brand-ink)]/70">Atendimento rápido</div>
            <h2 className="mt-1 font-display text-3xl text-[var(--brand-ink)] md:text-4xl">Solicite um orçamento agora</h2>
            <p className="mt-2 text-sm text-[var(--brand-ink)]/80">Resposta em minutos pelo WhatsApp.</p>
            <a href="https://wa.me/5511975465766" target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-ink)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-yellow)]">
              Falar no WhatsApp <ArrowIcon size={16} />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
