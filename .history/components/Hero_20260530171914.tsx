import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-24 md:py-32">
        <p className="text-[11px] tracking-widest uppercase text-white/60 mb-4">
          Tiny Blessings Foundation
        </p>

        {/* HEADLINE */}
        <h1 className="text-[34px] md:text-[52px] leading-tight font-serif max-w-3xl">
          Creating stability and opportunity for children in Makati
        </h1>

        {/* SUBTEXT */}
        <p className="mt-6 text-[16px] md:text-[18px] text-white/70 max-w-2xl leading-relaxed">
          Through education, nutrition, and consistent community support, we
          help children build stable futures and unlock their potential.
        </p>

        {/* CTA ROW */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          {/* PRIMARY CTA */}
          <a
            href="#donate"
            className="flex items-center justify-center gap-2 bg-coral text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:opacity-90 hover:scale-[1.02]"
          >
            <Image
              src="/images/donate_icon_100.png"
              alt="Take Action"
              width={22}
              height={22}
            />
            Take Action
          </a>

          {/* SECONDARY CTA */}
          <a
            href="#stories"
            className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:bg-white/10"
          >
            See our work
          </a>
        </div>
      </div>

      {/* OPTIONAL: subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy pointer-events-none" />
    </section>
  );
}
