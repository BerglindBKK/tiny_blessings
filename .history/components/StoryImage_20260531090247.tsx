import Image from "next/image";

export default function StoryImage({
  src,
  desktopSrc,
  caption,
  alt,
}: {
  src: string;
  desktopSrc?: string;
  caption: string;
  alt: string;
}) {
  return (
    <section className="bg-white">
      <div className="relative w-full  sm:aspect-[4/3] md:aspect-[21/12]">
        {/* ORIGINAL IMAGE - unchanged */}
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top lg:hidden"
        />

        {/* DESKTOP OVERRIDE */}
        {desktopSrc && (
          <Image
            src={desktopSrc}
            alt={alt}
            fill
            className="hidden lg:block object-cover"
          />
        )}
      </div>

      <div className="px-5 py-3 max-w-6xl mx-auto">
        <p className="text-[12px] text-muted leading-5">{caption}</p>
      </div>
    </section>
  );
}
