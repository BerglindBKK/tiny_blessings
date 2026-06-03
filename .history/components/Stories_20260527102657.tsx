export default function Stories() {
  return (
    <section id="stories" className="bg-soft py-16 md:py-24">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        {/* HEADER */}
        <p className="text-[11px] tracking-widest uppercase text-muted mb-3">
          Real experiences
        </p>

        <div className="max-w-3xl">
          <h2 className="text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[44px] lg:leading-[52px] font-serif text-navy">
            Stories from the community
          </h2>

          <p className="mt-4 text-[15px] leading-7 md:text-[16px] md:leading-8 text-body">
            Each story reflects real moments from children and families we
            support through education, care, and community programs in Makati
            City.
          </p>

          {/* CONTEXT BLOCK */}
          <div className="mt-8 border-l-4 border-coral pl-6 py-1 max-w-2xl">
            <p className="text-[14px] leading-6 md:text-[15px] md:leading-7 text-body font-medium italic">
              Many of the children we support come from environments affected by
              poverty, unstable housing, and limited access to education and
              healthcare.
            </p>
          </div>
        </div>

        {/* FEATURED STORY (IMPORTANT ADDITION) */}
        <div className="mt-12 bg-white border border-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-gray-200" />

            <div className="p-6 md:p-10">
              <p className="text-[11px] uppercase tracking-wider text-muted font-bold">
                Featured story
              </p>

              <h3 className="mt-3 text-[20px] md:text-[24px] font-semibold text-navy leading-tight">
                A child returning to school after years out of the classroom
              </h3>

              <p className="mt-4 text-[14px] md:text-[15px] text-body leading-7">
                With consistent support from weekly learning sessions and
                community mentoring, one child was able to re-enter formal
                schooling after previously dropping out due to financial
                hardship.
              </p>

              <p className="mt-4 text-[13px] text-muted">
                Makati City · Education program
              </p>
            </div>
          </div>
        </div>

        {/* SECONDARY STORIES */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-border rounded-2xl p-6">
            <p className="text-[11px] uppercase tracking-wider text-muted font-bold">
              Learning support
            </p>
            <h3 className="mt-3 text-[18px] font-semibold text-navy">
              First time learning to read confidently
            </h3>
            <p className="mt-3 text-[14px] text-body leading-6">
              A child who previously struggled with literacy gained confidence
              through consistent one-on-one reading support.
            </p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6">
            <p className="text-[11px] uppercase tracking-wider text-muted font-bold">
              Community care
            </p>
            <h3 className="mt-3 text-[18px] font-semibold text-navy">
              Family receiving consistent meal support
            </h3>
            <p className="mt-3 text-[14px] text-body leading-6">
              Regular feeding programs helped reduce daily food insecurity for a
              household with multiple children.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
