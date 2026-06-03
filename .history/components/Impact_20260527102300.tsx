import Image from "next/image";

export default function Impact() {
  return (
    <section id="impact" className="bg-white py-16 md:py-24">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        {/* HEADER */}
        <div className="max-w-3xl">
          <h2 className="text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[44px] lg:leading-[52px] font-serif text-navy">
            Our Impact
          </h2>

          <p className="mt-4 text-[15px] leading-7 md:text-[16px] md:leading-8 text-body max-w-2xl">
            Every number reflects real children receiving education, meals, and
            care through community-led programs in Makati City.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* STATS */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-soft border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-[16px] font-semibold text-navy">
                Weekly community programs
              </h3>
              <p className="mt-2 text-[13px] text-body leading-6">
                Regular learning sessions, feeding programs, and outreach
                activities held in partner communities across Makati City.
              </p>
            </div>

            <div className="bg-soft border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-[16px] font-semibold text-navy">
                Healthcare outreach
              </h3>
              <p className="mt-2 text-[13px] text-body leading-6">
                Volunteer-led dental and basic medical support for children who
                lack access to regular healthcare services.
              </p>
            </div>

            <div className="bg-soft border border-border rounded-2xl p-6 md:p-10 text-center">
              <div className="text-[32px] md:text-[44px] font-bold text-coral">
                120+
              </div>
              <div className="text-[12px] md:text-[14px] text-muted mt-2 uppercase tracking-wider">
                Children supported
              </div>
            </div>

            <div className="bg-soft border border-border rounded-2xl p-6 md:p-10 text-center">
              <div className="text-[32px] md:text-[44px] font-bold text-coral">
                8
              </div>
              <div className="text-[12px] md:text-[14px] text-muted mt-2 uppercase tracking-wider">
                Learning programs
              </div>
            </div>

            <div className="bg-soft border border-border rounded-2xl p-6 md:p-10 text-center">
              <div className="text-[32px] md:text-[44px] font-bold text-coral">
                5,000+
              </div>
              <div className="text-[12px] md:text-[14px] text-muted mt-2 uppercase tracking-wider">
                Meals provided
              </div>
            </div>

            <div className="bg-soft border border-border rounded-2xl p-6 md:p-10 text-center">
              <div className="text-[32px] md:text-[44px] font-bold text-coral">
                50+
              </div>
              <div className="text-[12px] md:text-[14px] text-muted mt-2 uppercase tracking-wider">
                Volunteers
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/dentist.png"
                alt="Volunteer dental care support"
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-4 text-[13px] text-muted italic">
              Volunteer dental care provided to children through community
              health outreach programs in Makati City
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="hidden lg:block mt-24 border-t border-border/60" />
  );
}
