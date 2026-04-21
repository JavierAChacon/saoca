import Image from "next/image";

const stats = [
  { value: "+10", label: "Años de Trayectoria" },
  { value: "MINEC", label: "Certificación Oficial" },
  { value: "02", label: "Incineradores Propios" },
  { value: "Regional", label: "Cobertura Total" },
];

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 bg-primary text-primary-foreground overflow-hidden"
    >
      <div className="absolute inset-0 industrial-grid opacity-20" />

      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-8 self-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-3 py-1 rounded-none border-l-4 border-secondary">
            <span className="text-xs font-black uppercase tracking-[0.2em]">
              Authorized Industry Leader
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-headline font-black uppercase leading-[0.9] tracking-tighter">
            Gestión <span className="text-highlight">responsable</span> de desechos
          </h1>

          <p className="text-lg text-primary-foreground/60 max-w-lg leading-relaxed font-body">
            Especialistas en la recolección e incineración de desechos
            patológicos e industriales con los más altos estándares de
            bioseguridad en el occidente del país.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-highlight">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -right-20 top-0 w-full h-[120%] bg-white/5 -skew-x-12" />
          <div className="relative z-20 shadow-2xl overflow-hidden h-[600px] w-full">
            <Image
              src="/images/hero-master.png"
              alt="High-contrast industrial incinerator facility with steam and steel structures"
              fill
              className="bw-filter object-cover"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
