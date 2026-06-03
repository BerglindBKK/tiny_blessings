export default function Foundation() {
  return (
    <section className="bg-soft py-14">
      <div className="px-5 max-w-6xl mx-auto">
        <h2 className="text-[28px] leading-[34px] font-serif text-navy">
          Our Foundation
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-body">
          We create safe spaces and learning opportunities for street-connected
          children in Manila, helping them build confidence, skills, and
          long-term pathways out of poverty.
        </p>
      </div>

      <div className="px-5 mt-8 grid grid-cols-1 gap-3 max-w-6xl mx-auto">
        <div className="bg-white p-5 rounded-xl border border-border">
          <h3 className="text-[16px] font-semibold text-navy">
            Safe daytime spaces
          </h3>
          <p className="mt-2 text-[13px] text-body leading-5">
            A secure place for children to rest, learn, and feel protected.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-border">
          <h3 className="text-[16px] font-semibold text-navy">
            Literacy programs
          </h3>
          <p className="mt-2 text-[13px] text-body leading-5">
            Building foundational reading and writing skills.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-border">
          <h3 className="text-[16px] font-semibold text-navy">
            Educational support
          </h3>
          <p className="mt-2 text-[13px] text-body leading-5">
            Helping children stay in school and continue learning.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-border">
          <h3 className="text-[16px] font-semibold text-navy">
            Physical wellbeing
          </h3>
          <p className="mt-2 text-[13px] text-body leading-5">
            Nutrition, care, and health support for daily stability.
          </p>
        </div>
      </div>
    </section>
  );
}
