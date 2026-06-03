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
        <Foundation />
        <Impact />
        <Stories />
        <TakeAction />
      </main>
    </>
  );
}
