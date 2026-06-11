import SectionTag from './SectionTag';
import { certifications } from '@/lib/data';

export default function Certifications() {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <SectionTag label="certifications" />
      </div>
      <ul className="flex flex-col gap-1">
        {certifications.map((cert) => (
          <li key={cert.name} className="text-sm text-[#1a1a1a] flex gap-2">
            <span className="shrink-0">·</span>
            <span>
              <span className="font-bold">{cert.name}</span>{' '}
              <span className="text-[#666]">— {cert.issuer}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
