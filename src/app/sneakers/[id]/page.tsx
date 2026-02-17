import { products } from "@/data/products";
import Navbar from "../../components/Navbar";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  if (!product) return notFound();

  const phoneNumber = "50237109011"; // tu numero
  const message = `Hola, quiero comprar ${product.name} que cuesta Q${product.price}`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="p-10 max-w-3xl mx-auto">
        <div className="h-80 bg-gray-700 mb-6 rounded"></div>
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-gray-400 mb-6">Q{product.price}</p>

        <a
          href={whatsappURL}
          target="_blank"
          className="bg-green-500 text-black px-6 py-3 rounded font-semibold"
        >
          Comprar por WhatsApp
        </a>
      </div>
    </main>
  );
}
