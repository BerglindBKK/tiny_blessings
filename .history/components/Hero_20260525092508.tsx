import Image from "next/image";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/students_ism.jpg"
          alt="Foundation students"
          fill
          className="object-cover"
        />
      </div>

      <div className="px-5 pt-8 pb-16">
        <h1 className="text-5xl leading-tight text-[#07488C] font-serif">
          Breaking cycles of poverty through education
        </h1>

        <p className="mt-4 text-[15px] leading-7 text-[#07488CB3]">
          Supporting street-connected children in Manila through safe spaces,
          literacy programs, and educational support.
        </p>

        <div className="mt-8 flex gap-3">
          <button className="bg-[#E76F51] text-white px-5 py-3 rounded-full">
            Support a Child
          </button>

          <button className="border border-[#07488C] text-[#07488C] px-5 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
