import Image from "next/image";

export default function InstagramPreview() {
  return (
    <section className="bg-white py-14">
      <div className="px-5 max-w-6xl mx-auto">
        <h2 className="text-[28px] leading-[34px] font-serif text-navy">
          Follow Our Journey
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
          <a
            href="https://instagram.com/YOUR_HANDLE"
            target="_blank"
            className="inline-flex items-center justify-center bg-coral text-white text-[14px] font-semibold px-6 py-3 rounded-full"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
