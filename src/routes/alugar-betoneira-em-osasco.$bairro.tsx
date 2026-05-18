import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapEmbed } from "@/components/MapEmbed";
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
          <h1 className="font-display text-3xl uppercase">Bairro não encontrado</h1>
          <Link to="/" className="mt-4 inline-block text-[var(--brand-navy)] underline">Voltar ao início</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
  component: BairroPage,
});

function BairroPage() {
  const { bairro, proximos } = Route.useLoaderData();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[var(--brand-navy)] py-14 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <nav aria-label="breadcrumb" className="mb-3 text-xs text-white/70">
              <Link to="/" className="hover:underline">Início</Link> <span className="mx-1">/</span>
              <span>Alugar betoneira em Osasco</span> <span className="mx-1">/</span>
              <span className="text-[var(--brand-yellow)]">{bairro.nome}</span>
            </nav>
            <h1 className="font-display text-3xl uppercase md:text-5xl">
              Aluguel de Betoneira em <span className="text-[var(--brand-yellow)]">{bairro.nome}</span> — Osasco
            </h1>
            <p className="mt-4 max-w-2xl text-white/85">
              Entrega e retirada no mesmo dia em {bairro.nome}. Betoneiras revisadas de 150L, 250L e 400L para sua obra.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`https://wa.me/5511975465766?text=${encodeURIComponent(`Olá! Quero alugar uma betoneira em ${bairro.nome}, Osasco.`)}`} target="_blank" rel="noopener" className="rounded-md bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold text-[var(--brand-navy)]">
                Pedir orçamento no WhatsApp
              </a>
              <a href="tel:+5511975465766" className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                (11) 97546-5766
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl uppercase text-[var(--brand-navy)]">
              Locação de betoneira em {bairro.nome}
            </h2>
            <div className="prose prose-slate mt-4 max-w-none text-sm">
              <p>
                A <strong>Betoneira Osasco</strong> atende o bairro <strong>{bairro.nome}</strong> com locação e venda de betoneiras. Entregamos o equipamento direto na sua obra e cuidamos da retirada ao fim do período — você foca na construção, nós cuidamos da logística.
              </p>
              <p>
                Trabalhamos com betoneiras <strong>elétricas e a gasolina</strong> nos modelos <strong>150L, 250L e 400L</strong>, atendendo desde pequenas reformas residenciais até obras de porte médio em {bairro.nome} e bairros vizinhos.
              </p>
              <h3 className="font-display uppercase text-[var(--brand-navy)]">Por que alugar conosco em {bairro.nome}?</h3>
              <ul>
                <li>Entrega no mesmo dia em {bairro.nome}</li>
                <li>Equipamentos revisados e prontos para uso</li>
                <li>Diária, semanal e mensal com preço justo</li>
                <li>Atendimento local — somos de Osasco</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="sr-only">Mapa de {bairro.nome}, Osasco</h2>
            <MapEmbed
              query={`${bairro.nome}, Osasco, SP, Brasil`}
              title={`Mapa do bairro ${bairro.nome} em Osasco`}
            />
            <p className="mt-2 text-xs text-muted-foreground">Atendimento em todas as ruas de {bairro.nome}.</p>
          </div>
        </section>

        <section className="bg-muted/40 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-display text-2xl uppercase text-[var(--brand-navy)]">Bairros próximos a {bairro.nome}</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm sm:grid-cols-3 md:grid-cols-4">
              {proximos.map((b: { slug: string; nome: string }) => (
                <li key={b.slug}>
                  <Link
                    to="/alugar-betoneira-em-osasco/$bairro"
                    params={{ bairro: b.slug }}
                    className="block py-1 text-foreground/80 hover:text-[var(--brand-navy)]"
                  >
                    Alugar betoneira em {b.nome}
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
