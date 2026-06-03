import Image from "next/image";

export default function InstagramPreview() {
  return (
    <section className="bg-white py-14">
      <div className="px-5 max-w-6xl mx-auto">
        <h2 className="text-[28px] leading-[34px] font-serif text-navy">
          Daily Moments of Growth and Care
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-body">
          Daily moments from our programs, community work, and the children we
          support.
        </p>

        {/* IMAGE GRID */}
        <div className="mt-8 grid grid-cols-3 gap-2">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/ig1.png"
              alt="Instagram preview 1"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/ig2.png"
              alt="Instagram preview 2"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/ig3.png"
              alt="Instagram preview 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-8">
          <div className="bg-soft border border-border rounded-xl p-5 flex items-center justify-between">
            <div>
              <p className="text-[13px] font-medium text-navy">
                Follow our journey
              </p>
              <p className="text-[12px] text-body">
                Updates, stories, and real impact on Instagram
              </p>
            </div>

            <a
              href="https://instagram.com/_tinyblessings"
              target="_blank"
              className="bg-navy text-white text-[13px] font-semibold px-5 py-2 rounded-full hover:opacity-90 transition whitespace-nowrap"
            >
              View Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
