"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Instalaciones", href: "/instalaciones" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Contacto", href: "/contacto" },
];

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-emerald-900/5"
    >
      <div className="flex items-center justify-between mx-auto w-full px-8 py-4 max-w-screen-2xl">
        <Link
          href="/"
          className="text-2xl font-black text-emerald-950 tracking-tighter uppercase font-headline shrink-0"
        >
          SAOCA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center font-headline font-bold tracking-tight uppercase text-sm flex-1 justify-center">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={link.href}
                className="text-emerald-900/60 hover:text-emerald-900 transition-colors relative group"
              >
                {link.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-900 transition-all group-hover:w-full"
                  initial={false}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block"
          >
            <Link
              href="/huellas-de-luz"
              className="bg-[#2e82b5] text-white px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-[#0d2840] transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-sm">pets</span>
              Huellas de Luz
            </Link>
          </motion.div>
          
          {/* Mobile Toggle with Shadcn Sheet */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-2 h-auto hover:bg-emerald-900/5">
                  <Menu className="w-8 h-8 text-emerald-950" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-emerald-900/10">
                <SheetHeader className="text-left mb-12">
                  <SheetTitle className="text-3xl font-black text-emerald-950 tracking-tighter uppercase font-headline">
                    SAOCA
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-8 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-2xl font-headline font-black uppercase text-emerald-900/60 hover:text-emerald-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/huellas-de-luz"
                    className="flex items-center gap-2 text-2xl font-headline font-black uppercase text-[#2e82b5]"
                  >
                    <span className="material-symbols-outlined">pets</span>
                    Huellas de Luz
                  </Link>
                  <Button asChild className="bg-emerald-900 text-white py-8 text-lg font-bold uppercase rounded-none mt-4">
                    <Link href="/contacto">Cotizar Ahora</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
