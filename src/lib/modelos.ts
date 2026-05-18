import betoneira120 from "@/assets/betoneira-120l.webp";
import betoneira150 from "@/assets/betoneira-150l.webp";
import betoneira250 from "@/assets/betoneira-250l.webp";
import betoneira400 from "@/assets/betoneira-400l.webp";
import caminhaoBetoneira from "@/assets/caminhao-betoneira.webp";

export interface Modelo {
  volume: string;
  motor: string;
  voltagem: string;
  uso: string;
  tag?: string;
  destaque?: boolean;
  imagem?: string;
  alt?: string;
}

export const MODELOS: Modelo[] = [
  {
    volume: "250L",
    motor: "2 cv elétrica",
    voltagem: "220V mono",
    uso: "Lajes e contrapiso",
    tag: "Betoneira 250 litros elétrica em Osasco",
    destaque: true,
    imagem: betoneira250,
    alt: "Betoneira 250 litros amarela para aluguel em Osasco",
  },
  {
    volume: "150L",
    motor: "1/2 cv elétrica",
    voltagem: "110/220V",
    uso: "Reformas e reboco",
    tag: "Betoneira 150 litros para reforma",
    imagem: betoneira150,
    alt: "Betoneira 150 litros amarela em canteiro de obras em Osasco",
  },
  {
    volume: "120L",
    motor: "1/3 cv elétrica",
    voltagem: "110/220V",
    uso: "Reparos e acabamentos",
    tag: "Betoneira 120 litros compacta em Osasco",
    imagem: betoneira120,
    alt: "Betoneira 120 litros compacta para reparos em Osasco",
  },
  {
    volume: "400L",
    motor: "5,5 hp gasolina",
    voltagem: "Gasolina",
    uso: "Muro e calçada",
    tag: "Betoneira 400 litros a gasolina em Osasco",
    imagem: betoneira400,
    alt: "Betoneira 400 litros para obras de médio porte em Osasco",
  },
  {
    volume: "Caminhão",
    motor: "Mixer truck",
    voltagem: "Diesel · com operador",
    uso: "Concretagem em grande volume",
    tag: "Caminhão betoneira (mixer) em Osasco e região",
    imagem: caminhaoBetoneira,
    alt: "Caminhão betoneira amarelo para concretagem em Osasco",
  },
];
