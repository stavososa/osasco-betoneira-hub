import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-betoneira-osasco.webp";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Betoneira Osasco — Locação e Venda"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-xl font-bold uppercase tracking-tight text-[var(--brand-navy)]">
            Betoneira <span className="text-[var(--brand-yellow)]">Osasco</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link to="/" className="hover:text-[var(--brand-navy)]" activeProps={{ className: "text-[var(--brand-navy)] font-semibold" }}>Início</Link>
          <Link to="/servicos" className="hover:text-[var(--brand-navy)]" activeProps={{ className: "text-[var(--brand-navy)] font-semibold" }}>Serviços</Link>
          <Link to="/sobre" className="hover:text-[var(--brand-navy)]" activeProps={{ className: "text-[var(--brand-navy)] font-semibold" }}>Sobre</Link>
          <Link to="/contato" className="hover:text-[var(--brand-navy)]" activeProps={{ className: "text-[var(--brand-navy)] font-semibold" }}>Contato</Link>
        </nav>
        <a
          href="https://wa.me/5511975465766"
          target="_blank"
          rel="noopener"
          className="hidden rounded-md bg-[var(--brand-yellow)] px-4 py-2 text-sm font-semibold text-[var(--brand-navy)] shadow-sm hover:brightness-95 md:inline-block"
        >
          (11) 97546-5766
        </a>
      </div>
    </header>
  );
}
