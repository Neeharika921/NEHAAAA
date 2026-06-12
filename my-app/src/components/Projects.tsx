import Image from 'next/image';
import { projects } from '@/lib/data';
import Reveal from './Reveal';

const TILTS = ['-rotate-[5deg]', 'rotate-[2deg]', '-rotate-[2deg] sm:rotate-[4deg]'];

export default function Projects() {
  return (
    <section id="projects" className="relative pt-20">
      {/* tilted polaroids, overlapping the red band below */}
      <div className="relative z-10 mx-auto -mb-10 flex max-w-5xl flex-wrap items-end justify-center gap-7 px-6 sm:-mb-14">
        {projects.map((project, i) => {
          const inner = (
            /* polaroid */
            <div className="relative bg-[#fbf8ef] p-3 pb-2 shadow-[0_16px_34px_rgba(60,25,12,0.3)] transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-[0_26px_46px_rgba(60,25,12,0.4)]">
              <div className="relative mb-3 aspect-square overflow-hidden bg-[#f1ecdf]">
                <Image
                  src={`/${i + 1}.jpg`}
                  alt={project.name}
                  width={448}
                  height={448}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* details slide up over the photo on hover */}
                <div className="absolute inset-0 flex translate-y-full flex-col justify-between bg-[#9c2c1c] p-3 transition-transform duration-400 ease-[cubic-bezier(0.2,0.8,0.3,1)] group-hover:translate-y-0 group-focus-within:translate-y-0">
                  <p className="font-type text-[10px] leading-[1.7] text-[#f4efe3]">{project.description}</p>
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="font-type bg-[#f1ecdf]/15 px-1.5 py-0.5 text-[8px] tracking-wide text-[#f1ecdf]">
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.period && (
                      <p className="font-type mt-2 text-right text-[9px] italic text-[#f1ecdf]/70">{project.period}</p>
                    )}
                  </div>
                </div>
              </div>
              <p className="font-type text-[11px] leading-5 text-[#1c1410]">{project.name}</p>
              <div className="flex items-end justify-between gap-2">
                <p className="font-hand text-lg leading-6 text-[#9c2c1c]">
                  {project.tech.slice(0, 3).join(' · ')}
                </p>
                {project.url && <span className="font-type pb-1 text-[9px] text-[#1c1410]/50">view ↗</span>}
              </div>
              {/* touch screens never fire the hover overlay, so spell the details out */}
              <p className="font-type mt-2 border-t border-[#1c1410]/15 pt-2 text-[10px] leading-[1.7] text-[#1c1410]/75 md:hidden">
                {project.description}
                {project.period && <span className="italic text-[#1c1410]/50"> · {project.period}</span>}
              </p>
            </div>
          );
          const wrapperClass = `group relative block w-60 transition-transform duration-300 hover:rotate-0 sm:w-56 ${TILTS[i % TILTS.length]}`;
          return (
            <Reveal key={project.name} effect="place" delay={i * 150}>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className={wrapperClass}>
                  {inner}
                </a>
              ) : (
                <div tabIndex={0} className={wrapperClass}>
                  {inner}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>

      {/* red band */}
      <div className="relative bg-[#9c2c1c] px-6 pb-20 pt-24 sm:pt-28">
        <div aria-hidden className="grain pointer-events-none absolute inset-0" />
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_1.4fr]">
          <Reveal effect="rise">
            <p className="stagger font-type text-[10px] tracking-[0.35em] text-[#f1ecdf]/60 sm:text-xs">02. projects</p>
            <h2 className="font-hand mt-3 text-6xl font-semibold leading-[0.95] text-[#f4efe3] md:text-7xl">
              <span className="stagger block" style={{ transitionDelay: '120ms' }}>things</span>
              <span className="stagger block pl-8" style={{ transitionDelay: '260ms' }}>i&apos;ve</span>
              <span className="stagger block pl-16" style={{ transitionDelay: '400ms' }}>built</span>
            </h2>
          </Reveal>
          <Reveal
            effect="rise"
            delay={200}
            className="font-type space-y-5 text-xs leading-7 text-[#f1ecdf]/90 sm:text-sm sm:leading-8 md:text-right"
          >
            <p>
              This portfolio showcases a selection of my machine learning and data work — from a
              churn prediction pipeline to NLP-driven resume screening and sentiment analysis of
              movie reviews.
            </p>
            <p>
              Each project goes end-to-end: preprocessing and feature engineering, model training
              and evaluation, and an interactive Streamlit app on top. Together they reflect how I
              like to build — curious, hands-on, and from raw data to working product.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
