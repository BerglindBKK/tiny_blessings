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
      <div className="relative w-full">
        {/* MOBILE IMAGE */}
        <div className="w-full aspect-[4/5] sm:aspect-square md:hidden lg:hidden relative">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        {/* DESKTOP IMAGE */}
        {desktopSrc && (
          <div className="hidden md:block w-full aspect-[21/9] relative">
            <Image
              src={desktopSrc}
              alt={alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        )}
      </div>

      <div className="px-5 py-3 max-w-6xl mx-auto">
        <p className="text-[12px] text-muted leading-5">{caption}</p>
      </div>
    </section>
  );
}
