'use client';

import { useState } from 'react';
import type { IconType } from 'react-icons';
import { SiPython, SiPandas, SiNumpy, SiScikitlearn, SiStreamlit, SiGit } from 'react-icons/si';
import { FaDatabase, FaChartBar } from 'react-icons/fa';
import { skillCategories, work, education, certifications } from '@/lib/data';
import Reveal from './Reveal';

const BOARD = '#892319';

const TOOL_TILES: { Icon: IconType; name: string; bg: string; fg?: string }[] = [
  { Icon: SiPython, name: 'Python', bg: '#3776ab' },
  { Icon: FaDatabase, name: 'SQL', bg: '#d97706' },
  { Icon: SiPandas, name: 'Pandas', bg: '#150458' },
  { Icon: SiNumpy, name: 'NumPy', bg: '#4d77cf' },
  { Icon: SiScikitlearn, name: 'Scikit-learn', bg: '#f89939', fg: '#1c1410' },
  { Icon: SiStreamlit, name: 'Streamlit', bg: '#ff4b4b' },
  { Icon: FaChartBar, name: 'Power BI', bg: '#f2c811', fg: '#1c1410' },
  { Icon: SiGit, name: 'Git', bg: '#f05033' },
];

function Tape({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-7 w-24 bg-[#ece5d2]/80 shadow-[0_2px_6px_rgba(0,0,0,0.25)] ${className}`}
      style={{ clipPath: 'polygon(2% 0, 98% 6%, 100% 30%, 97% 100%, 3% 94%, 0 60%)' }}
    />
  );
}

/* punched film-style holes along a paper's top edge, showing the board through */
function PunchedEdge() {
  return (
    <div aria-hidden className="flex justify-between px-3 pb-4 pt-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="h-5 w-6 rounded-[3px]" style={{ backgroundColor: BOARD }} />
      ))}
    </div>
  );
}

function Squiggle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={`h-2.5 w-28 ${className}`} aria-hidden>
      <path d="M3 8 C20 2 35 10 55 6 S95 4 117 7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Star({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} aria-hidden>
      <path
        d="M30 2 L36 22 L56 24 L40 36 L46 56 L30 44 L14 56 L20 36 L4 24 L24 22 Z"
        fill="#d4a531"
        stroke="#a87c1d"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* tucked-into-the-folder transform + open stagger, per paper */
function tuck(transform: string, delay: number): React.CSSProperties {
  return { '--tuck': transform, '--d': `${delay}ms` } as React.CSSProperties;
}

export default function Skills() {
  const [open, setOpen] = useState(false);
  const concepts = skillCategories.find((c) => c.label === 'Concepts')?.items ?? [];
  const job = work[0];

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 text-[#1c1410] md:py-28" style={{ backgroundColor: BOARD }}>
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />

      {/* twine draws itself once the folder opens (desktop only) */}
      <svg
        aria-hidden
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-70 md:block"
      >
        <path
          pathLength={1}
          d="M495 320 C465 260 525 200 490 135 M590 400 C680 375 720 415 800 390 M410 400 C320 425 280 385 200 410 M505 485 C535 550 475 590 510 650"
          stroke="#c39a6b"
          strokeWidth="3"
          fill="none"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: open ? 0 : 1,
            transition: 'stroke-dashoffset 2.2s ease 0.6s',
          }}
        />
      </svg>

      <div
        className={`relative mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-x-8 md:gap-y-12 ${
          open ? '' : 'folder-closed'
        }`}
      >
        {/* hard skills */}
        <div
          className="folder-paper relative order-2 mx-auto w-full max-w-md rotate-[1deg] bg-[#f7f2e6] px-6 py-6 shadow-[0_16px_36px_rgba(0,0,0,0.35)] sm:px-7 md:order-1 md:col-start-4 md:col-span-6 md:row-start-1"
          style={tuck('translate(10px, 230px) rotate(-8deg) scale(0.3)', 100)}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="shrink-0 text-[#9c2c1c]">
              <h3 className="font-hand text-4xl leading-9">hard<br />skills</h3>
              <Squiggle className="mt-1" />
            </div>
            <div className="grid grid-cols-4 gap-2.5">
              {TOOL_TILES.map((t) => (
                <span
                  key={t.name}
                  title={t.name}
                  aria-label={t.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl shadow-[0_3px_8px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:-translate-y-1 hover:rotate-3"
                  style={{ backgroundColor: t.bg, color: t.fg ?? '#f7f2e6' }}
                >
                  <t.Icon className="h-5 w-5" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* the skills folder */}
        <Reveal effect="stamp" className="relative z-20 order-1 mx-auto w-full max-w-xs md:order-2 md:col-start-5 md:col-span-4 md:row-start-2">
          {/* scraps peeking out while closed */}
          <span
            aria-hidden
            className={`absolute -top-4 left-4 h-10 w-24 -rotate-6 bg-[#c0392f] shadow-sm transition-all duration-500 ${open ? 'translate-y-5 opacity-0' : ''}`}
          />
          <span
            aria-hidden
            className={`absolute -top-5 right-4 h-10 w-20 rotate-3 bg-[#cdbd92] shadow-sm transition-all duration-500 ${open ? 'translate-y-5 opacity-0' : ''}`}
          />
          <span
            aria-hidden
            className={`absolute -top-3 left-1/2 h-9 w-24 -translate-x-1/2 rotate-1 bg-[#ece5d2] shadow-sm transition-all duration-500 ${open ? 'translate-y-4 opacity-0' : ''}`}
          />

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="relative z-10 block w-full cursor-pointer -rotate-1 bg-[#f7f2e6] px-8 pb-12 pt-14 text-center shadow-[0_16px_36px_rgba(0,0,0,0.35)] outline-none transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f1ecdf]/80 active:scale-95"
          >
            <span
              aria-hidden
              className="absolute -top-4 left-1/2 h-9 w-36 -translate-x-1/2 bg-[#ece5d2]/85 shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
              style={{ clipPath: 'polygon(1% 4%, 99% 0, 100% 96%, 0 100%)' }}
            />
            <span className="font-hand block text-7xl font-bold text-[#8a241b]">skills</span>
            <span className="font-hand mt-4 block text-3xl text-[#8a241b]/90">my abilities</span>
            <span className="font-type mt-3 block text-[10px] tracking-[0.35em] text-[#1c1410]/50">03.</span>
          </button>

          <p
            className={`font-type absolute -bottom-10 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-[10px] tracking-[0.25em] text-[#f1ecdf]/80 transition-opacity duration-500 md:block ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          >
            ✦ click to open ✦
          </p>
        </Reveal>

        {/* my experience */}
        <div
          className="folder-paper relative order-3 mx-auto w-full max-w-md rotate-[0.6deg] bg-[#f7f2e6] shadow-[0_16px_36px_rgba(0,0,0,0.35)] md:col-start-9 md:col-span-4 md:row-start-2"
          style={tuck('translate(-400px, 0px) rotate(8deg) scale(0.3)', 380)}
        >
          <PunchedEdge />
          <div className="px-7 pb-8">
            <h3 className="font-hand text-4xl text-[#9c2c1c]">my experience</h3>
            <Squiggle className="mt-1 text-[#9c2c1c]" />
            <div className="font-type mt-6 space-y-6 text-[11px] leading-6">
              <div>
                <p>
                  {job.title}, {job.company} — {job.mode}
                </p>
                <p className="text-right italic text-[#1c1410]/70">{job.period}</p>
              </div>
              <div>
                <p>{education.degree}</p>
                <p>{education.institution} · CGPA {education.cgpa}</p>
                <p className="text-right italic text-[#1c1410]/70">{education.period}</p>
              </div>
            </div>
          </div>
        </div>

        {/* core concepts */}
        <div
          className="folder-paper relative order-4 mx-auto w-full max-w-sm -rotate-2 bg-[#f7f2e6] shadow-[0_16px_36px_rgba(0,0,0,0.35)] md:col-start-1 md:col-span-4 md:row-start-2"
          style={tuck('translate(400px, 0px) rotate(-9deg) scale(0.3)', 520)}
        >
          <PunchedEdge />
          <div className="px-7 pb-8">
            <h3 className="font-hand text-4xl text-[#9c2c1c]">core concepts</h3>
            <Squiggle className="mt-1 text-[#9c2c1c]" />
            <ul className="font-type mt-6 space-y-3 text-[11px] leading-5">
              {concepts.map((c) => (
                <li key={c}>· {c.toLowerCase()}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* certifications scrap */}
        <div
          className="folder-paper relative order-5 mx-auto w-full max-w-xs rotate-[2deg] bg-[#f7f2e6] px-7 py-7 shadow-[0_16px_36px_rgba(0,0,0,0.35)] md:col-start-5 md:col-span-4 md:row-start-3"
          style={tuck('translate(-10px, -230px) rotate(6deg) scale(0.3)', 660)}
        >
          <Tape className="-top-3 -left-6 -rotate-45" />
          <Tape className="-bottom-3 -right-6 -rotate-45" />
          <h3 className="font-hand text-3xl text-[#9c2c1c]">certifications</h3>
          <ul className="font-type mt-4 space-y-2.5 text-[10px] leading-5">
            {certifications.map((c) => (
              <li key={c.name}>
                · {c.name} <span className="text-[#1c1410]/60">— {c.issuer}</span>
              </li>
            ))}
          </ul>
          <Star className="absolute -bottom-7 -left-9 h-14 w-14 rotate-12" />
        </div>
      </div>

      {/* loose doodads */}
      <Star className="float-slow absolute right-[8%] top-16 hidden h-10 w-10 -rotate-12 lg:block" />
      <svg
        aria-hidden
        viewBox="0 0 40 40"
        className="float-slow absolute left-[6%] top-24 hidden h-8 w-8 text-[#f1ecdf]/60 lg:block"
        style={{ animationDelay: '2.2s' }}
      >
        <path d="M20 4 V36 M4 20 H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </section>
  );
}
