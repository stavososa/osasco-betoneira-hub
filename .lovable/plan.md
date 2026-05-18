
# Site Betoneira Osasco — Locação e Venda

Site institucional rápido, leve e otimizado para Google (Core Web Vitals + SEO local), com uma página por bairro de Osasco para capturar buscas tipo "alugar betoneira em [bairro]".

## Identidade visual (extraída da logo)

- Azul marinho: `#1B2A5E` (primário)
- Amarelo/âmbar: `#F2A71B` (acento)
- Branco / off-white para fundo (institucional, leve)
- Tipografia: sem-serifa condensada robusta nos títulos (estilo da logo — ex: Barlow Condensed) + Inter no corpo
- Logo enviada salva em `src/assets/logo-betoneira-osasco.webp`, usada no header e footer

## Estrutura de páginas (rotas TanStack)

```
/                                       Home (foco cidade Osasco)
/sobre                                  Quem somos
/servicos                               Locação, Venda e Entrega/Retirada
/contato                                Telefone, WhatsApp, formulário, mapa
/alugar-betoneira-em-osasco/$bairro     Página dinâmica por bairro (SEO)
/sitemap.xml                            Sitemap dinâmico
```

`public/robots.txt` liberando tudo + apontando para o sitemap.

## Conteúdo principal

**Home** — hero com proposta clara ("Locação e venda de betoneiras em Osasco — entrega e retirada no mesmo dia"), CTAs WhatsApp + Ligar (11) 97546-5766, blocos de serviços (Locação / Venda / Entrega e Retirada), mapa da cidade de Osasco em destaque, FAQ curto, lista dos bairros atendidos no rodapé (links para as páginas de bairro).

**Serviços** — detalhamento de locação (diária/semanal/mensal), venda (modelos 150L/400L), logística.

**Sobre** — texto institucional curto, diferenciais (atendimento local em Osasco, entrega rápida, equipamentos revisados).

**Contato** — WhatsApp 11 97546-5766, telefone, formulário simples (nome, telefone, mensagem — mailto/WhatsApp link, sem backend), mapa da sede.

**Páginas por bairro** (`/alugar-betoneira-em-osasco/$bairro`) — geradas a partir de uma lista única de bairros. Cada uma tem:
- H1: "Aluguel de Betoneira em [Bairro] — Osasco"
- Texto otimizado mencionando o bairro (entrega, retirada, modelos disponíveis)
- Iframe Google Maps com destaque no bairro (`q=Bairro,+Osasco+SP`)
- CTAs WhatsApp/ligar
- `head()` com title, description, og:tags, canonical e JSON-LD `LocalBusiness` + `Service` por bairro
- Lista de bairros vizinhos no rodapé

Lista de bairros (≈50, cobrindo Osasco): Adalgisa, Aliança, Ayrosa, Baronesa, Bandeiras, Bela Vista, Bonança, Bussocaba, Centro, Cidade das Flores, Cipava, City Bussocaba, Conceição, Continental, IAPI, Industrial Altino, Industrial Mazzei, Industrial Remédios, Jaguaribe, Jardim Bandeirantes, Jardim Bonança, Jardim Cipava, Jardim D'Abril, Jardim das Flores, Jardim Mutinga, Jardim Piratininga, Jardim Roberto, Jardim Santa Maria, Jardim Veloso, Khalil, KM 18, Munhoz Júnior, Novo Osasco, Padroeira, Pestana, Piratininga, Portal D'Oeste, Presidente Altino, Quitaúna, Raposo Tavares, Remédios, Rochdale, Santo Antônio, Setor Militar, Umuarama, Veloso, Vila Campesina, Vila dos Remédios, Vila Iara, Vila Menck, Vila Osasco, Vila Yara, Vila Yolanda.

## Lista de bairros perto do rodapé

Componente `<BairrosGrid />` reaproveitado em todas as páginas, mostrando "Alugar betoneira em [bairro]" em colunas, cada item linkando para a respectiva página `/alugar-betoneira-em-osasco/[slug]`. No rodapé das páginas de bairro mostra os ~12 bairros mais próximos.

## SEO e performance

- `head()` por rota com title (<60 chars), description (<160), og:title/description/url, canonical
- JSON-LD `LocalBusiness` no root + `Service` nas páginas de bairro (com `areaServed`)
- Sitemap dinâmico incluindo todas as rotas estáticas + uma URL por bairro
- robots.txt liberando crawl
- Imagens: logo em `webp`, `loading="lazy"` nas demais, `width`/`height` para evitar CLS
- Mapas em `<iframe loading="lazy">` (não bloqueia render)
- Sem libs pesadas: só Tailwind + componentes próprios (sem framer-motion, sem carrossel pesado)
- HTML semântico (header, main, section, footer, h1 único por página)

## Detalhes técnicos

- Componentes em `src/components/`: `SiteHeader`, `SiteFooter`, `BairrosGrid`, `MapEmbed`, `WhatsAppButton`, `Hero`, `ServicosBlocos`, `FAQ`
- `src/lib/bairros.ts` — array `BAIRROS` com `{ slug, nome }`, função `getBairro(slug)` e `bairrosProximos(slug)`
- `MapEmbed` recebe `query` e renderiza `https://www.google.com/maps?q=...&output=embed`
- `WhatsAppButton` flutuante fixo em todas as páginas com link `https://wa.me/5511975465766`
- `src/styles.css` atualizado com tokens oklch (azul marinho, amarelo, neutros)
- Atualizar `__root.tsx` com header/footer compartilhados, meta padrão (Organization JSON-LD), `og:site_name`
- Substituir o placeholder em `src/routes/index.tsx`
- `src/routes/sitemap[.]xml.ts` listando todas as rotas + bairros
- `public/robots.txt`

## Fora do escopo

- Backend / banco de dados (formulário só dispara WhatsApp/mailto)
- Painel administrativo
- Blog (pode ser adicionado depois)
- Imagens reais de equipamentos (uso ilustrações/ícones; podemos gerar fotos depois se quiser)
