import Navbar from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function Home() {
  // Marcas únicas
  const brands = Array.from(new Set(products.map((p) => p.brand.trim())));

  // Destacados (usa featured:true)
  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO PREMIUM */}
      <section className="relative h-[75vh] min-h-[520px]">
        {/* Imagen de fondo */}
        <Image
          src="/hero.jpg"
          alt="Street Force Sneakers"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Contenido */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.25em] text-gray-300 mb-4">
              GUATEMALA • SNEAKERS ORIGINALES
            </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Street Force
            </h1>

            <p className="text-gray-300 mt-5 text-lg md:text-xl leading-relaxed">
              Reventa de sneakers <span className="text-white font-semibold">100% originales</span>.
              Estilo urbano, piezas seleccionadas y atención directa por WhatsApp.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/sneakers"
                className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Explorar Sneakers
              </Link>

              <Link
                href="/sneakers"
                className="inline-flex items-center justify-center border border-white/30 px-8 py-3 rounded-lg font-semibold hover:border-white/60 transition"
              >
                Ver Marcas
              </Link>
            </div>

            {/* Confianza (mini) */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="font-semibold">✅ 100% Original</p>
                <p className="text-gray-400 mt-1">Piezas seleccionadas</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="font-semibold">📦 Envíos Guatemala</p>
                <p className="text-gray-400 mt-1">Consulta tu zona</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="font-semibold">💬 Compra por WhatsApp</p>
                <p className="text-gray-400 mt-1">Respuesta rápida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Marcas</h2>
          <Link href="/sneakers" className="text-sm text-gray-400 hover:text-white transition">
            Ver todas →
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          {brands.map((brand) => (
            <Link
              key={brand}
              href={`/sneakers/brand/${encodeURIComponent(brand.toLowerCase())}`}
              className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-white/40 transition text-sm"
            >
              {brand}
            </Link>
          ))}
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Destacados</h2>
          <Link href="/sneakers" className="text-sm text-gray-400 hover:text-white transition">
            Ver catálogo →
          </Link>
        </div>

        {featured.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-gray-400">
            Marca algunos productos con <span className="text-white font-semibold">featured: true</span> en{" "}
            <span className="text-white font-semibold">products.ts</span> para mostrarlos aquí.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((p) => (
              <Link
                key={p.id}
                href={`/sneakers/${p.id}`}
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-white/30 transition"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full font-semibold">
                    Featured
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">{p.brand}</p>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-green-400 font-bold text-xl mt-3">Q{p.price}</p>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">{p.description}</p>

                  <div className="mt-5 inline-flex items-center text-sm text-gray-300 group-hover:text-white transition">
                    Ver producto →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="border-t border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-400 flex flex-col sm:flex-row gap-3 justify-between">
          <p>© {new Date().getFullYear()} Street Force GT</p>
          <p>Originales • Urbano • Guatemala</p>
        </div>
      </footer>
    </main>
  );
}
