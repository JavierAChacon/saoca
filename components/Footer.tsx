import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Instalaciones", href: "/instalaciones" },
  { label: "Huellas de Luz", href: "/huellas-de-luz" },
];

const legalLinks = [
  { label: "Privacidad", href: "#" },
  { label: "RACDA N° 1293", href: "#" },
];

export const Footer = () => {
  return (
    <>
      <footer className="bg-emerald-950 text-emerald-50 py-12 px-10 border-t-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full mx-auto max-w-screen-2xl">
          {/* Brand */}
          <div className="col-span-1">
            <Link
              href="/"
              className="font-black text-white uppercase tracking-widest text-xl mb-6 block"
            >
              SAOCA
            </Link>
            <p className="text-sm text-emerald-200/50 leading-loose">
              Líderes en gestión ambiental con tecnología de punta y compromiso
              social.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Navegación
            </h5>
            <ul className="space-y-3 font-body text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-emerald-200/50 hover:text-white transition-colors hover:underline decoration-emerald-500 underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Legal
            </h5>
            <ul className="space-y-3 font-body text-sm">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-emerald-200/50 hover:text-white transition-colors hover:underline decoration-emerald-500 underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Contacto
            </h5>
            <ul className="space-y-3 font-body text-sm">
              <li className="text-emerald-200/50">+58 (251) 234.5678</li>
              <li className="text-emerald-200/50">info@saoca.com.ve</li>
              <li>
                <Link
                  href="/contacto"
                  className="text-emerald-200/50 hover:text-white transition-colors hover:underline decoration-emerald-500 underline-offset-4"
                >
                  Formulario de contacto →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <Link
        href="https://wa.me/584120000000"
        target="_blank"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 z-[60]"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={32} />
      </Link>
    </>
  );
};
