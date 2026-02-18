import Link from "next/link";

export default function Navbar() {
  const phoneNumber = "50237109011";

  const contactMessage = encodeURIComponent(
    "Hola Street Force 👟🔥 Estoy interesado en sus sneakers."
  );

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${contactMessage}`;

  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b border-zinc-800">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        Street Force
      </Link>

      {/* Links */}
      <div className="flex gap-8 text-sm font-medium">
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
    </nav>
  );
}
