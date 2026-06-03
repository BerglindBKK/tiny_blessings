export default function Impact() {
  return (
    <section className="bg-white py-14">
      {/* TITLE */}
      <div className="px-5 max-w-6xl mx-auto">
        <h2 className="text-[28px] leading-[34px] font-serif text-navy">
          Our Impact
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-body">
          Every number represents a child whose life has been supported through
          education, care, and community programs.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="px-5 mt-8 grid grid-cols-2 gap-3 max-w-6xl mx-auto">
        {/* STAT 1 */}
        <div className="bg-soft border border-border rounded-xl p-5 text-center">
          <div className="text-[28px] font-sans font-semibold text-coral">
            120+
          </div>
          <div className="text-[12px] text-muted mt-1">Children supported</div>
        </div>

        {/* STAT 2 */}
        <div className="bg-soft border border-border rounded-xl p-5 text-center">
          <div className="text-[28px] font-sans font-semibold text-coral">
            8
          </div>
          <div className="text-[12px] text-muted mt-1">Learning programs</div>
        </div>

        {/* STAT 3 */}
        <div className="bg-soft border border-border rounded-xl p-5 text-center">
          <div className="text-[28px] font-sans font-semibold text-coral">
            5,000+
          </div>
          <div className="text-[12px] text-muted mt-1">Meals provided</div>
        </div>

        {/* STAT 4 */}
        <div className="bg-soft border border-border rounded-xl p-5 text-center">
          <div className="text-[28px] font-sans font-semibold text-coral">
            50+
          </div>
          <div className="text-[12px] text-muted mt-1">Volunteers engaged</div>
        </div>
      </div>
    </section>
  );
}
