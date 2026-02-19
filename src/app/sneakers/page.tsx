import Navbar from "../components/Navbar";
import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const brands = Array.from(new Set(products.map((p) => p.brand.trim())));

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="p-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Sneakers</h1>

        <p className="text-gray-400 mb-8">
          Selecciona una marca para ver los modelos disponibles.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand) => {
            const brandSlug = brand.toLowerCase().replace(/\s+/g, "-");

            const count = products.filter((p) => p.brand === brand).length;

            return (
              <Link
                key={brand}
                href={`/sneakers/brand/${encodeURIComponent(
                  brand.toLowerCase()
                )}`}
                className="
                  group bg-zinc-900 border border-zinc-800 rounded-2xl p-6
                  transition duration-300
                  hover:-translate-y-1 hover:border-green-500
                  hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]
                "
              >
                {/* Badge blanco redondeado */}
                <div
                  className="
                    relative w-full h-20 mb-5
                    flex items-center justify-center
                  "
                >
                  <div
                    className="
                      relative w-24 h-24 rounded-2xl bg-white
                      flex items-center justify-center
                      shadow-sm
                      transition duration-300
                      group-hover:scale-105
                      group-hover:shadow-[0_0_22px_rgba(34,197,94,0.35)]
                    "
                  >
                    <Image
                      src={`/brands/${brandSlug}.png`}
                      alt={brand}
                      fill
                      className="
                        object-contain p-3
                        transition duration-300
                        grayscale-[30%] contrast-125
                        group-hover:grayscale-0 group-hover:contrast-150 group-hover:saturate-150
                      "
                    />
                  </div>
                </div>

                <h2 className="text-xl font-semibold capitalize">
                  {brand}
                </h2>

                <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-200 transition">
                  {count} modelos disponibles →
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
