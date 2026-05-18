import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-betoneira-osasco.webp";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b-2 border-[var(--brand-ink)] bg-background/95 backdrop-blur transition-[height,box-shadow] duration-200 ${
        scrolled ? "shadow-[0_4px_0_0_var(--brand-yellow)]" : ""
      }`}
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-[height] duration-200 ${scrolled ? "h-14" : "h-16"}`}>
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Betoneira Osasco" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="font-display text-xl tracking-tight text-[var(--brand-ink)]">
            Betoneira <span className="text-[var(--brand-navy)]">Osasco</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium uppercase tracking-wider md:flex">
          <Link to="/" className="nav-link" activeProps={{ "data-active": "true" }}>Início</Link>
          <Link to="/servicos" className="nav-link" activeProps={{ "data-active": "true" }}>Serviços</Link>
          <Link to="/comprar-betoneira" className="nav-link" activeProps={{ "data-active": "true" }}>Comprar</Link>
          <Link to="/sobre" className="nav-link" activeProps={{ "data-active": "true" }}>Sobre</Link>
          <Link to="/contato" className="nav-link" activeProps={{ "data-active": "true" }}>Contato</Link>
        </nav>
        <a
          href="https://wa.me/5511975465766"
          target="_blank"
          rel="noopener"
          className="hidden border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] px-4 py-2 text-sm font-bold uppercase text-[var(--brand-ink)] hard-shadow md:inline-block"
        >
          (11) 97546-5766
        </a>
      </div>
    </header>
  );
}
