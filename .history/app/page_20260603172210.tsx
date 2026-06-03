import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Foundation from "@/components/Foundation";
import Impact from "@/components/Impact";
import Stories from "@/components/Stories";
import TakeAction from "@/components/TakeAction";
import StoryImage from "@/components/StoryImage";
import InstagramPreview from "@/components/InstagramPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* 1. proof of reality */}
         export default function StoryImage({
  src,
  desktopSrc,
  alt,
  caption,
}: {
  src: string;
  desktopSrc?: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="max-w-6xl mx-auto px-4">
      <div className="w-full h-auto md:h-[400px] lg:h-[500px] relative overflow-hidden">
        <Image
          src={desktopSrc || src}
          alt={alt}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      {caption && <figcaption className="text-center mt-2 text-sm">{caption}</figcaption>}
    </figure>
  );
}

        {/* 2. hero */}
        <Hero />

        {/* <div className="bg-red-500 text-white p-8 text-3xl">TAILWIND TEST</div> */}

        {/* 3. foundation (now includes growing.png) */}
        <Foundation />

        {/* 4. impact */}
        <Impact />

        {/* 5. trust / care validation */}
        {/* <StoryImage
          src="/images/dentist.png"
          alt="Dental care support"
          caption="Providing access to essential healthcare through volunteer dental support"
        /> */}

        {/* 6. stories */}
        <Stories />

        {/* 7. Instagram preview */}
        <InstagramPreview />

        {/* 8. action */}
        <TakeAction />

        <Footer />
      </main>
    </>
  );
}
