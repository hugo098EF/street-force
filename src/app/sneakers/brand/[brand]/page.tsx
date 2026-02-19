import Navbar from "@/app/components/Navbar";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;

  // viene de la URL: nike, adidas, new%20balance, etc.
  const brandParam = decodeURIComponent(brand).trim().toLowerCase();

  const filtered = products.filter(
    (p) => p.brand.trim().toLowerCase() === brandParam
  );

  if (filtered.length === 0) {
    notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="p-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 capitalize">
          {brandParam}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-green-500 transition duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />

                <div className="absolute top-3 left-3 bg-green-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                  ORIGINAL
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">{product.brand}</p>

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

        <div className="mt-10">
          <Link
            href="/sneakers"
            className="text-gray-400 hover:text-white transition"
          >
            ← Volver a marcas
          </Link>
        </div>
      </div>
    </main>
  );
}
