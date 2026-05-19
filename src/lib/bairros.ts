export interface Bairro {
  slug: string;
  nome: string;
  lat: number;
  lng: number;
}

export const BAIRROS: Bairro[] = [
  { slug: "adalgisa",               nome: "Adalgisa",           lat: -23.5268, lng: -46.7867 },
  { slug: "alianca",                nome: "Aliança",            lat: -23.5357, lng: -46.7745 },
  { slug: "ayrosa",                 nome: "Ayrosa",             lat: -23.5298, lng: -46.7805 },
  { slug: "bandeiras",              nome: "Bandeiras",          lat: -23.5389, lng: -46.7918 },
  { slug: "baronesa",               nome: "Baronesa",           lat: -23.5421, lng: -46.7835 },
  { slug: "bela-vista",             nome: "Bela Vista",         lat: -23.5312, lng: -46.7756 },
  { slug: "bonanca",                nome: "Bonança",            lat: -23.5445, lng: -46.7889 },
  { slug: "bonfim",                 nome: "Bonfim",             lat: -23.5267, lng: -46.7934 },
  { slug: "bussocaba",              nome: "Bussocaba",          lat: -23.5234, lng: -46.8012 },
  { slug: "castelo-branco",         nome: "Castelo Branco",     lat: -23.5478, lng: -46.7923 },
  { slug: "centro",                 nome: "Centro",             lat: -23.5324, lng: -46.7919 },
  { slug: "cidade-das-flores",      nome: "Cidade das Flores",  lat: -23.5187, lng: -46.7845 },
  { slug: "cidade-de-deus",         nome: "Cidade de Deus",     lat: -23.5203, lng: -46.7789 },
  { slug: "cipava",                 nome: "Cipava",             lat: -23.5156, lng: -46.7912 },
  { slug: "city-bussocaba",         nome: "City Bussocaba",     lat: -23.5198, lng: -46.8034 },
  { slug: "conceicao",              nome: "Conceição",          lat: -23.5289, lng: -46.7978 },
  { slug: "helena-maria",           nome: "Helena Maria",       lat: -23.5401, lng: -46.8012 },
  { slug: "iapi",                   nome: "IAPI",               lat: -23.5367, lng: -46.7856 },
  { slug: "industrial-altino",      nome: "Altino",             lat: -23.5289, lng: -46.7712 },
  { slug: "industrial-anhanguera",  nome: "Anhanguera",         lat: -23.5334, lng: -46.7634 },
  { slug: "industrial-autonomistas",nome: "Autonomistas",       lat: -23.5412, lng: -46.7756 },
  { slug: "industrial-centro",      nome: "Centro",             lat: -23.5356, lng: -46.7890 },
  { slug: "industrial-mazzei",      nome: "Mazzei",             lat: -23.5289, lng: -46.7823 },
  { slug: "industrial-remedios",    nome: "Remédios",           lat: -23.5245, lng: -46.7845 },
  { slug: "jaguaribe",              nome: "Jaguaribe",          lat: -23.5234, lng: -46.7867 },
  { slug: "jardim-dabril",          nome: "Jardim D'Abril",     lat: -23.5189, lng: -46.7934 },
  { slug: "jardim-das-flores",      nome: "Jardim das Flores",  lat: -23.5156, lng: -46.7867 },
  { slug: "jardim-elvira",          nome: "Jardim Elvira",      lat: -23.5423, lng: -46.7912 },
  { slug: "jardim-novo-osasco",     nome: "Jardim Novo Osasco", lat: -23.5345, lng: -46.8045 },
  { slug: "jardim-roberto",         nome: "Jardim Roberto",     lat: -23.5467, lng: -46.7834 },
  { slug: "km-18",                  nome: "Km 18",              lat: -23.5389, lng: -46.8067 },
  { slug: "metalurgicos",           nome: "Metalúrgicos",       lat: -23.5312, lng: -46.7934 },
  { slug: "munhoz-junior",          nome: "Munhoz Júnior",      lat: -23.5267, lng: -46.7845 },
  { slug: "mutinga",                nome: "Mutinga",            lat: -23.5156, lng: -46.7989 },
  { slug: "padroeira",              nome: "Padroeira",          lat: -23.5423, lng: -46.7867 },
  { slug: "paiva-ramos",            nome: "Paiva Ramos",        lat: -23.5378, lng: -46.7789 },
  { slug: "parque-continental",     nome: "Parque Continental", lat: -23.5312, lng: -46.7812 },
  { slug: "pestana",                nome: "Pestana",            lat: -23.5245, lng: -46.7912 },
  { slug: "piratininga",            nome: "Piratininga",        lat: -23.5289, lng: -46.8012 },
  { slug: "platina",                nome: "Platina",            lat: -23.5356, lng: -46.7734 },
  { slug: "portal-doeste",          nome: "Portal D'Oeste",     lat: -23.5401, lng: -46.8034 },
  { slug: "presidente-altino",      nome: "Presidente Altino",  lat: -23.5198, lng: -46.7856 },
  { slug: "quitauna",               nome: "Quitaúna",           lat: -23.5467, lng: -46.7923 },
  { slug: "raposo-tavares",         nome: "Raposo Tavares",     lat: -23.5389, lng: -46.8089 },
  { slug: "remedios",               nome: "Remédios",           lat: -23.5245, lng: -46.7867 },
  { slug: "rochdale",               nome: "Rochdale",           lat: -23.5234, lng: -46.7789 },
  { slug: "santa-fe",               nome: "Santa Fé",           lat: -23.5312, lng: -46.7867 },
  { slug: "santa-maria",            nome: "Santa Maria",        lat: -23.5378, lng: -46.7934 },
  { slug: "santo-antonio",          nome: "Santo Antônio",      lat: -23.5289, lng: -46.7856 },
  { slug: "sao-pedro",              nome: "São Pedro",          lat: -23.5356, lng: -46.7812 },
  { slug: "setor-militar",          nome: "Setor Militar",      lat: -23.5189, lng: -46.7956 },
  { slug: "tres-montanhas",         nome: "Três Montanhas",     lat: -23.5423, lng: -46.7978 },
  { slug: "umuarama",               nome: "Umuarama",           lat: -23.5156, lng: -46.7934 },
  { slug: "veloso",                 nome: "Veloso",             lat: -23.5312, lng: -46.7889 },
  { slug: "vila-campesina",         nome: "Vila Campesina",     lat: -23.5267, lng: -46.7812 },
  { slug: "vila-menck",             nome: "Vila Menck",         lat: -23.5189, lng: -46.7878 },
  { slug: "vila-militar",           nome: "Vila Militar",       lat: -23.5189, lng: -46.7801 },
  { slug: "vila-osasco",            nome: "Vila Osasco",        lat: -23.5345, lng: -46.7956 },
  { slug: "vila-yara",              nome: "Vila Yara",          lat: -23.5267, lng: -46.7756 },
  { slug: "vila-yolanda",           nome: "Vila Yolanda",       lat: -23.5289, lng: -46.7734 },
  { slug: "primeiro-de-maio",       nome: "Primeiro de Maio",   lat: -23.5401, lng: -46.7856 },
  { slug: "fazendinha",             nome: "Fazendinha",         lat: -23.5156, lng: -46.8012 },
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
