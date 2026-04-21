"use client";

import { motion } from "motion/react";
import { Value } from "@/lib/types";

interface ValueCardProps extends Value {
  index: number;
}

export function ValueCard({ icon, title, description, index }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
      }}
      className="flex flex-col items-center text-center p-8 md:p-12 bg-background shadow-sm hover:shadow-xl transition-all cursor-default"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-muted flex items-center justify-center rounded-full mb-8 group-hover:bg-secondary/10 transition-colors">
        <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl">
          {icon}
        </span>
      </div>
      <h4 className="font-headline font-bold uppercase tracking-widest text-sm md:text-base mb-3">
        {title}
      </h4>
      <p className="text-xs md:text-sm font-body text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}
