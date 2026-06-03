export default function TakeAction() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* CARD WRAPPER */}
        <div className="bg-white/5 border border-white/10 rounded-3xl px-8 py-16 md:px-16 md:py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Take Action Today
          </h2>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Your support helps children in Makati access food, education, and
            care.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-coral text-white px-8 py-4 rounded-full font-bold hover:scale-[1.02] transition">
              Donate
            </button>

            <button className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
