import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Plan {
  name: string;
  features: readonly string[];
  image: string;
  popular: boolean;
}

const plans: readonly Plan[] = [
  {
    name: "Plan Básico",
    features: ["Cremación Colectiva", "Certificado Digital", "Traslado Incluido"],
    image: "/images/huellas-basic.png",
    popular: false,
  },
  {
    name: "Plan Esencial",
    features: [
      "Cremación Individual",
      "Urna de Madera Fina",
      "Huella en Arcilla",
      "Traslado Preferencial",
    ],
    image: "/images/huellas-esencial.png",
    popular: true,
  },
  {
    name: "Plan Honor",
    features: [
      "Todo lo del Plan Esencial",
      "Video Memorial Personalizado",
      "Urna Premium Personalizada",
    ],
    image: "/images/huellas-honor.png",
    popular: false,
  },
];

export const HuellasDeLuz = () => {
  return (
    <section
      id="huellas"
      className="huellas-mode min-h-screen bg-background py-32 transition-colors duration-700 relative"
    >
      <div className="particle-bg absolute inset-0 pointer-events-none opacity-30" />

      <div className="container mx-auto px-8 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-secondary font-headline font-bold uppercase tracking-widest text-xs mb-4">
            Servicios Crematorios para Mascotas
          </span>
          <h2 className="text-6xl font-headline font-extrabold text-primary tracking-tighter mb-6">
            Una despedida digna
          </h2>
          <p className="font-empathy italic text-2xl text-foreground/70 max-w-2xl">
            &ldquo;...para quien siempre estuvo a tu lado y dejó huellas de amor
            en tu corazón.&rdquo;
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl shadow-2xl hover:-translate-y-2 transition-transform relative overflow-hidden ${
                plan.popular
                  ? "bg-primary text-primary-foreground p-10"
                  : "bg-card p-10 border border-primary/5 shadow-primary/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-secondary text-primary font-black text-[10px] px-2 py-1 rounded z-10">
                  POPULAR
                </div>
              )}

              <div className="relative w-full h-48 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  className={`bw-filter object-cover ${plan.popular ? "opacity-80" : ""}`}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <h3 className="text-2xl font-headline font-bold mb-4">{plan.name}</h3>

              <ul className="space-y-4 text-sm opacity-80 flex-grow mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className={`material-symbols-outlined text-xs ${plan.popular ? "text-accent" : "text-secondary"}`}>
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-4 font-bold rounded-lg transition-colors ${
                  plan.popular
                    ? "bg-secondary text-primary-foreground hover:bg-white hover:text-primary"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Solicitar Info
              </Button>
            </div>
          ))}
        </div>

        {/* Emotional closing */}
        <div className="bg-primary/10 p-16 rounded-3xl text-center border border-primary/10">
          <h4 className="font-empathy text-5xl text-primary mb-4 italic">
            &ldquo;Hasta luego, amigo...&rdquo;
          </h4>
          <p className="text-foreground/60 max-w-lg mx-auto">
            En SAOCA entendemos que son parte de la familia. Brindamos el
            respeto que merecen en su último viaje.
          </p>
        </div>
      </div>
    </section>
  );
};
