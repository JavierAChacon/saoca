"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { HOME_STATS as stats, SERVICES as services, FACILITIES as facilities, CERTIFICATIONS as certifications } from "@/lib/consts/home";



export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center bg-primary text-primary-foreground overflow-hidden -mt-[73px] pt-[73px]">
        <div className="absolute inset-0 industrial-grid opacity-20" />

        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 py-20 max-w-screen-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 self-center"
          >
            <h1 className="text-6xl md:text-8xl font-headline font-black uppercase leading-[0.9] tracking-tighter">
              Gestión <span className="text-highlight">responsable</span> de
              desechos
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-primary-foreground/60 max-w-lg leading-relaxed font-body"
            >
              Especialistas en la recolección e incineración de desechos
              patológicos e industriales con los más altos estándares de
              bioseguridad en el occidente del país.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className="text-3xl font-black text-highlight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="bg-secondary text-secondary-foreground px-8 py-6 rounded-none font-headline font-bold uppercase tracking-widest text-sm shadow-[0_0_0_0_rgba(182,189,122,0)] hover:shadow-[0_0_20px_0_rgba(182,189,122,0.4)] transition-all duration-300"
                >
                  <Link href="/servicios">Nuestros Servicios</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <Button
                  asChild
                  variant="ghost"
                  className="border border-white/20 text-white px-8 py-6 rounded-none font-headline font-bold uppercase tracking-widest text-sm"
                >
                  <Link href="/quienes-somos">Conócenos</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -right-20 top-0 w-full h-[120%] bg-emerald-900/5 -skew-x-12 hidden lg:block"
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-20 shadow-2xl overflow-hidden h-[300px] md:h-[500px] lg:h-[600px] w-full mt-12 lg:mt-0 rounded-none border border-emerald-900/10"
            >
              <Image
                src="/images/hero-master.png"
                alt="Industrial incinerator facility"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-8 max-w-screen-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-32 space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter text-foreground">
              Proceso Integral
            </h2>
            <div className="h-2 w-24 bg-secondary" />
          </motion.div>

          <div className="space-y-40">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  key={service.phase}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Block */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-full lg:w-1/2 relative group transition-all duration-500"
                  >
                    <div
                      className={`absolute inset-0 bg-muted ${isEven ? "translate-x-6 translate-y-6" : "-translate-x-6 translate-y-6"}`}
                    />
                    <div className="relative h-[450px] w-full overflow-hidden shadow-2xl bg-surface-alt">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-muted">
                          <span className="material-symbols-outlined text-9xl text-secondary/30 transition-transform duration-700 group-hover:scale-105">
                            {service.icon}
                          </span>
                        </div>
                      )}
                    </div>
                    {/* Floating Phase Number */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${isEven ? "-right-8 lg:-right-24" : "-left-8 lg:-left-24"} z-10 hidden md:block pointer-events-none`}
                    >
                      <span
                        className="text-[150px] lg:text-[250px] font-headline font-black text-background drop-shadow-md opacity-80"
                        style={{ WebkitTextStroke: "2px var(--secondary)" }}
                      >
                        {service.phase}
                      </span>
                    </div>
                  </motion.div>

                  {/* Content Block */}
                  <div className="w-full lg:w-1/2 space-y-8 relative z-20">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-muted text-secondary shadow-lg transition-transform"
                    >
                      <span className="material-symbols-outlined text-4xl">
                        {service.icon}
                      </span>
                    </motion.div>
                    <div>
                      <span className="block text-sm font-black uppercase tracking-[0.2em] text-secondary mb-3">
                        Fase {service.phase}
                      </span>
                      <h3 className="text-4xl lg:text-5xl font-headline font-bold uppercase tracking-tight text-foreground leading-[1.1]">
                        {service.title}
                      </h3>
                    </div>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="bg-muted p-8 shadow-sm border-l-4 border-transparent hover:border-secondary transition-all font-body"
                    >
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-32 bg-primary relative overflow-hidden"
      >
        <div className="absolute inset-0 industrial-grid opacity-20" />
        <div className="container mx-auto px-8 relative z-10 max-w-screen-2xl">
          <motion.div className="bg-white/5 border border-white/10 p-16 lg:p-24 backdrop-blur-md relative shadow-2xl flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter mb-10 text-white relative z-10 leading-[1.1]">
              ¿Necesita una solución <br />
              <span className="text-highlight">ambiental certificada?</span>
            </h2>
            <p className="text-primary-foreground/70 text-xl max-w-3xl mb-14 relative z-10 font-body leading-relaxed">
              Garantice el cumplimiento normativo integral con nuestro respaldo
              operativo de más de una década en el sector salud e industrial.
            </p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                asChild
                className="bg-highlight text-primary px-16 py-8 rounded-none font-headline font-black uppercase tracking-[0.2em] text-base shadow-xl hover:text-white transition-colors relative z-10"
              >
                <Link href="/contacto">Iniciar Solicitud</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
