"use client";

import { motion } from "motion/react";
import { Stat } from "@/lib/types";

interface StatCardProps extends Stat {
  index: number;
}

export function StatCard({ label, sub, bg, text, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`${bg} p-8 md:p-10 flex flex-col justify-center text-center shadow-sm cursor-default transition-all`}
    >
      <span className={`text-3xl md:text-5xl font-headline font-black leading-none mb-3 ${text}`}>
        {label}
      </span>
      <span className={`text-[10px] font-black uppercase tracking-widest ${text === "text-primary-foreground" ? "opacity-60" : "text-muted-foreground"}`}>
        {sub}
      </span>
    </motion.div>
  );
}
