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
      <div className="relative w-full aspect-[4/5] sm:aspect-square">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      <div className="px-5 py-3 max-w-6xl mx-auto">
        <p className="text-[12px] text-muted leading-5">{caption}</p>
      </div>
    </section>
  );
}
