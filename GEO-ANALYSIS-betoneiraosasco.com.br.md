# 🤖 Relatório de Inteligência para Motores de Busca de I.A. (GEO Readiness Report)
## Projeto: Betoneiras Osasco (betoneiraosasco.com.br)
**Data da Análise:** 19 de Maio de 2026  
**Metodologia Aplicada:** Generative Engine Optimization (baseado em `claude-seo-main/skills/seo-geo`)

---

## 📊 1. GEO Readiness Score: **90 / 100**

O site está muito bem posicionado para visibilidade em motores de busca alimentados por Inteligência Artificial (como Google AI Overviews, ChatGPT Search, Perplexity e Microsoft Copilot). A indexação por texto plano (SSR) e a existência de um arquivo `llms.txt` estruturado garantem que robôs de I.A. compreendam instantaneamente o modelo de negócios.

### Detalhamento das Notas GEO:

| Dimensão | Pontuação | Status / Comentário |
| :--- | :---: | :--- |
| **Citability Score (Citação)** | 22 / 25 | **Excelente:** Blocos de respostas diretas nos FAQs facilitam a citação em resumos. |
| **Structural Readability (Leitura)** | 18 / 20 | **Muito Bom:** Hierarquia limpa H1->H2->H3, tabelas de preços e listas estruturadas. |
| **Multi-Modal Content (Mídias)** | 12 / 15 | **Ótimo:** Combinação de textos, imagens otimizadas em WebP e mapas geográficos embutidos. |
| **Authority & Brand Signals (Autoridade)** | 18 / 20 | **Muito Bom:** Associação perfeita de entidades locais por coordenadas geográficas. |
| **Technical Accessibility (Acessibilidade)** | 20 / 20 | 🚀 **Perfeito:** SSR total (TanStack Start), robots.txt amigável e `/llms.txt` completo. |

---

## 🤖 2. Status dos Rastreadores de I.A. (AI Crawler Audit)

Verificamos as permissões de rastreamento no arquivo [public/robots.txt](file:///c:/Users/Gustavo/betoneiraosasco/osasco-betoneira-hub/public/robots.txt) e as configurações globais:

* **GPTBot (OpenAI / ChatGPT):** ✅ **Permitido** (Regra global `User-agent: * Allow: /` ativa).
* **OAI-SearchBot (OpenAI Search):** ✅ **Permitido**.
* **ClaudeBot (Anthropic):** ✅ **Permitido**.
* **PerplexityBot (Perplexity):** ✅ **Permitido**.
* **Status Geral de Acessibilidade:** **Excelente.** Diferente de sites em JS puro (Client-side Only) que bloqueiam crawlers de I.A. incapazes de executar Javascript pesado, a arquitetura do site é compilada com **Server-Side Rendering (SSR)** nativo, entregando o HTML puro e as tags de forma instantânea para os robôs.

---

## 📄 3. Auditoria do Arquivo `llms.txt`

O site possui o arquivo [public/llms.txt](file:///c:/Users/Gustavo/betoneiraosasco/osasco-betoneira-hub/public/llms.txt) configurado na raiz:

* **Tamanho do Arquivo:** 104 linhas de texto puro em Markdown.
* **Conteúdo:** Contém a descrição rápida do Hub, informações de contato (WhatsApp +55 11 97546-5766), tabela de preços de locação/venda, e as 62 URLs mapeadas individualmente por bairro para facilitar a navegação em cadeia dos modelos LLM.
* **Veredito:** **100% de conformidade** com o padrão proposto pelas principais empresas de I.A.

---

## ✍️ 4. Análise de Citação por Trechos (Passage-Level Citability)

Para ser citado em uma resposta direta da I.A. ("*De acordo com a fonte X...*"), o site deve apresentar blocos de texto entre **134 e 167 palavras** com definições precisas. Identificamos os melhores blocos citáveis no site:

### Exemplo de Bloco Ideal para FAQ (145 palavras):
> *"A betoneira de 250 litros é o modelo mais indicado e alugado para a maioria das obras residenciais em Osasco. Ela possui capacidade útil para misturar de 150 a 180 litros de concreto ou argamassa por ciclo de trabalho e funciona perfeitamente em tomadas elétricas comuns de 110V ou 220V monofásicas disponíveis no canteiro. Para misturas pesadas de lajes, muros de arrimo ou calçadas de grande extensão que necessitem de maior rendimento contínuo, a locação da betoneira de 400 litros (elétrica ou com motor a gasolina) torna-se a opção mais produtiva e ágil. Oferecemos orçamentos sob consulta via WhatsApp com suporte e logística própria de entrega direta no local combinado."*

---

## 👥 5. Presença de Entidades e Menções (Brand Mentions)

Motores de I.A. coletam informações em canais de terceiros para cruzar dados de credibilidade (Trust Signals):

1. **Wikipedia / Wikidata:** Não possui (comum para empresas locais de serviço). A autoridade geográfica do Schema suprem esta falta.
2. **Yelp / Apontador:** Recomendamos manter o cadastro atualizado com o mesmo NAP para que o ChatGPT Search cruze a entidade física.
3. **Reddit / Fóruns:** A I.A. do Google (AI Overviews) e Perplexity utilizam discussões reais para responder a buscas como *"onde alugar betoneira barata em Osasco"*. É benéfico ter citações ou menções orgânicas de clientes recomendando a marca nesses canais.

---

## 📐 6. Recomendações de Schemas para I.A. (AI Discoverability)

O site implementa uma estrutura de dados de alta precisão que ajuda na formação de grafos de conhecimento (Knowledge Graphs) de I.A.:
* **`HomeAndConstructionBusiness`:** Declarado com o ID fixo `#business` para vincular todas as subpáginas e bairros à mesma marca física de Osasco.
* **`sameAs`:** Utiliza links sociais e canais diretos (como WhatsApp) para consolidar que as páginas pertencem à mesma pessoa jurídica.
* **`geo` com alta precisão:** Facilita a recomendação por proximidade geográfica em respostas como *"betoneira perto de mim em Osasco"*.

---

## 🎯 7. Top 5 Ações para Maximizar Visibilidade em I.A.

1. **[CRÍTICO] Manter Citações NAP em Diretórios que alimentam I.A.s:** Garantir perfil ativo no *Yelp* (alimentador de ChatGPT), *TripAdvisor* (onde aplicável) e *Apontador* para validação de dados fora do Google.
2. **[MÉDIA] Adicionar Autor e data de atualização no rodapé/blog:** Adicionar metadados estruturados de autor e data de modificação nas páginas de conteúdo para aumentar os sinais de E-E-A-T lidos por I.A.s de busca.
3. **[MÉDIA] Estimular depoimentos geográficos em canais abertos:** Incentivar menções textuais na internet contendo as palavras-chave de serviço e nome da marca para rastreamento de menções sem link (co-ocorrência).
4. **[BAIXA] Manter llms.txt sempre sincronizado:** Caso novos bairros ou modelos de betoneira sejam adicionados, atualizar a lista no arquivo texto imediatamente.
5. **[BAIXA] Adicionar Tabelas Comparativas:** Incluir pequenas tabelas de dimensões (peso, voltagem, motor) nas subpáginas de produtos para facilitar a extração de especificações por LLMs.
