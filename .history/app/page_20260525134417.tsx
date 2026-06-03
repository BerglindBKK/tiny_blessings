import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Foundation from "@/components/Foundation";
import Impact from "@/components/Impact";
import Stories from "@/components/Stories";
import TakeAction from "@/components/TakeAction";
import StoryImage from "@/components/StoryImage";
import InstagramPreview from "@/components/InstagramPreview";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* 1. proof of reality */}
        <StoryImage
          src="/images/students_ism.png"
          alt="Students ISM"
          caption="Six Tiny Blessing seniors participating and speaking at the 4th Grade Global Citizen Assembly, wearing upcycled ISM uniforms reborn by RISE Philippines"
        />

        {/* 2. hero */}
        <Hero />

        {/* 3. journey / effort */}
        <StoryImage
          src="/images/growing.png"
          alt="Growing work in progress"
          caption="Hands in the dirt, Hearts at work"
        />

        {/* 4. foundation */}
        <Foundation />

        {/* 5. impact */}
        <Impact />

        {/* 6. trust / care validation */}
        <StoryImage
          src="/images/dentist.png"
          alt="Dental care support"
          caption="Providing access to essential healthcare through volunteer dental support"
        />

        {/* 7. stories */}
        <Stories />

        {/* 8. action */}
        <TakeAction />
      </main>
    </>
  );
}
