import { ServiceDetail, FacilityCard } from "@/lib/types";

export const HOME_STATS = [
  { value: "+10", label: "Años de Trayectoria" },
  { value: "MINEC", label: "Certificación Oficial" },
  { value: "02", label: "Incineradores Propios" },
  { value: "Regional", label: "Cobertura Total" },
];

export const SERVICES: ServiceDetail[] = [
  {
    phase: "01",
    title: "Recolección Especializada",
    description:
      "Seguimos protocolos estrictos de bioseguridad en la recolección de desechos patológicos e industriales. Personal entrenado con equipos de protección certificados.",
    icon: "inventory_2",
    image: "/images/recoleccion.png",
  },
  {
    phase: "02",
    title: "Transporte Seguro",
    description:
      "Unidades especializadas con rastreo GPS en tiempo real y contenedores herméticos que garantizan el aislamiento total durante el traslado.",
    icon: "local_shipping",
    image: "/images/recoleccion.png",
  },
  {
    phase: "03",
    title: "Almacenamiento Controlado",
    description:
      "Cámaras frigoríficas con capacidad de 75,000 litros, monitoreo digital 24/7 y rango térmico de -4°C a 2°C para preservación segura.",
    icon: "warehouse",
    image: "/images/recoleccion.png",
  },
  {
    phase: "04",
    title: "Incineración de Alta Temperatura",
    description:
      "Equipos CP 240/360 con cámara primaria a 850-900°C y cámara secundaria superior a 1100°C, garantizando la destrucción total de patógenos.",
    icon: "local_fire_department",
    image: "/images/incineracion.png",
  },
];

export const FACILITIES: FacilityCard[] = [
  {
    title: "Incineración Controlada",
    specs: [
      { label: "Modelo Equipo", value: "CP 240 / 360" },
      { label: "Temperatura Primaria", value: "850°C - 900°C" },
      { label: "Temperatura Secundaria", value: "1100°C+" },
    ],
  },
  {
    title: "Almacenamiento en Frío",
    specs: [
      { label: "Capacidad", value: "75,000 Litros" },
      { label: "Rango Térmico", value: "-4°C a 2°C" },
      { label: "Monitoreo", value: "Digital 24/7" },
    ],
  },
];

export const CERTIFICATIONS = [
  "MINEC RACDA",
  "SECRETARÍA DE SALUD",
  "INTT",
  "SEDETJEL",
];
