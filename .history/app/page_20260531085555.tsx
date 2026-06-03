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
        <StoryImage
          src="/images/students_ism.png"
          desktopSrc="/images/students_ism_desktop.png"
          alt="Students ISM"
          caption="Six Tiny Blessing seniors participating and speaking at the 4th Grade Global Citizen Assembly, wearing upcycled ISM uniforms reborn by RISE Philippines"
        />

        {/* 2. hero */}
        <Hero />

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
