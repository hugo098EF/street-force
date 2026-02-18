import { products } from "@/data/products";
import Navbar from "../../components/Navbar";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ En tu Next, params es Promise -> hay que hacer await
  const { id } = await params;

  const numericId = Number(id);
  const product = products.find((p) => p.id === numericId);

  if (!product) {
    notFound();
  }

  const phoneNumber = "50237109011";
  const productUrl = `https://street-force-gt.vercel.app/sneakers/${product.id}`;

  const message = `
Hola Street Force 👟🔥

Quiero reservar: *${product.name}*
Precio: *Q${product.price}*

Link: ${productUrl}

¿Está disponible? ¿Realizan entrega en mi zona?
`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="p-10 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Imagen */}
          <div className="relative w-full h-96 bg-gray-800 rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <p className="text-gray-400 mb-4">{product.description}</p>

            <p className="text-3xl font-semibold text-green-400 mb-6">
              Q{product.price}
            </p>

            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 transition text-black px-8 py-3 rounded-lg font-semibold"
            >
              Reservar por WhatsApp
            </a>

            <p className="mt-4 text-sm text-gray-500">
              ✅ 100% Original
              <br />
              📦 Envíos en Guatemala
              <br />
              🔥 Street Force
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
