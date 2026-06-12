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
        {/* on mobile the pin animation is off, so target the top of About instead */}
        <div id="more" aria-hidden className="absolute top-[100vh] md:top-auto md:bottom-0 md:scroll-mt-[100vh]" />
      </div>
      <Marquee />
      <Projects />
      <Skills />
      <Marquee reverse />
      <Contact />
    </div>
  );
}
