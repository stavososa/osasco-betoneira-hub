export interface Bairro {
  slug: string;
  nome: string;
  lat: number;
  lng: number;
  avenidaPrincipal: string;
  pontoReferencia: string;
  caracteristicaObra: string;
}

export const BAIRROS: Bairro[] = [
  {
    slug: "adalgisa",
    nome: "Adalgisa",
    lat: -23.5268,
    lng: -46.7867,
    avenidaPrincipal: "Avenida Adalgisa",
    pontoReferencia: "São Francisco Golf Club",
    caracteristicaObra: "reformas residenciais e acabamentos de alto padrão"
  },
  {
    slug: "alianca",
    nome: "Aliança",
    lat: -23.5357,
    lng: -46.7745,
    avenidaPrincipal: "Avenida Getúlio Vargas",
    pontoReferencia: "UBS local do Aliança",
    caracteristicaObra: "reformas e ampliações de moradias"
  },
  {
    slug: "ayrosa",
    nome: "Ayrosa",
    lat: -23.5298,
    lng: -46.7805,
    avenidaPrincipal: "Avenida São José",
    pontoReferencia: "Ribeirão Carapicuíba",
    caracteristicaObra: "pequenas reformas residenciais e lajes"
  },
  {
    slug: "bandeiras",
    nome: "Bandeiras",
    lat: -23.5389,
    lng: -46.7918,
    avenidaPrincipal: "Avenida João de Andrade",
    pontoReferencia: "Praça das Bandeiras",
    caracteristicaObra: "construções residenciais e reformas rápidas"
  },
  {
    slug: "baronesa",
    nome: "Baronesa",
    lat: -23.5421,
    lng: -46.7835,
    avenidaPrincipal: "Avenida Presidente Médici",
    pontoReferencia: "Parque do Baronesa",
    caracteristicaObra: "reformas residenciais e concretagem de lajes"
  },
  {
    slug: "bela-vista",
    nome: "Bela Vista",
    lat: -23.5312,
    lng: -46.7756,
    avenidaPrincipal: "Avenida Santo Antônio",
    pontoReferencia: "Praça do Bela Vista",
    caracteristicaObra: "novas verticais e reformas de sobrados"
  },
  {
    slug: "bonanca",
    nome: "Bonança",
    lat: -23.5445,
    lng: -46.7889,
    avenidaPrincipal: "Avenida Juscelino Kubitschek de Oliveira",
    pontoReferencia: "UBS Bonança",
    caracteristicaObra: "construções novas e ampliações de casas"
  },
  {
    slug: "bonfim",
    nome: "Bonfim",
    lat: -23.5267,
    lng: -46.7934,
    avenidaPrincipal: "Avenida das Nações Unidas",
    pontoReferencia: "Estação Osasco da CPTM",
    caracteristicaObra: "reformas comerciais e expansão de galpões"
  },
  {
    slug: "bussocaba",
    nome: "Bussocaba",
    lat: -23.5234,
    lng: -46.8012,
    avenidaPrincipal: "Avenida Bussocaba",
    pontoReferencia: "Viaduto Reinaldo de Oliveira",
    caracteristicaObra: "reformas residenciais e lajes"
  },
  {
    slug: "castelo-branco",
    nome: "Castelo Branco",
    lat: -23.5478,
    lng: -46.7923,
    avenidaPrincipal: "Avenida dos Autonomistas",
    pontoReferencia: "Acesso à Rodovia Castelo Branco",
    caracteristicaObra: "galpões logísticos e reformas comerciais"
  },
  {
    slug: "centro",
    nome: "Centro",
    lat: -23.5324,
    lng: -46.7919,
    avenidaPrincipal: "Avenida dos Autonomistas",
    pontoReferencia: "Calçadão da Antônio Agú",
    caracteristicaObra: "reformas de lojas comerciais e expansões"
  },
  {
    slug: "cidade-das-flores",
    nome: "Cidade das Flores",
    lat: -23.5187,
    lng: -46.7845,
    avenidaPrincipal: "Avenida dos Flamboyants",
    pontoReferencia: "Estação Quitaúna",
    caracteristicaObra: "sobrados residenciais e reformas rápidas"
  },
  {
    slug: "cidade-de-deus",
    nome: "Cidade de Deus",
    lat: -23.5203,
    lng: -46.7789,
    avenidaPrincipal: "Avenida Bussocaba",
    pontoReferencia: "Fundação Bradesco",
    caracteristicaObra: "acabamentos e reformas de escritórios"
  },
  {
    slug: "cipava",
    nome: "Cipava",
    lat: -23.5156,
    lng: -46.7912,
    avenidaPrincipal: "Avenida Antônio Carlos Costa",
    pontoReferencia: "Parque de Lazer Antônio Temporim",
    caracteristicaObra: "reformas residenciais de sobrados"
  },
  {
    slug: "city-bussocaba",
    nome: "City Bussocaba",
    lat: -23.5198,
    lng: -46.8034,
    avenidaPrincipal: "Avenida Prefeito Hirant Sanazar",
    pontoReferencia: "Parque Municipal Chico Mendes",
    caracteristicaObra: "acabamentos residenciais de alto padrão"
  },
  {
    slug: "conceicao",
    nome: "Conceição",
    lat: -23.5289,
    lng: -46.7978,
    avenidaPrincipal: "Avenida Clóvis Assaf",
    pontoReferencia: "Parque de Lazer do Jardim Conceição",
    caracteristicaObra: "construções residenciais e ampliações de casas"
  },
  {
    slug: "helena-maria",
    nome: "Helena Maria",
    lat: -23.5401,
    lng: -46.8012,
    avenidaPrincipal: "Avenida João de Andrade",
    pontoReferencia: "Centro Comercial do Helena Maria",
    caracteristicaObra: "concretagem de lajes e reformas comerciais"
  },
  {
    slug: "iapi",
    nome: "IAPI",
    lat: -23.5367,
    lng: -46.7856,
    avenidaPrincipal: "Avenida Getúlio Vargas",
    pontoReferencia: "Praça do IAPI",
    caracteristicaObra: "reformas de sobrados residenciais e muros"
  },
  {
    slug: "industrial-altino",
    nome: "Altino",
    lat: -23.5289,
    lng: -46.7712,
    avenidaPrincipal: "Avenida Henry Ford",
    pontoReferencia: "Estação Presidente Altino da CPTM",
    caracteristicaObra: "reformas industriais e novos galpões"
  },
  {
    slug: "industrial-anhanguera",
    nome: "Anhanguera",
    lat: -23.5334,
    lng: -46.7634,
    avenidaPrincipal: "Avenida Anhanguera",
    pontoReferencia: "Acesso à Rodovia Anhanguera",
    caracteristicaObra: "reformas comerciais de galpões e garagens"
  },
  {
    slug: "industrial-autonomistas",
    nome: "Autonomistas",
    lat: -23.5412,
    lng: -46.7756,
    avenidaPrincipal: "Avenida dos Autonomistas",
    pontoReferencia: "Shopping União de Osasco",
    caracteristicaObra: "reformas de lojas comerciais e show rooms"
  },
  {
    slug: "industrial-centro",
    nome: "Centro Industrial",
    lat: -23.5356,
    lng: -46.7890,
    avenidaPrincipal: "Avenida dos Autonomistas",
    pontoReferencia: "Calçadão de Osasco",
    caracteristicaObra: "galpões comerciais e expansões corporativas"
  },
  {
    slug: "industrial-mazzei",
    nome: "Mazzei",
    lat: -23.5289,
    lng: -46.7823,
    avenidaPrincipal: "Avenida São José",
    pontoReferencia: "UBS do Mazzei",
    caracteristicaObra: "reformas residenciais e estruturais rápidas"
  },
  {
    slug: "industrial-remedios",
    nome: "Remédios Industrial",
    lat: -23.5245,
    lng: -46.7845,
    avenidaPrincipal: "Avenida dos Remédios",
    pontoReferencia: "Ponte dos Remédios",
    caracteristicaObra: "reformas de depósitos e comércios locais"
  },
  {
    slug: "jaguaribe",
    nome: "Jaguaribe",
    lat: -23.5234,
    lng: -46.7867,
    avenidaPrincipal: "Avenida Flora",
    pontoReferencia: "Parque Antônio Temporim",
    caracteristicaObra: "sobrados residenciais e reformas gerais"
  },
  {
    slug: "jardim-dabril",
    nome: "Jardim D'Abril",
    lat: -23.5189,
    lng: -46.7934,
    avenidaPrincipal: "Avenida Prestes Maia",
    pontoReferencia: "Divisa com Butantã",
    caracteristicaObra: "reformas residenciais e muros de contenção"
  },
  {
    slug: "jardim-das-flores",
    nome: "Jardim das Flores",
    lat: -23.5156,
    lng: -46.7867,
    avenidaPrincipal: "Avenida das Flores",
    pontoReferencia: "Estação Jardim das Flores",
    caracteristicaObra: "sobrados residenciais e acabamentos finos"
  },
  {
    slug: "jardim-elvira",
    nome: "Jardim Elvira",
    lat: -23.5423,
    lng: -46.7912,
    avenidaPrincipal: "Avenida Presidente Médici",
    pontoReferencia: "Praça do Jardim Elvira",
    caracteristicaObra: "lajes residenciais e muros de divisa"
  },
  {
    slug: "jardim-novo-osasco",
    nome: "Jardim Novo Osasco",
    lat: -23.5345,
    lng: -46.8045,
    avenidaPrincipal: "Avenida Novo Osasco",
    pontoReferencia: "Terminal Novo Osasco",
    caracteristicaObra: "ampliação de residências e reformas de calçadas"
  },
  {
    slug: "jardim-roberto",
    nome: "Jardim Roberto",
    lat: -23.5467,
    lng: -46.7834,
    avenidaPrincipal: "Avenida João de Andrade",
    pontoReferencia: "UBS Jardim Roberto",
    caracteristicaObra: "pequenas reformas e lajes residenciais"
  },
  {
    slug: "km-18",
    nome: "Km 18",
    lat: -23.5389,
    lng: -46.8067,
    avenidaPrincipal: "Avenida Hildebrando de Lima",
    pontoReferencia: "Estação Comandante Sampaio CPTM",
    caracteristicaObra: "sobrados de médio padrão e calçadas"
  },
  {
    slug: "metalurgicos",
    nome: "Metalúrgicos",
    lat: -23.5312,
    lng: -46.7934,
    avenidaPrincipal: "Avenida Sarah Veloso",
    pontoReferencia: "Praça dos Metalúrgicos",
    caracteristicaObra: "moradias residenciais e ampliações de garagens"
  },
  {
    slug: "munhoz-junior",
    nome: "Munhoz Júnior",
    lat: -23.5267,
    lng: -46.7845,
    avenidaPrincipal: "Avenida Mutinga",
    pontoReferencia: "Ponto Final do Munhoz",
    caracteristicaObra: "construções populares e lajes"
  },
  {
    slug: "mutinga",
    nome: "Mutinga",
    lat: -23.5156,
    lng: -46.7989,
    avenidaPrincipal: "Avenida Mutinga",
    pontoReferencia: "Parque do Jardim Mutinga",
    caracteristicaObra: "reformas residenciais e calçadas de concreto"
  },
  {
    slug: "padroeira",
    nome: "Padroeira",
    lat: -23.5423,
    lng: -46.7867,
    avenidaPrincipal: "Avenida Benedito Alves Turíbio",
    pontoReferencia: "Supermercado local do Padroeira",
    caracteristicaObra: "lajes residenciais e muros de contenção"
  },
  {
    slug: "paiva-ramos",
    nome: "Paiva Ramos",
    lat: -23.5378,
    lng: -46.7789,
    avenidaPrincipal: "Avenida Sarah Veloso",
    pontoReferencia: "UBS do Paiva Ramos",
    caracteristicaObra: "reformas residenciais e muros de divisa"
  },
  {
    slug: "parque-continental",
    nome: "Parque Continental",
    lat: -23.5312,
    lng: -46.7812,
    avenidaPrincipal: "Avenida Corifeu de Azevedo Marques",
    pontoReferencia: "Divisa com Continental São Paulo",
    caracteristicaObra: "acabamentos finos e construções de alto padrão"
  },
  {
    slug: "pestana",
    nome: "Pestana",
    lat: -23.5245,
    lng: -46.7912,
    avenidaPrincipal: "Avenida Antônio Carlos Costa",
    pontoReferencia: "Parque Pestana",
    caracteristicaObra: "reformas de sobrados e lajes"
  },
  {
    slug: "piratininga",
    nome: "Piratininga",
    lat: -23.5289,
    lng: -46.8012,
    avenidaPrincipal: "Avenida Edmundo Amaral",
    pontoReferencia: "Borboletário de Osasco",
    caracteristicaObra: "reformas comerciais e galpões de pequeno porte"
  },
  {
    slug: "platina",
    nome: "Platina",
    lat: -23.5356,
    lng: -46.7734,
    avenidaPrincipal: "Avenida Getúlio Vargas",
    pontoReferencia: "UBS local do Platina",
    caracteristicaObra: "reformas residenciais rápidas e muros"
  },
  {
    slug: "portal-doeste",
    nome: "Portal D'Oeste",
    lat: -23.5401,
    lng: -46.8034,
    avenidaPrincipal: "Avenida Presidente Médici",
    pontoReferencia: "CEU Portal D'Oeste",
    caracteristicaObra: "pequenas construções e lajes residenciais"
  },
  {
    slug: "presidente-altino",
    nome: "Presidente Altino",
    lat: -23.5198,
    lng: -46.7856,
    avenidaPrincipal: "Avenida Henry Ford",
    pontoReferencia: "Estação CPTM Presidente Altino",
    caracteristicaObra: "reformas residenciais e verticais em expansão"
  },
  {
    slug: "quitauna",
    nome: "Quitaúna",
    lat: -23.5467,
    lng: -46.7923,
    avenidaPrincipal: "Avenida dos Autonomistas",
    pontoReferencia: "Estação Quitaúna da CPTM",
    caracteristicaObra: "novos edifícios residenciais e reformas rápidas"
  },
  {
    slug: "raposo-tavares",
    nome: "Raposo Tavares",
    lat: -23.5389,
    lng: -46.8089,
    avenidaPrincipal: "Rodovia Raposo Tavares",
    pontoReferencia: "Acesso ao Rodoanel",
    caracteristicaObra: "expansão de condomínios residenciais"
  },
  {
    slug: "remedios",
    nome: "Remédios",
    lat: -23.5245,
    lng: -46.7867,
    avenidaPrincipal: "Avenida dos Remédios",
    pontoReferencia: "Ponte dos Remédios e Divisa SP",
    caracteristicaObra: "reformas de sobrados residenciais e lojas"
  },
  {
    slug: "rochdale",
    nome: "Rochdale",
    lat: -23.5234,
    lng: -46.7789,
    avenidaPrincipal: "Avenida Brasil",
    pontoReferencia: "Parque do Rochdale",
    caracteristicaObra: "lajes residenciais e reformas comerciais rápidas"
  },
  {
    slug: "santa-fe",
    nome: "Santa Fé",
    lat: -23.5312,
    lng: -46.7867,
    avenidaPrincipal: "Avenida Mutinga",
    pontoReferencia: "UBS do Santa Fé",
    caracteristicaObra: "reformas residenciais e ampliações de garagens"
  },
  {
    slug: "santa-maria",
    nome: "Santa Maria",
    lat: -23.5378,
    lng: -46.7934,
    avenidaPrincipal: "Avenida Victor Civita",
    pontoReferencia: "Rodoanel Osasco",
    caracteristicaObra: "reformas em condomínios e casas residenciais"
  },
  {
    slug: "santo-antonio",
    nome: "Santo Antônio",
    lat: -23.5289,
    lng: -46.7856,
    avenidaPrincipal: "Avenida João de Andrade",
    pontoReferencia: "Igreja de Santo Antônio",
    caracteristicaObra: "sobrados residenciais e comércio de bairro"
  },
  {
    slug: "sao-pedro",
    nome: "São Pedro",
    lat: -23.5356,
    lng: -46.7812,
    avenidaPrincipal: "Avenida Pedro Pinho",
    pontoReferencia: "Praça do São Pedro",
    caracteristicaObra: "reformas rápidas e lajes residenciais"
  },
  {
    slug: "setor-militar",
    nome: "Setor Militar",
    lat: -23.5189,
    lng: -46.7956,
    avenidaPrincipal: "Avenida dos Autonomistas",
    pontoReferencia: "Quartel de Quitaúna",
    caracteristicaObra: "pequenas reformas e calçadas institucionais"
  },
  {
    slug: "tres-montanhas",
    nome: "Três Montanhas",
    lat: -23.5423,
    lng: -46.7978,
    avenidaPrincipal: "Avenida das Três Montanhas",
    pontoReferencia: "Lago das Três Montanhas",
    caracteristicaObra: "acabamentos finos e construções de alto padrão"
  },
  {
    slug: "umuarama",
    nome: "Umuarama",
    lat: -23.5156,
    lng: -46.7934,
    avenidaPrincipal: "Avenida Antônio Carlos Costa",
    pontoReferencia: "Fundação Bradesco Umuarama",
    caracteristicaObra: "reformas residenciais e sobrados"
  },
  {
    slug: "veloso",
    nome: "Veloso",
    lat: -23.5312,
    lng: -46.7889,
    avenidaPrincipal: "Avenida Sarah Veloso",
    pontoReferencia: "UBS do Veloso",
    caracteristicaObra: "lajes residenciais e ampliações populares"
  },
  {
    slug: "vila-campesina",
    nome: "Vila Campesina",
    lat: -23.5267,
    lng: -46.7812,
    avenidaPrincipal: "Avenida dos Autonomistas",
    pontoReferencia: "Prefeitura Municipal de Osasco",
    caracteristicaObra: "edifícios corporativos e acabamentos finos"
  },
  {
    slug: "vila-menck",
    nome: "Vila Menck",
    lat: -23.5189,
    lng: -46.7878,
    avenidaPrincipal: "Avenida Mutinga",
    pontoReferencia: "Parque da Vila Menck",
    caracteristicaObra: "reformas residenciais de sobrados"
  },
  {
    slug: "vila-militar",
    nome: "Vila Militar",
    lat: -23.5189,
    lng: -46.7801,
    avenidaPrincipal: "Avenida dos Autonomistas",
    pontoReferencia: "Área Militar de Quitaúna",
    caracteristicaObra: "acabamentos e pequenas reformas"
  },
  {
    slug: "vila-osasco",
    nome: "Vila Osasco",
    lat: -23.5345,
    lng: -46.7956,
    avenidaPrincipal: "Avenida Santo Antônio",
    pontoReferencia: "Catedral Santo Antônio",
    caracteristicaObra: "sobrados residenciais e reformas finas"
  },
  {
    slug: "vila-yara",
    nome: "Vila Yara",
    lat: -23.5267,
    lng: -46.7756,
    avenidaPrincipal: "Avenida Yara",
    pontoReferencia: "Shopping União de Osasco",
    caracteristicaObra: "acabamentos finos e reformas de lojas"
  },
  {
    slug: "vila-yolanda",
    nome: "Vila Yolanda",
    lat: -23.5289,
    lng: -46.7734,
    avenidaPrincipal: "Avenida Sarah Veloso",
    pontoReferencia: "Praça do Yolanda",
    caracteristicaObra: "reformas residenciais de sobrados"
  },
  {
    slug: "primeiro-de-maio",
    nome: "Primeiro de Maio",
    lat: -23.5401,
    lng: -46.7856,
    avenidaPrincipal: "Avenida João de Andrade",
    pontoReferencia: "UBS Primeiro de Maio",
    caracteristicaObra: "construções e lajes populares residenciais"
  },
  {
    slug: "fazendinha",
    nome: "Fazendinha",
    lat: -23.5156,
    lng: -46.8012,
    avenidaPrincipal: "Avenida Mutinga",
    pontoReferencia: "UBS local da Fazendinha",
    caracteristicaObra: "pequenas reformas e ampliações de casas"
  }
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
