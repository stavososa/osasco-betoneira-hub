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
          <img src={logo} alt="Betoneira Osasco" width={56} height={56} className="h-14 w-14 object-contain" />
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
          <Link to="/blog" className="nav-link" activeProps={{ "data-active": "true" }}>Blog</Link>
        </nav>
        <a
          href="https://wa.me/5511975465766"
          target="_blank"
          rel="noopener"
          className="hidden border-2 border-[var(--brand-ink)] bg-[#25D366] text-white hover:bg-[#128C7E] px-4 py-2 text-sm font-bold uppercase tracking-wider hard-shadow md:inline-flex items-center gap-2 transition-colors"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.013-5.11-2.861-6.958C16.63 1.992 14.153.977 11.517.977c-5.442 0-9.87 4.422-9.873 9.861-.001 1.73.46 3.42 1.337 4.927l-.994 3.633 3.73-.979a9.78 9.78 0 0 0 4.333 1.019zm10.748-7.234c-.29-.145-1.72-.848-1.986-.944-.266-.096-.46-.145-.652.145-.19.29-.738.944-.905 1.137-.166.19-.33.21-.62.065-.29-.145-1.225-.45-2.332-1.44-.862-.77-1.443-1.72-1.61-2.01-.166-.29-.017-.448.128-.592.13-.13.29-.338.435-.508.145-.17.193-.29.29-.483.097-.19.048-.36-.024-.508-.073-.146-.652-1.57-.893-2.148-.235-.568-.475-.49-.652-.499-.168-.008-.362-.01-.557-.01-.195 0-.514.073-.783.362-.269.29-1.026 1.003-1.026 2.446 0 1.443 1.05 2.837 1.196 3.03.146.193 2.067 3.157 5.008 4.43.7.303 1.246.484 1.672.62.704.223 1.346.19 1.854.114.566-.083 1.72-.702 1.962-1.38.243-.678.243-1.257.17-1.38-.073-.121-.269-.19-.559-.336z"/>
          </svg>
          (11) 97546-5766
        </a>
      </div>
    </header>
  );
}
