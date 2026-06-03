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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. ISM CARD */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-gray-200">{/* Image */}</div>

            <div className="p-6">
              <h3 className="text-[18px] font-semibold text-navy">
                Visiting International School Manila with ISM Scholars
              </h3>

              <p className="mt-3 text-[14px] text-body leading-6">
                Six of our oldest students visited International School Manila
                as part of a learning opportunity supported by ISM and RISE
                Philippines, wearing upcycled uniforms created through their
                program.
              </p>

              <p className="mt-3 text-[14px] text-body leading-6">
                During the visit, they took part in a school assembly and
                experienced a new academic environment, opening up conversations
                about future educational pathways and possibilities.
              </p>
            </div>
          </div>

          {/* CARD 1 */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-gray-200">{/* Image */}</div>

            <div className="p-6">
              <h3 className="text-[18px] font-semibold text-navy">
                Accepted into Food for Hungry Minds
              </h3>

              <p className="mt-3 text-[14px] text-body leading-6">
                After years of hard work and dedication, Mikmik was accepted
                into Food for Hungry Minds, a scholarship school that supports
                students who demonstrate strong academic performance,
                discipline, and character.
              </p>

              <p className="mt-3 text-[14px] text-body leading-6">
                Despite growing up in difficult circumstances, she maintained
                excellent attendance and consistently performed well in school.
                Her acceptance marks an important milestone in a journey shaped
                by perseverance, community support, and belief in her potential.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-gray-200">{/* Image */}</div>

            <div className="p-6">
              <h3 className="text-[18px] font-semibold text-navy">
                Running a Booth at the ISM Charity Bazaar
              </h3>

              <p className="mt-3 text-[14px] text-body leading-6">
                Two of our Big Kids earned the opportunity to represent Tiny
                Blessings Foundation at the ISM Charity Bazaar after being
                recognized for outstanding attendance and learning performance.
              </p>

              <p className="mt-3 text-[14px] text-body leading-6">
                Over two days, they managed sales, interacted with customers,
                and worked alongside local partners and volunteers. The
                experience helped build confidence, communication skills, and a
                broader sense of what may be possible for their future.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-gray-200">{/* Image */}</div>

            <div className="p-6">
              <h3 className="text-[18px] font-semibold text-navy">
                Care boxes through a student-led initiative
              </h3>

              <p className="mt-3 text-[14px] text-body leading-6">
                In collaboration with RISE Philippines, student organizers
                prepared and delivered 9 care boxes for children supported by
                Tiny Blessings Foundation.
              </p>

              <p className="mt-3 text-[14px] text-body leading-6">
                The boxes included clothing, hygiene items, school supplies, and
                household essentials, collected from families and community
                donations. The initiative provided additional support and
                comfort during a week of community visits and activities.
              </p>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-gray-200">{/* Image */}</div>

            <div className="p-6">
              <h3 className="text-[18px] font-semibold text-navy">
                A youth leader guiding younger children
              </h3>

              <p className="mt-3 text-[14px] text-body leading-6">
                One of our eldest youth participants has taken on a leadership
                role, supporting younger children during physical education and
                play activities.
              </p>

              <p className="mt-3 text-[14px] text-body leading-6">
                Growing up within the program, they now demonstrate patience,
                confidence, and responsibility while helping guide group
                activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
