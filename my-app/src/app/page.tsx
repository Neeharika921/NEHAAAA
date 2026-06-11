import Hero from '@/components/Hero';
import About from '@/components/About';
import Marquee from '@/components/Marquee';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip">
      {/* hero pins while the about panel slides in from the right */}
      <div className="slide-stage relative">
        <div className="slide-pin">
          <Hero />
          <div className="slide-panel">
            <About />
          </div>
        </div>
        <div id="more" aria-hidden className="absolute bottom-0 scroll-mt-[100vh]" />
      </div>
      <Marquee />
      <Projects />
      <Skills />
      <Marquee reverse />
      <Contact />
    </div>
  );
}
