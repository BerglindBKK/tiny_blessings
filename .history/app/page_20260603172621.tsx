// app/page.tsx or pages/index.tsx
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
        {/* 1. proof of reality / story image */}
        <StoryImage
          src="/images/students_ism.png" // mobile
          desktopSrc="/images/students_ism_desktop.png" // desktop crop
          alt="Senior students at ISM"
          caption="Six of our oldest students visiting ISM as part of a learning opportunity"
        />

        {/* 2. hero */}
        <Hero />

        {/* 3. foundation */}
        <Foundation />

        {/* 4. impact */}
        <Impact />

        {/* 5. stories */}
        <Stories />

        {/* 6. Instagram preview */}
        <InstagramPreview />

        {/* 7. take action */}
        <TakeAction />

        {/* 8. footer */}
        <Footer />
      </main>
    </>
  );
}
