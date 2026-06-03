import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white pt-12 pb-4 md:pt-12 md:pb-8 lg:pt-12">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        <div className="max-w-4xl">
          {/* HEADLINE (shorter + sharper) */}
          <h1 className="text-5xl leading-tight md:text-6xl lg:text-7xl font-serif text-navy">
            Supporting children in Makati through education and care
          </h1>

          {/* SUBTEXT (simplified, less “list-like”) */}
          <p className="mt-6 text-lg leading-relaxed md:text-xl text-body max-w-3xl">
            The Tiny Blessings Foundation (TBF) is a community-led initiative
            providing education, meals, healthcare, and safe spaces for children
            in Manila.
          </p>

          {/* CREDIBILITY LINE (keep, but make slightly lighter visually) */}
          <p className="mt-4 text-sm md:text-base text-navy/60 max-w-3xl">
            Active since 2018 · Based in Makati City
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#donate"
              className="flex items-center justify-center gap-2 bg-coral text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:bg-opacity-90 hover:scale-[1.02]"
            >
              <Image
                src="/images/donate_icon_100.png"
                alt="Donate Icon"
                width={24}
                height={24}
                priority
              />
              <span>Take Action</span>
            </a>

            <a
              href="#foundation"
              className="inline-flex items-center justify-center border-2 border-navy text-navy px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:bg-navy hover:text-white"
            >
              See our work
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block mt-24 border-t border-border" />
    </section>
  );
}
