import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-betoneira-osasco.webp";
import { WhatsappIcon } from "@/components/icons/Icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2" onClick={() => setMobileMenuOpen(false)}>
          <img src={logo} alt="Betoneira Osasco" width={56} height={56} className="h-10 w-10 sm:h-14 sm:w-14 object-contain" />
          <span className="font-display text-base sm:text-lg md:text-xl tracking-tight text-[var(--brand-ink)]">
            Betoneira <span className="text-[var(--brand-navy)]">Osasco</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium uppercase tracking-wider md:flex">
          <Link to="/" className="nav-link" activeProps={{ "data-active": "true" }}>Início</Link>
          <div className="relative group">
            <Link to="/servicos" className="nav-link flex items-center gap-1" activeProps={{ "data-active": "true" }}>
              Serviços
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute top-full left-0 pt-2 w-56 hidden group-hover:block z-50">
              <div className="flex flex-col bg-white border-2 border-[var(--brand-ink)] hard-shadow">
                <Link to="/locacao-de-betoneiras" className="px-4 py-3 hover:bg-[var(--brand-concrete)] hover:text-[var(--brand-navy)] border-b border-[var(--brand-ink)]/10 text-xs font-bold transition-colors">Locação de Betoneiras</Link>
                <Link to="/locacao-caminhao-betoneira" className="px-4 py-3 hover:bg-[var(--brand-concrete)] hover:text-[var(--brand-navy)] border-b border-[var(--brand-ink)]/10 text-xs font-bold transition-colors">Caminhão Betoneira</Link>
                <Link to="/entrega-e-retirada-de-betoneira" className="px-4 py-3 hover:bg-[var(--brand-concrete)] hover:text-[var(--brand-navy)] text-xs font-bold transition-colors">Entrega e Retirada</Link>
              </div>
            </div>
          </div>
          <Link to="/comprar-betoneira" className="nav-link" activeProps={{ "data-active": "true" }}>Comprar</Link>
          <Link to="/sobre" className="nav-link" activeProps={{ "data-active": "true" }}>Sobre</Link>
          <Link to="/contato" className="nav-link" activeProps={{ "data-active": "true" }}>Contato</Link>
          <Link to="/blog" className="nav-link" activeProps={{ "data-active": "true" }}>Blog</Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="https://wa.me/5511975465766?text=Vim%20do%20site%20gostaria%20de%20fazer%20or%C3%A7amento"
            target="_blank"
            rel="noopener"
            className="inline-flex border-2 border-[var(--brand-ink)] bg-[#25D366] text-white hover:bg-[#128C7E] px-2 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider shadow-[2px_2px_0_0_rgba(0,0,0,1)] md:hard-shadow items-center gap-1.5 transition-all"
          >
            <WhatsappIcon size={16} />
            <span>(11) 97546-5766</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="flex h-10 w-10 items-center justify-center border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] text-[var(--brand-ink)] shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[0px_0px_0_0_rgba(0,0,0,1)] md:hidden transition-all"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <nav className="border-t-2 border-[var(--brand-ink)] bg-background py-4 px-4 flex flex-col gap-3 md:hidden animate-fade-in">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold uppercase tracking-wider py-2 border-b border-[var(--brand-ink)]/10 hover:text-[var(--brand-navy)] transition-colors">Início</Link>
          <div className="flex flex-col border-b border-[var(--brand-ink)]/10">
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between py-2 text-base font-bold uppercase tracking-wider hover:text-[var(--brand-navy)] transition-colors text-left w-full"
            >
              <span>Serviços</span>
              <svg className={`w-5 h-5 text-[var(--brand-ink)] transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col pl-4 pb-3 pt-1 gap-3 border-l-2 border-[var(--brand-yellow)] ml-1 animate-fade-in">
                <Link to="/servicos" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-[var(--brand-navy)] transition-colors">Visão Geral</Link>
                <Link to="/locacao-de-betoneiras" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-[var(--brand-navy)] transition-colors">Locação de Betoneiras</Link>
                <Link to="/locacao-caminhao-betoneira" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-[var(--brand-navy)] transition-colors">Caminhão Betoneira</Link>
                <Link to="/entrega-e-retirada-de-betoneira" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-[var(--brand-navy)] transition-colors">Entrega e Retirada</Link>
              </div>
            )}
          </div>
          <Link to="/comprar-betoneira" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold uppercase tracking-wider py-2 border-b border-[var(--brand-ink)]/10 hover:text-[var(--brand-navy)] transition-colors">Comprar</Link>
          <Link to="/sobre" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold uppercase tracking-wider py-2 border-b border-[var(--brand-ink)]/10 hover:text-[var(--brand-navy)] transition-colors">Sobre</Link>
          <Link to="/contato" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold uppercase tracking-wider py-2 border-b border-[var(--brand-ink)]/10 hover:text-[var(--brand-navy)] transition-colors">Contato</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold uppercase tracking-wider py-2 border-b border-[var(--brand-ink)]/10 hover:text-[var(--brand-navy)] transition-colors">Blog</Link>
          <a
            href="https://wa.me/5511975465766?text=Vim%20do%20site%20gostaria%20de%20fazer%20or%C3%A7amento"
            target="_blank"
            rel="noopener"
            className="flex justify-center items-center gap-2 border-2 border-[var(--brand-ink)] bg-[#25D366] text-white hover:bg-[#128C7E] py-3 text-sm font-bold uppercase tracking-wider hard-shadow mt-2 transition-all"
          >
            <WhatsappIcon size={16} />
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
