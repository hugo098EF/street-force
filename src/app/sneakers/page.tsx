import Navbar from "../components/Navbar";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="p-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Sneakers</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-green-500 transition duration-300"
            >
              {/* Imagen */}
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />

                {/* Badge */}
                <div className="absolute top-3 left-3 bg-green-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                  ORIGINAL
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h2 className="text-lg font-semibold mb-2">
                  {product.name}
                </h2>

                <p className="text-green-400 font-bold text-xl mb-4">
                  Q{product.price}
                </p>

                <Link
                  href={`/sneakers/${product.id}`}
                  className="inline-block bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
                >
                  Ver producto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
