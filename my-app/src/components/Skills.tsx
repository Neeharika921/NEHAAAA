import SectionTag from './SectionTag';
import { allSkills } from '@/lib/data';

export default function Skills() {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <SectionTag label="skills" />
      </div>
      <p className="text-sm text-[#1a1a1a] leading-7">
        {allSkills.join(', ')}
      </p>
    </section>
  );
}
