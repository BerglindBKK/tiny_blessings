export default function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-20 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          {/* LEFT COLUMN: MAIN HEADLINE */}
          <div className="max-w-3xl">
            <h1 className="text-[38px] leading-[44px] md:text-[56px] md:leading-[64px] lg:text-[72px] lg:leading-[80px] font-serif text-navy">
              Every child deserves a{" "}
              <span className="text-coral">safe place</span> to learn and grow.
            </h1>

            {/* DESKTOP-ONLY NARRATIVE: Adds "weight" to the section */}
            <p className="hidden md:block mt-8 text-[18px] leading-8 text-body max-w-2xl">
              Since 2018, Tiny Blessings has been a sanctuary for children in
              Makati City, providing the education, nutrition, and healthcare
              they need to break the cycle of generational homelessness.
            </p>
          </div>

          {/* RIGHT COLUMN: QUICK STAT/DETAIL (Fills horizontal space) */}
          <div className="hidden lg:block lg:max-w-xs border-l border-border pl-8 mb-4">
            <p className="text-[14px] uppercase tracking-widest text-muted font-bold">
              Our Reach
            </p>
            <p className="mt-2 text-[16px] text-body leading-relaxed">
              Supporting over 120+ children daily through holistic
              community-based programs.
            </p>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4">
          <button className="group bg-coral text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:bg-navy active:scale-95 flex items-center justify-center gap-2">
            Support our Mission
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <button className="bg-white border-2 border-navy text-navy px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:bg-navy hover:text-white active:scale-95">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
