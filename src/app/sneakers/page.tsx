import Navbar from "../components/Navbar";
import { products } from "@/data/products";

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-8">Sneakers</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900 p-6 rounded">
              <div className="h-40 bg-gray-700 mb-4 rounded"></div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-400">Q{product.price}</p>
              <a
             href={`/sneakers/${product.id}`}
             className="mt-4 inline-block bg-white text-black px-4 py-2 rounded">
             View
             </a>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
