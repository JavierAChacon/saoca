"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface PageHeaderProps {
  title: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export function PageHeader({
  title,
  imageSrc = "/images/hero-master.png",
  imageAlt = "SAOCA facility",
}: PageHeaderProps) {
  return (
    <section className="bg-primary text-primary-foreground py-32 px-6 relative overflow-hidden -mt-[73px] pt-[calc(73px+6rem)]">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover bw-filter mix-blend-overlay"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="container mx-auto max-w-screen-2xl relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-none"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
