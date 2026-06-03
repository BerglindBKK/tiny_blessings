import Image from "next/image";

export default function Foundation() {
  return (
    <section id="foundation" className="bg-white pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        {/* Top: Split Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Block: order-1 on mobile, lg:order-2 on desktop */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] sm:aspect-square md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/growing.png"
                alt="Children growing and learning together"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-4 text-[13px] md:text-[14px] text-muted italic lg:hidden">
              Hands in the dirt, Hearts at work
            </p>
          </div>

          {/* Text Block: order-2 on mobile, lg:order-1 on desktop */}
          <div className="order-2 lg:order-1 max-w-2xl">
            <h2 className="text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[44px] lg:leading-[52px] font-serif text-navy">
              Our Foundation
            </h2>

            <div className="mt-6 space-y-4 md:space-y-6 text-[15px] leading-7 md:text-[16px] md:leading-8 text-body">
              <p>
                Tiny Blessings Foundation was established in 2018 with a clear
                mission: to provide a sanctuary for children in Makati City who
                are living in the most vulnerable circumstances.
              </p>
              <p>
                We believe that every child, regardless of their background,
                deserves access to the fundamental pillars of a healthy
                childhood: education, nutrition, and a safe environment to
                dream.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Service Cards Grid */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-soft border border-border rounded-2xl p-8 transition-all duration-300 hover:border-coral hover:-translate-y-1">
            <h3 className="text-[18px] md:text-[20px] font-bold text-navy">
              Nutrition
            </h3>
            <p className="mt-3 text-[14px] leading-6 text-body">
              Daily balanced meals and nutritional monitoring for children
              facing food insecurity.
            </p>
          </div>

          <div className="bg-soft border border-border rounded-2xl p-8 transition-all duration-300 hover:border-coral hover:-translate-y-1">
            <h3 className="text-[18px] md:text-[20px] font-bold text-navy">
              Education
            </h3>
            <p className="mt-3 text-[14px] leading-6 text-body">
              Supplementary learning, school supplies, and literacy programs to
              keep children in school.
            </p>
          </div>

          <div className="bg-soft border border-border rounded-2xl p-8 transition-all duration-300 hover:border-coral hover:-translate-y-1">
            <h3 className="text-[18px] md:text-[20px] font-bold text-navy">
              Healthcare
            </h3>
            <p className="mt-3 text-[14px] leading-6 text-body">
              Regular check-ups, dental care, and emergency medical support for
              families in need.
            </p>
          </div>

          <div className="bg-soft border border-border rounded-2xl p-8 transition-all duration-300 hover:border-coral hover:-translate-y-1">
            <h3 className="text-[18px] md:text-[20px] font-bold text-navy">
              Safe Space
            </h3>
            <p className="mt-3 text-[14px] leading-6 text-body">
              A stable, caring environment away from the challenges of the
              streets in Makati.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
