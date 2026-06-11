import { personal } from '@/lib/data';
import Reveal from './Reveal';

const LINKS = [
  { label: 'email me', href: `mailto:${personal.email}`, tilt: '-rotate-2' },
  { label: 'github', href: personal.github, tilt: 'rotate-1' },
  { label: 'linkedin', href: personal.linkedin, tilt: '-rotate-1' },
  { label: 'resume', href: personal.resumeUrl, tilt: 'rotate-2' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 text-center md:py-28">
      <Reveal effect="rise">
        <p className="stagger font-type text-[10px] tracking-[0.35em] text-[#6b5546] sm:text-xs">04. contact</p>
        <h2 className="stagger font-hand mt-3 text-6xl font-semibold text-[#9c2c1c] md:text-7xl" style={{ transitionDelay: '120ms' }}>
          let&apos;s work together
        </h2>
        <p className="stagger font-type mx-auto mt-6 max-w-md text-xs leading-7 text-[#3f322a] sm:text-sm" style={{ transitionDelay: '240ms' }}>
          have a dataset with a story to tell, or an idea that needs a model behind it? my inbox is
          always open.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          {LINKS.map((link, i) => (
            <Reveal key={link.label} effect="rise" delay={380 + i * 110}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className={`font-type block bg-[#9c2c1c] px-6 py-2.5 text-[11px] tracking-[0.25em] text-[#f1ecdf] shadow-[0_8px_18px_rgba(90,30,15,0.3)] transition-transform duration-200 hover:rotate-0 hover:-translate-y-1 sm:text-xs ${link.tilt}`}
                style={{ clipPath: 'polygon(2% 8%, 98% 0, 100% 90%, 97% 100%, 2% 96%, 0 70%, 1% 30%)' }}
              >
                {link.label}
              </a>
            </Reveal>
          ))}
        </div>

        <p className="stagger font-type mt-20 text-[10px] tracking-[0.2em] text-[#6b5546]/70" style={{ transitionDelay: '700ms' }}>
          © 2026 neeharika kuppili · shot on 35mm, plotted in python
        </p>
      </Reveal>
    </section>
  );
}
