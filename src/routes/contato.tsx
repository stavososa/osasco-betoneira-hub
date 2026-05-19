import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapEmbed } from "@/components/MapEmbed";
import { HazardStripe } from "@/components/HazardStripe";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import { PhoneIcon, ArrowIcon } from "@/components/icons/Icons";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Betoneira Osasco" },
      { name: "description", content: "Fale com a Betoneira Osasco: WhatsApp (11) 97546-5766. Atendimento em toda Osasco, entrega e retirada no mesmo dia." },
      { property: "og:title", content: "Contato | Betoneira Osasco" },
      { property: "og:description", content: "Telefone e WhatsApp (11) 97546-5766." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/contato" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/contato" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://betoneiraosasco.com.br/contato#webpage",
          "url": "https://betoneiraosasco.com.br/contato",
          "name": "Contato | Betoneira Osasco",
          "description": "Fale com a Betoneira Osasco: WhatsApp (11) 97546-5766. Atendimento em toda Osasco, entrega e retirada no mesmo dia.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", position: 1, name: "Início", item: "https://betoneiraosasco.com.br/" },
              { "@type": "ListItem", position: 2, name: "Contato", item: "https://betoneiraosasco.com.br/contato" }
            ]
          },
          "mainEntity": {
            "@id": "https://betoneiraosasco.com.br/#business"
          }
        }),
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative noise-overlay bg-[var(--brand-navy)] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-yellow)]" />
              <span className="spec-label !text-white/70">Fale com a gente</span>
            </div>
            <h1 className="reveal reveal-delay-1 mt-3 font-display text-4xl md:text-6xl">Fale <span className="text-[var(--brand-yellow)]">conosco</span></h1>
            <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-white/85">Atendimento rápido pelo WhatsApp ou telefone. Estamos em Osasco e atendemos todos os bairros.</p>
          </div>
          <HazardStripe />
        </section>

        <TrustBar />

        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-ink)]" />
              <span className="spec-label">Canais diretos</span>
            </div>
            <h2 className="mt-2 font-display text-3xl text-[var(--brand-ink)]">Contato direto</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="border-l-4 border-[var(--brand-yellow)] bg-[var(--brand-concrete)] p-4">
                <span className="spec-label">WhatsApp</span>
                <a href="https://wa.me/5511975465766" target="_blank" rel="noopener" className="mt-1 block numeric text-2xl text-[var(--brand-ink)] hover:text-[var(--brand-navy)]">
                  (11) 97546-5766
                </a>
              </li>
              <li className="border-l-4 border-[var(--brand-yellow)] bg-[var(--brand-concrete)] p-4">
                <span className="spec-label">Telefone</span>
                <a href="tel:+5511975465766" className="mt-1 block numeric text-2xl text-[var(--brand-ink)] hover:text-[var(--brand-navy)]">
                  (11) 97546-5766
                </a>
              </li>
              <li className="border-l-4 border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-4">
                <span className="spec-label">Horário</span>
                <span className="mt-1 block font-mono text-sm text-[var(--brand-ink)]">Seg–Sáb · 07h – 19h</span>
              </li>
              <li className="border-l-4 border-[var(--brand-ink)] bg-[var(--brand-concrete)] p-4">
                <span className="spec-label">Região</span>
                <span className="mt-1 block font-mono text-sm text-[var(--brand-ink)]">Osasco e região metropolitana</span>
              </li>
            </ul>
            <a href="https://wa.me/5511975465766" target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow">
              <PhoneIcon size={16} /> Solicitar orçamento <ArrowIcon size={16} />
            </a>
          </div>

          <form
            className="reveal cut-corner border-2 border-[var(--brand-ink)] bg-card p-6 hard-shadow"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const fd = new FormData(form);
              const nome = String(fd.get("nome") || "");
              const tel = String(fd.get("telefone") || "");
              const msg = String(fd.get("mensagem") || "");
              const texto = `Olá! Sou ${nome} (${tel}). ${msg}`;
              window.open(`https://wa.me/5511975465766?text=${encodeURIComponent(texto)}`, "_blank");
            }}
          >
            <div className="spec-label">Formulário</div>
            <h2 className="mt-1 font-display text-2xl text-[var(--brand-ink)]">Envie sua mensagem</h2>
            <div className="mt-5 space-y-4">
              <label className="block text-sm">
                <span className="spec-label">Nome</span>
                <input name="nome" required className="mt-1 w-full border-2 border-[var(--brand-ink)] bg-background px-3 py-2 text-sm outline-none focus:border-[var(--brand-yellow)]" />
              </label>
              <label className="block text-sm">
                <span className="spec-label">Telefone / WhatsApp</span>
                <input name="telefone" required className="mt-1 w-full border-2 border-[var(--brand-ink)] bg-background px-3 py-2 text-sm outline-none focus:border-[var(--brand-yellow)]" />
              </label>
              <label className="block text-sm">
                <span className="spec-label">Mensagem</span>
                <textarea name="mensagem" rows={4} required className="mt-1 w-full border-2 border-[var(--brand-ink)] bg-background px-3 py-2 text-sm outline-none focus:border-[var(--brand-yellow)]" />
              </label>
              <button type="submit" className="w-full border-2 border-[var(--brand-ink)] bg-[var(--brand-ink)] px-4 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-yellow)] hard-shadow-yellow">
                Enviar via WhatsApp
              </button>
            </div>
          </form>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-ink)]" />
            <span className="spec-label">Localização</span>
          </div>
          <h2 className="reveal mt-2 font-display text-2xl text-[var(--brand-ink)] md:text-3xl">Onde estamos</h2>
          <p className="reveal mt-2 text-sm text-muted-foreground">Sede em Osasco , atendemos toda a cidade.</p>
          <div className="reveal mt-6">
            <MapEmbed query="Osasco SP Brasil" title="Localização , Osasco" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
