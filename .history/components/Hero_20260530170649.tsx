export default function Hero() {
  return (
    <section className="relative bg-white pt-12 pb-4 md:pt-12 md:pb-8 lg:pt-12">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl leading-tight md:text-6xl lg:text-7xl font-serif text-navy">
            Supporting children in Makati through education, care, and daily
            support
          </h1>

          <p className="mt-6 text-lg leading-relaxed md:text-xl text-body max-w-3xl">
            The Tiny Blessings Foundation (TBF) is a community-led initiative
            providing supplementary education, meals, healthcare, and safe
            spaces for children living in extreme poverty in Manila.
          </p>

          <p className="mt-4 text-sm md:text-base text-navy/70 max-w-3xl">
            Active since 2018 · Based in Makati City
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <div className="hidden md:block">
              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className=" w-full text-center bg-coral text-white text-[15px] font-bold px-4 py-4 rounded-full shadow-md active:scale-[0.98] transition-transform  flex items-center gap-2"
              >
                <Image
                  src="/images/donate_icon_100.png"
                  alt="Donate Icon"
                  width={30}
                  height={30}
                  priority
                />
                <span>Take Action</span>
              </a>
            </div>

            <button className="border-2 border-navy text-navy px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:bg-navy hover:text-white">
              <a href="#foundation">See our work</a>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block mt-24 border-t border-border" />
    </section>
  );
}
