import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapEmbed } from "@/components/MapEmbed";
import { HazardStripe } from "@/components/HazardStripe";
import { TrustBar } from "@/components/TrustBar";
import { Steps } from "@/components/Steps";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon, PhoneIcon, CheckIcon } from "@/components/icons/Icons";
import { getBairro, bairrosProximos } from "@/lib/bairros";

export const Route = createFileRoute("/alugar-betoneira-em-osasco/$bairro")({
  loader: ({ params }) => {
    const bairro = getBairro(params.bairro);
    if (!bairro) throw notFound();
    const proximos = bairrosProximos(bairro.slug, 12);
    return { bairro, proximos };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Bairro não encontrado" }] };
    const { bairro } = loaderData;
    const title = `Alugar Betoneira em ${bairro.nome}, Osasco — Entrega no mesmo dia`;
    const desc = `Locação de betoneiras em ${bairro.nome}, Osasco. Entrega e retirada no mesmo dia. Modelos 150L a 400L. WhatsApp (11) 97546-5766.`;
    const url = `/alugar-betoneira-em-osasco/${params.bairro}`;
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
            serviceType: "Locação de Betoneira",
            provider: { "@type": "LocalBusiness", name: "Betoneira Osasco", telephone: "+5511975465766" },
            areaServed: { "@type": "Place", name: `${bairro.nome}, Osasco, SP` },
            url,
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

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative noise-overlay bg-[var(--brand-navy)] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <nav aria-label="breadcrumb" className="reveal spec-label !text-white/60">
              <Link to="/" className="hover:text-[var(--brand-yellow)]">Início</Link> / Alugar betoneira em Osasco / <span className="text-[var(--brand-yellow)]">{bairro.nome}</span>
            </nav>
            <h1 className="reveal reveal-delay-1 mt-4 font-display text-4xl leading-tight md:text-6xl">
              Aluguel de betoneira em<br /><span className="text-[var(--brand-yellow)]">{bairro.nome}</span>, Osasco
            </h1>
            <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-white/85">
              Entrega e retirada no mesmo dia em {bairro.nome}. Betoneiras revisadas de 150L, 250L e 400L.
            </p>
            <div className="reveal reveal-delay-3 mt-7 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/5511975465766?text=${encodeURIComponent(`Olá! Quero alugar uma betoneira em ${bairro.nome}, Osasco.`)}`}
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

        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Atendimento local</span>
            </div>
            <h2 className="mt-2 font-display text-3xl text-[var(--brand-ink)]">
              Locação de betoneira em {bairro.nome}
            </h2>
            <div className="mt-4 space-y-3 text-sm text-foreground/85">
              <p>
                A <strong>Betoneira Osasco</strong> atende o bairro <strong>{bairro.nome}</strong> com locação e venda. Entregamos o equipamento direto na sua obra e cuidamos da retirada — você foca na construção, nós cuidamos da logística.
              </p>
              <p>
                Trabalhamos com modelos <strong>elétricos e a gasolina</strong> de <strong>150L, 250L e 400L</strong>, atendendo de pequenas reformas a obras de médio porte em {bairro.nome} e bairros vizinhos.
              </p>
            </div>
            <h3 className="mt-6 spec-label">Por que alugar em {bairro.nome}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                `Entrega no mesmo dia em ${bairro.nome}`,
                "Equipamentos revisados e prontos para uso",
                "Diária, semanal e mensal com preço justo",
                "Somos de Osasco — atendimento próximo",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><CheckIcon size={18} className="mt-0.5 shrink-0 text-[var(--brand-yellow)]" /><span>{i}</span></li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <h2 className="sr-only">Mapa de {bairro.nome}, Osasco</h2>
            <MapEmbed query={`${bairro.nome}, Osasco, SP, Brasil`} title={`Mapa do bairro ${bairro.nome} em Osasco`} />
            <p className="spec-label mt-3 text-center">Atendimento em todas as ruas de {bairro.nome}</p>
          </div>
        </section>

        <Steps bairro={bairro.nome} />

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Também atendemos</span>
          </div>
          <h2 className="reveal mt-2 font-display text-2xl text-[var(--brand-ink)] md:text-3xl">Bairros próximos a {bairro.nome}</h2>
          <ul className="reveal mt-6 flex flex-wrap gap-2">
            {proximos.map((b: { slug: string; nome: string }) => (
              <li key={b.slug}>
                <Link
                  to="/alugar-betoneira-em-osasco/$bairro"
                  params={{ bairro: b.slug }}
                  className="inline-block border border-[var(--brand-ink)] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-ink)] transition-colors hover:bg-[var(--brand-yellow)]"
                >
                  Alugar em {b.nome}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
