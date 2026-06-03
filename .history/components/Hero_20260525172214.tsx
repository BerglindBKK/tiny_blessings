"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      {/* TEXT BLOCK */}
      <div className="px-5 pt-12 pb-20 md:pt-20 md:pb-32 max-w-6xl mx-auto lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-[38px] leading-[44px] md:text-[56px] md:leading-[64px] lg:text-[72px] lg:leading-[80px] font-serif text-navy">
            Nurturing Futures, <br className="hidden md:block" />
            One Child at a Time
          </h1>

          <p className="mt-6 text-[16px] leading-7 text-body md:text-[18px] md:leading-8 md:max-w-xl">
            Supporting street-connected children in Manila through safe spaces,
            literacy programs, and educational support.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("donate")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-coral text-white px-8 py-4 rounded-full hover:bg-[#d65d41] hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3 group"
            >
              <img
                src="/images/donate_icon.png"
                alt="icon"
                className="w-6 h-6 transition-transform group-hover:scale-110"
              />
              <span className="font-semibold tracking-wide">Support</span>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("foundation")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-navy text-navy px-8 py-4 rounded-full font-semibold hover:bg-navy hover:text-white transition-all active:scale-95 text-center"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
