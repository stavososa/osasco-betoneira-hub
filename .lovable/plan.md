
## Objetivo
Tirar a "cara de IA" do site (layout genérico azul+amarelo + cards arredondados padrão shadcn) e aproximá-lo do universo de **construção civil / locação de equipamento pesado**: tipografia industrial, texturas, bordas marcadas, micro-animações nativas (sem libs).

---

## 1. Tipografia mais "do ramo"
Trocar Barlow Condensed + Inter por par com cara de obra/indústria:

- **Display (títulos):** `Oswald` (condensada, peso 700, uppercase) — clássica em sinalização industrial e construção.
- **Alt display (numerais/preços/stats):** `Archivo Black` — usado em cartazes de obra.
- **Texto:** `IBM Plex Sans` — neutra, legível, foge do Inter genérico.
- **Detalhes (caption/etiqueta):** `JetBrains Mono` em letras pequenas tipo "REF. 150L · 220V" — dá aspecto de ficha técnica.

Carregar via `<link rel="preconnect">` + Google Fonts no `__root.tsx` (display=swap). Atualizar `--font-display`, `--font-sans`, adicionar `--font-mono` e `--font-numeric` em `styles.css`.

## 2. Linguagem visual menos "AI gradient"
- Remover o gradient `from-navy to-#0f1b3f` do hero. Trocar por **navy sólido + textura sutil** (SVG noise inline + faixa diagonal amarela de "fita zebrada" no topo/rodapé do hero — tipo fita de sinalização de obra).
- Trocar `rounded-xl` genérico por **cantos retos + 1 canto cortado** (clip-path) em cards de serviço — visual de placa metálica.
- Bordas mais grossas (2px) em amarelo nos elementos de destaque, em vez de sombra suave.
- Substituir os 3 "stat cards" do hero por uma **régua horizontal** com divisores verticais (estilo painel de obra), numerais em Archivo Black.
- Botões: retangulares, sem rounded, com pequena "sombra dura" (offset 4px sem blur) tipo placa.
- Adicionar pequenos **ícones SVG inline** (capacete, betoneira, caminhão, relógio) — desenhados em traço, não emoji.

## 3. Sections mais inteligentes (home)
Reorganizar a home para um fluxo mais realista de locação:

1. **Hero** — H1 forte, subhead curto, 2 CTAs, **fita zebrada** no rodapé do bloco.
2. **Barra de confiança** (nova) — strip horizontal: "Entrega no mesmo dia · Equipamentos revisados · Atendimento local · Diária a partir de X" com divisores `|`.
3. **Como funciona** (nova) — 4 passos numerados (01→04): Solicite no WhatsApp → Confirmamos entrega → Usamos sua obra → Retiramos. Linha tracejada conectando.
4. **Modelos de betoneira** (substitui "Nossos serviços" plano) — 3 cards-ficha técnica: 150L / 250L / 400L com specs em mono (voltagem, peso, indicação de uso). Card central destacado ("mais alugada").
5. **Serviços** — versão enxuta (Locação · Venda · Entrega) em faixa horizontal.
6. **Área de atendimento + mapa** — mapa Osasco + lista de 6 bairros principais como chips clicáveis (link p/ páginas de bairro).
7. **Depoimentos curtos** (nova) — 2-3 cards estilo "ficha de obra" com nome, bairro, tipo de obra. Texto genérico mas crível.
8. **FAQ** — manter, com `<details>` animado.
9. **CTA final** — bloco amarelo full-width "Precisa hoje? Chame agora" + WhatsApp.
10. **Footer** — manter grade de bairros (já está bom).

Páginas de bairro: adicionar bloco "Como funciona em {bairro}" reaproveitando o componente de passos, e barra de confiança no topo.

## 4. Animações nativas (sem libs)
Tudo via CSS + IntersectionObserver pequeno (≈30 linhas), sem framer-motion:

- **Reveal on scroll**: classe `.reveal` com `opacity:0; translateY(16px)` → `.is-visible` aplica transição 600ms ease-out. Hook simples em `src/lib/useReveal.ts`.
- **Fita zebrada animada**: faixa diagonal amarela/preta com `@keyframes` movendo `background-position` (lento, 20s) — dá vida sem distrair.
- **Hover de cards-modelo**: translateY(-4px) + borda amarela aparecendo, 200ms.
- **Botões CTA**: pequeno "press" no `:active` (translateY 1px) + sombra dura que some.
- **Números do hero/stats**: count-up simples em JS quando entram em viewport.
- **Passos "Como funciona"**: linha conectora desenhada com `stroke-dasharray` animado ao entrar em viewport.
- **FAQ `<details>`**: animação de altura com `interpolate-size: allow-keywords` + transition (CSS moderno, fallback ok).
- **Header**: ao rolar, reduzir altura (h-16 → h-14) e adicionar sombra dura amarela embaixo.
- **WhatsApp flutuante**: pulse sutil (scale 1 → 1.05) a cada 4s.

Tudo respeita `prefers-reduced-motion` (desativa via media query no CSS).

## 5. Tokens / styles.css
- Adicionar `--brand-ink: #0a0a0a` (preto real para texto forte, em vez de navy em tudo).
- Adicionar `--brand-concrete: oklch(0.92 0.005 90)` (cinza concreto) p/ backgrounds de seção alternada.
- Adicionar utilitários: `.hazard-stripe` (fita zebrada), `.cut-corner` (clip-path canto cortado), `.hard-shadow`, `.reveal`.
- Manter navy + amarelo, mas usar preto e cinza-concreto como neutros principais — quebra o "azul AI".

## 6. Arquivos afetados
- `src/styles.css` — fontes, tokens novos, utilitários, keyframes, reduced-motion.
- `src/routes/__root.tsx` — preconnect + link Google Fonts (Oswald, Archivo Black, IBM Plex Sans, JetBrains Mono).
- `src/routes/index.tsx` — reescrita das sections conforme item 3.
- `src/routes/alugar-betoneira-em-osasco.$bairro.tsx` — adiciona barra de confiança + "como funciona".
- `src/routes/servicos.tsx`, `sobre.tsx`, `contato.tsx` — aplicar nova linguagem (cut-corner, hazard-stripe no topo de hero secundário).
- `src/components/SiteHeader.tsx` — shrink no scroll, sombra dura amarela.
- `src/components/SiteFooter.tsx` — ajustar tipografia (Oswald).
- `src/components/WhatsAppButton.tsx` — pulse.
- **Novos:**
  - `src/components/HazardStripe.tsx` — faixa zebrada reutilizável.
  - `src/components/Steps.tsx` — bloco "como funciona".
  - `src/components/TrustBar.tsx` — barra de confiança.
  - `src/components/ModelCard.tsx` — ficha técnica de betoneira.
  - `src/components/icons/` — capacete, betoneira, caminhão, relógio (SVG inline).
  - `src/lib/useReveal.ts` — hook IntersectionObserver.
  - `src/lib/useCountUp.ts` — count-up simples.

## Fora de escopo
- Imagens reais de betoneiras (mantém ícones SVG; usuário pode subir fotos depois).
- Mudanças de copy/conteúdo (só tipografia/layout/animação).
- Backend, formulários novos.
