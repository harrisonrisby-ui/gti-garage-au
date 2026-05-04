export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')] bg-cover bg-center">
        <div className="bg-black/70 p-10 rounded-xl border border-red-600">
          <h1 className="text-5xl font-bold text-red-500">
            GTI Garage AU
          </h1>
          <p className="mt-4 text-xl">
            OEM. Performance. Pure GTI.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg">
            Shop Now
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="p-10">
        <h2 className="text-3xl text-center mb-10">Shop by Model</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {["MK5", "MK6", "MK7", "MK8"].map((model) => (
            <div key={model} className="border border-red-600 p-6 rounded-lg hover:bg-red-600/20">
              <h3 className="text-xl">{model}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* FEATURED */}
      <section className="p-10 bg-zinc-900">
        <h2 className="text-3xl text-center mb-10">Featured Parts</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {["Turbo Kit", "Coilovers", "Exhaust System"].map((item) => (
            <div key={item} className="border border-red-600 p-6 rounded-lg">
              <h3 className="text-xl mb-2">{item}</h3>
              <p className="text-gray-400">High performance upgrade</p>
              <button className="mt-4 bg-red-600 px-4 py-2 rounded">
                View
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center border-t border-red-600">
        © 2026 GTI Garage AU
      </footer>

    </main>
  );
}