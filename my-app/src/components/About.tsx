import Image from 'next/image';
import { summary } from '@/lib/data';
import Reveal from './Reveal';

/* scalloped perforation dots, colored like the section background */
function Perf({ side }: { side: 'top' | 'bottom' | 'left' | 'right' }) {
  const horizontal = side === 'top' || side === 'bottom';
  const style: React.CSSProperties = horizontal
    ? {
        backgroundImage: `radial-gradient(circle 5px at 8px 5px, #9c2c1c 4.5px, transparent 5px)`,
        backgroundSize: '16px 10px',
        backgroundRepeat: 'repeat-x',
      }
    : {
        backgroundImage: `radial-gradient(circle 5px at 5px 8px, #9c2c1c 4.5px, transparent 5px)`,
        backgroundSize: '10px 16px',
        backgroundRepeat: 'repeat-y',
      };
  const position =
    side === 'top'
      ? 'inset-x-0 -top-[5px] h-[10px]'
      : side === 'bottom'
        ? 'inset-x-0 -bottom-[5px] h-[10px]'
        : side === 'left'
          ? 'inset-y-0 -left-[5px] w-[10px]'
          : 'inset-y-0 -right-[5px] w-[10px]';
  return <div aria-hidden className={`absolute ${position}`} style={style} />;
}

function Postmark() {
  return (
    <svg viewBox="0 0 150 90" className="absolute -bottom-9 -right-7 h-20 w-32 text-[#f1ecdf]/80 sm:-right-12" aria-hidden>
      <circle cx="45" cy="45" r="34" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="45" cy="45" r="26" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
      <path d="M90 30 C110 26 130 34 146 30 M90 45 C110 41 130 49 146 45 M90 60 C110 56 130 64 146 60" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#9c2c1c] px-6 py-24 text-[#f1ecdf] md:py-32">
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[auto_1fr] md:gap-24">
        {/* postage stamp collage */}
        <Reveal effect="stamp" className="relative mx-auto w-fit">
          {/* repeated-signature watermark box */}
          <div className="absolute -right-28 -top-10 hidden rotate-2 border border-[#f1ecdf]/40 px-6 py-3 lg:block">
            {Array.from({ length: 4 }).map((_, i) => (
              <p
                key={i}
                className="stagger font-hand text-2xl leading-7 text-[#f1ecdf]/30"
                style={{ transitionDelay: `${350 + i * 140}ms` }}
              >
                neeharika kuppili
              </p>
            ))}
          </div>

          <div className="relative -rotate-2 bg-[#f4efe3] p-3 shadow-[0_18px_40px_rgba(40,10,5,0.4)]">
            <Perf side="top" />
            <Perf side="bottom" />
            <Perf side="left" />
            <Perf side="right" />
            <div className="border border-[#1c1410]/30 p-2">
              <Image
                src="/NEHA.png"
                alt="portrait of Neeharika"
                width={416}
                height={520}
                className="h-52 w-44 object-cover sm:h-60 sm:w-52"
              />
              <p className="font-hand pb-1 pl-2 text-3xl text-[#1c1410]">Neeharika Kuppili</p>
            </div>
            <p className="font-type absolute right-3 top-3 text-[10px] text-[#1c1410]/60">2027</p>
          </div>

          <Postmark />
        </Reveal>

        {/* copy */}
        <Reveal effect="rise" className="relative">
          <p className="stagger font-type text-[10px] tracking-[0.35em] text-[#f1ecdf]/60 sm:text-xs">01. about</p>
          <h2 className="stagger font-hand mt-3 text-6xl font-semibold text-[#f4efe3] md:text-7xl" style={{ transitionDelay: '120ms' }}>
            about me
          </h2>
          <p className="stagger font-type mt-8 max-w-xl text-xs leading-7 text-[#f1ecdf]/90 sm:text-sm sm:leading-8" style={{ transitionDelay: '260ms' }}>
            {summary.before} {summary.highlights.join(', ')}
            {summary.after}
          </p>
          <p className="stagger font-type mt-6 max-w-xl text-xs leading-7 text-[#f1ecdf]/90 sm:text-sm sm:leading-8" style={{ transitionDelay: '400ms' }}>
            When I&apos;m not training models, I&apos;m usually sketching dashboards, cleaning a stubborn
            dataset, or chasing a curve that finally fits. I aspire to keep building projects that
            challenge me, help me grow, and let the data tell its story.
          </p>
        </Reveal>
      </div>
    </section>
  );
}