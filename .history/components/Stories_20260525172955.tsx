import Image from "next/image";

export default function Stories() {
  return (
    <section id="stories" className="bg-soft py-16 md:py-24">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        {/* TITLE & INTRO */}
        <div className="max-w-3xl">
          <h2 className="text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[44px] lg:leading-[52px] font-serif text-navy">
            Real Stories
          </h2>

          <p className="mt-4 text-[15px] leading-7 md:text-[16px] md:leading-8 text-body">
            Every child has a story. These are moments of change, care, and
            opportunity made possible through community support.
          </p>

          <div className="mt-8 border-l-4 border-coral pl-6 py-1 max-w-2xl">
            <p className="text-[14px] leading-6 md:text-[15px] md:leading-7 text-body font-medium italic">
              We primarily support children living in generational homelessness,
              often facing neglect, unstable family environments, interrupted
              education, and the need to work or beg on the streets to survive.
            </p>
          </div>
        </div>

        {/* STORY CARDS GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* STORY 1 */}
          <div className="bg-white border border-border rounded-2xl p-6 transition-all duration-300 hover:border-coral hover:shadow-md group">
            <div className="text-[11px] uppercase tracking-wider text-muted font-bold">
              Story snapshot
            </div>
            <div className="mt-4 text-[18px] md:text-[20px] font-semibold text-navy group-hover:text-coral transition-colors leading-tight">
              Child learning to read for the first time
            </div>
            <p className="mt-4 text-[14px] text-body leading-6">
              A short placeholder description of a real moment of progress will
              go here, highlighting the immediate impact of literacy programs.
            </p>
          </div>

          {/* STORY 2 */}
          <div className="bg-white border border-border rounded-2xl p-6 transition-all duration-300 hover:border-coral hover:shadow-md group">
            <div className="text-[11px] uppercase tracking-wider text-muted font-bold">
              Story snapshot
            </div>
            <div className="mt-4 text-[18px] md:text-[20px] font-semibold text-navy group-hover:text-coral transition-colors leading-tight">
              First time attending school regularly
            </div>
            <p className="mt-4 text-[14px] text-body leading-6">
              A short placeholder description of a child’s journey into
              consistent education and the stability it provides.
            </p>
          </div>

          {/* STORY 3 */}
          <div className="bg-white border border-border rounded-2xl p-6 transition-all duration-300 hover:border-coral hover:shadow-md group">
            <div className="text-[11px] uppercase tracking-wider text-muted font-bold">
              Story snapshot
            </div>
            <div className="mt-4 text-[18px] md:text-[20px] font-semibold text-navy group-hover:text-coral transition-colors leading-tight">
              Family support through community programs
            </div>
            <p className="mt-4 text-[14px] text-body leading-6">
              A short placeholder description of broader family impact, showing
              how we work with the whole environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
