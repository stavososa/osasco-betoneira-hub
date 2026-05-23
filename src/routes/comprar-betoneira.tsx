import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HazardStripe } from "@/components/HazardStripe";
import { ModelCard } from "@/components/ModelCard";
import { MODELOS } from "@/lib/modelos";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon, PhoneIcon, CheckIcon, TruckIcon, HelmetIcon, ClockIcon } from "@/components/icons/Icons";

const BENEFICIOS = [
  {
    Icon: CheckIcon,
    t: "Nova com garantia",
    d: "Betoneira nova com garantia de fábrica, nota fiscal e assistência técnica em Osasco.",
  },
  {
    Icon: HelmetIcon,
    t: "Seminova revisada",
    d: "Equipamento usado, revisado e testado, com preço acessível para começar a trabalhar agora.",
  },
  {
    Icon: ClockIcon,
    t: "Pagamento facilitado",
    d: "PIX, dinheiro, cartão de débito e crédito. Parcelamento combinado direto com a gente.",
  },
];

const PUBLICO = [
  "Pedreiro autônomo",
  "Empreiteiro",
  "Construtora",
  "Reformista",
  "Investidor de obra",
];

const FAQ_VENDA = [
  {
    q: "Quanto custa uma betoneira nova em Osasco?",
    a: "O preço de uma betoneira nova em Osasco varia conforme o tamanho (150L, 250L ou 400L), o tipo de motor (elétrico monofásico 110V/220V ou a gasolina) e o fabricante. A 250 litros elétrica é a mais procurada para pedreiro autônomo. Manda o modelo desejado pelo WhatsApp que a gente passa a cotação atualizada.",
  },
  {
    q: "Vocês vendem betoneira seminova com garantia?",
    a: "Sim. Trabalhamos com betoneiras seminovas revisadas, com garantia da locadora e teste de funcionamento antes da entrega. É a opção mais barata para quem quer ter o próprio equipamento sem pagar o preço de uma nova.",
  },
  {
    q: "Qual betoneira comprar para começar a trabalhar como pedreiro?",
    a: "Para começar, a betoneira de 250 litros elétrica monofásica costuma ser a melhor escolha: atende reforma, laje residencial e contrapiso, usa tomada comum 220V e tem boa revenda. Se a sua rotina inclui obra sem energia disponível, vale considerar a 400L a gasolina.",
  },
  {
    q: "A venda inclui nota fiscal e assistência técnica?",
    a: "Sim. Toda venda sai com nota fiscal e instrução de uso. Para modelos novos, vale a garantia de fábrica; para seminovas, oferecemos garantia da nossa loja. Manutenção e peças de reposição também são feitas aqui em Osasco.",
  },
];

const PRECOS_VENDA = [
  {
    nome: "Betoneira 120L elétrica compacta",
    preco: "R$ 1.000 a R$ 2.100",
    categoria: "Entrada · Reparos e acabamentos",
  },
  {
    nome: "Betoneira 120L elétrica profissional",
    preco: "R$ 1.500 a R$ 2.600",
    categoria: "Profissional leve · Pedreiro autônomo",
  },
  {
    nome: "Betoneira 150L elétrica compacta",
    preco: "R$ 1.200 a R$ 2.300",
    categoria: "Compacta · Uso hobby/pequeno",
  },
  {
    nome: "Betoneira 150L elétrica profissional",
    preco: "R$ 1.700 a R$ 2.800",
    categoria: "Profissional · Reformas",
  },
  {
    nome: "Betoneira 250L elétrica monofásica",
    preco: "R$ 2.500 a R$ 4.800",
    categoria: "Residencial · Mais procurada",
  },
  {
    nome: "Betoneira 400L elétrica monofásica",
    preco: "R$ 3.500 a R$ 6.000",
    categoria: "Rental padrão · Obras de médio porte",
  },
  {
    nome: "Betoneira 400L elétrica trifásica",
    preco: "R$ 4.500 a R$ 7.000",
    categoria: "Industrial · Alta capacidade",
  },
  {
    nome: "Betoneira 400L tipo rental (reforçada)",
    preco: "R$ 4.750 a R$ 8.000",
    categoria: "Rental reforçada · Longa durabilidade",
  },
  {
    nome: "Betoneira 400L a gasolina 5,5 cv",
    preco: "R$ 5.500 a R$ 8.500",
    categoria: "Sem energia · Motor estacionário",
  },
  {
    nome: "Betoneira 400L a gasolina 7–12 cv",
    preco: "R$ 8.000 a R$ 14.000",
    categoria: "Heavy Duty · Alta potência",
  },
  {
    nome: "Betoneira 400L sem motor (tambor)",
    preco: "R$ 1.800 a R$ 3.200",
    categoria: "Apenas estrutura / tambor completo",
  },
  {
    nome: "Betoneira seminova / usada",
    preco: "R$ 600 a R$ 5.000",
    categoria: "Custo-benefício (depende do modelo)",
  },
  {
    nome: "Caminhão Betoneira (mixer truck)",
    preco: "R$ 300.000 a R$ 1.800.000",
    categoria: "Frota pesada · Concretagem em grande volume",
  },
];

export const Route = createFileRoute("/comprar-betoneira")({
  head: () => ({
    meta: [
      { title: "Comprar Betoneira em Osasco | Venda de Betoneira Nova e Seminova" },
      {
        name: "description",
        content:
          "Venda de betoneira em Osasco SP: novas e seminovas de 120, 120, 120, 150, 250 e 400 litros, elétricas 110V/220V e a gasolina, com garantia, nota fiscal e parcelamento. WhatsApp (11) 97546-5766.",
      },
      { property: "og:title", content: "Comprar Betoneira em Osasco SP | Nova e Seminova" },
      {
        property: "og:description",
        content:
          "Compre betoneira em Osasco: 120L, 150L, 250L e 400L, elétrica ou a gasolina, com garantia e nota fiscal.",
      },
      { property: "og:url", content: "https://betoneiraosasco.com.br/comprar-betoneira" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/comprar-betoneira" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://betoneiraosasco.com.br/comprar-betoneira#webpage",
          "url": "https://betoneiraosasco.com.br/comprar-betoneira",
          "name": "Comprar Betoneira em Osasco | Venda com Garantia",
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
              { "@type": "ListItem", position: 2, name: "Comprar Betoneira", item: "https://betoneiraosasco.com.br/comprar-betoneira" },
            ],
          },
          "mainEntity": {
            "@type": "Service",
            "@id": "https://betoneiraosasco.com.br/comprar-betoneira#service",
            "name": "Venda de Betoneira em Osasco",
            "serviceType": "Construction equipment sales",
            "provider": {
              "@id": "https://betoneiraosasco.com.br/#business"
            },
            "areaServed": [
              { "@type": "City", name: "Osasco" },
            ],
            "description": "Venda de betoneiras novas e seminovas em Osasco: 120, 150, 250 e 400 litros, elétricas 110V/220V e a gasolina, com garantia, nota fiscal e parcelamento.",
            "potentialAction": {
              "@type": "BuyAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://wa.me/5511975465766?text=Quero%20comprar%20betoneira",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              }
            }
          },
          "subjectOf": {
            "@type": "FAQPage",
            "mainEntity": FAQ_VENDA.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          }
        }),
      },
    ],
  }),
  component: ComprarPage,
});

function ComprarPage() {
  useReveal();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative noise-overlay overflow-hidden bg-[var(--brand-navy)] text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
            <nav aria-label="Breadcrumb" className="reveal mb-6 text-xs uppercase tracking-wider text-white/60">
              <Link to="/" className="hover:text-[var(--brand-yellow)]">Início</Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">Comprar Betoneira</span>
            </nav>

            <div className="reveal flex items-center gap-3" style={{ ["--i" as never]: 0 }}>
              <span className="h-px w-10 bg-[var(--brand-yellow)]" />
              <span className="spec-label !text-white/70">Venda · Osasco, SP</span>
            </div>

            <h1 className="reveal mt-4 max-w-3xl font-display text-[2.75rem] leading-[0.95] tracking-tight md:text-[4.5rem]" style={{ ["--i" as never]: 1 }}>
              Comprar Betoneira em Osasco
            </h1>

            <p className="reveal mt-6 max-w-2xl text-white/80 leading-relaxed" style={{ ["--i" as never]: 2 }}>
              Venda de betoneira nova e seminova em Osasco SP, com modelos de 120, 120, 120, 150, 250 e 400 litros, elétricas 110V/220V e a gasolina, além de garantia, nota fiscal e parcelamento. Atendemos pedreiro, empreiteiro e construtora.
            </p>

            <div className="reveal mt-8 flex flex-wrap gap-4" style={{ ["--i" as never]: 3 }}>
              <a
                href="https://wa.me/5511975465766?text=Ol%C3%A1%2C%20quero%20uma%20cota%C3%A7%C3%A3o%20de%20venda%20de%20betoneira"
                target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow"
              >
                Pedir cotação de venda <ArrowIcon size={16} />
              </a>
              <a
                href="tel:+5511975465766"
                className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon size={16} /> (11) 97546-5766
              </a>
            </div>

            <p className="reveal mt-4 text-xs text-white/60" style={{ ["--i" as never]: 3 }}>
              Prefere alugar?{" "}
              <Link to="/locacao-de-betoneiras" className="font-bold text-[var(--brand-yellow)] underline-offset-4 hover:underline">
                Ver locação de betoneira →
              </Link>
            </p>
          </div>
          <HazardStripe />
        </section>

        {/* BENEFÍCIOS */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Por que comprar com a gente</span>
          </div>
          <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Loja local de <span className="font-editorial text-[var(--brand-navy)]">betoneira em Osasco</span>
          </h2>
          <p className="reveal mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Trabalhamos com venda direta de betoneiras novas e seminovas para pedreiro, empreiteiro e construtora. Garantia, nota fiscal e suporte técnico, sem intermediários ou call center, com nossa própria logística ágil de <Link to="/entrega-e-retirada-de-betoneira" className="font-bold text-[var(--brand-navy)] hover:underline">entrega e retirada</Link>.
          </p>

          <div className="reveal mt-10 grid gap-6 md:grid-cols-3">
            {BENEFICIOS.map((b) => (
              <article
                key={b.t}
                className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1"
              >
                <b.Icon size={40} className="text-[var(--brand-navy)]" />
                <h3 className="mt-4 font-display text-xl text-[var(--brand-ink)]">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* MODELOS À VENDA */}
        <section className="border-y-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Modelos à venda</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Betoneiras <span className="font-editorial text-[var(--brand-navy)]">à venda</span> em Osasco
            </h2>
            <p className="reveal mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Preço de betoneira 120, 120, 120, 150, 250 e 400 litros, nas versões elétrica monofásica (110V/220V) ou a gasolina. Confira abaixo as faixas de preço de equipamentos novos e seminovos com garantia.
            </p>

            <div className="reveal mt-10 grid gap-6 md:grid-cols-3">
              {MODELOS.map((m) => (
                <ModelCard key={m.volume} m={{ ...m, destaque: false }} />
              ))}
            </div>

            {/* TABELA DE PREÇOS DE VENDA */}
            <div className="reveal mt-16 rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)]">
              <h3 className="font-display text-2xl text-[var(--brand-ink)] mb-6 text-center md:text-left">
                Tabela Completa de Preços de <span className="font-editorial text-[var(--brand-navy)]">Venda (Novas e Seminovas)</span>
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[var(--brand-ink)] pb-4 text-xs font-bold uppercase tracking-wider text-[var(--brand-navy)]">
                      <th className="py-3 px-4">Modelo / Especificação</th>
                      <th className="py-3 px-4">Categoria / Indicação</th>
                      <th className="py-3 px-4 text-right">Faixa de Preço (Venda)</th>
                      <th className="py-3 px-4 text-right">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--brand-ink)]/10 text-sm">
                    {PRECOS_VENDA.map((item) => (
                      <tr key={item.nome} className="hover:bg-[var(--brand-concrete)]/50 transition-colors">
                        <td className="py-4 px-4 font-bold text-[var(--brand-ink)]">{item.nome}</td>
                        <td className="py-4 px-4 text-muted-foreground">{item.categoria}</td>
                        <td className="py-4 px-4 text-right font-mono font-bold text-[var(--brand-navy)]">{item.preco}</td>
                        <td className="py-4 px-4 text-right">
                          <a
                            href={`https://wa.me/5511975465766?text=${encodeURIComponent(`Olá! Quero solicitar orçamento para compra de: ${item.nome}`)}`}
                            target="_blank" rel="noopener"
                            className="inline-flex border border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)] transition-colors hover:bg-[var(--brand-ink)] hover:text-white"
                          >
                            Orçamento
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Para quem é</span>
          </div>
          <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Quem compra <span className="font-editorial text-[var(--brand-navy)]">com a gente</span>
          </h2>
          <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {PUBLICO.map((p) => (
              <li
                key={p}
                className="rounded-2xl bg-white p-4 text-center text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1"
              >
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* ALUGUEL X COMPRA */}
        <section className="bg-[var(--brand-concrete)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Decisão</span>
            </div>
            <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Vale a pena <span className="font-editorial text-[var(--brand-navy)]">alugar ou comprar?</span>
            </h2>

            <div className="reveal mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl bg-white p-7 ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)]">
                <div className="spec-label text-[var(--brand-navy)]">Alugar</div>
                <h3 className="mt-2 font-display text-2xl text-[var(--brand-ink)]">Obra pontual ou reforma rápida</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                  <li>• Reformas, lajes residenciais e contrapisos pontuais.</li>
                  <li>• Pago só pelos dias de uso.</li>
                  <li>• Entrega e retirada no mesmo dia em Osasco.</li>
                  <li>• Sem se preocupar com manutenção e guarda.</li>
                </ul>
                <Link
                  to="/"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--brand-navy)] hover:underline"
                >
                  Ver aluguel de betoneira <ArrowIcon size={14} />
                </Link>
              </article>

              <article className="rounded-2xl bg-white p-7 ring-2 ring-[var(--brand-yellow)] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
                <div className="spec-label text-[var(--brand-navy)]">Comprar</div>
                <h3 className="mt-2 font-display text-2xl text-[var(--brand-ink)]">Obras seguidas ou trabalho diário</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                  <li>• Construtora, empreiteiro e pedreiro com obras seguidas.</li>
                  <li>• Investimento que paga em poucos meses de uso.</li>
                  <li>• Garantia, nota fiscal e assistência técnica em Osasco.</li>
                  <li>• Liberdade para mudar de obra sem depender de aluguel.</li>
                </ul>
                <a
                  href="https://wa.me/5511975465766?text=Ol%C3%A1%2C%20quero%20comprar%20uma%20betoneira"
                  target="_blank" rel="noopener"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hover:underline"
                >
                  Pedir cotação <ArrowIcon size={14} />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ VENDA */}
        <section className="mx-auto max-w-4xl px-4 py-20">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Dúvidas sobre a venda</span>
          </div>
          <h2 className="reveal mt-2 font-display text-3xl tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Perguntas <span className="font-editorial text-[var(--brand-navy)]">de quem compra</span>
          </h2>
          <div className="reveal mt-10 divide-y-2 divide-[var(--brand-ink)] border-y-2 border-[var(--brand-ink)]">
            {FAQ_VENDA.map((f) => (
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
              <div className="spec-label !text-[var(--brand-ink)]/70">Pronto para comprar?</div>
              <h2 className="mt-1 font-display text-3xl leading-[0.95] tracking-tight text-[var(--brand-ink)] md:text-5xl">
                Peça uma cotação de<br />
                <span className="font-editorial">venda em Osasco.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5511975465766?text=Ol%C3%A1%2C%20quero%20comprar%20uma%20betoneira"
                target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow"
              >
                <TruckIcon size={16} /> WhatsApp <ArrowIcon size={16} />
              </a>
              <a
                href="tel:+5511975465766"
                className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-ink)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-yellow)] hard-shadow"
              >
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
