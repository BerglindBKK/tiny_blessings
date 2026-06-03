import Image from "next/image";

export default function Impact() {
  return (
    <section id="impact" className="bg-white py-16 md:py-24">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        {/* HEADER */}
        <p className="text-[11px] tracking-widest uppercase text-muted mb-3">
          Measured impact
        </p>

        {/* TOP SECTION (mirrored like Foundation) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:items-start">
          {/* IMAGE (left on desktop) */}
          <div className="order-1 lg:order-1 lg:mt-16">
            <div className="relative w-full aspect-[4/5] sm:aspect-square  rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/dentist.png"
                alt="Volunteer dental care support"
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-4 text-[13px] md:text-[14px] text-muted italic lg:hidden">
              Volunteer dental care provided through community health outreach
            </p>
          </div>

          {/* TEXT (right on desktop) */}
          <div className="order-2 lg:order-2 max-w-3xl flex flex-col">
            <h2 className="text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[44px] lg:leading-[52px] font-serif text-navy">
              Our Impact
            </h2>

            <div className="mt-6 space-y-4 md:space-y-6 text-[15px] leading-7 md:text-[16px] md:leading-8 text-body">
              <p>
                Every number reflects real children receiving consistent
                education, meals, healthcare support, and safe community-based
                care through our programs in Makati City.
              </p>

              <p>
                These outcomes are made possible through local volunteers and
                partner communities working together to ensure children are
                supported not only in the moment, but given long-term
                opportunities to learn, grow, and thrive.
              </p>

              <p>
                Our impact is measured in both immediate relief and lasting
                change — from nutrition and education to access to essential
                health services.
              </p>
            </div>
          </div>
        </div>

        {/* STATS (below, like Foundation cards) */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-soft border border-border rounded-2xl p-8 hover:border-coral transition-all text-center">
            <div className="text-[32px] md:text-[44px] font-bold text-coral">
              120+
            </div>
            <div className="text-[12px] md:text-[14px] text-muted mt-2 uppercase tracking-wider">
              Children supported
            </div>
          </div>

          <div className="bg-soft border border-border rounded-2xl p-8 hover:border-coral transition-all text-center">
            <div className="text-[32px] md:text-[44px] font-bold text-coral">
              8
            </div>
            <div className="text-[12px] md:text-[14px] text-muted mt-2 uppercase tracking-wider">
              Learning programs
            </div>
          </div>

          <div className="bg-soft border border-border rounded-2xl p-8 hover:border-coral transition-all text-center">
            <div className="text-[32px] md:text-[44px] font-bold text-coral">
              5,000+
            </div>
            <div className="text-[12px] md:text-[14px] text-muted mt-2 uppercase tracking-wider">
              Meals provided
            </div>
          </div>

          <div className="bg-soft border border-border rounded-2xl p-8 hover:border-coral transition-all text-center">
            <div className="text-[32px] md:text-[44px] font-bold text-coral">
              50+
            </div>
            <div className="text-[12px] md:text-[14px] text-muted uppercase tracking-wider">
              Volunteers
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block mt-24 border-t border-border/60" />
    </section>
  );
}
