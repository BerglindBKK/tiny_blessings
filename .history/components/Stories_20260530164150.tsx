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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. ISM CARD */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
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

          {/* 2. MIKMIK CARD  */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/mikmik.png"
                alt="Scholarship"
                fill
                className="object-cover object-center"
              />
            </div>

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

          {/* 3. XANADU CARD  */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden ">
              <Image
                src="/images/xanadu4.png"
                alt="Day at the Xanadu farm"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-6">
              <h3 className="text-[18px] font-semibold text-navy">
                A day of learning at Xanadu Farm
              </h3>

              <p className="mt-3 text-[14px] text-body leading-6">
                Children spent a day at Xanadu Farm engaging in hands-on
                activities, including harvesting fresh vegetables and learning
                about how food is grown and prepared.
              </p>

              <p className="mt-3 text-[14px] text-body leading-6">
                The experience helped connect learning with daily life, as
                children participated in preparing and eating meals made from
                ingredients they had helped harvest.
              </p>
            </div>
          </div>

          {/* 4. YOUTH LEADER CARD */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden ">
              <Image
                src="/images/youth_leader_long.png"
                alt="Youth leader"
                fill
                className="object-cover object-center"
              />
            </div>

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
