import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Locação, Venda e Entrega de Betoneiras" },
      { name: "description", content: "Locação diária/semanal/mensal, venda de betoneiras 150L–400L e entrega/retirada em Osasco. Solicite um orçamento." },
      { property: "og:title", content: "Serviços — Betoneira Osasco" },
      { property: "og:description", content: "Locação, venda e logística de betoneiras em Osasco." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosPage,
});

const SERVICOS = [
  {
    titulo: "Locação de Betoneiras",
    desc: "Modelos de 150L, 250L e 400L disponíveis para diária, semanal ou mensal. Equipamentos revisados e prontos para uso.",
    itens: ["Diária a partir de R$ 80", "Descontos para semanal e mensal", "Modelos elétricos e a gasolina"],
  },
  {
    titulo: "Venda de Betoneiras",
    desc: "Equipamentos novos e seminovos com garantia. Ideal para construtoras e profissionais que usam o equipamento com frequência.",
    itens: ["Betoneiras novas e seminovas", "Garantia de fábrica", "Assistência técnica em Osasco"],
  },
  {
    titulo: "Entrega e Retirada",
    desc: "Logística rápida em toda Osasco. Entregamos onde sua obra estiver e buscamos no fim da locação.",
    itens: ["Entrega no mesmo dia", "Retirada agendada", "Atendimento em todos os bairros"],
  },
];

function ServicosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[var(--brand-navy)] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="font-display text-4xl uppercase md:text-5xl">Nossos <span className="text-[var(--brand-yellow)]">serviços</span></h1>
            <p className="mt-4 max-w-2xl text-white/85">Locação, venda e logística de betoneiras em Osasco. Tudo o que sua obra precisa.</p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICOS.map((s) => (
              <article key={s.titulo} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-3 h-1 w-12 rounded bg-[var(--brand-yellow)]" />
                <h2 className="font-display text-xl uppercase text-[var(--brand-navy)]">{s.titulo}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {s.itens.map((i) => (
                    <li key={i} className="flex gap-2"><span className="text-[var(--brand-yellow)]">✓</span>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-xl bg-[var(--brand-yellow)]/15 p-8 text-center">
            <h2 className="font-display text-2xl uppercase text-[var(--brand-navy)]">Solicite um orçamento agora</h2>
            <p className="mt-2 text-sm text-muted-foreground">Resposta rápida pelo WhatsApp.</p>
            <a href="https://wa.me/5511975465766" target="_blank" rel="noopener" className="mt-4 inline-block rounded-md bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white">
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
