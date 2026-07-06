import { Link } from "@tanstack/react-router";
import { BAIRROS } from "@/lib/bairros";
import { BairrosGrid } from "./BairrosGrid";
import { HazardStripe } from "./HazardStripe";
import logo from "@/assets/logo-betoneira-osasco.webp";
import googleSafeBrowsing from "@/assets/google-safe-browsing.webp";
import brasaoDeOsasco from "@/assets/brasao-de-osasco.webp";

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

        <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Betoneira Osasco"
                width={64}
                height={64}
                className="h-16 w-16 object-contain brightness-0 invert"
              />
              <span className="font-display text-2xl">
                Betoneira <span className="text-[var(--brand-yellow)]">Osasco</span>
              </span>
            </div>
            <p className="mt-2 text-sm text-white/70">Locação e venda de betoneiras em toda Osasco e região.</p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://transparencyreport.google.com/safe-browsing/search?url=betoneiraosasco.com.br&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <img
                  src={googleSafeBrowsing}
                  alt="Google Safe Browsing - Betoneira Osasco"
                  width={168}
                  height={56}
                  className="h-14 w-auto object-contain rounded-xl shadow-lg"
                  loading="lazy"
                />
              </a>
              <a
                href="https://osasco.sp.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <img
                  src={brasaoDeOsasco}
                  alt="Brasão de Osasco SP"
                  width={64}
                  height={64}
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="spec-label !text-[var(--brand-yellow)]">Contato</h3>
            <ul className="mt-2 space-y-1 text-sm text-white/90">
              <li><a href="tel:+5511975465766" className="hover:underline">(11) 97546-5766</a></li>
              <li><a href="https://wa.me/5511975465766" target="_blank" rel="noopener" className="hover:underline">WhatsApp</a></li>
              <li>Osasco - SP</li>
            </ul>

            <h3 className="spec-label !text-[var(--brand-yellow)] mt-5">Institucional</h3>
            <ul className="mt-2 space-y-1 text-sm text-white/90">
              <li><Link to="/sobre" className="hover:underline">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:underline">Fale Conosco</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog e Guias</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="spec-label !text-[var(--brand-yellow)]">Serviços</h3>
            <ul className="mt-2 space-y-1 text-sm text-white/90">
              <li><Link to="/locacao-de-betoneiras" className="hover:underline">Locação de Betoneiras</Link></li>
              <li><Link to="/locacao-caminhao-betoneira" className="hover:underline">Caminhão Betoneira</Link></li>
              <li><Link to="/entrega-e-retirada-de-betoneira" className="hover:underline">Entrega e Retirada</Link></li>
              <li><Link to="/comprar-betoneira" className="hover:underline">Comprar Betoneira</Link></li>
              <li><Link to="/servicos" className="hover:underline font-bold text-[var(--brand-yellow)]">Ver todos os serviços</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="spec-label !text-[var(--brand-yellow)]">Equipamentos</h3>
            <ul className="mt-2 space-y-1 text-sm text-white/90">
              <li><Link to="/betoneira-120l" className="hover:underline">Betoneira 120L</Link></li>
              <li><Link to="/betoneira-150l" className="hover:underline">Betoneira 150L</Link></li>
              <li><Link to="/betoneira-250l" className="hover:underline">Betoneira 250L</Link></li>
              <li><Link to="/betoneira-400l-eletrica" className="hover:underline">Betoneira 400L Elétrica</Link></li>
              <li><Link to="/betoneira-400l-gasolina" className="hover:underline">Betoneira 400L a Gasolina</Link></li>
              <li><Link to="/caminhao-betoneira" className="hover:underline">Caminhão Betoneira</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Betoneira Osasco , Locação e Venda. Todos os direitos reservados.
          {" · "}
          <a href="/sitemap.xml" className="hover:underline hover:text-white/80">Sitemap</a>
          {" · "}
          <Link to="/termos" className="hover:underline hover:text-white/80">Termos de Uso</Link>
          {" · "}
          <Link to="/privacidade" className="hover:underline hover:text-white/80">Política de Privacidade</Link>
        </p>
      </div>
    </footer>
  );
}
