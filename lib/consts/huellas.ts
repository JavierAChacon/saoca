import { Plan } from "@/lib/types";

export const HUELLAS_PLANS: Plan[] = [
  {
    name: "Plan Básico",
    features: [
      "Cremación Colectiva",
      "Certificado Digital",
      "Traslado Incluido",
    ],
    image: "/images/huellas-basic.png",
    popular: false,
  },
  {
    name: "Plan Esencial",
    features: [
      "Cremación Individual",
      "Urna de Madera Fina",
      "Huella en Arcilla",
      "Traslado Preferencial",
    ],
    image: "/images/huellas-esencial.png",
    popular: true,
  },
  {
    name: "Plan Honor",
    features: [
      "Todo lo del Plan Esencial",
      "Video Memorial Personalizado",
      "Urna Premium Personalizada",
    ],
    image: "/images/huellas-honor.png",
    popular: false,
  },
];
