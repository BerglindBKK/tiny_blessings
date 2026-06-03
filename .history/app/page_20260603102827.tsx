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
          src="/images/students_ism.png" // your original mobile image
          desktopSrc="./images/students_ism_desktop.png" // new desktop crop
          alt="Senior students at ISM"
          caption="Six of our oldest students visiting ISM as part of a learning opportunity"
        />

        {/* 2. hero */}
        <Hero />

        <div className="bg-red-500 text-white p-8 text-3xl">TAILWIND TEST</div>

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
