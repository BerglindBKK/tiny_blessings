import Image from "next/image";

interface StoryImageProps {
  src: string;
  caption: string;
  alt: string;
}

export default function StoryImage({ src, caption, alt }: StoryImageProps) {
  return (
    <section className="bg-white py-8 md:py-12">
      {/* Container: Added max-w-6xl to prevent the image from being overwhelming on desktop */}
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-video lg:aspect-[21/9] rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm">
          <Image src={src} alt={alt} fill className="object-cover" priority />
        </div>
        {/* Caption stays aligned with the contained image */}
        <div className="mt-4 flex items-center gap-3">
          <div className="w-8 h-[1px] bg-coral"></div>
          <p className="text-[12px] md:text-[13px] uppercase tracking-[0.1em] text-muted font-bold italic">
            {caption}
          </p>
        </div>
      </div>
    </section>
  );
}
