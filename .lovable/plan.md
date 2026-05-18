## Objetivo

Integrar a lista de palavras-chave de SEO na home (`src/routes/index.tsx`) de forma natural, semântica e relacionada — sem encher de texto nem prejudicar o design atual (hero limpo, cards arredondados, fundo azul).

## Estratégia

Vou distribuir as keywords em blocos que já existem na página, reescrevendo o copy para cobrir os temas principais sem soar repetitivo. Nada de "keyword stuffing": cada seção foca num cluster semântico.

### 1. Metadados (head)

- **title**: "Aluguel de Betoneira em Osasco | Locação 150L, 250L e 400L"
- **description**: cobre "locação de betoneira em Osasco", "entrega no mesmo dia", "elétrica e a gasolina", "sem burocracia", telefone.
- **og:title / og:description**: variações com "alugar betoneira Osasco SP".
- Adicionar JSON-LD **LocalBusiness** (nome, área atendida = Osasco e região, telefone, faixa de preço) e **FAQPage** (já temos 6 perguntas no array `FAQ`).

### 2. Hero

- Subtítulo (eyebrow): "Osasco, SP · Grande São Paulo"
- H1 mantém: "Aluguel de Betoneira em Osasco"
- Parágrafo reescrito cobrindo: "locação de betoneira Osasco SP", "betoneira elétrica e a gasolina", "150L, 250L e 400L", "entrega no mesmo dia, sem burocracia, sem caução abusiva".
- Stats: trocar rótulos para incluir "Modelos 150 a 400L", "Entrega hoje", "+50 bairros de Osasco".

### 3. TrustBar / Marquee

Adicionar termos curtos: "Betoneira elétrica 110V/220V · Betoneira a gasolina · Misturador de concreto · Argamassadeira · Diária, semanal e mensal · Entrega no mesmo dia em Osasco".

### 4. Steps

Reescrever as descrições dos 3 passos para mencionar: "locação por diária, semana ou mês", "betoneira revisada", "entrega e retirada em domicílio".

### 5. Modelos (catálogo)

- Atualizar `uso` de cada modelo:
  - 150L → "Reformas e reboco"
  - 250L → "Lajes e contrapiso residencial"
  - 400L → "Obras de médio porte, muro e calçada"
- Acima da grade, parágrafo curto: "Betoneiras de 150, 250 e 400 litros — elétricas monofásicas (110V/220V) e a gasolina — ideais para concreto, argamassa, contrapiso e laje."

### 6. Serviços (zig-zag)

Reescrever os 3 textos:
- **Locação**: "Aluguel diário, semanal ou mensal de betoneira em Osasco. Atende pedreiro, empreiteiro e construtora."
- **Venda**: mantém + "indicamos entre betoneira elétrica ou a gasolina conforme o porte da obra."
- **Entrega e Retirada**: "Entrega no mesmo dia em toda Osasco e região (zona norte, zona sul e centro). Retirada agendada, sem burocracia."

### 7. Nova seção "Para que serve" (entre Serviços e Mapa)

Bloco compacto com chips/cards arredondados listando aplicações:
"Laje · Contrapiso · Calçada · Muro · Piscina · Quintal · Reboco · Alvenaria · Reforma residencial · Construção civil"

Texto curto: "Misturador de concreto, argamassa e cimento para obras residenciais e de médio porte em Osasco e Grande São Paulo."

Mantém o estilo: cards/chips com `rounded-2xl` ou `rounded-full`, sombra leve, fundo branco sobre `--brand-concrete`.

### 8. Mapa / cobertura

Reescrever copy: "Atendemos toda Osasco — Centro, Zona Norte, Zona Sul, Bussocaba, Quitaúna, Presidente Altino — e cidades vizinhas da Grande São Paulo sob consulta."

### 9. FAQ

Adicionar 2 perguntas novas ao array `FAQ` para cobrir long-tail:
- "Vale a pena alugar ou comprar uma betoneira?"
- "Qual betoneira usar para laje: 250 ou 400 litros?"

E ajustar uma resposta existente para mencionar "betoneira elétrica ou a gasolina".

### 10. CTA final

Trocar texto para: "Aluguel de betoneira em Osasco com entrega no mesmo dia."

## Princípios

- Nenhuma mudança visual de layout — só copy, metadados e uma seção nova de "aplicações" no mesmo estilo (rounded + shadow leve).
- Cada keyword aparece **no máximo 2x** na página; long-tail fica no FAQ e nos parágrafos descritivos.
- Mantém tom natural em PT-BR, sem listas de keywords cruas.

## Arquivos a alterar

- `src/routes/index.tsx` — head meta + JSON-LD + copy de hero, steps copy override, modelos copy, serviços, nova seção aplicações, mapa, CTA, FAQ expandido.
- `src/components/TrustBar.tsx` — itens do marquee.
- (Opcional) `src/components/Steps.tsx` — se as descrições estiverem hardcoded lá, ajustar.
