import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HazardStripe } from "@/components/HazardStripe";
import { useReveal } from "@/lib/useReveal";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Betoneira Osasco" },
      { name: "description", content: "Política de privacidade e proteção de dados do portal Betoneira Osasco. Entenda o uso de cookies e como tratamos suas informações." },
      { property: "og:title", content: "Política de Privacidade | Betoneira Osasco" },
      { property: "og:description", content: "Saiba mais sobre como protegemos seus dados pessoais e nosso uso de cookies." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/privacidade/" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/privacidade/" }],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative noise-overlay bg-[var(--brand-navy)] py-12 text-white">
          <div className="mx-auto max-w-4xl px-4">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-yellow)]" />
              <span className="spec-label !text-white/70">Políticas do Site</span>
            </div>
            <h1 className="reveal reveal-delay-1 mt-3 font-display text-4xl md:text-5xl uppercase">
              Política de <span className="text-[var(--brand-yellow)]">Privacidade</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-2 text-white/80 text-sm">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>
          <HazardStripe />
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16">
          <div className="reveal space-y-8 text-foreground/90 leading-relaxed text-sm md:text-base">
            <div>
              <h2 className="font-display text-xl text-[var(--brand-ink)] uppercase border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Política de Privacidade
              </h2>
              <p>
                A política principal do portal <Link to="/" className="font-bold text-[var(--brand-navy)] hover:underline">Betoneira Osasco</Link> é respeitar a sua privacidade em relação a qualquer informação que possamos coletar. Somos totalmente transparentes sobre as nossas práticas e sobre nossa forma de trabalhar — caso queira conhecer os bastidores da nossa equipe, visite a página <Link to="/sobre" className="font-bold text-[var(--brand-navy)] hover:underline">Sobre Nós</Link>.
              </p>
              <p className="mt-3">
                Solicitamos informações pessoais apenas quando realmente precisamos delas para formalizar a entrega de algum dos nossos <Link to="/servicos" className="font-bold text-[var(--brand-navy)] hover:underline">serviços oferecidos</Link> — seja durante o processo de faturamento na área destinada a <Link to="/comprar-betoneira" className="font-bold text-[var(--brand-navy)] hover:underline">comprar betoneira</Link>, ou para alinhar o envio logístico pesado da <Link to="/locacao-caminhao-betoneira" className="font-bold text-[var(--brand-navy)] hover:underline">locação de caminhão betoneira</Link>. Fazemo-lo por meios justos e legais, com o seu pleno consentimento.
              </p>
              <p className="mt-3">
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, os protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>
              <p className="mt-3">
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade e Termos de Uso.
              </p>
              <p className="mt-3">
                Você é livre para recusar a nossa solicitação de informações pessoais na página de <Link to="/contato" className="font-bold text-[var(--brand-navy)] hover:underline">contato</Link>, entendendo que talvez não possamos fornecer orçamentos de <Link to="/servicos" className="font-bold text-[var(--brand-navy)] hover:underline">serviços</Link> desejados.
              </p>
              <p className="mt-3">
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, fale conosco através do nosso canal de atendimento.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--brand-ink)] uppercase border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Política de Cookies
              </h2>
              <p>
                Quando os visitantes participam e deixam comentários de dúvidas sobre nossas dicas e guias de obra no <Link to="/blog" className="font-bold text-[var(--brand-navy)] hover:underline">blog</Link>, ou quando preenchem os formulários de comunicação na página de <Link to="/contato" className="font-bold text-[var(--brand-navy)] hover:underline">contato</Link>, coletamos os dados mostrados no formulário, além do endereço de IP e de dados do navegador do visitante, para auxiliar na detecção de spam e segurança da plataforma.
              </p>

              <h3 className="font-display text-lg text-[var(--brand-ink)] mt-4 mb-2">
                O que são cookies?
              </h3>
              <p>
                Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou ‘quebrar’ certos elementos da funcionalidade do site.
              </p>

              <h3 className="font-display text-lg text-[var(--brand-ink)] mt-4 mb-2">
                Como usamos os cookies?
              </h3>
              <p>
                Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.
              </p>

              <h3 className="font-display text-lg text-[var(--brand-ink)] mt-4 mb-2">
                Desativar cookies
              </h3>
              <p>
                Você pode impedir a configuração de cookies ajustando as configurações do seu navegador. Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg text-[var(--brand-ink)] border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Cookies que Definimos
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Cookies relacionados ao login:</strong> Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página.
                </li>
                <li>
                  <strong>Cookies relacionados a formulários:</strong> Quando você envia dados por meio de um formulário como os encontrados nas páginas de contato, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.
                </li>
                <li>
                  <strong>Cookies de preferências do site:</strong> Para proporcionar uma ótima experiência, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg text-[var(--brand-ink)] border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Cookies de Terceiros
              </h3>
              <p>
                Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  Este site usa o <strong>Google Analytics</strong>, que é uma das soluções de análise mais de confiança da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas.
                </li>
                <li>
                  As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--brand-ink)] uppercase border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Alterações na Política
              </h2>
              <p>
                A <strong>Betoneira Osasco</strong> poderá alterar esta política de privacidade e segurança de dados a qualquer momento. Toda alteração na presente Política de Privacidade e Segurança de Dados será veiculada neste espaço. Portanto, solicitamos a leitura periódica desta Política, assim como nossos <Link to="/termos" className="font-bold text-[var(--brand-navy)] hover:underline">Termos de Uso</Link>, como meio de se informar sobre a forma que coletamos, tratamos e protegemos as suas informações.
              </p>
            </div>

            <div className="mt-12 bg-[var(--brand-concrete)] border-l-4 border-[var(--brand-yellow)] p-5">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong>Nota de Isenção e Propósito:</strong> Este site é destinado totalmente ao foco de aquisição de clientes de forma orgânica por um usuário totalmente independente do setor de betoneiras e construção.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
