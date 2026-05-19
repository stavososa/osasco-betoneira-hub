# 🌐 Relatório de Otimização Internacional e Hreflang
## Projeto: Betoneiras Osasco (betoneiraosasco.com.br)
**Data da Análise:** 19 de Maio de 2026  
**Metodologia Aplicada:** Framework de Validação de Hreflang (baseado em `claude-seo-main/skills/seo-hreflang`)

---

## 📊 1. Resumo da Análise Internacional

* **Total de Páginas Analisadas:** 62 páginas de bairros + Home Page + páginas de serviço/sobre/contato.
* **Idiomas Detectados:** 1 (Português do Brasil - `pt-BR`).
* **Erros de Hreflang Encontrados:** **0** (Não aplicável).
* **Necessidade de Hreflang:** **Isento.** Como o site opera em um modelo estritamente monolocal e monolíngue (serviços de locação de ferramentas físicas na região de Osasco, SP), **a implementação de tags hreflang não é necessária nem recomendada**. O Google não exige hreflang quando há apenas uma versão de idioma e região ativa.

---

## 🔍 2. Validação Técnica de Sinais de Idioma

Embora o site não necessite de mapeamento multidomínio ou multi-idioma (hreflang), os sinais de localização para robôs de busca e mídias sociais foram verificados no arquivo de layout global [src/routes/__root.tsx](file:///c:/Users/Gustavo/betoneiraosasco/osasco-betoneira-hub/src/routes/__root.tsx):

| Sinal Técnico | Valor Configurado | Status | Observação |
| :--- | :--- | :---: | :--- |
| **HTML Lang Attribute** | `<html lang="pt-BR">` | ✅ Correto | Define perfeitamente o público-alvo linguístico do Brasil. |
| **Open Graph Locale** | `{ property: "og:locale", content: "pt_BR" }` | ✅ Correto | Garante formatação nativa ao compartilhar a página no ecossistema do Meta. |
| **Canonical Alignment** | Canônicos auto-referenciados absolutos | ✅ Correto | Evita confusões de indexação em variações locais de páginas. |

---

## 🇧🇷 3. Validação de Formatadores Locais (Locale Format Verification)

De acordo com o mapeamento regional para `pt-BR`, todos os formatos exibidos nas páginas estão em conformidade com as diretrizes locais:

1. **Moeda:** Exibição consistente em Reais (R$) com vírgula para centavos e ponto para milhares (Ex: `R$ 150,00`).
2. **Telefone:** Uso de links clicáveis padrão brasileiro `tel:` e WhatsApp com código internacional do país (`55`):
   * WhatsApp: `https://wa.me/5511975465766`
   * Link telefônico: `+55 11 97546-5766`
3. **Endereço:** Formatação seguindo o padrão da ABNT: *Nome da Rua, Número - Bairro, Osasco - SP, CEP* (`06018-100`).

---

## 🎯 4. Recomendações e Boas Práticas

1. **Garantir que a pasta `public/` e `robots.txt` não apontem para subdomínios inativos:** O site atualmente não possui subdomínios de tradução (`en.`, `es.`), o que é ideal.
2. **Evitar Plugins de Tradução Automática sem Revisão (como widgets de Google Translate flutuantes):** Tradutores automáticos geram conteúdo que não é indexado pelo Google e prejudicam a experiência do usuário de busca nativa (SXO).
3. **Não inserir hreflang de um único idioma:** Evitar adicionar `<link rel="alternate" hreflang="pt-br" ...>` se não houver um alternativo real. O Google ignora hreflang de auto-referência única se não houver links de correspondência externa bidirecional.

---

## ⚠️ 5. Limitações
Esta auditoria assume que o modelo de negócios de locação física da empresa continuará focado exclusivamente no mercado brasileiro de língua portuguesa. Caso ocorra uma expansão internacional do Hub ou subdomínios específicos para outras regiões geográficas com idiomas distintos, uma reavaliação completa baseada em sitemaps multilíngues com mapeamento x-default e validação de retorno bidirecional (mesh) deverá ser conduzida.
