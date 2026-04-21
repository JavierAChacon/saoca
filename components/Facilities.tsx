interface SpecRow {
  label: string;
  value: string;
}

interface FacilityCard {
  title: string;
  specs: readonly SpecRow[];
}

const facilities: readonly FacilityCard[] = [
  {
    title: "Incineración Controlada",
    specs: [
      { label: "Modelo Equipo", value: "CP 240 / 360" },
      { label: "Temperatura Primaria", value: "850°C - 900°C" },
      { label: "Temperatura Secundaria", value: "1100°C+" },
    ],
  },
  {
    title: "Almacenamiento",
    specs: [
      { label: "Capacidad Frío", value: "75,000 Litros" },
      { label: "Rango Térmico", value: "-4°C a 2°C" },
      { label: "Monitoreo", value: "Digital 24/7" },
    ],
  },
];

const certifications = ["MINEC RACDA", "SECRETARÍA DE SALUD", "INTT", "SEDETJEL"];

export const Facilities = () => {
  return (
    <section id="instalaciones" className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-headline font-black uppercase tracking-tighter mb-16 text-center">
          Capacidad Operativa
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group bg-white/5 p-12 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all"
            >
              <h3 className="text-3xl font-headline font-bold mb-6">
                {facility.title}
              </h3>
              <div className="space-y-4">
                {facility.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="opacity-60 text-sm">{spec.label}</span>
                    <span className="font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 py-12 border-y border-white/10 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {certifications.map((cert) => (
            <div key={cert} className="text-sm font-black tracking-widest uppercase">
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
