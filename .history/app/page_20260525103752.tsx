import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Foundation from "@/components/Foundation";
import Impact from "@/components/Impact";
import Stories from "@/components/Stories";
import TakeAction from "@/components/TakeAction";
import StoryImage from "@/components/StoryImage";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <StoryImage
          src="/images/growing.png"
          alt="Students at ISM event"
          caption="Six Tiny Blessing seniors participating and speaking at the 4th Grade Global Citizen Assembly, wearing upcycled ISM uniforms reborn by RISE Philippines"
        />

        <Foundation />
        <Impact />

        <StoryImage
          src="/images/dentist.png"
          alt="Hands working in soil"
          caption="Hands in the dirt, Hearts at work"
        />

        <Stories />
        <TakeAction />
      </main>
    </>
  );
}
