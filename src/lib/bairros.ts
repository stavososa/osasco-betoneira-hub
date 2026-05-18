export interface Bairro {
  slug: string;
  nome: string;
}

export const BAIRROS: Bairro[] = [
  { slug: "adalgisa", nome: "Adalgisa" },
  { slug: "alianca", nome: "Aliança" },
  { slug: "ayrosa", nome: "Ayrosa" },
  { slug: "bandeiras", nome: "Bandeiras" },
  { slug: "baronesa", nome: "Baronesa" },
  { slug: "bela-vista", nome: "Bela Vista" },
  { slug: "bonanca", nome: "Bonança" },
  { slug: "bonfim", nome: "Bonfim" },
  { slug: "bussocaba", nome: "Bussocaba" },
  { slug: "castelo-branco", nome: "Castelo Branco" },
  { slug: "centro", nome: "Centro" },
  { slug: "cidade-das-flores", nome: "Cidade das Flores" },
  { slug: "cidade-de-deus", nome: "Cidade de Deus" },
  { slug: "cipava", nome: "Cipava" },
  { slug: "city-bussocaba", nome: "City Bussocaba" },
  { slug: "conceicao", nome: "Conceição" },
  { slug: "helena-maria", nome: "Helena Maria" },
  { slug: "iapi", nome: "I.A.P.I" },
  { slug: "industrial-altino", nome: "Ind. Altino" },
  { slug: "industrial-anhanguera", nome: "Ind. Anhanguera" },
  { slug: "industrial-autonomistas", nome: "Ind. Autonomistas" },
  { slug: "industrial-centro", nome: "Ind. Centro" },
  { slug: "industrial-mazzei", nome: "Ind. Mazzei" },
  { slug: "industrial-remedios", nome: "Ind. Remédios" },
  { slug: "jaguaribe", nome: "Jaguaribe" },
  { slug: "jardim-dabril", nome: "Jardim D'Abril" },
  { slug: "jardim-das-flores", nome: "Jardim das Flores" },
  { slug: "jardim-elvira", nome: "Jardim Elvira" },
  { slug: "jardim-novo-osasco", nome: "Jardim Novo Osasco" },
  { slug: "jardim-roberto", nome: "Jardim Roberto" },
  { slug: "km-18", nome: "Km 18" },
  { slug: "metalurgicos", nome: "Metalúrgicos" },
  { slug: "munhoz-junior", nome: "Munhoz Júnior" },
  { slug: "mutinga", nome: "Mutinga" },
  { slug: "padroeira", nome: "Padroeira" },
  { slug: "paiva-ramos", nome: "Paiva Ramos" },
  { slug: "parque-continental", nome: "Parque Continental" },
  { slug: "pestana", nome: "Pestana" },
  { slug: "piratininga", nome: "Piratininga" },
  { slug: "platina", nome: "Platina" },
  { slug: "portal-doeste", nome: "Portal D'Oeste" },
  { slug: "presidente-altino", nome: "Presidente Altino" },
  { slug: "quitauna", nome: "Quitaúna" },
  { slug: "raposo-tavares", nome: "Raposo Tavares" },
  { slug: "remedios", nome: "Remédios" },
  { slug: "rochdale", nome: "Rochdale" },
  { slug: "santa-fe", nome: "Santa Fé" },
  { slug: "santa-maria", nome: "Santa Maria" },
  { slug: "santo-antonio", nome: "Santo Antônio" },
  { slug: "sao-pedro", nome: "São Pedro" },
  { slug: "setor-militar", nome: "Setor Militar" },
  { slug: "tres-montanhas", nome: "Três Montanhas" },
  { slug: "umuarama", nome: "Umuarama" },
  { slug: "veloso", nome: "Veloso" },
  { slug: "vila-campesina", nome: "Vila Campesina" },
  { slug: "vila-menck", nome: "Vila Menck" },
  { slug: "vila-militar", nome: "Vila Militar" },
  { slug: "vila-osasco", nome: "Vila Osasco" },
  { slug: "vila-yara", nome: "Vila Yara" },
  { slug: "vila-yolanda", nome: "Vila Yolanda" },
  { slug: "primeiro-de-maio", nome: "Primeiro de Maio" },
  { slug: "fazendinha", nome: "Fazendinha" },
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
