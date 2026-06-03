import Image from "next/image";

export default function Foundation() {
  return (
    <section id="foundation" className="bg-white py-16 md:py-24">
      <div className="px-5 max-w-6xl mx-auto lg:px-8 border-2">
        {/* HEADER */}
        <p className="text-[11px] tracking-widest uppercase text-muted mb-3">
          Our Foundation
        </p>
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:items-start border-2">
          {/* IMAGE */}
          <div className="order-1 lg:order-2 lg:mt-16">
            <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/growing.png"
                alt="Children growing and learning together"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="mt-4 text-[13px] md:text-[14px] text-muted italic lg:hidden">
              Hands in the dirt, hearts at work
            </p>
          </div>

          {/* TEXT */}
          <div className="order-2 lg:order-1 max-w-3xl flex flex-col">
            <h2 className="text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[44px] lg:leading-[52px] font-serif text-navy">
              Our Foundation
            </h2>

            <div className="mt-6 space-y-4 md:space-y-6 text-[15px] leading-7 md:text-[16px] md:leading-8 text-body">
              <p>
                Tiny Blessings Foundation was established in 2018 to support
                children in Makati City living in extreme poverty through
                consistent, community-led care.
              </p>

              <p>
                We focus on three essentials: education, nutrition, and safe
                environments where children can learn and grow with dignity.
              </p>

              <p>
                Our programs are run with local volunteers and community
                partners, reaching children through weekly learning sessions,
                feeding programs, and on-the-ground support in vulnerable areas
                of the city.
              </p>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-soft border border-border rounded-2xl p-8 hover:border-coral transition-all">
            <h3 className="text-[18px] md:text-[20px] font-bold text-navy">
              Nutrition
            </h3>
            <p className="mt-3 text-base leading-relaxed  text-body">
              Daily meals and food support for children facing food insecurity.
            </p>
          </div>

          <div className="bg-soft border border-border rounded-2xl p-8 hover:border-coral transition-all">
            <h3 className="text-[18px] md:text-[20px] font-bold text-navy">
              Education
            </h3>
            <p className="mt-3 text-base leading-relaxed  text-body">
              Learning support, literacy programs, and school assistance.
            </p>
          </div>

          <div className="bg-soft border border-border rounded-2xl p-8 hover:border-coral transition-all">
            <h3 className="text-[18px] md:text-[20px] font-bold text-navy">
              Healthcare
            </h3>
            <p className="mt-3 text-base leading-relaxed  text-body">
              Basic medical and dental support for children and families.
            </p>
          </div>

          <div className="bg-soft border border-border rounded-2xl p-8 hover:border-coral transition-all">
            <h3 className="text-[18px] md:text-[20px] font-bold text-navy">
              Safe Space
            </h3>
            <p className="mt-3 text-base leading-relaxed  text-body">
              A stable environment for learning, play, and emotional safety.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block mt-24 border-t border-border/60" />
    </section>
  );
}
