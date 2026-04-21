"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "motion/react";

export default function ContactoPage() {
  return (
    <>
      <PageHeader title={<>Contáctanos</>} />

      {/* ─── FORM + INFO ─── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-8 max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-headline font-bold uppercase tracking-tight mb-8">
                Enviar Requerimiento
              </h2>

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
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+58 (XXX) XXX.XXXX"
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-foreground font-headline font-bold placeholder:opacity-30"
                  />
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

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full py-6 bg-primary text-primary-foreground font-headline font-black uppercase tracking-[0.2em] rounded-none hover:opacity-90 transition-all">
                    Enviar Requerimiento
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between"
            >
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
                    Teléfono
                  </h4>
                  <p className="font-headline font-bold text-xl">
                    +58 (251) 234.5678
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-secondary">
                    Email
                  </h4>
                  <p className="font-headline font-bold text-xl">
                    info@saoca.com.ve
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-secondary">
                    Alianzas Estratégicas
                  </h4>
                  <div className="grid grid-cols-2 gap-8 opacity-40 grayscale">
                    <span className="font-black tracking-widest text-sm uppercase">
                      Kalor&apos;s
                    </span>
                    <span className="font-black tracking-widest text-sm uppercase">
                      Col. Médicos
                    </span>
                    <span className="font-black tracking-widest text-sm uppercase">
                      Biotech C.A.
                    </span>
                    <span className="font-black tracking-widest text-sm uppercase">
                      Vet-Care
                    </span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 bg-surface-alt h-64 overflow-hidden relative shadow-inner border border-border">
                <Image
                  src="/images/map-industrial.png"
                  alt="Mapa de la zona industrial en Barquisimeto"
                  fill
                  className="bw-filter object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
