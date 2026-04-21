import type { Metadata } from "next";
import { Manrope, Inter, Lora } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "SAOCA | Soluciones Ambientales de Occidente",
  description:
    "Especialistas en la recolección e incineración de desechos patológicos e industriales con los más altos estándares de bioseguridad en el occidente del país.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} ${lora.variable} min-h-full flex flex-col antialiased`}
      >
        <Navbar />
        <main className="flex-1 pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
