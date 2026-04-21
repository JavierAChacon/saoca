"use client";

import { motion } from "motion/react";
import { Feature } from "@/lib/types";

interface FeatureCardProps extends Feature {
  index: number;
  variant?: "muted" | "background";
}

export function FeatureCard({ icon, title, description, index, variant = "muted" }: FeatureCardProps) {
  const isMuted = variant === "muted";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`${isMuted ? "bg-muted hover:bg-primary hover:text-primary-foreground" : "bg-background"} p-8 md:p-12 group transition-colors duration-500 cursor-default`}
    >
      <span className="material-symbols-outlined text-4xl md:text-5xl text-secondary group-hover:text-highlight mb-8 block transition-colors">
        {icon}
      </span>
      <h3 className="text-xl md:text-2xl font-headline font-bold mb-4 uppercase tracking-tight">
        {title}
      </h3>
      <p className={`text-sm font-body leading-relaxed ${isMuted ? "text-muted-foreground group-hover:text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    </motion.div>
  );
}
