import Image from "next/image";

export default function Stories() {
  return (
    <section className="bg-soft py-14">
      {/* TITLE */}
      <div className="px-5 max-w-6xl mx-auto">
        <h2 className="text-[28px] leading-[34px] font-serif text-navy">
          Real Stories
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-body">
          Every child has a story. These are moments of change, care, and
          opportunity made possible through community support.
        </p>
      </div>

      {/* STORY PLACEHOLDERS */}
      <div className="px-5 mt-8 space-y-4 max-w-6xl mx-auto">
        {/* STORY 1 */}
        <div className="bg-white border border-border rounded-xl p-5">
          <div className="text-[12px] text-muted">Story placeholder</div>
          <div className="mt-2 text-[16px] font-semibold text-navy">
            Child learning to read for the first time
          </div>
          <p className="mt-2 text-[13px] text-body leading-5">
            A short placeholder description of a real moment of progress will go
            here.
          </p>
        </div>

        {/* STORY 2 */}
        <div className="bg-white border border-border rounded-xl p-5">
          <div className="text-[12px] text-muted">Story placeholder</div>
          <div className="mt-2 text-[16px] font-semibold text-navy">
            First time attending school regularly
          </div>
          <p className="mt-2 text-[13px] text-body leading-5">
            A short placeholder description of a child’s journey into consistent
            education.
          </p>
        </div>

        {/* STORY 3 */}
        <div className="bg-white border border-border rounded-xl p-5">
          <div className="text-[12px] text-muted">Story placeholder</div>
          <div className="mt-2 text-[16px] font-semibold text-navy">
            Family support through community programs
          </div>
          <p className="mt-2 text-[13px] text-body leading-5">
            A short placeholder description of broader family impact.
          </p>
        </div>
      </div>
    </section>
  );
}
