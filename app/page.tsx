import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { FloatingToolbar } from "@/components/FloatingToolbar";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Ventures } from "@/components/Ventures";

export default function Home() {
  return (
    <>
      <a
        href="#journey"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Journey />
        <Ventures />
        <Experience />
        <Education />
        <Achievements />
        <About />
        <Contact />
      </main>
      <FloatingToolbar />
    </>
  );
}
