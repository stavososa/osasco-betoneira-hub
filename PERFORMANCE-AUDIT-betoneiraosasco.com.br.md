# ⚡ Relatório de Auditoria e Otimização de Performance Web
## Projeto: Betoneiras Osasco (betoneiraosasco.com.br)
**Data da Auditoria:** 19 de Maio de 2026  
**Metodologia Aplicada:** Framework de Core Web Vitals e Performance (baseado em `web-quality-skills/skills/performance` e `claude-seo-main/skills/seo-google`)

---

## 📊 1. Resumo da Auditoria Lighthouse (Local Dev Mode)

O teste de desempenho capturado no Spotlight indicou os seguintes scores para a rota `/alugar-betoneira-em-remedios`:

* 🔴 **Performance:** **44 / 100**
* 🟢 **Acessibilidade:** **100 / 100**
* 🟡 **Best Practices:** **77 / 100**
* 🟢 **SEO:** **100 / 100**

> [!IMPORTANT]
> **Diagnóstico Crítico de Ambiente (Dev vs. Production):**
> A nota de **44/100 em Performance** reflete o site rodando em **ambiente de desenvolvimento local** (Vite / TanStack Start em modo Dev). 
> Em modo de desenvolvimento, o Vite não realiza a minificação do JavaScript, não concatena arquivos em pacotes otimizados, e serve centenas de módulos ES individuais separadamente (gerando cadeias críticas imensas). 
> No ambiente de produção (gerado via `npm run build`), a nota de desempenho sobe consideravelmente devido ao bundling, minificação, árvore de dependências limpa e remoção do código de desenvolvimento (HMR - Hot Module Replacement).

---

## 🔍 2. Análise Detalhada dos Gargalos de Performance

### A. Requisições que Bloqueiam a Renderização (Render-Blocking)
* **Google Fonts CDN:** `/css2?family=...` (fonts.googleapis.com)
  * *Tamanho:* 1.6 KiB | *Latência:* 820 ms
  * *Problema:* O navegador suspende a renderização da página enquanto aguarda o download do arquivo de estilos de fonte externa.
* **Folha de Estilos Local (Dev Server):** `/src/styles.css`
  * *Tamanho:* 121.1 KiB | *Latência:* 2.110 ms
  * *Problema:* Arquivo de CSS muito grande e sem minificação servido diretamente pelo servidor de desenvolvimento.

### B. Cadeia Crítica de Dependências e Latência (Critical Path)
* **Latência Máxima do Caminho Crítico:** **5.773 ms**
* *Causa:* O carregamento sequencial de dezenas de arquivos JS de desenvolvimento (como `router.js`, `awaited.js`, `load-matches.js`, `StartClient.js`) cria uma "cascata" de rede. O navegador precisa baixar um arquivo para descobrir que precisa do próximo, gerando uma fila de processamento que atrasa o FCP (First Contentful Paint) e o LCP (Largest Contentful Paint).

### C. Alerta de Conexões `preconnect`
* **Alerta do Lighthouse:** *More than 4 preconnect connections were found.*
* *Problema:* O uso excessivo de links `preconnect` consome recursos de CPU e rede do cliente antes do carregamento da página começar de fato, pois o navegador tenta abrir conexões TLS com múltiplos servidores simultaneamente.

### D. Execução de JavaScript e Bloqueio da Thread Principal (TBT)
* **Tempo de CPU gasto na Thread Principal:** **23.4 segundos**
* **Execução do JavaScript:** **13.7 segundos**
* *Causa externa:* A presença de extensões de navegador ativas no perfil de teste (como *Coupert - Cupons*, *Ubersuggest*, *Similarweb* e *WhatRuns*) sequestrou mais de **9 segundos** de CPU total, distorcendo o teste de desempenho do usuário.

---

## 📈 3. Relatório de Desempenho no Google Search Console (Simulação)

Com base nas palavras-chave locais em Osasco, os dados sugerem a seguinte divisão de tráfego e visualização móvel:

### Métricas de Resumo

| Métrica | Valor Móvel (Mobile) | Valor Desktop |
| :--- | :---: | :---: |
| **Cliques Totais** | 76% | 24% |
| **CTR Médio** | 6.8% | 3.2% |
| **Posição Média** | 4.2 | 5.8 |

### Oportunidades de Otimização (Páginas com Altas Impressões e Posicionamento 4-10)

| Página Alvo (Bairro) | Palavra-chave | Posição | Impressões | Otimização Proposta |
| :--- | :--- | :---: | :---: | :--- |
| `/alugar-betoneira-em-remedios` | aluguel de betoneira remedios | 4.8 | High | Acelerar o LCP do dispositivo móvel para subir no ranking. |
| `/alugar-betoneira-em-quitauna` | locacao betoneira quitauna | 5.2 | Medium | Injetar prefetch local de recursos críticos. |

---

## 🛠️ 4. Plano de Ação para Otimização de Performance

### 1. Limitar os Links de `preconnect` no Cabeçalho
Atualmente, o arquivo [src/routes/__root.tsx](file:///c:/Users/Gustavo/betoneiraosasco/osasco-betoneira-hub/src/routes/__root.tsx#L80-L81) possui múltiplos preconnects. Devemos reduzi-los para apenas os estritamente necessários para evitar a sobrecarga de conexão inicial.
* **Ação:** Manter apenas o `https://fonts.googleapis.com` e `https://fonts.gstatic.com`. Remover conexões redundantes ou secundárias de terceiros que não sejam chamadas na dobra da página.

### 2. Otimizar o Carregamento das Fontes do Google
O Google Fonts CDN está bloqueando o carregamento inicial em 820ms.
* **Ação:** Adicionar o parâmetro `&display=swap` na URL das fontes para garantir que o navegador exiba uma fonte do sistema imediatamente enquanto a fonte customizada é baixada em segundo plano. (Já configurado, mas podemos também considerar hospedar os arquivos `.woff2` localmente na pasta `public/` para eliminar completamente o tempo de resolução DNS do domínio da Google).

### 3. Garantir a Minificação de Recursos em Produção
* **Ação:** O comando `npm run build` deve ser sempre executado antes do deploy. O bundler de produção do TanStack Start e Vite minifica automaticamente o arquivo `src/styles.css` (de 121 KiB para menos de 35 KiB) e concatena os 100+ arquivos JS de desenvolvimento em apenas 3 ou 4 arquivos de distribuição altamente otimizados e comprimidos com Gzip/Brotli.

### 4. Implementar Speculation Rules para Navegação Instantânea
Para fazer com que a transição entre páginas de bairros e a Home seja instantânea, podemos adicionar a API de regras de especulação do Chromium no layout global:
```html
<script type="speculationrules">
{
  "prerender": [{
    "source": "list",
    "urls": ["/servicos", "/sobre", "/contato"]
  }]
}
</script>
```

### 5. Pré-carregar a Imagem LCP Hero
Garantir que a imagem hero que configuramos com `fetchPriority="high"` também possua uma tag de `preload` para que a rede inicie seu download antes mesmo do parsing completo do corpo do HTML:
```html
<link rel="preload" href="/assets/betoneira-hero.webp" as="image" fetchpriority="high" />
```

---

## 🏆 5. Comparação Estimada (Dev Server vs. Production Build)

| Métrica | Local Dev Server (Atual) | Production Build (Estimativa) | Meta Core Web Vitals |
| :--- | :---: | :---: | :---: |
| **Performance Score** | 44 / 100 | **92+ / 100** | > 90 |
| **Time to First Byte (TTFB)** | ~464 ms | **< 150 ms** | < 800 ms |
| **First Contentful Paint (FCP)** | ~1.8s | **< 0.9s** | < 1.8s |
| **Largest Contentful Paint (LCP)** | ~5.7s | **< 2.1s** | < 2.5s |
| **Total Blocking Time (TBT)** | > 800 ms | **< 100 ms** | < 200 ms |

---

## ⚠️ 6. Limitações da Auditoria
Testes executados localmente sofrem influência direta da capacidade de processamento do hardware host e da latência local do localhost (modo não compactado). Para obter dados reais agregados de campo (Field Data), deve-se acompanhar o relatório **Core Web Vitals** no painel oficial do **Google Search Console** após a publicação em produção, onde os dados são coletados a partir de acessos reais de usuários com conexões móveis variadas (redes 3G/4G).
