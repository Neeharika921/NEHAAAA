import SectionTag from './SectionTag';
import { personal } from '@/lib/data';

export default function Contact() {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <SectionTag label="contact" />
      </div>
      <p className="text-sm text-[#1a1a1a] leading-7">
        Find me on{' '}
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[#555]"
        >
          GitHub
        </a>
        ,{' '}
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[#555]"
        >
          LinkedIn
        </a>
        , or{' '}
        <a
          href={`mailto:${personal.email}`}
          className="underline underline-offset-2 hover:text-[#555]"
        >
          email me
        </a>
        .
      </p>
    </section>
  );
}
