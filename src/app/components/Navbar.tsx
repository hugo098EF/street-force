"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "50237109011";
  const contactMessage = encodeURIComponent(
    "Hola Street Force 👟🔥 Estoy interesado en sus sneakers."
  );
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${contactMessage}`;

  // Bloquear scroll cuando el menú está abierto (se siente premium)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-zinc-800">
      <nav className="flex justify-between items-center px-6 md:px-10 py-4">
        <Link href="/" className="text-2xl font-bold">
          Street Force
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link href="/sneakers" className="hover:text-green-400 transition">
            Sneakers
          </Link>
          <Link href="/offers" className="hover:text-green-400 transition">
            Offers
          </Link>
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile button */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-700 hover:border-zinc-500 transition"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
           className={`md:hidden relative z-50 overflow-hidden transition-all duration-300 ${
           open ? "max-h-96" : "max-h-0"
           }`}
          > 

      
        <div className="bg-zinc-950 border-t border-zinc-800 px-6 py-5">
          <div className="flex flex-col gap-4 text-base">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-green-400 transition"
            >
              Home
            </Link>

            <Link
              href="/sneakers"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-green-400 transition"
            >
              Sneakers
            </Link>

            <Link
              href="/offers"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-green-400 transition"
            >
              Offers
            </Link>

            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center bg-green-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Contact (WhatsApp)
            </a>

            <div className="mt-4 text-sm text-gray-400 border-t border-zinc-800 pt-4">
              ✅ 100% Original <br />
              📦 Envíos Guatemala <br />
              💬 Respuesta rápida
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop (para que no se vea transparente y cierre al tocar afuera) */}
      {open && (
        <button
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          style={{ top: "64px" }} // cubre desde debajo del navbar
        />
      )}
    </header>
  );
}
