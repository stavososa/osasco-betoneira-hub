export interface Bairro {
  slug: string;
  nome: string;
}

export const BAIRROS: Bairro[] = [
  { slug: "adalgisa", nome: "Adalgisa" },
  { slug: "alianca", nome: "Aliança" },
  { slug: "ayrosa", nome: "Ayrosa" },
  { slug: "baronesa", nome: "Baronesa" },
  { slug: "bandeiras", nome: "Bandeiras" },
  { slug: "bela-vista", nome: "Bela Vista" },
  { slug: "bonanca", nome: "Bonança" },
  { slug: "bussocaba", nome: "Bussocaba" },
  { slug: "centro", nome: "Centro" },
  { slug: "cidade-das-flores", nome: "Cidade das Flores" },
  { slug: "cipava", nome: "Cipava" },
  { slug: "city-bussocaba", nome: "City Bussocaba" },
  { slug: "conceicao", nome: "Conceição" },
  { slug: "continental", nome: "Continental" },
  { slug: "iapi", nome: "IAPI" },
  { slug: "industrial-altino", nome: "Industrial Altino" },
  { slug: "industrial-mazzei", nome: "Industrial Mazzei" },
  { slug: "industrial-remedios", nome: "Industrial Remédios" },
  { slug: "jaguaribe", nome: "Jaguaribe" },
  { slug: "jardim-bandeirantes", nome: "Jardim Bandeirantes" },
  { slug: "jardim-bonanca", nome: "Jardim Bonança" },
  { slug: "jardim-cipava", nome: "Jardim Cipava" },
  { slug: "jardim-dabril", nome: "Jardim D'Abril" },
  { slug: "jardim-das-flores", nome: "Jardim das Flores" },
  { slug: "jardim-mutinga", nome: "Jardim Mutinga" },
  { slug: "jardim-piratininga", nome: "Jardim Piratininga" },
  { slug: "jardim-roberto", nome: "Jardim Roberto" },
  { slug: "jardim-santa-maria", nome: "Jardim Santa Maria" },
  { slug: "jardim-veloso", nome: "Jardim Veloso" },
  { slug: "khalil", nome: "Khalil" },
  { slug: "km-18", nome: "KM 18" },
  { slug: "munhoz-junior", nome: "Munhoz Júnior" },
  { slug: "novo-osasco", nome: "Novo Osasco" },
  { slug: "padroeira", nome: "Padroeira" },
  { slug: "pestana", nome: "Pestana" },
  { slug: "piratininga", nome: "Piratininga" },
  { slug: "portal-doeste", nome: "Portal D'Oeste" },
  { slug: "presidente-altino", nome: "Presidente Altino" },
  { slug: "quitauna", nome: "Quitaúna" },
  { slug: "raposo-tavares", nome: "Raposo Tavares" },
  { slug: "remedios", nome: "Remédios" },
  { slug: "rochdale", nome: "Rochdale" },
  { slug: "santo-antonio", nome: "Santo Antônio" },
  { slug: "setor-militar", nome: "Setor Militar" },
  { slug: "umuarama", nome: "Umuarama" },
  { slug: "veloso", nome: "Veloso" },
  { slug: "vila-campesina", nome: "Vila Campesina" },
  { slug: "vila-dos-remedios", nome: "Vila dos Remédios" },
  { slug: "vila-iara", nome: "Vila Iara" },
  { slug: "vila-menck", nome: "Vila Menck" },
  { slug: "vila-osasco", nome: "Vila Osasco" },
  { slug: "vila-yara", nome: "Vila Yara" },
  { slug: "vila-yolanda", nome: "Vila Yolanda" },
];

export function getBairro(slug: string): Bairro | undefined {
  return BAIRROS.find((b) => b.slug === slug);
}

export function bairrosProximos(slug: string, count = 12): Bairro[] {
  const idx = BAIRROS.findIndex((b) => b.slug === slug);
  if (idx === -1) return BAIRROS.slice(0, count);
  const out: Bairro[] = [];
  for (let i = 1; out.length < count && i < BAIRROS.length; i++) {
    if (BAIRROS[idx - i]) out.push(BAIRROS[idx - i]);
    if (out.length >= count) break;
    if (BAIRROS[idx + i]) out.push(BAIRROS[idx + i]);
  }
  return out;
}
