## Escopo final

1. Fechar gaps de SEO de **aluguel** já listados.
2. Adicionar menções de **venda** distribuídas pela home (sem inflar o hero).
3. Criar página dedicada **`/comprar-betoneira`** com todo o conteúdo de venda.
4. Linkar a nova página no header, footer e em pontos estratégicos da home.

---

## 1. Home (`src/routes/index.tsx`) — ajustes de SEO

### Hero
- Mantém o foco em aluguel. Sem badge de "Aluguel e Venda".
- Apenas um link discreto abaixo dos CTAs: `Procurando comprar? → Ver opções de venda`.
- Alt da imagem: "Betoneira 400L amarela e azul para aluguel em Osasco SP".

### Marquee (TrustBar)
Adicionar: "Locadora local · Frota própria · Também vendemos betoneira".

### Modelos
Subtítulo curto em cada card com keyword combinada (campo opcional novo no `Modelo`):
- 250L → "Betoneira 250 litros elétrica em Osasco"
- 150L → "Betoneira 150 litros para reforma"
- 400L → "Betoneira 400 litros a gasolina em Osasco"

### Nova seção "Preços e prazos" (aluguel)
Logo após Modelos. 3 cards arredondados com sombra leve: *Diária*, *Semanal*, *Mensal*. Copy com "preço de aluguel de betoneira em Osasco", "valor da diária", "betoneira barata Osasco". Sem números fixos — "consulte pelo WhatsApp".

### Aplicações
Expandir chips com: *Concretagem · Fundação · Baldrame · Chapisco · Emboço · Piso · Escada · Puxadinho* (mantém estilo).

### Cobertura
Reescrever parágrafo: "Atendemos Osasco e região — bairros de Osasco e cidades vizinhas: Carapicuíba, Cotia, Barueri, Jandira, Itapevi e zona oeste de São Paulo."

### Faixa discreta "Também vende?" (entre cobertura e depoimentos)
Bloco fino, fundo claro, 1 linha + 1 botão:
> **Quer comprar em vez de alugar?** Trabalhamos com betoneiras novas e seminovas em Osasco. → **Ver opções de venda** (link para `/comprar-betoneira`).

### FAQ — +5 perguntas
Aluguel:
- "Quanto custa alugar uma betoneira em Osasco?"
- "Como funciona o aluguel de betoneira em Osasco?"
- "Quanto rende uma betoneira de 250 litros por hora?"
- "Qual tamanho de betoneira usar para reforma residencial?"

Venda (link para a página dedicada na resposta):
- "Vocês também vendem betoneira em Osasco?" — resposta curta + link para `/comprar-betoneira`.

### JSON-LD
Manter `LocalBusiness` + `FAQPage`. Adicionar `@type: "Service"` para *Aluguel de Betoneira em Osasco* com `areaServed` e `provider`.

---

## 2. Nova página `/comprar-betoneira` — `src/routes/comprar-betoneira.tsx`

### Head
- **title**: "Comprar Betoneira em Osasco | Venda de Betoneira Nova e Seminova"
- **description**: "Venda de betoneira em Osasco SP: novas e seminovas de 150, 250 e 400 litros, elétricas 110V/220V e a gasolina, com garantia, nota fiscal e parcelamento. WhatsApp (11) 97546-5766."
- **og:title / og:description**: variações com "comprar betoneira Osasco SP".
- **canonical** e **og:url**: `/comprar-betoneira`.
- **JSON-LD**: `@type: "Service"` (*Venda de Betoneira em Osasco*, `serviceType: "Construction equipment sales"`) + `BreadcrumbList` (Home → Comprar Betoneira).

### Estrutura (mesmo design system da home)
1. **Header reutilizado** (SiteHeader).
2. **Hero compacto** (fundo navy, mesma identidade): H1 "Comprar Betoneira em Osasco", subtítulo cobrindo "venda de betoneira nova e seminova", "150L · 250L · 400L", "elétrica e a gasolina", "garantia e nota fiscal". CTAs WhatsApp + telefone, com texto "Pedir cotação de venda".
3. **Por que comprar com a gente** — 3 cards arredondados com sombra leve:
   - **Nova com garantia** — "Betoneira nova com garantia de fábrica, nota fiscal e assistência técnica."
   - **Seminova revisada** — "Equipamento usado, revisado e testado, com preço acessível para começar agora."
   - **Pagamento facilitado** — "PIX, cartão de débito/crédito e parcelamento. Atende pedreiro, empreiteiro e construtora."
4. **Modelos à venda** — reaproveita `ModelCard` com os 3 modelos (150L, 250L, 400L). Texto acima cita "preço de betoneira 250 litros", "betoneira 400 litros gasolina à venda em Osasco".
5. **Para quem é** — chips arredondados: *Pedreiro · Empreiteiro · Construtora · Reformista · Investidor de obra*.
6. **Aluguel x Compra** — bloco comparativo curto (2 colunas) ligando ao tema "vale a pena alugar ou comprar betoneira"; CTA secundário "Prefere alugar? → Ver aluguel" linka para `/`.
7. **FAQ de venda** (4 perguntas):
   - "Quanto custa uma betoneira nova em Osasco?"
   - "Vocês vendem betoneira seminova com garantia?"
   - "Qual betoneira comprar para começar a trabalhar como pedreiro?"
   - "A venda inclui nota fiscal e assistência técnica?"
8. **CTA final** amarelo: "Peça uma cotação de venda em Osasco".
9. **Footer reutilizado**.

### Componente compartilhado
Não vou extrair componente novo — reuso `ModelCard`, `SiteHeader`, `SiteFooter`, `HazardStripe` e o padrão visual da home (cards `rounded-2xl` + sombra leve).

---

## 3. Navegação

- **SiteHeader** (`src/components/SiteHeader.tsx`): adicionar item de menu **"Comprar"** entre "Serviços" e "Sobre" apontando para `/comprar-betoneira`.
- **SiteFooter**: adicionar link "Comprar betoneira" na lista.
- **Sitemap** (`src/routes/sitemap[.]xml.ts`): incluir a nova URL.

---

## 4. Modelos compartilhados

Criar `src/lib/modelos.ts` exportando o array `MODELOS` (hoje duplicado na home). A home e `/comprar-betoneira` consomem a mesma fonte, com textos contextuais diferentes.

---

## Arquivos a alterar / criar

- **Criar** `src/routes/comprar-betoneira.tsx`
- **Criar** `src/lib/modelos.ts`
- **Editar** `src/routes/index.tsx` (link discreto no hero, faixa "também vende", FAQ, preços, aplicações, cobertura, JSON-LD)
- **Editar** `src/components/SiteHeader.tsx` (item "Comprar")
- **Editar** `src/components/SiteFooter.tsx` (link no footer)
- **Editar** `src/components/TrustBar.tsx` (itens novos)
- **Editar** `src/components/ModelCard.tsx` (campo opcional `tag` para subtítulo SEO)
- **Editar** `src/routes/sitemap[.]xml.ts` (nova URL)

## Decisões assumidas

- **Preços** ficam "consulte pelo WhatsApp" — sem números fixos.
- **Sem marcas específicas** (sem citar Menegotti, CSM, etc.) — você pode me passar depois.
- **Tipos vendidos**: novas E seminovas (cobertura ampla; se for só um, ajusto depois).
- **Sem caução** continua fora — mantém o tom honesto da FAQ.
