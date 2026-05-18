
## Atualizar lista de bairros

Substituir o array `BAIRROS` em `src/lib/bairros.ts` pela lista oficial fornecida (62 bairros), gerando slugs sem acento/apóstrofo/ponto.

### Lista final (em ordem)
Adalgisa, Aliança, Ayrosa, Bandeiras, Baronesa, Bela Vista, Bonança, Bonfim, Bussocaba, Castelo Branco, Centro, Cidade das Flores, Cidade de Deus, Cipava, City Bussocaba, Conceição, Helena Maria, I.A.P.I, Ind. Altino, Ind. Anhanguera, Ind. Autonomistas, Ind. Centro, Ind. Mazzei, Ind. Remédios, Jaguaribe, Jardim D'Abril, Jardim das Flores, Jardim Elvira, Jardim Novo Osasco, Jardim Roberto, Km 18, Metalúrgicos, Munhoz Júnior, Mutinga, Padroeira, Paiva Ramos, Parque Continental, Pestana, Piratininga, Platina, Portal D'Oeste, Presidente Altino, Quitaúna, Raposo Tavares, Remédios, Rochdale, Santa Fé, Santa Maria, Santo Antônio, São Pedro, Setor Militar, Três Montanhas, Umuarama, Veloso, Vila Campesina, Vila Menck, Vila Militar, Vila Osasco, Vila Yara, Vila Yolanda, Primeiro de Maio, Fazendinha.

> Observação: "Primeiro de Mario" parece typo — vou usar **"Primeiro de Maio"** (bairro real de Osasco). Se for intencional, é só avisar.

### Onde aparece
A lista alimenta:
- Grade de bairros no rodapé (`SiteFooter` via `BairrosGrid`).
- Chips de "bairros em destaque" na home (`BAIRROS.slice(0, 8)`).
- Páginas dinâmicas `/alugar-betoneira-em-osasco/$slug` (loader usa `getBairro`).
- `sitemap.xml`.

Como os slugs vão mudar (ex.: removendo bairros antigos e adicionando novos), URLs antigas que não existirem mais vão retornar 404 — esperado, já que o site ainda não está publicado.

### Arquivos afetados
- `src/lib/bairros.ts` — substituir o array `BAIRROS`. Manter `getBairro` e `bairrosProximos` como estão.

Sem mudanças em componentes ou rotas — tudo é dirigido pelo array.
