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

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* FEATURED: ISM CARD (bigger) */}
          <div className="md:col-span-2 bg-white border border-border rounded-2xl overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden">
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
                They participated in a school assembly and experienced a new
                academic environment, opening conversations about future
                educational pathways.
              </p>
            </div>
          </div>

          {/* SMALL CARD 1: MIKMIK */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/mikmik.png"
                alt="Scholarship"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-5">
              <h3 className="text-[16px] font-semibold text-navy">
                Accepted into Food for Hungry Minds
              </h3>

              <p className="mt-2 text-[13px] text-body leading-5">
                Mikmik was accepted into a scholarship school after years of
                consistent academic effort and resilience.
              </p>
            </div>
          </div>

          {/* SMALL CARD 2: XANADU */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/xanadu4.png"
                alt="Xanadu Farm"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-5">
              <h3 className="text-[16px] font-semibold text-navy">
                A day of learning at Xanadu Farm
              </h3>

              <p className="mt-2 text-[13px] text-body leading-5">
                Children experienced hands-on learning by harvesting vegetables
                and understanding where food comes from.
              </p>
            </div>
          </div>

          {/* SMALL CARD 3: YOUTH LEADER */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/youth_leader_long.png"
                alt="Youth leader"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-5">
              <h3 className="text-[16px] font-semibold text-navy">
                A youth leader guiding younger children
              </h3>

              <p className="mt-2 text-[13px] text-body leading-5">
                One of our eldest youth participants now supports younger
                children in structured play and learning activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
