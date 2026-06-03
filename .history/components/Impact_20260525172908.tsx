export default function Impact() {
  return (
    <section id="impact" className="bg-white py-16 md:py-24">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[44px] lg:leading-[52px] font-serif text-navy">
            Our Impact
          </h2>

          <p className="mt-4 text-[15px] leading-7 md:text-[16px] md:leading-8 text-body max-w-2xl">
            Every number represents a child whose life has been supported
            through education, care, and community programs.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-soft border border-border rounded-2xl p-6 md:p-10 text-center transition-all duration-300 hover:border-coral group">
            <div className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-coral transition-transform group-hover:scale-110">
              120+
            </div>
            <div className="text-[12px] md:text-[14px] text-muted mt-2 font-medium uppercase tracking-wider">
              Children supported
            </div>
          </div>

          <div className="bg-soft border border-border rounded-2xl p-6 md:p-10 text-center transition-all duration-300 hover:border-coral group">
            <div className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-coral transition-transform group-hover:scale-110">
              8
            </div>
            <div className="text-[12px] md:text-[14px] text-muted mt-2 font-medium uppercase tracking-wider">
              Learning programs
            </div>
          </div>

          <div className="bg-soft border border-border rounded-2xl p-6 md:p-10 text-center transition-all duration-300 hover:border-coral group">
            <div className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-coral transition-transform group-hover:scale-110">
              5,000+
            </div>
            <div className="text-[12px] md:text-[14px] text-muted mt-2 font-medium uppercase tracking-wider">
              Meals provided
            </div>
          </div>

          <div className="bg-soft border border-border rounded-2xl p-6 md:p-10 text-center transition-all duration-300 hover:border-coral group">
            <div className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-coral transition-transform group-hover:scale-110">
              50+
            </div>
            <div className="text-[12px] md:text-[14px] text-muted mt-2 font-medium uppercase tracking-wider">
              Volunteers engaged
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
