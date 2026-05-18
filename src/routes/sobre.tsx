import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HazardStripe } from "@/components/HazardStripe";
import { useReveal } from "@/lib/useReveal";
import { HelmetIcon, TruckIcon, ClockIcon, CheckIcon } from "@/components/icons/Icons";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | Betoneira Osasco" },
      { name: "description", content: "Empresa local de Osasco especializada em locação e venda de betoneiras. Atendimento ágil, equipamentos revisados e preço justo." },
      { property: "og:title", content: "Sobre a Betoneira Osasco" },
      { property: "og:description", content: "Locação e venda de betoneiras em Osasco com atendimento ágil." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/sobre" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/sobre" }],
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
          <div className="reveal space-y-4 text-base text-foreground/90">
            <p>A <strong>Betoneira Osasco</strong> nasceu para resolver um problema comum em obras: ter um equipamento confiável, na hora certa e sem complicação. Somos especializados em <strong>locação e venda de betoneiras</strong> em Osasco, com entrega e retirada no mesmo dia em todos os bairros.</p>
            <p>Trabalhamos com modelos de <strong>120L, 150L, 250L e 400L</strong>, elétricas e a gasolina, para atender desde pequenas reformas até obras de maior porte.</p>
          </div>

          <h2 className="reveal mt-12 font-display text-2xl text-[var(--brand-ink)] md:text-3xl">Nossos diferenciais</h2>
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
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
