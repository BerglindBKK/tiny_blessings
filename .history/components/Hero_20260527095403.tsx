export default function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-8 md:pt-20 md:pb-12 lg:pt-28">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-[38px] leading-[44px] md:text-[56px] md:leading-[64px] lg:text-[72px] lg:leading-[82px] font-serif text-navy">
            Supporting children living in extreme poverty in Makati through
            education, nutrition, and daily care.
          </h1>

          <p className="mt-6 text-[16px] leading-7 md:text-[18px] md:leading-8 text-body max-w-2xl">
            Since 2018, The Tiny Blessings Foundation (TBF) has been providing
            supplementary education, proper nutrition, healthcare, and an
            enabling environment to children from extreme poverty across
            communities in Makati City, in the Philippines.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-coral text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:bg-opacity-90 hover:scale-[1.02]">
              Support
            </button>
            <button className="border-2 border-navy text-navy px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:bg-navy hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
