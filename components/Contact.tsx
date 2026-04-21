import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contacto" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Form */}
          <div>
            <h2 className="text-5xl font-headline font-black uppercase tracking-tighter mb-8">
              Contáctanos
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Estamos listos para atender sus requerimientos industriales o
              personales con la mayor brevedad.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-b-2 border-border focus-within:border-primary transition-colors py-2">
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Juan Pérez"
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-foreground font-headline font-bold placeholder:opacity-30"
                  />
                </div>
                <div className="border-b-2 border-border focus-within:border-primary transition-colors py-2">
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Industrias C.A."
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-foreground font-headline font-bold placeholder:opacity-30"
                  />
                </div>
              </div>

              <div className="border-b-2 border-border focus-within:border-primary transition-colors py-2">
                <label className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  Sector
                </label>
                <select className="w-full bg-transparent border-none focus:ring-0 p-0 text-foreground font-headline font-bold appearance-none">
                  <option>Salud / Hospitalario</option>
                  <option>Industrial / Manufactura</option>
                  <option>Mascotas (Huellas de Luz)</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="border-b-2 border-border focus-within:border-primary transition-colors py-2">
                <label className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  Mensaje
                </label>
                <textarea
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={3}
                  className="w-full bg-transparent border-none focus:ring-0 p-0 text-foreground font-headline font-bold placeholder:opacity-30 resize-none"
                />
              </div>

              <Button className="w-full py-5 bg-primary text-primary-foreground font-headline font-black uppercase tracking-[0.2em] rounded-none hover:opacity-90 active:scale-[0.98]">
                Enviar Requerimiento
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-12">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-secondary">
                  Ubicación
                </h4>
                <p className="font-headline font-bold text-xl">
                  Zona Industrial II, Sector 5.
                  <br />
                  Barquisimeto, Edo. Lara.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-secondary">
                  Alianzas Estratégicas
                </h4>
                <div className="grid grid-cols-2 gap-8 opacity-40 grayscale">
                  <span className="font-black tracking-widest text-sm uppercase">Kalor&apos;s</span>
                  <span className="font-black tracking-widest text-sm uppercase">Col. Médicos</span>
                  <span className="font-black tracking-widest text-sm uppercase">Biotech C.A.</span>
                  <span className="font-black tracking-widest text-sm uppercase">Vet-Care</span>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-surface-alt h-64 overflow-hidden relative">
              <Image
                src="/images/map-industrial.png"
                alt="Mapa de la zona industrial en Barquisimeto"
                fill
                className="bw-filter object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
