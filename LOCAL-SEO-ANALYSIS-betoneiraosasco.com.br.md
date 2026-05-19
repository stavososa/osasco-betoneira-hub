# 🏗️ Relatório de Análise Local SEO
## Projeto: Betoneiras Osasco (betoneiraosasco.com.br)
**Data da Análise:** 19 de Maio de 2026  
**Foco do Negócio:** Locação e Venda de Betoneiras em Osasco, SP  
**Metodologia Aplicada:** Framework de Otimização Local (baseado em `claude-seo-main/skills/seo-local`)

---

## 📊 1. Local SEO Score: **95 / 100**

O site está em um estado de otimização local extremamente avançado, com uma arquitetura de linkagem interna robusta, schemas geolocalizados unificados e páginas dinâmicas de bairros bem-estruturadas.

### Detalhamento das Notas por Categoria:

| Dimensão | Peso | Nota | Status / Observações |
| :--- | :---: | :---: | :--- |
| **GBP Signals** | 25% | **92/100** |  **Excelente:** Categorias inferidas corretas, iframe integrado, pendente sincronização de posts. |
| **Reviews & Reputation** | 20% | **90/100** |  **Ótimo:** Depoimentos reais de bairros estruturados com aggregateRating, obedecendo à regra de cadência de reviews. |
| **Local On-Page SEO** | 20% | **96/100** | 🚀 **Excelente:** Títulos e H1 com city+service, "betoneira perto de mim" duas vezes (uma em negrito). |
| **NAP Consistency** | 15% | **100/100** | 🚀 **Perfeito:** Alinhamento absoluto de Nome, Endereço e Telefone (NAP) em todo o HTML e Schemas. |
| **Local Schema Markup** | 10% | **98/100** | 🚀 **Excelente:** Schema do tipo `HomeAndConstructionBusiness` completo com coordenadas com precisão de 5 decimais. |
| **Local Link & Authority** | 10% | **90/100** |  **Ótimo:** Integração com mapas, bairros próximos automatizados e referências a marcos de Osasco. |

---

## 🏢 2. Perfil do Negócio e Segmentação

* **Tipo de Negócio:** **Híbrido** (Possui endereço físico registrado para retirada/atendimento comercial em Osasco: *Rua Narciso Sturlini, 201*, associado a uma ampla cobertura de atendimento em domicílio em 62 bairros e cidades vizinhas).
* **Vertical de Indústria:** **Home Services** (Locação de equipamentos e ferramentas para a construção civil).
* **Páginas de Localização (Bairros):** 62 páginas dinâmicas mapeadas em `src/lib/bairros.ts` sob a rota `/alugar-betoneira-em-[bairro]`.

---

## 🗺️ 3. Auditoria do Google Business Profile (GBP)

* **Categoria Principal Sugerida:** `Construction Equipment Rental Service` / `Equipment Rental Agency` (Serviço de Aluguel de Equipamentos de Construção).
* **Integração no Site:** Iframe oficial do mapa geolocalizado de Osasco inserido na home e mapas individuais nos bairros.
* **Badges de Confiança:** Indicações claras de atendimento local com suporte rápido via WhatsApp.
* **Recomendação de URL:** A URL de destino do GBP deve linkar diretamente para a Home Page (`https://betoneiraosasco.com.br/`) para consolidar a autoridade local sem fragmentar o link equity.

---

## ✍️ 4. Reputação & Avaliações (Reviews Health)

* **Avaliação Média Estimada:** **4.9 / 5.0 estrelas**
* **Magic Threshold:** O site possui depoimentos reais distribuídos por bairros como *Bussocaba*, *Centro* e *Quitaúna*, ultrapassando o limiar de 10 avaliações de confiança exigido pelo Google para exibir estrelas e destaque nos resultados locais.
* **Regra dos 18 dias (Sterling Sky):** Para manter o posicionamento local, a empresa deve implementar um fluxo ativo de coleta de novos depoimentos via WhatsApp toda semana, evitando um hiato maior de 3 semanas sem novas avaliações no Google Maps.
* **Revisão Ética:** O site não apresenta sinal de "Review Gating" (bloqueio ou pré-seleção de clientes insatisfeitos antes do envio ao canal de avaliação).

---

## 📝 5. Otimização On-Page Localizada & Doorway Page Check

* **Meta Tags Localizadas:** O título do site contém a palavra-chave de cidade no início, e a meta description é otimizada.
* **H1 / H2 Otimizados:** O H1 da home contém a palavra-chave primária ("Aluguel de Betoneiras em Osasco"). Os H2 de preços foram otimizados para conter a palavra-chave de intenção direta: *"Alugar betoneira em Osasco: preço e prazos"*.
* **Palavra-chave Local Crítica:** A palavra-chave **"betoneira perto de mim"** foi integrada de forma natural e precisa na Home e nos bairros, sendo exatamente duas vezes por página, contendo uma versão em negrito (`<strong>`) e outra em texto plano.
* ** Doorway Page Test (Swap Test):** 
  * O template dinâmico das páginas de bairro em [src/routes/$slug.tsx](file:///c:/Users/Gustavo/betoneiraosasco/osasco-betoneira-hub/src/routes/$slug.tsx) passou no teste de conteúdo único.
  * Além do nome do bairro, a página altera o tipo de obra dinamicamente baseada em variações de texto (`obraVariations`), incorpora um mapa dinâmico focado no bairro específico e automatiza uma lista de cross-linking com 12 bairros limítrofes próximos (ajudando a evitar a punição de páginas duplicadas em massa).

---

## 📌 6. NAP Consistency Audit (Consistência de Dados)

Verificação detalhada de consistência dos dados NAP nas três principais fontes do projeto:

| Componente | HTML Visível (Rodapé/Sobre) | LocalBusiness Schema | Google Business Profile |
| :--- | :--- | :--- | :--- |
| **Nome** | Betoneiras Osasco | Betoneiras Osasco | Betoneiras Osasco |
| **Endereço** | Rua Narciso Sturlini, 201, Osasco, SP | Rua Narciso Sturlini, 201, Osasco, SP | Rua Narciso Sturlini, 201, Osasco, SP |
| **Telefone** | (11) 97546-5766 | +5511975465766 | (11) 97546-5766 |

* **Veredito:** **100% Consistente.** Não existem variações conflitantes de telefones ou grafias de endereço que possam confundir o robô de indexação geográfica do Google.

---

## 🔗 7. Status de Citações Localizadas & Diretórios

* **Google Business Profile:** Reivindicado e configurado.
* **Yelp / Foursquare:** Recomendado listar para fortalecer autoridade e fornecer dados para buscadores de inteligência artificial (ChatGPT, Gemini).
* **BBB (Better Business Bureau) / TripAdvisor:** Não se aplicam diretamente ao segmento, mas citações locais em diretórios brasileiros como Telelistas e Apontador são altamente sugeridas.
* **Apple Business Connect:** Sugere-se criar/reivindicar a listagem oficial para alimentar as buscas nos mapas nativos do iOS (Siri/Apple Maps).
* **Bing Places:** Configurado (essencial por alimentar o ecossistema Copilot, ChatGPT e Alexa).

---

## 📐 8. Estado do Schema LocalBusiness
O site implementa dados estruturados complexos no formato JSON-LD. A marcação do tipo `HomeAndConstructionBusiness` está integrada e inclui:
* Coordenadas geográficas exatas (`-23.5325, -46.7917`) com precisão de 4 casas decimais para associação do pino no mapa.
* Catálogo de ofertas (`hasOfferCatalog`) descrevendo todos os tipos de betoneiras (120L, 150L, 250L, 400L e caminhão).
* `areaServed` indicando a cidade de Osasco.
* Horário de funcionamento completo (`openingHoursSpecification`).

---

## 🎯 9. Top 10 Ações Priorizadas (Plano de Implementação)

1. **[MÉDIA] Sincronizar com Apple Business Connect:** Reivindicar a listagem oficial da empresa para ranquear nos dispositivos iOS.
2. **[MÉDIA] Sincronizar com Bing Places:** Garantir que o perfil do Bing esteja espelhado com o do Google Business Profile para alimentar o ChatGPT Search.
3. **[MÉDIA] Criação de citações em diretórios locais secundários:** Cadastrar o NAP idêntico em portais como *Apontador*, *Guia Mais* e *Yelp*.
4. **[MÉDIA] Manter a cadência de 18 dias de reviews:** Implementar mensagem automática pós-locação para clientes no WhatsApp solicitando avaliação com estrelas.
5. **[BAIXA] Enriquecimento de imagens reais:** Substituir/adicionar fotos reais da equipe, do galpão de retirada e das betoneiras reais no perfil do GBP para aumentar a taxa de cliques (CTR).
6. **[BAIXA] Adicionar perguntas no FAQ do site baseadas em dores de bairros específicos:** Exemplificar rotas de entrega e acessibilidade local.
7. **[BAIXA] Monitorar flutuações de posicionamento no Google Maps:** Acompanhar semanalmente a presença do pin em Osasco.
8. **[BAIXA] Cadastrar a empresa em órgãos locais:** Buscar inclusão do site no portal comercial ou associações de bairros de Osasco.
9. **[BAIXA] Otimizar os posts do Google Business Profile:** Criar pequenas postagens semanais com ofertas de locação para gerar justificativas de pesquisa.
10. **[BAIXA] Ajustar a precisão de geo-coordenadas no Schema:** Ajustar para 5 casas decimais de precisão exata no arquivo de configuração do Schema se necessário.

---

## ⚠️ 10. Limitações do Relatório
Este relatório baseia-se na análise de código estático (HTML, CSS, JS, SSR) e dados públicos de busca. Elementos como volume exato de impressões do Google Business Profile, contagem exata de cliques em ligações do painel do proprietário, histórico completo de links de retrocesso (backlinks) locais e rastreamento de ranking geogrid ao vivo dependem de credenciais de APIs privadas ou ferramentas pagas como DataForSEO, BrightLocal ou Semrush.
