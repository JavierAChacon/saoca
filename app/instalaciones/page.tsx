"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "motion/react";
import { INSTALACION_STATS, AUTHORIZATIONS, CERTIFICATIONS_LIST } from "@/lib/consts/instalaciones";

export default function InstalacionesPage() {
  return (
    <>
      <PageHeader
        title={
          <>
            Instalaciones
            <br />y Cumplimiento
          </>
        }
        imageAlt="Modern industrial facility at night"
      />

      {/* General Facilities Overview */}
      <section className="bg-surface-alt py-32 px-6">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-xs font-black tracking-widest uppercase border-l-2 border-secondary mb-8">
                Nuestras Instalaciones
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-black text-foreground mb-8 leading-[1.1] uppercase tracking-tighter">
                Infraestructura de alto estándar operativo
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-body">
                Contamos con instalaciones de vanguardia diseñadas bajo los más
                estrictos protocolos internacionales de gestión ambiental.
                Nuestro compromiso va más allá del cumplimiento legal;
                invertimos en tecnología que garantiza la eliminación segura de
                residuos, protegiendo los ecosistemas locales y la salud pública
                en cada etapa del proceso.
              </p>
            </motion.div>
            <div className="grid gap-6">
              {INSTALACION_STATS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ x: 10 }}
                  className="bg-background p-8 shadow-sm flex items-center space-x-8 transition-all border border-border cursor-default hover:border-secondary"
                >
                  <span className="material-symbols-outlined text-secondary text-5xl">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Controlled Incineration */}
      <section className="bg-background py-32 px-6">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-muted text-primary text-xs font-black tracking-widest uppercase mb-8">
                Incineración Controlada
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-black text-foreground mb-8 uppercase tracking-tighter">
                Proceso de oxidación térmica certificado
              </h2>
              <p className="text-muted-foreground mb-12 text-lg font-body leading-relaxed">
                Nuestra tecnología de oxidación térmica opera en rangos críticos
                para asegurar la destrucción molecular completa de patógenos y
                compuestos orgánicos volátiles.
              </p>
              <div className="flex flex-wrap gap-12">
                <div className="border-l-4 border-secondary pl-6">
                  <span className="block text-4xl font-headline font-black text-foreground mb-2">
                    850-1000°C
                  </span>
                  <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">
                    Rango Operativo
                  </span>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <span className="block text-4xl font-headline font-black text-foreground mb-2">
                    6%
                  </span>
                  <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">
                    Exceso de Oxígeno
                  </span>
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-8 lg:mt-0">
              {[
                { title: "Horno CP 240", tag: "Certificación ISO" },
                { title: "Horno CP 360", tag: "Alto Rendimiento" },
              ].map((horno, i) => (
                <motion.div
                  key={horno.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3 }}
                  className="group relative bg-surface-alt p-10 overflow-hidden border border-border shadow-sm cursor-default hover:border-secondary transition-colors"
                >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-6 -right-6 p-4 opacity-5 group-hover:opacity-10"
                  >
                    <span className="material-symbols-outlined text-[150px]">
                      settings
                    </span>
                  </motion.div>
                  <h4 className="text-2xl font-headline font-black text-foreground mb-3 relative z-10">
                    {horno.title}
                  </h4>
                  <p className="text-muted-foreground mb-6 font-body text-sm relative z-10">
                    Tecnología Kalor's, C.A.
                  </p>
                  <div className="bg-secondary/10 text-secondary text-xs font-black px-4 py-2 uppercase tracking-widest inline-block relative z-10">
                    {horno.tag}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waste Storage */}
      <section className="bg-surface-alt py-32 px-6 border-t border-border border-b">
        <div className="container mx-auto max-w-screen-2xl text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-xs font-black tracking-widest uppercase border-l-2 border-secondary mb-8">
              Almacenamiento
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-foreground uppercase tracking-tighter">
              Almacenamiento Seguro y Controlado
            </h2>
          </motion.div>
        </div>
        <div className="container mx-auto max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Desechos Perecederos",
              desc: "Cavas refrigeradoras de alta capacidad diseñadas para mantener la integridad biológica y prevenir la descomposición antes del proceso térmico.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0HDdKX20plD2e2F-rFruOYnLkJ9iMFyx14Ubxb1gTvB0EwvYzsKyRnVPeisUpWsLSqFoBSZEwdpY94gIa9tIyMT6UYxWOrt7TbsYiYzEjnSPVY8D_6llcjHlUL_YtrhLyemYZfz0Rzydh-Yz9jy3Hi5L0HE3gZMA_Kbwf63Fjuhg-6arblmxcqrWYYAM0ZTzD8mngpDVAhLlrsP3FvYb4N4OeuFWgguNpDrItLCLe-eURXXgz8ddlx4N3xwpXc1jNwsDBkfyoQPQ"
            },
            {
              title: "Desechos No Perecederos",
              desc: "Espacio de 113.60 m² dotado con sistemas de recolección de derrames y zonificación de seguridad para materiales industriales y textiles.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrj-DfgHjWbtUgvij9787gA5pGgTqADVSBFNINdfZmJPR4b43yMH8POZ5P4YGmyBodIhWpX68sKTcDGMetWjZe3NqIIJHJ39bbVWenwC9oVbWReATavch39Z-k_hy98sLI8HkyjJgTKIAx3hXdRSELvGpKKkcV8XOmzJ4wbTc1V8KtNRG4hx-AA8503ogrNpgprw4forSmxK2LyjI08zMHBjNCRvPp56zHUOfLGNpRniOObUHp8gjhOGGNUgiDY-kE9nmFA9JQ_G0"
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-background overflow-hidden shadow-md transition-all border border-border group"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-12">
                <h3 className="text-2xl font-headline font-black text-foreground mb-4 uppercase tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MINEC Authorization */}
      <section className="bg-primary text-primary-foreground py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-10"></div>
        <div className="container mx-auto max-w-screen-2xl relative z-10">
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-secondary text-primary-foreground text-xs font-black tracking-widest uppercase mb-8">
                Autorización Gubernamental
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-black mb-8 uppercase tracking-tighter">
                Autorizados por el Ministerio del Poder Popular para Ecosocialismo
              </h2>
              <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
                Operamos bajo la estricta vigilancia del MINEC, cumpliendo con el
                RACDA N° 03-04-RTSMDP-AL-Tr-Df-2017-8970 y la Providencia N° 663,
                garantizando transparencia y legalidad total.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUTHORIZATIONS.map((auth, i) => (
              <motion.div
                key={auth.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="bg-white/5 border border-white/10 p-10 transition-colors group backdrop-blur-sm shadow-xl"
              >
                <span className="material-symbols-outlined text-highlight text-4xl mb-6 block group-hover:scale-110 transition-transform">
                  {auth.icon}
                </span>
                <h4 className="font-headline font-bold text-lg mb-3 uppercase tracking-tight">
                  {auth.title}
                </h4>
                <p className="text-sm font-body text-primary-foreground/60">
                  {auth.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Certifications */}
      <section className="bg-background py-32 px-6">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-muted text-primary text-xs font-black tracking-widest uppercase mb-8">
              Certificaciones Ambientales
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-foreground uppercase tracking-tighter">
              Certificaciones que respaldan nuestra operación
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS_LIST.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ backgroundColor: "var(--muted)", borderColor: "var(--secondary)" }}
                className="p-8 border border-border shadow-sm flex items-start space-x-6 transition-all group"
              >
                <span className="material-symbols-outlined text-secondary mt-1 group-hover:text-highlight transition-colors">
                  check_circle
                </span>
                <div>
                  <h5 className="font-headline font-black uppercase tracking-tight text-foreground mb-1">
                    {cert.title}
                  </h5>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Registrations */}
      <section className="bg-surface-alt py-20 px-6 border-y border-border">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Inscripciones Gubernamentales
            </span>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              "IVSS",
              "INCES",
              "BANAVIH",
              "INPSASEL",
              "MINTRA",
              "Bomberos",
              "SEDETJEL",
            ].map((reg) => (
              <motion.span
                key={reg}
                whileHover={{ scale: 1.1, borderColor: "var(--secondary)", color: "var(--secondary)" }}
                className="px-8 py-3 bg-background border border-border text-sm font-black text-foreground uppercase tracking-widest shadow-sm transition-colors cursor-default"
              >
                {reg}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Corporate CTA Banner */}
      <section className="bg-background py-32 px-6">
        <div className="container mx-auto max-w-screen-2xl">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground p-16 lg:p-24 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-highlight/10 blur-[100px] rounded-full pointer-events-none"
            ></motion.div>
            <div className="absolute inset-0 industrial-grid opacity-10" />
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-headline font-black text-white uppercase tracking-tighter leading-tight mb-12 relative z-10 max-w-4xl">
              Proteger el medioambiente es una responsabilidad compartida
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 relative z-10 w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  className="bg-highlight text-primary px-12 py-8 rounded-none font-headline font-black uppercase tracking-[0.2em] text-base shadow-xl hover:bg-white hover:text-primary transition-colors relative z-10"
                >
                  <Link href="/contacto">Solicitar Presupuesto</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  className="px-12 py-8 rounded-none font-headline font-black uppercase tracking-[0.2em] text-base border-white/20 hover:bg-white/10 text-white transition-colors"
                >
                  <a href="tel:+584141661460">
                    <span className="material-symbols-outlined mr-2">call</span>
                    +58 414-1661460
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
