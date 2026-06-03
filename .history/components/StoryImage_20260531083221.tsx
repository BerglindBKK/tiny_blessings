import Image from "next/image";

export default function StoryImage({
  src,
  caption,
  alt,
}: {
  src: string;
  caption: string;
  alt: string;
}) {
  return (
    <section className="bg-white">
      <div className="relative w-full aspect-square sm:aspect-square md:aspect-[21/12]">
        <div className="relative w-full aspect-square sm:aspect-square md:aspect-[21/12]">
          {src === "/images/students_ism.png" ? (
            <>
              <Image
                src="/images/students_ism.png"
                alt={alt}
                fill
                className="object-cover lg:hidden"
              />

              <Image
                src="/images/students_ism_desktop.png"
                alt={alt}
                fill
                className="hidden object-cover lg:block"
              />
            </>
          ) : (
            <Image src={src} alt={alt} fill className="object-cover" />
          )}
        </div>
      </div>

      <div className="px-5 py-3 max-w-6xl mx-auto">
        <p className="text-[12px] text-muted leading-5">{caption}</p>
      </div>
    </section>
  );
}
