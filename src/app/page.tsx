import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-5xl font-bold tracking-wide">Street Force</h1>
        <p className="text-gray-400 mt-4 text-lg">
          Original. Urbano. A tu alcance.
        </p>
        <button className="mt-8 bg-white text-black px-8 py-3 font-semibold rounded hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </main>
  );
}
