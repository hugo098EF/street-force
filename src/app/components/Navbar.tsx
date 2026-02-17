export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-8 py-4 flex justify-between items-center border-b border-gray-800">
      <h1 className="text-2xl font-bold tracking-wide">Street Force</h1>
      <div className="space-x-6 text-sm">
        <a href="#" className="hover:text-gray-400 transition">Home</a>
        <a href="/sneakers" className="hover:text-gray-400 transition">Sneakers</a>
        <a href="#" className="hover:text-gray-400 transition">Offers</a>
        <a href="#" className="hover:text-gray-400 transition">Contact</a>
      </div>
    </nav>
  );
}
