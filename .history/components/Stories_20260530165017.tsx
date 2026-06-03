import Image from "next/image";

export default function Stories() {
  return (
    <section id="stories" className="bg-soft py-16 md:py-24">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        {/* HEADER */}
        <p className="text-[11px] tracking-widest uppercase text-muted mb-3">
          Community stories
        </p>

        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-serif text-navy">
          Stories from our community
        </h2>

        <p className="mt-4 text-[15px] md:text-[16px] text-body max-w-3xl">
          Real moments from children and families supported through our
          education, nutrition, and care programs in Makati City.
        </p>

        {/* GRID (ALL EQUAL) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CARD 1 */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src="/images/students_ism_long.png"
                alt="Senior students at ISM"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-6">
              <h3 className="text-[18px] font-semibold text-navy">
                Visiting International School Manila with ISM Scholars
              </h3>

              <p className="mt-3 text-[14px] text-body leading-6">
                Six of our oldest students visited International School Manila
                as part of a learning opportunity supported by ISM and RISE
                Philippines.
              </p>

              <p className="mt-3 text-[14px] text-body leading-6">
                They experienced a new academic environment and participated in
                a school assembly.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/mikmik.png"
                alt="Scholarship"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-6">
              <h3 className="text-[18px] font-semibold text-navy">
                Accepted into Food for Hungry Minds
              </h3>

              <p className="mt-3 text-[14px] text-body leading-6">
                Mikmik was accepted into a scholarship school after years of
                consistent academic effort and resilience.
              </p>

              <p className="mt-3 text-[14px] text-body leading-6">
                Her journey reflects steady progress supported by community
                care.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/xanadu4.png"
                alt="Xanadu Farm"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-6">
              <h3 className="text-[18px] font-semibold text-navy">
                A day of learning at Xanadu Farm
              </h3>

              <p className="mt-3 text-[14px] text-body leading-6">
                Children experienced hands-on learning by harvesting vegetables
                and understanding where food comes from.
              </p>

              <p className="mt-3 text-[14px] text-body leading-6">
                The experience connected classroom learning with real life.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/youth_leader_long.png"
                alt="Youth leader"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-6">
              <h3 className="text-[18px] font-semibold text-navy">
                A youth leader guiding younger children
              </h3>

              <p className="mt-3 text-[14px] text-body leading-6">
                One of our eldest youth participants now supports younger
                children in structured play and learning activities.
              </p>

              <p className="mt-3 text-[14px] text-body leading-6">
                He demonstrates responsibility, patience, and leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
