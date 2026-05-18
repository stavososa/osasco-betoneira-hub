## Objetivo
Incluir o modelo **Betoneira 120L** em todo o site (home, página de venda, serviços, sobre, páginas de bairro e referência pública), com preços de aluguel e compra **ligeiramente abaixo** dos da 150L.

## Preços propostos para 120L

| Período | 150L (atual) | 120L (novo) |
|---------|-------------|-------------|
| Diária | R$ 80–120 | R$ 70–110 |
| Semanal | R$ 200–350 | R$ 180–320 |
| Quinzenal | R$ 350–550 | R$ 320–500 |
| Mensal | R$ 450–700 | R$ 400–650 |

| Venda | 150L (atual) | 120L (novo) |
|-------|-------------|-------------|
| Compacta | R$ 1.200–2.300 | R$ 1.000–2.100 |
| Profissional | R$ 1.700–2.800 | R$ 1.500–2.600 |

## Arquivos a alterar

1. **`src/lib/modelos.ts`**
   - Adicionar objeto 120L ao array `MODELOS` (motor ½ cv, 110/220V, uso "Reparos e pequenos acabamentos", tag SEO).

2. **`src/routes/index.tsx`**
   - Incluir 120L no array `PRECOS_LOCACAO` (posicionado como entrada mais leve).
   - Atualizar descrição do hero: "Modelos de 120L, 150L, 250L e 400L".
   - Atualizar meta title, description, og e JSON-LD (`LocalBusiness`, `Service`, `FAQPage`).
   - Ajustar FAQ que cita "150L, 250L e 400L" para incluir 120L onde fizer sentido.
   - Ajustar serviços (`SERVICOS`) e diferenciais se mencionarem volumes.

3. **`src/routes/comprar-betoneira.tsx`**
   - Incluir 120L nos preços de venda (`PRECOS_VENDA`).
   - Atualizar hero e metadados: "120L, 150L, 250L e 400L".
   - Ajustar `FAQ_VENDA` e JSON-LD (`Service`, `BreadcrumbList`, `FAQPage`).

4. **`src/routes/servicos.tsx`**
   - Atualizar texto do card de locação e meta description para "120L–400L".

5. **`src/routes/sobre.tsx`**
   - Atualizar parágrafo que cita "150L, 250L e 400L" para incluir 120L.

6. **`src/routes/alugar-betoneira-em-$bairro.tsx`**
   - Incluir 120L no `PRECOS_LOCACAO` local.
   - Atualizar hero, meta description, JSON-LD e FAQ de modelo.

7. **`src/components/TrustBar.tsx`**
   - Alterar item de marquee de "150L · 250L · 400L" para "120L · 150L · 250L · 400L".

8. **`public/llms.txt`**
   - Adicionar seção Betoneira 120L com descrição, preços de locação e venda.

## O que NÃO muda
- O layout visual dos cards (`ModelCard`, grid, destaque) permanece o mesmo.
- O sitemap não precisa de nova URL (apenas conteúdo existente é atualizado).
- Nenhuma nova rota será criada.
