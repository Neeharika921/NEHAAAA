import SectionTag from './SectionTag';
import { summary, personal } from '@/lib/data';

function Highlight({ children }: { children: string }) {
  return (
    <span className="inline-block px-1 py-0.5 rounded-sm bg-[#fef3c7] border border-[#fcd34d] text-[#1a1a1a] leading-none">
      {children}
    </span>
  );
}

export default function About() {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <SectionTag label="about" />
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline underline-offset-2 text-[#1a1a1a] hover:text-[#555]"
        >
          resume ↗
        </a>
      </div>
      <p className="text-sm leading-7 text-[#1a1a1a]">
        {summary.before}{' '}
        {summary.highlights.map((skill, i) => (
          <span key={skill}>
            <Highlight>{skill}</Highlight>
            {i < summary.highlights.length - 1 ? ', ' : ''}
          </span>
        ))}
        {summary.after}
      </p>
    </section>
  );
}
