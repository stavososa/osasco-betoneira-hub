## Objetivo

Aplicar a `taste-skill` (níveis 8 / 6 / 4 — variância alta, motion médio, densidade baixa) na home, **sem instalar bibliotecas novas** — tudo em HTML/CSS nativo, preservando a identidade "obra de Osasco" (amarelo, navy, ink, hazard-stripe).

Foco em: assimetria, anti-cliché de 3 cards iguais, tipografia mais autoral, motion suave via `cubic-bezier` + `animation-delay`, e densidade respirada.

---

## Princípios da skill que vamos adotar

| Regra da skill | Como aplicamos aqui |
|---|---|
| Anti-center bias no Hero | Hero já é split — vamos reforçar com grid `3fr 2fr` assimétrico, eyebrow vertical e número de série lateral |
| Banido 3-column card row | Trocar a seção "Locação / Venda / Entrega" por **zig-zag de 2 colunas alternadas** com numerais gigantes |
| Anti-card overuse | Depoimentos saem dos cards → vão para um bloco com `divide-y` e citação tipográfica grande |
| Tipografia anti-Inter | Já usamos Oswald + IBM Plex — manter, mas reforçar `tracking-tighter` e `leading-none` nos H1/H2 e adicionar uma `font-display` editorial (ex.: **Fraunces** ou **Cabinet Grotesk** via Google Fonts) só para H2 narrativos |
| Saturação < 80%, sem glow | Manter amarelo/navy, remover qualquer `drop-shadow` colorido; sombras tintadas do background |
| Sem emojis / ícones limpos | Já temos `Icons.tsx` — manter |
| Motion via transform/opacity, spring-like | Tudo via `transition: ... cubic-bezier(0.16,1,0.3,1)` e `@keyframes` simples. Sem JS de scroll além do `useReveal` já existente |
| `min-h-[100dvh]` no hero | Trocar `py-16/24` por `min-h-[100dvh]` com padding interno |
| Bento 2.0 (asimétrico) | Aplicar na seção "Modelos" — 1 card grande (250L destaque) + 2 menores em grid `2fr 1fr` |
| Kinetic marquee | Substituir o `TrustBar` por uma **marquee CSS infinita** com selos ("Entrega hoje · Equipamento revisado · Sem caução escondida · Osasco SP") |
| Staggered orchestration | Cascade via `--index` em CSS, não delays manuais um a um |

---

## Mudanças por seção (home `/`)

```text
┌─ HERO (min-h-[100dvh], split 3fr/2fr) ─────────────┐
│ esquerda: eyebrow vertical "OSC · 011"             │
│           H1 com palavra-âncora deslocada          │
│           parágrafo curto + 2 CTAs + stats em row  │
│ direita:  betoneira PNG com leve float CSS         │
│           etiquetas técnicas flutuando (specs)     │
│ rodapé:   hazard-stripe fina                       │
└────────────────────────────────────────────────────┘

┌─ MARQUEE KINETIC (substitui TrustBar) ─────────────┐
│  ENTREGA HOJE · REVISADAS · SEM BUROCRACIA · ...   │
│  loop CSS @keyframes translateX                    │
└────────────────────────────────────────────────────┘

┌─ STEPS (manter, refinar) ──────────────────────────┐
│  já está bom — apenas suavizar conectores          │
└────────────────────────────────────────────────────┘

┌─ MODELOS — Bento assimétrico ──────────────────────┐
│  ┌──────────────┐  ┌────────┐                      │
│  │  250L        │  │ 150L   │                      │
│  │  destaque    │  ├────────┤                      │
│  │  (grande)    │  │ 400L   │                      │
│  └──────────────┘  └────────┘                      │
│  grid: 2fr 1fr · gap-6                             │
└────────────────────────────────────────────────────┘

┌─ SERVIÇOS — ZIG-ZAG (era 3 cards) ─────────────────┐
│  01 ──── Locação           [imagem/ícone à direita]│
│              [imagem/ícone à esquerda] Venda ── 02 │
│  03 ──── Entrega & Retirada    [imagem à direita]  │
│  números gigantes em font-numeric                  │
└────────────────────────────────────────────────────┘

┌─ MAPA / COBERTURA (manter, ajuste tipográfico) ────┐

┌─ DEPOIMENTOS — sem cards ──────────────────────────┐
│  divide-y border-y, citação grande font-display    │
│  autor + bairro em linha mono pequena              │
│  3 itens empilhados, não em grade                  │
└────────────────────────────────────────────────────┘

┌─ FAQ (manter, sem mudança estrutural) ─────────────┐

┌─ CTA FINAL (manter)  ──────────────────────────────┐
```

---

## Detalhes técnicos

**Arquivos tocados**
- `src/styles.css` — adicionar:
  - `@keyframes marquee` + `.marquee` (loop horizontal, pausa no hover)
  - `@keyframes float-soft` para a betoneira do hero
  - cascade utility `[--i]` com `transition-delay: calc(var(--i) * 80ms)`
  - cubic-bezier global `--ease-spring: cubic-bezier(0.16, 1, 0.3, 1)`
  - Import opcional de **Fraunces** (Google Fonts) só para citações
- `src/routes/index.tsx` — reescrever as 4 seções acima (hero / serviços zig-zag / modelos bento / depoimentos)
- `src/components/TrustBar.tsx` → vira `Marquee.tsx` (renomear conceito; manter export TrustBar p/ não quebrar nada e re-exportar marquee)
- `src/components/ModelCard.tsx` — aceitar prop `size: "lg" | "sm"` para o bento
- Nenhum pacote novo. Sem framer-motion. Sem GSAP.

**Performance / leveza**
- Apenas `transform` + `opacity` animados
- `noise-overlay` já é `pointer-events-none` fixo — ok
- `useReveal` (IntersectionObserver) reaproveitado para staggered
- Sem libs adicionais → bundle inalterado

**Fora de escopo**
- Páginas internas (`/servicos`, `/sobre`, `/contato`, `/alugar-betoneira-em-osasco/$bairro`) ficam como estão nesta rodada — a skill pede consistência, mas você pediu foco em "a página", então faço só a home. Posso fazer as internas depois se quiser.
- Sem alterações em rotas, dados, footer ou header.
