import Image from "next/image";

interface ServiceCard {
  phase: string;
  title: string;
  description?: string;
  image?: string;
  span: string;
  bg: string;
  textClass: string;
  phaseColor: string;
}

const services: readonly ServiceCard[] = [
  {
    phase: "Fase 01",
    title: "Recolección",
    image: "/images/recoleccion.png",
    span: "md:col-span-8",
    bg: "bg-muted",
    textClass: "",
    phaseColor: "text-secondary",
  },
  {
    phase: "Fase 02",
    title: "Transporte",
    description:
      "Unidades especializadas con rastreo GPS y protocolos de bioseguridad.",
    span: "md:col-span-4",
    bg: "bg-primary",
    textClass: "text-white",
    phaseColor: "text-highlight",
  },
  {
    phase: "Fase 03",
    title: "Almacenamiento",
    span: "md:col-span-4",
    bg: "bg-surface-alt",
    textClass: "",
    phaseColor: "text-secondary",
  },
  {
    phase: "Fase 04",
    title: "Incineración Controlada",
    image: "/images/incineracion.png",
    span: "md:col-span-8",
    bg: "bg-muted",
    textClass: "",
    phaseColor: "text-secondary",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-headline font-black uppercase tracking-tighter mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Operaciones integrales diseñadas para el manejo seguro de residuos
              peligrosos y no peligrosos.
            </p>
          </div>
          <div className="h-[2px] flex-grow mx-8 bg-surface-alt hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((card) => (
            <div
              key={card.phase}
              className={`${card.span} group relative overflow-hidden ${card.bg} p-8 h-80 flex flex-col justify-end ${card.textClass}`}
            >
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="bw-filter object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                  sizes="(min-width: 768px) 66vw, 100vw"
                />
              )}
              <div className="relative z-10">
                <span className={`text-xs font-black uppercase tracking-widest ${card.phaseColor} mb-2 block`}>
                  {card.phase}
                </span>
                <h3 className="text-3xl font-headline font-bold uppercase">
                  {card.title}
                </h3>
                {card.description && (
                  <p className="mt-4 text-sm opacity-70">{card.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
