import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Betoneira Osasco" },
      { name: "description", content: "Empresa local de Osasco especializada em locação e venda de betoneiras. Atendimento ágil, equipamentos revisados e preço justo." },
      { property: "og:title", content: "Sobre a Betoneira Osasco" },
      { property: "og:description", content: "Locação e venda de betoneiras em Osasco com atendimento ágil e equipamentos revisados." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[var(--brand-navy)] py-16 text-white">
          <div className="mx-auto max-w-4xl px-4">
            <h1 className="font-display text-4xl uppercase md:text-5xl">Sobre a <span className="text-[var(--brand-yellow)]">Betoneira Osasco</span></h1>
            <p className="mt-4 text-white/85">Há anos atendendo construtores, pedreiros e reformas residenciais em Osasco e região.</p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-slate max-w-none">
            <p>A <strong>Betoneira Osasco</strong> nasceu para resolver um problema comum em obras: ter um equipamento confiável, na hora certa e sem complicação. Somos especializados em <strong>locação e venda de betoneiras</strong> em Osasco, com entrega e retirada no mesmo dia em todos os bairros da cidade.</p>
            <h2 className="font-display uppercase text-[var(--brand-navy)]">Nossos diferenciais</h2>
            <ul>
              <li><strong>Atendimento local:</strong> somos de Osasco e conhecemos a cidade — chegamos rápido onde sua obra estiver.</li>
              <li><strong>Equipamentos revisados:</strong> cada betoneira passa por manutenção antes da locação.</li>
              <li><strong>Preço justo:</strong> diária, semanal e mensal com descontos progressivos.</li>
              <li><strong>Logística inclusa:</strong> cuidamos da entrega e retirada para você focar na obra.</li>
            </ul>
            <p>Trabalhamos com modelos de <strong>150L, 250L e 400L</strong>, elétricas e a gasolina, para atender desde pequenas reformas até obras de maior porte.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
