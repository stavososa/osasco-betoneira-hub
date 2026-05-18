import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapEmbed } from "@/components/MapEmbed";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Betoneira Osasco" },
      { name: "description", content: "Fale com a Betoneira Osasco: WhatsApp (11) 97546-5766. Atendimento em toda Osasco, entrega e retirada no mesmo dia." },
      { property: "og:title", content: "Contato — Betoneira Osasco" },
      { property: "og:description", content: "Telefone e WhatsApp (11) 97546-5766." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[var(--brand-navy)] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="font-display text-4xl uppercase md:text-5xl">Fale <span className="text-[var(--brand-yellow)]">conosco</span></h1>
            <p className="mt-4 max-w-2xl text-white/85">Atendimento rápido pelo WhatsApp ou telefone. Estamos em Osasco e atendemos todos os bairros da cidade.</p>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl uppercase text-[var(--brand-navy)]">Contato direto</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block text-xs font-semibold uppercase text-muted-foreground">WhatsApp</span>
                <a href="https://wa.me/5511975465766" target="_blank" rel="noopener" className="text-lg font-bold text-[var(--brand-navy)] hover:underline">
                  (11) 97546-5766
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase text-muted-foreground">Telefone</span>
                <a href="tel:+5511975465766" className="text-lg font-bold text-[var(--brand-navy)] hover:underline">
                  (11) 97546-5766
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase text-muted-foreground">Atendimento</span>
                <span>Segunda a Sábado — 7h às 19h</span>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase text-muted-foreground">Região</span>
                <span>Osasco e região metropolitana</span>
              </li>
            </ul>
            <a href="https://wa.me/5511975465766" target="_blank" rel="noopener" className="mt-6 inline-block rounded-md bg-[var(--brand-yellow)] px-6 py-3 text-sm font-bold text-[var(--brand-navy)]">
              Solicitar orçamento agora
            </a>
          </div>
          <form
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
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
            <h2 className="font-display text-xl uppercase text-[var(--brand-navy)]">Envie sua mensagem</h2>
            <div className="mt-4 space-y-3">
              <label className="block text-sm">
                <span className="font-medium">Nome</span>
                <input name="nome" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-navy)]" />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Telefone / WhatsApp</span>
                <input name="telefone" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-navy)]" />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Mensagem</span>
                <textarea name="mensagem" rows={4} required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-navy)]" />
              </label>
              <button type="submit" className="w-full rounded-md bg-[var(--brand-navy)] px-4 py-2.5 text-sm font-bold text-white hover:opacity-90">
                Enviar via WhatsApp
              </button>
            </div>
          </form>
        </section>
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <h2 className="font-display text-2xl uppercase text-[var(--brand-navy)]">Onde estamos</h2>
          <p className="mt-2 text-sm text-muted-foreground">Sede em Osasco — atendemos toda a cidade.</p>
          <div className="mt-4">
            <MapEmbed query="Osasco, SP, Brasil" title="Localização — Osasco" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
