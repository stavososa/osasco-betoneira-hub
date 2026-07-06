import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HazardStripe } from "@/components/HazardStripe";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon, PhoneIcon, CheckIcon, ClockIcon } from "@/components/icons/Icons";
import { useState, useEffect } from "react";
import betoVieiraImg from "@/assets/beto-vieira.webp";
import melhoresMarcasImg from "@/assets/quais-as-melhores-marcas-de-betoneiras.webp";
import { POSTS } from "./blog.index";

// Lista de posts válidos para evitar carregamento incorreto de lixo
const VALID_SLUGS = POSTS.filter((p) => p.active).map((p) => p.slug);

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    if (!VALID_SLUGS.includes(params.slug)) {
      throw notFound();
    }
    return { slug: params.slug };
  },
  head: ({ params }) => {
    if (params.slug === "melhores-marcas-de-betoneira") {
      const title = "Quais as melhores marcas de betoneiras?";
      const desc = "Descubra quais são as melhores marcas de betoneira do mercado brasileiro em 2026. Compare Menegotti, CSM, Maqtron e Possamai. Saiba qual escolher!";
      const url = `https://betoneiraosasco.com.br/blog/${params.slug}/`;
      const image = "https://betoneiraosasco.com.br/assets/quais-as-melhores-marcas-de-betoneiras.webp";
      const publishDate = "2026-05-19T08:00:00Z";
      const updateDate = "2026-05-19T08:00:00Z";

      return {
        meta: [
          { title },
          { name: "description", content: desc },
          { property: "og:title", content: title },
          { property: "og:description", content: desc },
          { property: "og:url", content: url },
          { property: "og:image", content: image },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "author", content: "Beto Vieira" },
        ],
        links: [{ rel: "canonical", href: url }],
        scripts: [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `${url}#webpage`,
              "url": url,
              "name": title,
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
                  { "@type": "ListItem", position: 2, name: "Blog", item: "https://betoneiraosasco.com.br/blog/" },
                  { "@type": "ListItem", position: 3, name: "Melhores Marcas de Betoneira", item: url },
                ],
              },
              "mainEntity": {
                "@type": "BlogPosting",
                "@id": `${url}#post`,
                "headline": "Quais as Melhores Marcas de Betoneira? Guia Completo 2026",
                "description": desc,
                "image": [image],
                "datePublished": publishDate,
                "dateModified": updateDate,
                "author": {
                  "@type": "Person",
                  "name": "Beto Vieira",
                  "jobTitle": "Especialista em Equipamentos de Obra e Concretagem",
                  "image": "https://betoneiraosasco.com.br/assets/beto-vieira.webp",
                  "url": "https://betoneiraosasco.com.br/blog/melhores-marcas-de-betoneira/#autor"
                },
                "publisher": {
                  "@id": "https://betoneiraosasco.com.br/#business",
                },
              }
            }),
          },
        ],
      };
    }

    // Fallback para outros posts vindo em breve
    return {
      meta: [
        { title: "Post do Blog | Betoneira Osasco" },
        { name: "description", content: "Conteúdo exclusivo sobre venda e aluguel de betoneiras em Osasco." },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  useReveal();
  const { slug } = Route.useLoaderData();
  const [activeSection, setActiveSection] = useState("");

  // Monitorar seções para destacar o índice (TOC)
  useEffect(() => {
    if (slug !== "melhores-marcas-de-betoneira") return;
    const sections = ["introducao", "o-que-considerar", "marcas-destaque", "comparativo-rapido", "domestico-vs-profissional", "faq", "conclusao"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  if (slug !== "melhores-marcas-de-betoneira") {
    // Tela Premium para posts em breve
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 bg-[var(--brand-concrete)] py-24 text-center">
          <section className="mx-auto max-w-xl px-4">
            <div className="reveal cut-corner border-2 border-[var(--brand-ink)] bg-white p-8 hard-shadow">
              <span className="spec-label text-[var(--brand-navy)]">Conteúdo Premium</span>
              <h1 className="mt-4 font-display text-3xl text-[var(--brand-ink)] uppercase">
                Artigo Em Desenvolvimento
              </h1>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Nossa equipe de especialistas de obra está produzindo um guia aprofundado, técnico e repleto de dicas práticas sobre este assunto.
              </p>
              <div className="my-8 border-t-2 border-dashed border-[var(--brand-ink)]/10" />
              <p className="font-display text-base text-[var(--brand-ink)] uppercase font-bold">
                Precisa de ajuda agora com betoneiras?
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Fale diretamente com nossa central logística em Osasco e tire suas dúvidas técnicas em 2 minutos.
              </p>
              <a
                href={`https://wa.me/5511975465766?text=${encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre aluguel de betoneiras em Osasco.")}`}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex w-full justify-center items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow"
              >
                Falar com Especialista <ArrowIcon size={16} />
              </a>
              <Link to="/blog" className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground hover:underline">
                ← Voltar ao Blog
              </Link>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-[var(--brand-concrete)]">
        {/* HERO SECTION DO ARTIGO */}
        <header className="relative noise-overlay overflow-hidden text-white bg-[var(--brand-navy)] py-10 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            <nav aria-label="breadcrumb" className="reveal flex items-center gap-2 spec-label !text-white/70">
              <Link to="/" className="hover:text-[var(--brand-yellow)]">Início</Link>
              <span className="text-[var(--brand-yellow)]">/</span>
              <Link to="/blog" className="hover:text-[var(--brand-yellow)]">Blog</Link>
              <span className="text-[var(--brand-yellow)]">/ Melhores Marcas</span>
            </nav>

            <h1 className="reveal mt-4 font-display text-[2.5rem] leading-[1.0] tracking-tight md:text-[4rem] text-white">
              Quais as <span className="text-[var(--brand-yellow)] font-editorial">Melhores Marcas</span> de Betoneira?<br className="hidden md:inline" /> Guia Completo 2026
            </h1>

            <div className="reveal mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-white/80">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-yellow)]" />
                <span>Por: Beto Vieira</span>
              </div>
              <span>•</span>
              <time dateTime="2026-05-19">Publicado em: 19 de Maio de 2026</time>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ClockIcon size={12} /> Leitura: 8 min
              </span>
            </div>
          </div>
          <HazardStripe />
        </header>

        {/* CONTAINER DO CONTEÚDO PRINCIPAL (LAYOUT PREMIUM COM SIDEBAR) */}
        <section className="mx-auto max-w-6xl px-4 py-8 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            
            {/* CORPO DO ARTIGO */}
            <article className="reveal flex flex-col min-w-0 border-2 border-[var(--brand-ink)] bg-white p-4 sm:p-6 md:p-10 hard-shadow-yellow rounded-lg" id="introducao">
              
              {/* Imagem Âncora (Featured Image - Proporção Natural) */}
              <div className="relative -mx-4 -mt-4 sm:-mx-6 sm:-mt-6 md:-mx-10 md:-mt-10 mb-8 overflow-hidden rounded-t-lg border-b-2 border-[var(--brand-ink)]">
                <img
                  src={melhoresMarcasImg}
                  alt="Quais as melhores marcas de betoneiras?"
                  className="w-full h-auto block animate-reveal"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Box de Resumo E-E-A-T */}
              <div className="mb-8 border-l-4 border-[var(--brand-yellow)] bg-[var(--brand-concrete)] p-5 text-sm leading-relaxed text-muted-foreground">
                <span className="spec-label text-[var(--brand-ink)] font-bold">Resumo Prático do Especialista:</span>
                <p className="mt-2">
                  Escolher a betoneira certa economiza tempo e evita paralisações indesejadas no canteiro. Para uso intenso em canteiros residenciais e locação, <strong>Menegotti</strong> e <strong>CSM</strong> dominam o mercado com robustez superior e excelente pós-venda. Se você busca equilíbrio financeiro, a <strong>Maqtron</strong> e a <strong>Possamai</strong> são ideais. Para reparos ocasionais, modelos de marcas de entrada como <strong>Motomil</strong> atendem sem pesar no bolso.
                </p>
              </div>

              {/* Sumário Inline Retrátil para Mobile (Neo-Brutalism details accordion) */}
              <details className="faq-item group lg:hidden mb-8 border-2 border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-4 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <summary className="flex items-center justify-between gap-4 cursor-pointer font-display text-sm uppercase tracking-wider text-[var(--brand-ink)] font-bold select-none">
                  <span>Guia Rápido do Artigo</span>
                  <span className="chev font-mono text-xl text-[var(--brand-yellow)] bg-[var(--brand-ink)] px-2 rounded" aria-hidden="true">+</span>
                </summary>
                <nav className="mt-4 border-t border-[var(--brand-ink)]/10 pt-4">
                  <ul className="space-y-2.5 font-display text-xs uppercase tracking-wider text-[var(--brand-ink)]">
                    <li><a href="#introducao" className="block hover:text-[var(--brand-yellow)]">• Introdução</a></li>
                    <li><a href="#o-que-considerar" className="block hover:text-[var(--brand-yellow)]">• Critérios de Compra</a></li>
                    <li><a href="#marcas-destaque" className="block hover:text-[var(--brand-yellow)]">• Análise das 6 Marcas</a></li>
                    <li><a href="#comparativo-rapido" className="block hover:text-[var(--brand-yellow)]">• Tabela Comparativa</a></li>
                    <li><a href="#domestico-vs-profissional" className="block hover:text-[var(--brand-yellow)]">• Doméstico vs. Profissional</a></li>
                    <li><a href="#faq" className="block hover:text-[var(--brand-yellow)]">• FAQ Obra</a></li>
                    <li><a href="#conclusao" className="block hover:text-[var(--brand-yellow)]">• Conclusão e Contato</a></li>
                  </ul>
                </nav>
              </details>

              {/* INTRODUÇÃO */}
              <div className="prose max-w-none text-foreground/90 space-y-6 text-base leading-relaxed">
                <p>
                  Quem já ergueu uma laje, construiu um muro ou reformou um banheiro sabe o quanto carregar balde de concreto no braço é exaustivo e lento. A betoneira resolve esse problema de um jeito simples: mistura cimento, areia, brita e água de forma homogênea, em menos tempo e com resultado muito mais uniforme do que qualquer mistura manual.
                </p>
                <p>
                  O problema é que o mercado brasileiro oferece dezenas de modelos, de marcas variadas, com capacidades que vão de 120 litros até mais de 400 litros. Escolher errado pode significar equipamento subpotente para a demanda da obra, ou então gasto desnecessário com uma máquina superdimensionada.
                </p>
                <p>
                  Neste guia completo, você vai conhecer em detalhes as <strong>melhores marcas de betoneira disponíveis no Brasil em 2026</strong>, entender os diferenciais técnicos de cada fabricante e descobrir qual modelo se encaixa perfeitamente na sua necessidade, seja para um pequeno retoque doméstico ou para um canteiro profissional de grande porte. Se você está executando uma obra em Osasco e região, entender essas diferenças ajuda inclusive na hora de planejar o seu <Link to="/locacao-de-betoneiras" className="underline font-bold text-[var(--brand-navy)] hover:text-[var(--brand-yellow)]">aluguel de betoneiras</Link> ou até mesmo a contratação de <Link to="/locacao-caminhao-betoneira" className="underline font-bold text-[var(--brand-navy)] hover:text-[var(--brand-yellow)]">caminhão betoneira</Link> de maneira inteligente.
                </p>
              </div>

              {/* O QUE CONSIDERAR */}
              <hr className="my-10 border-t-2 border-dashed border-[var(--brand-ink)]/10" />
              <section id="o-que-considerar" className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-[var(--brand-ink)] uppercase">
                  O que considerar antes de escolher uma betoneira?
                </h2>
                <p className="text-base text-foreground/90 leading-relaxed">
                  Antes de partir para as marcas, é fundamental mapear suas reais necessidades. Uma betoneira excelente para um pedreiro autônomo que usa o equipamento diariamente é muito diferente do modelo ideal para quem faz uma pequena reforma doméstica esporádica. Avalie os seguintes fatores técnicos:
                </p>
                
                <div className="grid gap-6 sm:grid-cols-2 mt-4">
                  <div className="border border-[var(--brand-ink)]/15 bg-[var(--brand-concrete)] p-5 rounded">
                    <h3 className="font-display text-lg text-[var(--brand-navy)] uppercase">1. Capacidade do Tambor (Litros)</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      A capacidade nominal do tambor <strong>nunca</strong> representa o volume útil de mistura. Em geral, a mistura útil equivale a cerca de 70% a 75% da nominal. Uma betoneira de 400 litros produz de 270 a 310 litros por ciclo. Reformas leves usam de 120L a 160L; canteiros residenciais exigem a partir de 250L.
                    </p>
                  </div>

                  <div className="border border-[var(--brand-ink)]/15 bg-[var(--brand-concrete)] p-5 rounded">
                    <h3 className="font-display text-lg text-[var(--brand-navy)] uppercase">2. Potência e Tipo de Motor</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Motores elétricos de 0,5 CV a 1 CV atendem bem modelos até 160L. Motores de 2 CV monofásicos são necessários para girar tambores pesados de 400L sem forçar a engrenagem. O motor elétrico monofásico (110V ou 220V) é o mais comum, enquanto motores a gasolina são cruciais para terrenos sem rede de energia instalada.
                    </p>
                  </div>

                  <div className="border border-[var(--brand-ink)]/15 bg-[var(--brand-concrete)] p-5 rounded">
                    <h3 className="font-display text-lg text-[var(--brand-navy)] uppercase">3. Cremalheira e Segurança (NR-12)</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      A cremalheira (coroa dentada) faz o tambor girar. Aquelas fabricadas em ferro fundido nodular resistem mais a atritos e impactos. Modelos que cumprem estritamente as diretrizes da norma de segurança <strong>NR-12</strong> vêm com proteções completas sobre a cremalheira, evitando acidentes e multas de fiscalização.
                    </p>
                  </div>

                  <div className="border border-[var(--brand-ink)]/15 bg-[var(--brand-concrete)] p-5 rounded">
                    <h3 className="font-display text-lg text-[var(--brand-navy)] uppercase">4. Assistência Técnica e Garantia</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Betoneiras são equipamentos expostos a cimento, areia e água todos os dias. O desgaste é inevitável. Marcas nacionais com ampla distribuição de peças sobressalentes e ampla rede de assistência técnica trazem enorme tranquilidade a longo prazo.
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--brand-yellow)]/15 border border-[var(--brand-yellow)] p-4 rounded text-sm text-[var(--brand-ink)] flex items-start gap-3">
                  <span className="font-bold font-mono">💡 Dica Prática de Obra:</span>
                  <p>
                    Para erguer uma casa residencial de 80 a 150 m², os modelos de 250 a 400 litros monofásicos de 220V com motor de 1 CV a 2 CV representam a escolha ideal. Eles garantem a velocidade necessária para concretagens de colunas, contrapisos e lajes sem sobrecarregar a equipe de operários.
                  </p>
                </div>
              </section>

              {/* AS 6 MELHORES MARCAS */}
              <hr className="my-10 border-t-2 border-dashed border-[var(--brand-ink)]/10" />
              <section id="marcas-destaque" className="space-y-12">
                <h2 className="font-display text-2xl md:text-3xl text-[var(--brand-ink)] uppercase">
                  Análise Detalhada: As 6 Melhores Marcas de Betoneira do Brasil
                </h2>
                
                {/* 1. Menegotti */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-bold text-[var(--brand-yellow)]">01</span>
                    <h3 className="font-display text-xl md:text-2xl text-[var(--brand-ink)] uppercase">
                      Menegotti: Liderança Absoluta no Segmento
                    </h3>
                  </div>
                  <p className="text-base text-foreground/90 leading-relaxed">
                    Fundada em 1940 em Jaraguá do Sul, Santa Catarina, a <a href="https://www.menegotticonstrucao.com/" target="_blank" rel="noopener noreferrer" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)] font-bold">Menegotti</a> produziu sua primeira betoneira em 1967. Com uma produção média de <strong>8 mil betoneiras por mês</strong>, ela detém o título de maior fabricante de betoneiras do mundo, com dados corroborados pela Federação das Indústrias de Santa Catarina (<a href="https://fiesc.com.br" target="_blank" rel="noopener noreferrer" className="underline text-[var(--brand-navy)] font-bold">FIESC</a>).
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li><strong>Menegotti Prime:</strong> Modelo clássico de 400 litros profissional, com motor de 2 CV monofásico, cremalheira segmentada em 6 partes e protetor de cremalheira conforme a NR-12.</li>
                    <li><strong>Menegotti Rental:</strong> Desenvolvida com chapa de aço de 2,66 mm e pintura eletrostática robusta, ideal para empresas que trabalham com locação.</li>
                    <li><strong>Menegotti Infinity:</strong> O grande lançamento recente, apresentando tambor em polietileno leve, resistente a impactos e que não acumula resíduos de cimento seco.</li>
                  </ul>
                  <p className="text-sm bg-[var(--brand-concrete)] p-3 rounded">
                    <strong>Indicação de Uso:</strong> Perfeita para quem busca confiabilidade absoluta, peças imediatas em qualquer loja de ferramentas e altíssima durabilidade. Ideal para construtoras e locadoras profissionais. Se você deseja contar com essa robustez na sua obra, dê uma olhada no catálogo da <Link to="/betoneira-400l-eletrica" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)]">Betoneira 400L Elétrica</Link> Menegotti.
                  </p>
                </div>

                {/* 2. CSM */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-bold text-[var(--brand-yellow)]">02</span>
                    <h3 className="font-display text-xl md:text-2xl text-[var(--brand-ink)] uppercase">
                      CSM: Tradição e Robustez Premiada
                    </h3>
                  </div>
                  <p className="text-base text-foreground/90 leading-relaxed">
                    Com sede também em Jaraguá do Sul (fundada em 1979), a <a href="https://csm.ind.br" target="_blank" rel="noopener noreferrer" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)] font-bold">CSM (Construmaq)</a> acumula mais de 25 prêmios consecutivos no Top of Mind da construção civil e recebeu prestigiosos troféus de qualidade industrial. Seus equipamentos já ajudaram a erguer obras de grande porte, como estádios da Copa do Mundo e linhas metroviárias em São Paulo.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li><strong>CSM Smart 130L:</strong> Super leve, fácil de erguer em andares altos e ligar na tomada padrão da casa. Veja detalhes na página da <Link to="/betoneira-120l" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)]">Betoneira 120L</Link>.</li>
                    <li><strong>CSM Rental 200L:</strong> Exclusivo tambor de fundo triplo (70% mais espesso no fundo), garantindo vida útil longa mesmo sob batidas intensas de brita.</li>
                    <li><strong>CSM Max 1 Traço 400L:</strong> Potente motor de 2 CV monofásico, produzindo até 4,7 m³ por hora. Disponível em motores a eletricidade e na versão móvel de <Link to="/betoneira-400l-gasolina" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)]">Betoneira 400L Gasolina</Link>.</li>
                  </ul>
                  <p className="text-sm bg-[var(--brand-concrete)] p-3 rounded">
                    <strong>Indicação de Uso:</strong> Locadores, empreiteiros profissionais de alvenaria e construtoras de edifícios que exigem soldagem robotizada e altíssimo padrão de acabamento.
                  </p>
                </div>

                {/* 3. Maqtron */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-bold text-[var(--brand-yellow)]">03</span>
                    <h3 className="font-display text-xl md:text-2xl text-[var(--brand-ink)] uppercase">
                      Maqtron: Excelente Relação Custo-Benefício
                    </h3>
                  </div>
                  <p className="text-base text-foreground/90 leading-relaxed">
                    A <a href="https://vencedoramaqtron.com.br" target="_blank" rel="noopener noreferrer" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)] font-bold">Maqtron</a> entrega equipamentos com especificações técnicas equivalentes às líderes de mercado por preços significativamente mais competitivos. Lidera rankings de vendas digitais para compradores autônomos.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li><strong>Maqtron M-400:</strong> Cavalete em tubo retangular resistente, pedal com mola suave e produção por ciclo de 310L. Pesa 143 kg.</li>
                    <li><strong>Maqtron M-260:</strong> Perfeita para quem busca equilibrar peso e potência, rodando com motor de 1 CV. Confira especificações similares na <Link to="/betoneira-250l" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)]">Betoneira 250L</Link>.</li>
                    <li><strong>Maqtron M150:</strong> Variante leve com apenas 60 kg, ideal para transporte na traseira de caminhonetes.</li>
                  </ul>
                  <p className="text-sm bg-[var(--brand-concrete)] p-3 rounded">
                    <strong>Indicação de Uso:</strong> Pedreiros autônomos e construtores residenciais que não necessitam da estrutura pesada extrema da linha Rental mas exigem ótimo desempenho sem pagar o preço premium das líderes.
                  </p>
                </div>

                {/* 4. Possamai */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-bold text-[var(--brand-yellow)]">04</span>
                    <h3 className="font-display text-xl md:text-2xl text-[var(--brand-ink)] uppercase">
                      Possamai: O "Tanque de Guerra" do Canteiro
                    </h3>
                  </div>
                  <p className="text-base text-foreground/90 leading-relaxed">
                    Reconhecida informalmente pelos mestres de obras como um verdadeiro tanque de guerra, a <a href="https://www.possamai.com.br" target="_blank" rel="noopener noreferrer" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)] font-bold">Possamai</a> fabrica equipamentos com chapas de aço espessas e estruturas metálicas ultra robustas. Seus equipamentos seguem estritamente a norma técnica <strong>ABNT NBR 16329:2014</strong>, garantindo total segurança mecânica e elétrica.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li><strong>Possamai BTA-245:</strong> Muito popular, com motor de 1 CV, perfeita para construir contrapisos e erguer paredes sem fadiga mecânica.</li>
                    <li><strong>Possamai BTA-400:</strong> Uma betoneira projetada para operar em regime de produção contínua de concreto estrutural.</li>
                  </ul>
                  <p className="text-sm bg-[var(--brand-concrete)] p-3 rounded">
                    <strong>Indicação de Uso:</strong> Canteiros onde o equipamento trabalha muitas horas sem parar e em terrenos de topografia acidentada.
                  </p>
                </div>

                {/* 5. Motomil */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-bold text-[var(--brand-yellow)]">05</span>
                    <h3 className="font-display text-xl md:text-2xl text-[var(--brand-ink)] uppercase">
                      Motomil: Foco no Uso Doméstico e Acessível
                    </h3>
                  </div>
                  <p className="text-base text-foreground/90 leading-relaxed">
                    A <a href="https://grupogmeg.com.br" target="_blank" rel="noopener noreferrer" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)] font-bold">Motomil</a> atua fortemente com foco em ferramentas de uso residencial e semiprofissional. Ela é muito buscada por quem quer comprar um equipamento próprio para reformas rápidas em vez de alugar, mantendo o investimento inicial sob controle.
                  </p>
                  <p className="text-sm bg-[var(--brand-concrete)] p-3 rounded">
                    <strong>Modelo de destaque:</strong> A <strong>Motomil MB-150L</strong> tem capacidade de mistura real em torno de 90 litros, motor de 0,5 CV e pesa apenas 70 kg, facilitando o armazenamento na garagem. Para modelos equivalentes com entrega imediata, confira a página da <Link to="/betoneira-150l" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)]">Betoneira 150L</Link>.
                  </p>
                </div>

                {/* 6. Horbach */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-bold text-[var(--brand-yellow)]">06</span>
                    <h3 className="font-display text-xl md:text-2xl text-[var(--brand-ink)] uppercase">
                      Horbach: Opção Robusta de Grande Porte
                    </h3>
                  </div>
                  <p className="text-base text-foreground/90 leading-relaxed">
                    A gaúcha <a href="https://horbach.com.br" target="_blank" rel="noopener noreferrer" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)] font-bold">Horbach</a> destaca-se no mercado com betoneiras de 400 litros caracterizadas por rodas de borracha sobressalentes superdimensionadas. Esse diferencial confere excelente movimentação em terrenos argilosos, úmidos e com detritos de demolição.
                  </p>
                  <p className="text-sm bg-[var(--brand-concrete)] p-3 rounded">
                    <strong>Indicação de Uso:</strong> Obras de infraestrutura de médio porte com terrenos acidentados. Para concretagens de lajes de grande porte que inviabilizam o batimento manual ou no tambor da betoneira padrão, indicamos utilizar o serviço dedicado de um <Link to="/caminhao-betoneira" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)]">Caminhão Betoneira</Link>.
                  </p>
                </div>
              </section>

              {/* TABELA COMPARATIVA */}
              <hr className="my-10 border-t-2 border-dashed border-[var(--brand-ink)]/10" />
              <section id="comparativo-rapido" className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-[var(--brand-ink)] uppercase">
                  Comparativo Rápido de Marcas (Capacidade 400L)
                </h2>
                <p className="text-base text-foreground/90 leading-relaxed">
                  Para facilitar a visualização técnica, elaboramos uma tabela comparativa com os dados médios de mercado em 2026 para os modelos profissionais de 400 litros de cada fabricante:
                </p>

                <div className="overflow-x-auto border-2 border-[var(--brand-ink)] bg-white shadow-sm rounded-lg w-full">
                  <table className="w-full min-w-[700px] text-left border-collapse">
                    <thead>
                      <tr className="bg-[var(--brand-navy)] text-white border-b-2 border-[var(--brand-ink)] text-xs uppercase tracking-wider font-mono">
                        <th className="p-4 border-r border-[var(--brand-ink)]/20">Marca</th>
                        <th className="p-4 border-r border-[var(--brand-ink)]/20">Motor Típico</th>
                        <th className="p-4 border-r border-[var(--brand-ink)]/20">Diferencial Técnico</th>
                        <th className="p-4 border-r border-[var(--brand-ink)]/20">Indicação de Uso</th>
                        <th className="p-4">Faixa de Preço (400L)*</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--brand-ink)]/10 text-sm">
                      <tr className="hover:bg-[var(--brand-concrete)] transition-colors">
                        <td className="p-4 font-bold border-r border-[var(--brand-ink)]/20 text-[var(--brand-ink)]">Menegotti</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20">2,0 CV monofásico</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20 text-xs">Maior rede de assistência do Brasil, cremalheira segmentada</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20">Uso profissional contínuo, locadoras</td>
                        <td className="p-4 font-mono font-bold text-[var(--brand-navy)]">R$ 3.800 – R$ 6.500</td>
                      </tr>
                      <tr className="hover:bg-[var(--brand-concrete)] transition-colors">
                        <td className="p-4 font-bold border-r border-[var(--brand-ink)]/20 text-[var(--brand-ink)]">CSM</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20">2,0 CV monofásico</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20 text-xs">Tambor de fundo triplo na linha Rental, soldagem robotizada</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20">Grandes construtoras, locações pesadas</td>
                        <td className="p-4 font-mono font-bold text-[var(--brand-navy)]">R$ 3.600 – R$ 6.000</td>
                      </tr>
                      <tr className="hover:bg-[var(--brand-concrete)] transition-colors">
                        <td className="p-4 font-bold border-r border-[var(--brand-ink)]/20 text-[var(--brand-ink)]">Maqtron</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20">2,0 CV monofásico</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20 text-xs">Excelente relação de preço, borda do bocal reforçada</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20">Pedreiros autônomos, pequenas obras</td>
                        <td className="p-4 font-mono font-bold text-[var(--brand-navy)]">R$ 2.800 – R$ 4.500</td>
                      </tr>
                      <tr className="hover:bg-[var(--brand-concrete)] transition-colors">
                        <td className="p-4 font-bold border-r border-[var(--brand-ink)]/20 text-[var(--brand-ink)]">Possamai</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20">2,0 CV monofásico</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20 text-xs">Chapa de alta espessura (aço estrutural), conformidade ABNT</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20">Trabalho pesado diário no canteiro</td>
                        <td className="p-4 font-mono font-bold text-[var(--brand-navy)]">R$ 3.200 – R$ 5.000</td>
                      </tr>
                      <tr className="hover:bg-[var(--brand-concrete)] transition-colors">
                        <td className="p-4 font-bold border-r border-[var(--brand-ink)]/20 text-[var(--brand-ink)]">Horbach</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20">1,5 a 2,0 CV mono</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20 text-xs">Rodas de borracha grandes para alta mobilidade</td>
                        <td className="p-4 border-r border-[var(--brand-ink)]/20">Terrenos irregulares e argilosos</td>
                        <td className="p-4 font-mono font-bold text-[var(--brand-navy)]">R$ 3.500 – R$ 5.500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  *Valores estimados em Maio de 2026. Sujeitos a variações locais, taxas de frete e impostos de cada estado. Sempre consulte distribuidores credenciados para propostas comerciais.
                </p>
              </section>

              {/* DOMÉSTICO VS PROFISSIONAL */}
              <hr className="my-10 border-t-2 border-dashed border-[var(--brand-ink)]/10" />
              <section id="domestico-vs-profissional" className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-[var(--brand-ink)] uppercase">
                  Uso Doméstico vs. Profissional: Qual Caminho Seguir?
                </h2>
                <p className="text-base text-foreground/90 leading-relaxed">
                  A decisão de compra ou contratação deve considerar a intensidade do uso diário:
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-[var(--brand-yellow)] text-[var(--brand-ink)] rounded-full mt-1">
                      <CheckIcon size={16} />
                    </div>
                    <div>
                      <h3 className="font-display text-base text-[var(--brand-ink)] uppercase">Para Pequenas Reformas e Uso Esporádico</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        Se a máquina vai trabalhar apenas nos finais de semana para assentar tijolos, fazer reboco ou erguer muros baixos, um misturador compacto de 120 litros a 150 litros com motor leve é perfeito. Equipamentos de marcas de entrada como a Motomil resolvem sem pesar no bolso e são fáceis de guardar em qualquer vaga de garagem.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-[var(--brand-yellow)] text-[var(--brand-ink)] rounded-full mt-1">
                      <CheckIcon size={16} />
                    </div>
                    <div>
                      <h3 className="font-display text-base text-[var(--brand-ink)] uppercase">Para Uso Profissional Contínuo</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        Pedreiros independentes, construtoras e empreiteiras residenciais necessitam de tambores de no mínimo 250 litros ou 400 litros. Nesse patamar de trabalho intenso, comprar ou alugar equipamentos Menegotti, CSM, Maqtron ou Possamai torna-se obrigatório. Elas suportam os detritos abrasivos da brita e contam com peças de desgaste rápido (como pinhão e rolamentos) facilmente encontradas no comércio local.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-[var(--brand-yellow)] text-[var(--brand-ink)] rounded-full mt-1">
                      <CheckIcon size={16} />
                    </div>
                    <div>
                      <h3 className="font-display text-base text-[var(--brand-ink)] uppercase">Para Aluguel de Equipamentos (Rental)</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        Equipamentos destinados a locadoras precisam aguentar o tranco de operadores variados e transporte pesado frequente. A linha Rental da CSM (com tambor triplo) e da Menegotti (chapa espessa e cremalheira bipartida) foram desenhadas exatamente para este mercado.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-[var(--brand-ink)] bg-[var(--brand-yellow)] p-6 mt-6">
                  <h3 className="font-display text-lg text-[var(--brand-ink)] uppercase font-bold">Por que Alugar em Vez de Comprar?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--brand-ink)]/90">
                    Muitos construtores compram betoneiras pensando em revender depois, mas enfrentam dores de cabeça com motor queimado, rolamento estourado e transporte difícil no final do serviço. A <Link to="/locacao-de-betoneiras" className="underline font-bold text-[var(--brand-navy)] hover:text-[var(--brand-yellow)]">locação de betoneiras</Link> elimina esses custos ocultos: você recebe uma máquina revisada de ponta (como Menegotti ou CSM), conta com assistência no local em caso de pane e a empresa se responsabiliza pela <Link to="/entrega-e-retirada-de-betoneira" className="underline font-bold text-[var(--brand-navy)] hover:text-[var(--brand-yellow)]">entrega e retirada</Link> do canteiro no mesmo dia ao término da obra.
                  </p>
                </div>
              </section>

              {/* PERGUNTAS FREQUENTES (FAQ ACCORDION SEMANTIC) */}
              <hr className="my-10 border-t-2 border-dashed border-[var(--brand-ink)]/10" />
              <section id="faq" className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-[var(--brand-ink)] uppercase text-center">
                  Perguntas Frequentes Sobre Betoneiras
                </h2>
                
                <div className="divide-y-2 divide-[var(--brand-ink)] border-y-2 border-[var(--brand-ink)] bg-white p-6 shadow-sm rounded">
                  
                  <details className="faq-item group py-4">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer">
                      <span className="font-display text-base md:text-lg text-[var(--brand-ink)] uppercase font-bold">Qual betoneira comprar para uso doméstico?</span>
                      <span className="chev font-mono text-2xl text-[var(--brand-yellow)]" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Para reformas domésticas pontuais (colocação de pisos, reboco de paredes, muros), modelos compactos de 120 litros a 150 litros com motor de 0,5 CV são ideais. A Motomil MB-150L e a Maqtron M150 atendem bem a essa demanda com baixo investimento e excelente facilidade de transporte dentro do carro.
                    </p>
                  </details>

                  <details className="faq-item group py-4">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer">
                      <span className="font-display text-base md:text-lg text-[var(--brand-ink)] uppercase font-bold">Uma betoneira de 120 litros serve para concretagem de lajes?</span>
                      <span className="chev font-mono text-2xl text-[var(--brand-yellow)]" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Até serve, mas o processo se torna extremamente lento e exaustivo. Para uma laje pequena de 40 m², o volume necessário exige dezenas de batidas em um tambor de 120L, o que atrasa a aplicação e compromete a homogeneidade da cura do concreto. Para concretagens de lajes, contrapisos volumosos e vigas, o mínimo recomendado são betoneiras profissionais de 250L a 400L.
                    </p>
                  </details>

                  <details className="faq-item group py-4">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer">
                      <span className="font-display text-base md:text-lg text-[var(--brand-ink)] uppercase font-bold">Vale a pena adquirir uma betoneira de segunda mão (usada)?</span>
                      <span className="chev font-mono text-2xl text-[var(--brand-yellow)]" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Comprar equipamento usado exige muita atenção. Inspecione minuciosamente o tambor (que não pode conter furos ou trincas de solda), o desgaste dos dentes da cremalheira e do pinhão e ruídos incomuns de rolamento e motor sob carga de peso. Caso encontre um modelo robusto de marca consagrada como CSM ou Menegotti por menos de metade do preço de uma nova, pode ser vantajoso, contanto que considere potenciais gastos de retífica e substituição de peças.
                    </p>
                  </details>

                  <details className="faq-item group py-4">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer">
                      <span className="font-display text-base md:text-lg text-[var(--brand-ink)] uppercase font-bold">Qual a diferença real entre betoneira comum e misturador de argamassa?</span>
                      <span className="chev font-mono text-2xl text-[var(--brand-yellow)]" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      A betoneira clássica foi projetada para lidar com misturas pesadas contendo agregados graúdos (brita e cimento). O misturador de argamassa, por sua vez, opera com pás horizontais e rotações otimizadas para homogeneizar cal, areia e aditivos finos para reboco e rejuntamento sem provocar a separação dos materiais. Embora a betoneira consiga bater argamassa na obra, o misturador dedicado entrega misturas mais cremosas para acabamentos finos de reboco.
                    </p>
                  </details>

                </div>
              </section>

              {/* CONCLUSÃO E CTA DE VENDAS / ALUGUEL */}
              <hr className="my-10 border-t-2 border-dashed border-[var(--brand-ink)]/10" />
              <section id="conclusao" className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-[var(--brand-ink)] uppercase">
                  Conclusão: Qual Marca Escolher Para Sua Obra?
                </h2>
                <div className="prose max-w-none text-foreground/90 space-y-4 text-base leading-relaxed">
                  <p>
                    Escolher a melhor marca de betoneira depende fundamentalmente de alinhar as especificações mecânicas do equipamento ao porte do projeto e à frequência de uso diário.
                  </p>
                  <p>
                    Se o seu foco principal reside em segurança máxima, rede de suporte e durabilidade profissional extrema, as catarinenses <strong>Menegotti</strong> e <strong>CSM</strong> representam o padrão ouro nacional. Se você prefere equilibrar o orçamento sem sacrificar a robustez das peças, <strong>Maqtron</strong> e <strong>Possamai</strong> são excelentes caminhos comerciais. Para serviços rápidos de pintura e reformas, a <strong>Motomil</strong> cumpre o papel com louvor e baixo custo inicial.
                  </p>
                  <p>
                    Antes de comprar ou alugar, sempre valide a voltagem elétrica de rede do canteiro (monofásica 110V/220V ou trifásica), o peso líquido da máquina para transporte interno e o diâmetro das rodas para evitar dores de cabeça com mobilidade na obra.
                  </p>
                </div>

                {/* Bloco de Chamada para Ação Avançado (CTA) */}
                <div className="mt-10 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] p-6 md:p-8 rounded-lg hard-shadow">
                  <span className="spec-label text-[var(--brand-ink)] font-bold">Precisa de betoneira de marca em Osasco?</span>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl text-[var(--brand-ink)] uppercase">
                    Aluguel de Betoneiras CSM e Menegotti com entrega no mesmo dia!
                  </h3>
                  <p className="mt-2 text-sm text-[var(--brand-ink)]/90 max-w-2xl leading-relaxed">
                    Evite gastos com manutenção de motores, cremalheiras quebradas e logística complexa. A <Link to="/" className="underline text-[var(--brand-navy)] hover:text-[var(--brand-yellow)]">Betoneira Osasco</Link> entrega as melhores betoneiras de 120L, 150L, 250L e 400L revisadas, limpas e prontas para rodar no seu canteiro no mesmo dia em qualquer bairro de Osasco.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href={`https://wa.me/5511975465766?text=${encodeURIComponent("Olá! Gostaria de fazer um orçamento de locação de betoneira CSM/Menegotti em Osasco.")}`}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow hover:bg-[var(--brand-concrete)] transition-colors"
                    >
                      Solicitar Orçamento Grátis <ArrowIcon size={16} />
                    </a>
                    <a
                      href="tel:+5511975465766"
                      className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-ink)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-yellow)] hard-shadow hover:bg-[var(--brand-ink)]/90 transition-colors"
                    >
                      <PhoneIcon size={16} /> Ligar: (11) 97546-5766
                    </a>
                  </div>
                </div>
              </section>

              {/* Card de Autor Premium (E-E-A-T) */}
              <section id="autor" className="reveal mt-12 cut-corner border-2 border-[var(--brand-ink)] bg-white p-6 md:p-8 hard-shadow flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src={betoVieiraImg}
                  alt="Beto Vieira, Especialista em Betoneiras e Equipamentos de Construção em Osasco"
                  width={120}
                  height={120}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-[var(--brand-ink)] object-cover shadow-sm bg-[var(--brand-concrete)]"
                  loading="lazy"
                />
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <span className="spec-label !text-[var(--brand-navy)] font-bold text-xs uppercase tracking-wider">Autor do Guia</span>
                      <h3 className="font-display text-2xl text-[var(--brand-ink)] uppercase leading-tight mt-1">Beto Vieira</h3>
                    </div>
                    <span className="inline-flex self-center md:self-auto items-center gap-1.5 bg-[var(--brand-concrete)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)] border border-[var(--brand-ink)]/10 rounded-full">
                      👷 Engenharia & Equipamentos
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Beto Vieira é especialista em engenharia prática e equipamentos para canteiro de obras, acumulando mais de 15 anos de experiência na seleção, manutenção e dimensionamento de misturadores de concreto. Consultor técnico da <strong>Betoneiras Osasco</strong>, atua orientando construtores, mestres de obras e engenheiros na escolha correta do traço e do maquinário ideal para garantir produtividade máxima, segurança impecável e o melhor custo-benefício em Osasco e toda a Grande São Paulo.
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1">✓ Autoridade Técnica</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">✓ Revisão Prática</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">✓ Especialista Osasco</span>
                  </div>
                </div>
              </section>

              {/* Referências de Rodapé (E-E-A-T) */}
              <footer className="mt-12 border-t border-[var(--brand-ink)]/15 pt-6 text-xs text-muted-foreground space-y-2">
                <p>
                  <strong>Referências e Citações de Autoridade:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Segurança de Operação em Misturadores: <a href="https://www.abnt.org.br" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--brand-navy)]">Associação Brasileira de Normas Técnicas (ABNT NBR 16329:2014)</a>.</li>
                  <li>Dados e Certificados Industriais de Fabricantes em Santa Catarina: <a href="https://fiesc.com.br" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--brand-navy)]">FIESC (Federação das Indústrias do Estado de Santa Catarina)</a>.</li>
                </ul>
              </footer>

            </article>

            {/* SIDEBAR RÍGIDA COM ÍNDICE E CONVERSÃO - HIDDEN ON MOBILE/TABLET */}
            <aside className="hidden lg:block space-y-6">
              
              {/* Box de Índice Clicável (TOC) - Fixo/Sticky */}
              <div className="sticky top-20 border-2 border-[var(--brand-ink)] bg-white p-5 hard-shadow rounded-lg">
                <span className="spec-label text-[var(--brand-navy)] font-bold">Índice do Guia</span>
                <nav className="mt-4">
                  <ul className="space-y-3 font-display text-sm uppercase tracking-wider text-[var(--brand-ink)]">
                    <li>
                      <a
                        href="#introducao"
                        className={`block transition-colors hover:text-[var(--brand-yellow)] ${activeSection === "introducao" ? "text-[var(--brand-yellow)] font-bold pl-1 border-l-2 border-[var(--brand-yellow)]" : ""}`}
                      >
                        • Introdução
                      </a>
                    </li>
                    <li>
                      <a
                        href="#o-que-considerar"
                        className={`block transition-colors hover:text-[var(--brand-yellow)] ${activeSection === "o-que-considerar" ? "text-[var(--brand-yellow)] font-bold pl-1 border-l-2 border-[var(--brand-yellow)]" : ""}`}
                      >
                        • Critérios de Compra
                      </a>
                    </li>
                    <li>
                      <a
                        href="#marcas-destaque"
                        className={`block transition-colors hover:text-[var(--brand-yellow)] ${activeSection === "marcas-destaque" ? "text-[var(--brand-yellow)] font-bold pl-1 border-l-2 border-[var(--brand-yellow)]" : ""}`}
                      >
                        • Análise das 6 Marcas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#comparativo-rapido"
                        className={`block transition-colors hover:text-[var(--brand-yellow)] ${activeSection === "comparativo-rapido" ? "text-[var(--brand-yellow)] font-bold pl-1 border-l-2 border-[var(--brand-yellow)]" : ""}`}
                      >
                        • Tabela Comparativa
                      </a>
                    </li>
                    <li>
                      <a
                        href="#domestico-vs-profissional"
                        className={`block transition-colors hover:text-[var(--brand-yellow)] ${activeSection === "domestico-vs-profissional" ? "text-[var(--brand-yellow)] font-bold pl-1 border-l-2 border-[var(--brand-yellow)]" : ""}`}
                      >
                        • Doméstico vs. Profissional
                      </a>
                    </li>
                    <li>
                      <a
                        href="#faq"
                        className={`block transition-colors hover:text-[var(--brand-yellow)] ${activeSection === "faq" ? "text-[var(--brand-yellow)] font-bold pl-1 border-l-2 border-[var(--brand-yellow)]" : ""}`}
                      >
                        • FAQ Obra
                      </a>
                    </li>
                    <li>
                      <a
                        href="#conclusao"
                        className={`block transition-colors hover:text-[var(--brand-yellow)] ${activeSection === "conclusao" ? "text-[var(--brand-yellow)] font-bold pl-1 border-l-2 border-[var(--brand-yellow)]" : ""}`}
                      >
                        • Conclusão e Contato
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="my-5 border-t border-[var(--brand-ink)]/15" />
                
                {/* Micro CTA lateral */}
                <div>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                    Alugue betoneira em Osasco sem burocracias. Atendimento rápido e entrega na porta da sua obra.
                  </p>
                  <a
                    href={`https://wa.me/5511975465766?text=${encodeURIComponent("Olá! Gostaria de um orçamento rápido para aluguel de betoneiras em Osasco.")}`}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 flex w-full justify-center items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)] hover:bg-[var(--brand-yellow)]/90 transition-colors"
                  >
                    Chamar no WhatsApp <ArrowIcon size={12} />
                  </a>
                </div>
              </div>

            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
