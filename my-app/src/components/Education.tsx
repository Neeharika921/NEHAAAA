import SectionTag from './SectionTag';
import { education } from '@/lib/data';

export default function Education() {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <SectionTag label="education" />
      </div>
      <p className="text-sm font-bold text-[#1a1a1a]">{education.institution}</p>
      <p className="text-sm text-[#666]">{education.degree}</p>
      <p className="text-sm text-[#666]">
        {education.period} · CGPA {education.cgpa}
      </p>
    </section>
  );
}
