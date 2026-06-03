"use client";

export default function Foundation() {
  return (
    <section id="foundation" className="bg-soft py-16 md:py-24">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[44px] lg:leading-[52px] font-serif text-navy">
            Our Foundation
          </h2>

          <div className="mt-6 space-y-4">
            <p className="text-[15px] leading-7 md:text-[16px] md:leading-8 text-body">
              Since 2018, Tiny Blessings Foundation has provided supplementary
              education, proper nutrition, healthcare, and safe learning
              environments for children experiencing extreme poverty in
              communities across Makati City, Philippines.
            </p>
            <p className="text-[15px] leading-7 md:text-[16px] md:leading-8 text-body">
              We believe every child deserves a safe and nurturing environment,
              access to education, and opportunities to grow into compassionate,
              capable, and confident individuals.
            </p>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="bg-white p-6 rounded-2xl border border-border hover:border-coral hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
            <h3 className="text-[17px] font-semibold text-navy group-hover:text-coral transition-colors">
              Safe daytime spaces
            </h3>
            <p className="mt-3 text-[14px] text-body leading-6">
              A secure place for children to rest, learn, and feel protected.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-border hover:border-coral hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
            <h3 className="text-[17px] font-semibold text-navy group-hover:text-coral transition-colors">
              Literacy programs
            </h3>
            <p className="mt-3 text-[14px] text-body leading-6">
              Building foundational reading and writing skills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-border hover:border-coral hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
            <h3 className="text-[17px] font-semibold text-navy group-hover:text-coral transition-colors">
              Educational support
            </h3>
            <p className="mt-3 text-[14px] text-body leading-6">
              Helping children stay in school and continue learning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-border hover:border-coral hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
            <h3 className="text-[17px] font-semibold text-navy group-hover:text-coral transition-colors">
              Physical wellbeing
            </h3>
            <p className="mt-3 text-[14px] text-body leading-6">
              Nutrition, care, and health support for daily stability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
