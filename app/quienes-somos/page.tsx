"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "motion/react";
import { StatCard } from "@/components/StatCard";
import { FeatureCard } from "@/components/FeatureCard";
import { ValueCard } from "@/components/ValueCard";
import { ABOUT_STATS as STATS, OBJECTIVES, VALUES, TALENT_FEATURES } from "@/lib/consts/about";

export default function QuienesSomosPage() {
  return (
    <>
      <PageHeader
        title={
          <>
            Quiénes
            <br />
            Somos
          </>
        }
      />

      {/* 2. Presentation */}
      <section className="bg-background py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-screen-2xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-xs font-black tracking-widest uppercase border-l-2 border-secondary">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-5xl font-headline font-black text-foreground leading-[1.1] uppercase tracking-tighter">
              Soluciones Ambientales de Occidente C.A.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-body leading-relaxed">
              Somos una empresa líder en el occidente venezolano dedicada a la
              gestión integral de residuos industriales y peligrosos. Con un
              enfoque técnico-ambiental de vanguardia, garantizamos procesos
              seguros que protegen el ecosistema y cumplen con las normativas
              internacionales más exigentes.
            </p>
            <p className="text-muted-foreground text-sm md:text-base font-body leading-relaxed">
              Nuestro compromiso nace de la necesidad de ofrecer alternativas
              sostenibles para el manejo de pasivos ambientales, integrando
              tecnología de incineración de alta eficiencia y logística
              especializada.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <StatCard key={stat.sub} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission/Vision */}
      <section className="bg-surface-alt py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-screen-2xl grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative group p-8 lg:p-12 bg-background shadow-xl transition-all duration-500"
          >
            <div className="absolute left-0 top-0 w-2 h-full bg-secondary"></div>
            <span className="text-sm font-black tracking-[0.3em] text-secondary uppercase mb-8 block">
              Nuestra Misión
            </span>
            <p className="text-xl md:text-2xl font-headline font-bold text-foreground leading-relaxed">
              Proveer soluciones integrales para la gestión de residuos con los
              más altos estándares de seguridad y eficiencia, contribuyendo
              activamente a la preservación del medio ambiente y el desarrollo
              sostenible de la industria nacional.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="relative group p-8 lg:p-12 bg-primary text-primary-foreground shadow-2xl transition-all duration-500"
          >
            <div className="absolute left-0 top-0 w-2 h-full bg-highlight"></div>
            <span className="text-sm font-black tracking-[0.3em] text-highlight uppercase mb-8 block">
              Nuestra Visión
            </span>
            <p className="text-xl md:text-2xl font-headline font-bold text-white leading-relaxed">
              Ser el referente indiscutible en gestión ambiental en Venezuela,
              reconocidos por nuestra innovación tecnológica, ética operativa y
              capacidad de respuesta ante los desafíos ecológicos del siglo XXI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Objectives */}
      <section className="bg-background py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-headline font-black uppercase tracking-tighter text-foreground"
            >
              Objetivos Estratégicos
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              className="h-2 bg-secondary mt-6"
            ></motion.div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OBJECTIVES.map((obj, i) => (
              <FeatureCard key={obj.title} {...obj} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Values */}
      <section className="bg-surface-alt py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-screen-2xl">
          <h2 className="text-center text-3xl md:text-5xl font-headline font-black text-foreground mb-16 md:mb-24 uppercase tracking-tighter">
            Valores Corporativos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {VALUES.map((val, i) => (
              <ValueCard key={val.title} {...val} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Philosophy */}
      <section className="bg-primary text-primary-foreground py-24 md:py-40 px-6 relative">
        <div className="absolute inset-0 industrial-grid opacity-10"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl text-center relative z-10"
        >
          <span className="text-xs font-black tracking-[0.3em] text-highlight uppercase mb-8 block">
            Nuestra Filosofía
          </span>
          <blockquote className="text-2xl md:text-5xl xl:text-6xl font-empathy font-light italic leading-tight mb-12 md:mb-16 opacity-90">
            &ldquo;No solo gestionamos residuos; diseñamos un futuro donde la
            industria y la naturaleza coexisten en equilibrio perfecto a través
            de la ciencia ambiental.&rdquo;
          </blockquote>
          <div className="flex justify-center items-center gap-4 md:gap-6">
            <div className="w-10 md:w-16 h-[2px] bg-white/20"></div>
            <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-white/50">
              Junta Directiva SAOCA
            </p>
            <div className="w-10 md:w-16 h-[2px] bg-white/20"></div>
          </div>
        </motion.div>
      </section>

      {/* 7. Org Chart */}
      <section className="bg-background py-20 md:py-32 px-6 overflow-hidden">
        <div className="container mx-auto max-w-screen-2xl">
          <h2 className="text-3xl md:text-5xl font-headline font-black text-foreground uppercase tracking-tighter mb-16 md:mb-24 text-center">
            Estructura Organizativa
          </h2>
          <div className="flex flex-col items-center gap-8 md:gap-12 overflow-x-auto pb-8 scrollbar-hide">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground px-10 md:px-16 py-4 md:py-6 text-base md:text-xl font-headline font-black uppercase tracking-widest shadow-2xl whitespace-nowrap"
            >
              Junta Directiva
            </motion.div>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 48 }}
              viewport={{ once: true }}
              className="w-1 bg-secondary h-8 md:h-12"
            ></motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-secondary text-primary-foreground px-8 md:px-12 py-4 md:py-5 text-sm md:text-lg font-headline font-black uppercase tracking-widest shadow-xl whitespace-nowrap"
            >
              Gerencia General
            </motion.div>
            <div className="w-full max-w-5xl relative mt-4 min-w-[600px]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 right-0 h-1 bg-secondary mx-auto"
              ></motion.div>
              <div className="flex justify-between pt-12 gap-4">
                {[
                  "Operaciones & Mantenimiento",
                  "Administración & Finanzas",
                  "Seguridad & Ambiente",
                  "Comercial & Logística",
                ].map((dept, i) => (
                  <motion.div
                    key={dept}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex flex-col items-center relative flex-1"
                  >
                    <div className="w-1 h-12 absolute top-0 bg-secondary"></div>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        borderColor: "var(--primary)",
                      }}
                      className="bg-muted p-4 md:p-6 text-[10px] md:text-xs xl:text-sm font-headline font-black uppercase tracking-tighter text-center w-full shadow-sm mt-12 transition-all min-h-[80px] md:min-h-[100px] flex items-center justify-center border-t-4 border-secondary cursor-default"
                    >
                      {dept}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Team & Talent */}
      <section className="bg-surface-alt py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-black tracking-[0.2em] uppercase text-secondary mb-4 block">
                Gente SAOCA
              </span>
              <h2 className="text-4xl md:text-6xl font-headline font-black text-foreground uppercase tracking-tighter leading-none mb-6 md:mb-8">
                Nuestro Equipo
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-body">
                Contamos con un grupo multidisciplinario de ingenieros
                ambientales, técnicos especialistas en procesos térmicos y
                expertos en logística de materiales peligrosos. Cada miembro de
                SAOCA comparte la visión de excelencia y el rigor técnico
                necesario para operar en un entorno de alta responsabilidad.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden shadow-2xl h-[300px] md:h-[400px] bg-muted flex items-center justify-center group"
            >
              <span className="material-symbols-outlined text-7xl md:text-9xl text-secondary/20 group-hover:scale-110 group-hover:text-secondary/40 transition-all duration-700">
                engineering
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-16 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-secondary/5 rounded-full blur-3xl"></div>
            <h3 className="text-2xl md:text-3xl font-headline font-black text-foreground uppercase mb-12 md:mb-16 tracking-widest text-center border-b-2 border-secondary inline-block pb-4 mx-auto w-full max-w-max relative z-10">
              Gestión de Talento Humano
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-16 gap-x-8 md:gap-x-12 relative z-10">
              {TALENT_FEATURES.map((talent, i) => (
                <FeatureCard key={talent.title} {...talent} index={i} variant="background" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate CTA Banner */}
      <section className="bg-background py-20 md:py-32 px-6 border-t border-border">
        <div className="container mx-auto max-w-screen-2xl">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-muted p-10 md:p-16 lg:p-24 flex flex-col items-center text-center shadow-md relative overflow-hidden text-balance"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-highlight/20 blur-3xl rounded-full pointer-events-none"></div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black text-foreground uppercase tracking-tighter leading-tight mb-8 md:mb-10 relative z-10">
              ¿Listo para una gestión ambiental responsable?
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-primary text-primary-foreground px-10 md:px-12 py-6 md:py-8 rounded-none font-headline font-black uppercase tracking-[0.2em] text-sm md:text-base shadow-xl hover:shadow-primary/30 relative z-10 transition-shadow"
              >
                <Link href="/contacto">Hablemos ahora</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

