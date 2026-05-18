import { Link } from "@tanstack/react-router";
import { BAIRROS } from "@/lib/bairros";
import { BairrosGrid } from "./BairrosGrid";
import { HazardStripe } from "./HazardStripe";
import logo from "@/assets/logo-betoneira-osasco.webp";

export function SiteFooter({ bairrosVisiveis }: { bairrosVisiveis?: typeof BAIRROS }) {
  return (
    <footer className="mt-20 bg-[var(--brand-ink)] text-white">
      <HazardStripe />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <section aria-labelledby="atendemos" className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-yellow)]" />
            <span className="spec-label !text-white/60">Cobertura</span>
          </div>
          <h2 id="atendemos" className="mt-2 font-display text-2xl md:text-3xl">
            Atendemos todos os bairros de <span className="text-[var(--brand-yellow)]">Osasco</span>
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Locação e venda de betoneiras com entrega e retirada no mesmo dia.
          </p>
          <div className="mt-6">
            <BairrosGrid bairros={bairrosVisiveis ?? BAIRROS} variant="dark" />
          </div>
        </section>

        <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
              <span className="font-display text-lg">
                Betoneira <span className="text-[var(--brand-yellow)]">Osasco</span>
              </span>
            </div>
            <p className="mt-2 text-sm text-white/70">Locação e venda de betoneiras em toda Osasco e região.</p>
          </div>
          <div>
            <h3 className="spec-label !text-[var(--brand-yellow)]">Contato</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="tel:+5511975465766" className="hover:underline">(11) 97546-5766</a></li>
              <li><a href="https://wa.me/5511975465766" target="_blank" rel="noopener" className="hover:underline">WhatsApp</a></li>
              <li>Osasco , SP</li>
            </ul>
          </div>
          <div>
            <h3 className="spec-label !text-[var(--brand-yellow)]">Navegação</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/" className="hover:underline">Início</Link></li>
              <li><Link to="/servicos" className="hover:underline">Serviços</Link></li>
              <li><Link to="/comprar-betoneira" className="hover:underline">Comprar betoneira</Link></li>
              <li><Link to="/sobre" className="hover:underline">Sobre</Link></li>
              <li><Link to="/contato" className="hover:underline">Contato</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Betoneira Osasco , Locação e Venda. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
