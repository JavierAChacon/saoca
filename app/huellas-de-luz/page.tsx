"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { HUELLAS_PLANS as plans } from "@/lib/consts/huellas";



export default function HuellasDeLuzPage() {
  return (
    <div className="huellas-mode">
      {/* ─── PAGE HEADER ─── */}
      <section className="bg-primary text-primary-foreground py-24 -mt-[73px] pt-[calc(73px+6rem)]">
        <div className="container mx-auto px-8 text-center max-w-screen-2xl">
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="material-symbols-outlined text-5xl text-secondary mb-6 block"
          >
            pets
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-headline font-black tracking-tighter mb-6"
          >
            Huellas de Luz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-empathy italic text-2xl text-primary-foreground/70 max-w-2xl mx-auto"
          >
            &ldquo;...para quien siempre estuvo a tu lado y dejó huellas de amor
            en tu corazón.&rdquo;
          </motion.p>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-20 bg-background">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-8 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-headline font-bold mb-6 text-foreground">
            Servicios Crematorios para Mascotas
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Entendemos que las mascotas son parte de la familia. Nuestro servicio
            de cremación ofrece una despedida respetuosa y digna, con la misma
            rigurosidad técnica y sensibilidad humana que nos caracteriza.
          </p>
        </motion.div>
      </section>

      {/* ─── PLAN CARDS ─── */}
      <section className="py-24 bg-background relative">
        <div className="particle-bg absolute inset-0 pointer-events-none opacity-30" />

        <div className="container mx-auto px-8 relative max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className={`flex flex-col rounded-xl shadow-2xl transition-all relative overflow-hidden ${
                  plan.popular
                    ? "bg-primary text-primary-foreground p-10"
                    : "bg-card p-10 border border-primary/5 shadow-primary/5 text-foreground"
                }`}
              >
                {plan.popular && (
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 right-4 bg-secondary text-white font-black text-[10px] px-2 py-1 rounded z-10"
                  >
                    POPULAR
                  </motion.div>
                )}

                <div className="relative w-full h-48 mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className={`bw-filter object-cover transition-transform duration-700 group-hover:scale-110 ${
                      plan.popular ? "opacity-80" : ""
                    }`}
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>

                <h3 className="text-2xl font-headline font-bold mb-4">
                  {plan.name}
                </h3>

                <ul className="space-y-4 text-sm opacity-80 flex-grow mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span
                        className={`material-symbols-outlined text-xs ${
                          plan.popular ? "text-accent" : "text-secondary"
                        }`}
                      >
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    className={`w-full py-4 font-bold rounded-lg transition-colors ${
                      plan.popular
                        ? "bg-secondary text-white hover:bg-white hover:text-primary"
                        : "bg-primary text-primary-foreground hover:opacity-90"
                    }`}
                  >
                    <Link href="/contacto">Solicitar Info</Link>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-8 max-w-screen-2xl">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-headline font-black uppercase tracking-tighter mb-16 text-center text-foreground"
          >
            ¿Cómo funciona?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                icon: "call",
                title: "Contacto",
                desc: "Nos llamas y coordinamos el traslado del compañero.",
              },
              {
                step: "02",
                icon: "local_shipping",
                title: "Traslado",
                desc: "Recogemos a tu mascota con el mayor respeto.",
              },
              {
                step: "03",
                icon: "local_fire_department",
                title: "Cremación",
                desc: "Proceso individual o colectivo según el plan elegido.",
              },
              {
                step: "04",
                icon: "favorite",
                title: "Entrega",
                desc: "Recibes la urna, certificado y recuerdos.",
              },
            ].map((item, i) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4"
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                </motion.div>
                <span className="text-xs font-black text-secondary tracking-widest block mb-2">
                  PASO {item.step}
                </span>
                <h4 className="font-headline font-bold uppercase text-sm mb-2 text-foreground">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EMOTIONAL CLOSING ─── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-8 max-w-screen-2xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary/10 p-16 rounded-3xl text-center border border-primary/10 max-w-3xl mx-auto"
          >
            <h3 className="font-empathy text-5xl text-primary mb-4 italic">
              &ldquo;Hasta luego, amigo...&rdquo;
            </h3>
            <p className="text-foreground/60 max-w-lg mx-auto mb-8">
              En SAOCA entendemos que son parte de la familia. Brindamos el
              respeto que merecen en su último viaje.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-primary text-primary-foreground px-10 py-5 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:opacity-90"
              >
                <Link href="/contacto">Hablar con Nosotros</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
