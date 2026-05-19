import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HazardStripe } from "@/components/HazardStripe";
import { useReveal } from "@/lib/useReveal";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Serviço | Betoneira Osasco" },
      { name: "description", content: "Termos de serviço e condições de uso para o portal Betoneira Osasco. Leia nossas políticas de uso e isenção de responsabilidade." },
      { property: "og:title", content: "Termos de Serviço | Betoneira Osasco" },
      { property: "og:description", content: "Regras de uso, isenção de responsabilidade e termos contratuais do site Betoneira Osasco." },
      { property: "og:url", content: "https://betoneiraosasco.com.br/termos" },
    ],
    links: [{ rel: "canonical", href: "https://betoneiraosasco.com.br/termos" }],
  }),
  component: TermosPage,
});

function TermosPage() {
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
              Termos de <span className="text-[var(--brand-yellow)]">Serviço</span>
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
                Termos de Uso
              </h2>
              <p>
                O presente site <strong>Betoneira Osasco</strong> proporciona, incluindo todas as informações, ferramentas e serviços disponíveis para você, o usuário, com a condição da sua aceitação de todos os termos, condições, políticas e avisos declarados aqui.
              </p>
              <p className="mt-3">
                Ao visitar nosso site e/ou comprar/solicitar orçamentos, você está utilizando nossos “Serviços”. Consequentemente, você concorda com os seguintes termos e condições (“Termos de serviço”, “Termos”), incluindo os termos e condições e políticas adicionais mencionados neste documento e/ou disponíveis por hyperlink.
              </p>
              <p className="mt-3">
                Esses Termos de serviço se aplicam a todos os usuários do site, incluindo, sem limitação, os usuários que são navegadores, fornecedores, parceiros, clientes, lojistas e/ou contribuidores de conteúdo.
              </p>
              <p className="mt-3">
                Por favor, leia estes Termos de serviço cuidadosamente antes de acessar ou utilizar o nosso site. Ao acessar ou usar qualquer parte do site, você concorda com os Termos de serviço. Se você não concorda com todos os termos e condições deste acordo, então você não pode acessar o site ou usar quaisquer serviços.
              </p>
              <p className="mt-3">
                Quaisquer novos recursos ou ferramentas que forem adicionados ao site atual também devem estar sugeridos sob os Termos de serviço. Você pode revisar a versão mais atual dos Termos de serviço quando quiser nesta página. Reservamos o direito de atualizar, alterar ou trocar qualquer parte destes Termos de serviço ao publicar atualizações e/ou alterações no nosso site.
              </p>
              <p className="mt-3">
                É sua responsabilidade verificar as alterações feitas nesta página periodicamente. Seu uso contínuo ou acesso ao site após a publicação de quaisquer alterações constitui aceitação de tais alterações.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--brand-ink)] uppercase border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Termos do Site
              </h2>
              <p>
                Ao concordar com os Termos de serviço, você confirma que você é maior de idade em seu estado ou província de residência e que você nos deu seu consentimento para permitir que qualquer um dos seus dependentes menores de idade usem esse site.
              </p>
              <p className="mt-3">
                Você não deve usar nossos produtos ou informações para qualquer fim ilegal ou não autorizado. Você também não pode, ao usufruir deste Serviço, violar quaisquer leis em sua jurisdição.
              </p>
              <p className="mt-3">
                Violar qualquer um dos Termos tem como consequência a rescisão imediata dos seus serviços.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--brand-ink)] uppercase border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Condições Gerais
              </h2>
              <p>
                Reservamos o direito de recusar o serviço a qualquer pessoa por qualquer motivo a qualquer momento.
              </p>
              <p className="mt-3">
                Você entende que o seu conteúdo pode ser transferido sem criptografia e pode: (a) ser transmitido por várias redes; e (b) sofrer alterações para se adaptar e se adequar às exigências técnicas de conexão de redes ou dispositivos.
              </p>
              <p className="mt-3">
                Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do Serviço, uso do Serviço, acesso ao Serviço, ou qualquer contato no site através do qual o serviço é fornecido, sem nossa permissão expressa por escrito.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--brand-ink)] uppercase border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Integridade e Atualização das Informações
              </h2>
              <p>
                Não somos responsáveis por informações disponibilizadas neste site que não sejam precisas, completas ou atuais. O material desse site é fornecido apenas para fins informativos gerais e não deve ser usado como a única base para tomar decisões sem consultar fontes de informações primárias, mais precisas, mais completas ou mais atuais. Qualquer utilização do material desse site é por sua conta e risco.
              </p>
              <p className="mt-3">
                Esse site pode conter certas informações históricas. As informações históricas podem não ser atuais e são fornecidas apenas para sua referência. Reservamos o direito de modificar o conteúdo desse site a qualquer momento, mas nós não temos obrigação de atualizar nenhuma informação em nosso site. Você concorda que é de sua responsabilidade monitorar alterações no nosso site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--brand-ink)] uppercase border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Informações, Serviços e Preços
              </h2>
              <p>
                Os preços e descrições dos serviços ou equipamentos expostos estão sujeitos a alterações sem notificação prévia.
              </p>
              <p className="mt-3">
                Reservamos o direito de, a qualquer momento, modificar ou descontinuar o Serviço (ou qualquer parte ou conteúdo do mesmo) sem notificação em qualquer momento. Não nos responsabilizamos por você ou por qualquer terceiro por qualquer modificação, alteração de preço, suspensão ou descontinuação do Serviço.
              </p>
              <p className="mt-3">
                Fizemos todo o esforço possível para exibir da forma mais precisa as cores e imagens dos produtos e betoneiras que aparecem no site. Não podemos garantir que a exibição de qualquer cor no monitor do seu computador será 100% precisa.
              </p>
              <p className="mt-3">
                Reservamos o direito de limitar as quantidades de quaisquer produtos ou serviços que oferecemos, a nosso exclusivo critério. Qualquer oferta feita por qualquer produto ou serviço nesse site é nula onde for proibido por lei.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--brand-ink)] uppercase border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Ferramentas e Links de Terceiros
              </h2>
              <p>
                Podemos fornecer acesso a ferramentas ou links de terceiros que não monitoramos e nem temos qualquer controle ou envolvimento.
              </p>
              <p className="mt-3">
                Você reconhece e concorda que nós fornecemos acesso a tais ferramentas ”como elas são” e “conforme a disponibilidade” sem quaisquer garantias, representações ou condições de qualquer tipo e sem qualquer endosso. Não nos responsabilizamos de forma alguma pelo seu uso de ferramentas ou links opcionais de terceiros.
              </p>
              <p className="mt-3">
                Os links de terceiros neste site podem direcionar você para páginas externas que não são afiliadas a nós. Não nos responsabilizamos por examinar ou avaliar o conteúdo ou precisão. Não garantimos e nem temos obrigação ou responsabilidade por quaisquer materiais, produtos, sites ou serviços de terceiros.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--brand-ink)] uppercase border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Feedback e Comentários do Usuário
              </h2>
              <p>
                Os depoimentos, avaliações e comentários exibidos neste site são recebidos de diversas formas. Eles refletem experiências da vida real de indivíduos que utilizaram os serviços. No entanto, os resultados individuais podem variar e não garantimos que a sua experiência seja idêntica.
              </p>
              <p className="mt-3">
                Se você enviar ideias criativas, sugestões, depoimentos ou outros materiais (em conjunto chamados de ‘comentários’), você concorda que podemos, a qualquer momento, sem restrição, editar, copiar, publicar, distribuir e usar os comentários. Não nos responsabilizamos por manter comentários em sigilo ou pagar compensações por eles.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--brand-ink)] uppercase border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Isenção de Responsabilidades e Garantias
              </h2>
              <p>
                As informações contidas no site <strong>Betoneira Osasco</strong> são apenas para fins de informação geral. Não assumimos qualquer responsabilidade por erros ou omissões nos conteúdos do Serviço.
              </p>
              <p className="mt-3">
                Nós não garantimos, representamos ou justificamos que o seu uso do nosso serviço será totalmente pontual, seguro, sem erros ou interrupções. Você concorda que o seu uso ou incapacidade de usar o serviço é por sua conta e risco.
              </p>
              <p className="mt-3">
                Em nenhuma circunstância a <strong>Betoneira Osasco</strong>, nossos diretores, funcionários ou licenciadores serão responsáveis por qualquer prejuízo, perda, reclamação ou danos diretos, indiretos, incidentais, especiais ou consequentes de qualquer tipo, incluindo, sem limitação, lucros cessantes, perda de receita, perda de dados ou custos de reposição decorrentes do uso de qualquer um dos serviços ou produtos obtidos através do site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--brand-ink)] uppercase border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Indenização
              </h2>
              <p>
                Você concorda em indenizar, defender e isentar a <strong>Betoneira Osasco</strong> e nossos parceiros, diretores, prestadores de serviços e colaboradores de qualquer reclamação ou demanda, incluindo honorários de advogados, por quaisquer terceiros devido à sua violação destes Termos de serviço ou dos documentos que incorporam por referência.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--brand-ink)] uppercase border-b border-[var(--brand-yellow)] pb-1 mb-3">
                Independência e Rescisão
              </h2>
              <p>
                No caso de qualquer disposição destes Termos de serviço ser considerada ilegal, nula ou ineficaz, tal disposição deve, contudo, ser aplicável até ao limite máximo permitido pela lei aplicável. As obrigações e responsabilidades das partes incorridas antes da data de rescisão devem continuar após a rescisão deste acordo para todos os efeitos.
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
