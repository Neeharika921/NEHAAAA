import { personal } from '@/lib/data';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <span className="fixed top-5 left-5 text-sm font-[family-name:var(--font-mono)]">
        {personal.name}
      </span>
      <main className="max-w-[560px] mx-auto px-6 pt-24 pb-16">
        <Hero />
        <About />
        <Work />
        <Education />
        <Skills />
        <Contact />
        <hr className="border-[#d4cdc0] my-8" />
        <Projects />
        <Certifications />
      </main>
    </div>
  );
}
