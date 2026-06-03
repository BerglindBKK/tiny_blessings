export default function Stories() {
  return (
    <section id="stories" className="bg-soft py-16 md:py-24">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        {/* HEADER */}
        <p className="text-[11px] tracking-widest uppercase text-muted mb-3">
          Community moments
        </p>

        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-serif text-navy">
          Moments from our community
        </h2>

        <p className="mt-4 text-[15px] md:text-[16px] text-body max-w-3xl">
          Real moments from children and families supported through our
          education, nutrition, and care programs in Makati City.
        </p>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <h3 className="font-semibold text-navy text-[18px]">
                Learning to read with confidence
              </h3>
              <p className="mt-3 text-body text-[14px] leading-6">
                Through weekly one-on-one reading sessions, a child began
                building confidence and participating more actively in learning
                activities.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-gray-200">{/* Image */}</div>
            <div className="p-6">
              <h3 className="font-semibold text-navy text-[18px]">
                Regular meal support for families
              </h3>
              <p className="mt-3 text-body text-[14px] leading-6">
                Feeding programs help provide consistent meal support for
                children and families experiencing food insecurity.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-gray-200">{/* Image */}</div>
            <div className="p-6">
              <h3 className="font-semibold text-navy text-[18px]">
                Safe space for learning and play
              </h3>
              <p className="mt-3 text-body text-[14px] leading-6">
                Children take part in structured activities that support
                learning, play, and emotional well-being in a safe environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
