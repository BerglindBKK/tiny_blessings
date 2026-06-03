"use client";
import Image from "next/image";

export default function InstagramPreview() {
  return (
    <section id="instagram" className="bg-white py-16 md:py-24">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        {/* HEADER */}
        <div className="max-w-3xl">
          <h2 className="text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[44px] lg:leading-[52px] font-serif text-navy">
            Daily Moments of Growth and Care
          </h2>

          <p className="mt-4 text-[15px] leading-7 md:text-[16px] md:leading-8 text-body">
            Daily moments from our programs, community work, and the children we
            support.
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="mt-12 grid grid-cols-3 gap-3 md:gap-6">
          <div className="relative aspect-square rounded-2xl overflow-hidden group">
            <Image
              src="/images/ig1.png"
              alt="Instagram preview 1"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden group">
            <Image
              src="/images/ig2.png"
              alt="Instagram preview 2"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden group">
            <Image
              src="/images/ig3.png"
              alt="Instagram preview 3"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>

        {/* FOLLOW CARD */}
        <div className="mt-12">
          <div className="bg-soft border border-border rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-coral transition-all duration-300 hover:shadow-xl group">
            <div className="text-center md:text-left">
              <p className="text-[18px] md:text-[20px] font-bold text-navy group-hover:text-coral transition-colors">
                Follow our journey
              </p>
              <p className="mt-2 text-[14px] md:text-[15px] text-body leading-relaxed max-w-md">
                Updates, stories, and real impact on Instagram. Join our
                community to see the progress we make together.
              </p>
            </div>

            <a
              href="https://instagram.com/_tinyblessings"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white text-[14px] md:text-[15px] font-bold px-8 py-4 rounded-full hover:bg-coral transition-all active:scale-95 whitespace-nowrap flex items-center gap-2"
            >
              <span>View Instagram</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
