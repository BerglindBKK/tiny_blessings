import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Foundation from "@/components/Foundation";
import Foundation from "@/components/Impact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Foundation />
        <Impact />
      </main>
    </>
  );
}
