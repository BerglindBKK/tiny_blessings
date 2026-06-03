import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      {/* IMAGE BLOCK */}
      <div className="px-5 pt-5">
        <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-xl overflow-hidden">
          <Image
            src="/images/students_ism.png"
            alt="Students at foundation event"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* CAPTION */}
        <p className="mt-2 text-[12px] leading-5 text-muted">
          Six Tiny Blessing seniors participating and speaking at the 4th Grade
          Global Citizen Assembly, wearing upcycled ISM uniforms reborn by RISE
          Philippines
        </p>
      </div>

      {/* TEXT BLOCK */}
      <div className="px-5 pt-8 pb-16">
        <h1 className="text-[38px] leading-[44px] font-serif text-navy">
          Breaking cycles of poverty through education
        </h1>

        <p className="mt-4 text-[15px] leading-6 text-body">
          Supporting street-connected children in Manila through safe spaces,
          literacy programs, and educational support.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-col gap-3">
          <button className="bg-coral text-white text-[14px] font-semibold px-5 py-3 rounded-full">
            Support a Child
          </button>

          <button className="border border-navy text-navy text-[14px] font-semibold px-5 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
