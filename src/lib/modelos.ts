export interface Modelo {
  volume: string;
  motor: string;
  voltagem: string;
  uso: string;
  tag?: string;
  destaque?: boolean;
}

export const MODELOS: Modelo[] = [
  {
    volume: "250L",
    motor: "2 cv elétrica",
    voltagem: "220V mono",
    uso: "Lajes e contrapiso",
    tag: "Betoneira 250 litros elétrica em Osasco",
    destaque: true,
  },
  {
    volume: "150L",
    motor: "1/2 cv elétrica",
    voltagem: "110/220V",
    uso: "Reformas e reboco",
    tag: "Betoneira 150 litros para reforma",
  },
  {
    volume: "120L",
    motor: "1/3 cv elétrica",
    voltagem: "110/220V",
    uso: "Reparos e acabamentos",
    tag: "Betoneira 120 litros compacta em Osasco",
  },
  {
    volume: "400L",
    motor: "5,5 hp gasolina",
    voltagem: "Gasolina",
    uso: "Muro e calçada",
    tag: "Betoneira 400 litros a gasolina em Osasco",
  },
];
