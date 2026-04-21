import { Stat, Feature, Value, TalentFeature } from "@/lib/types";

export const ABOUT_STATS: Stat[] = [
  { label: "+10", sub: "Años de Exp.", bg: "bg-muted", text: "text-secondary" },
  { label: "02", sub: "Hornos Incin.", bg: "bg-primary", text: "text-primary-foreground" },
  { label: "MINEC", sub: "Certificación Nacional", bg: "bg-secondary", text: "text-primary-foreground" },
  { label: "Zulia", sub: "Sede Principal", bg: "bg-surface-alt", text: "text-foreground" }
];

export const OBJECTIVES: Feature[] = [
  { icon: "verified", title: "Servicio de Calidad", description: "Optimización constante de procesos para exceder las expectativas regulatorias y de nuestros clientes." },
  { icon: "school", title: "Capacitación Continua", description: "Formación técnica permanente de nuestro personal en manejo de materiales peligrosos y seguridad." },
  { icon: "eco", title: "Conciencia Pública", description: "Fomentar la cultura ecológica en las comunidades y sectores industriales donde operamos." },
  { icon: "health_and_safety", title: "Ambiente Seguro", description: "Cero accidentes mediante la implementación rigurosa de protocolos de salud ocupacional." }
];

export const VALUES: Value[] = [
  { icon: "handshake", title: "Honestidad", description: "Transparencia absoluta en cada reporte y operación." },
  { icon: "assignment_turned_in", title: "Compromiso", description: "Responsabilidad total con el bienestar ambiental." },
  { icon: "bolt", title: "Eficiencia", description: "Maximizamos recursos para minimizar el impacto." },
  { icon: "sentiment_satisfied", title: "Entusiasmo", description: "Pasión por proteger nuestro entorno natural." },
  { icon: "workspace_premium", title: "Calidad", description: "Excelencia técnica en cada proceso térmico." },
  { icon: "security", title: "Responsabilidad", description: "Garantía de cumplimiento legal y moral." },
];

export const TALENT_FEATURES: TalentFeature[] = [
  { icon: "diversity_3", title: "Cultura Inclusiva", description: "Fomentamos el respeto y la igualdad en todos los niveles operativos." },
  { icon: "psychology", title: "Desarrollo", description: "Planes de carrera enfocados en la especialización ambiental." },
  { icon: "medical_services", title: "Salud Integral", description: "Programas robustos de vigilancia médica y bienestar laboral." },
  { icon: "military_tech", title: "Liderazgo Ético", description: "Formamos líderes comprometidos con la transparencia." },
  { icon: "groups", title: "Comunicación", description: "Canales directos para la mejora continua del clima laboral." },
  { icon: "celebration", title: "Reconocimiento", description: "Valoramos y premiamos el desempeño excepcional." },
];
