"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      {/* TEXT BLOCK */}
      <div className="px-5 pt-8 pb-16">
        <h1 className="text-[38px] leading-[44px] font-serif text-navy">
          Breaking cycles of poverty through education
        </h1>

        <p className="mt-4 text-[15px] leading-6 text-body">
          Supporting street-connected children in Manila through safe spaces,
          literacy programs, and educational support.
        </p>

        <div className="mt-8 flex gap-3">
          <button
            onClick={() =>
              document
                .getElementById("donate")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-coral text-white px-6 py-3 rounded-full"
          >
            Support a Child
          </button>

          <button className="flex-1 border border-navy text-navy text-[14px] font-semibold px-5 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
