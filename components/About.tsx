export const About = () => {
  return (
    <section id="quienes-somos" className="py-32 bg-muted">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text column */}
          <div>
            <h2 className="text-5xl font-headline font-black uppercase tracking-tighter mb-8">
              Quiénes Somos
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-body">
              <p>
                Somos el aliado estratégico del sector salud e industrial en el
                occidente de Venezuela, comprometidos con la preservación
                ambiental a través de procesos técnicos rigurosos.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="p-6 bg-background border-l-4 border-primary">
                  <h4 className="font-headline font-bold uppercase text-sm mb-2 text-foreground">
                    Misión
                  </h4>
                  <p className="text-sm">
                    Garantizar la disposición final segura de desechos peligrosos
                    mediante tecnología de vanguardia.
                  </p>
                </div>
                <div className="p-6 bg-background border-l-4 border-secondary">
                  <h4 className="font-headline font-bold uppercase text-sm mb-2 text-foreground">
                    Visión
                  </h4>
                  <p className="text-sm">
                    Liderar la transformación ecológica industrial en la región
                    para el año 2030.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values grid — staggered */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-background p-8 shadow-sm">
                <span className="material-symbols-outlined text-secondary mb-4 block">verified</span>
                <h5 className="font-headline font-bold text-xs uppercase">Calidad</h5>
              </div>
              <div className="bg-primary text-primary-foreground p-8">
                <span className="material-symbols-outlined text-highlight mb-4 block">handshake</span>
                <h5 className="font-headline font-bold text-xs uppercase">Compromiso</h5>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-background p-8 shadow-sm">
                <span className="material-symbols-outlined text-secondary mb-4 block">bolt</span>
                <h5 className="font-headline font-bold text-xs uppercase">Eficiencia</h5>
              </div>
              <div className="bg-background p-8 shadow-sm">
                <span className="material-symbols-outlined text-secondary mb-4 block">psychology</span>
                <h5 className="font-headline font-bold text-xs uppercase">Responsabilidad</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
