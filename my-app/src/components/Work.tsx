import SectionTag from './SectionTag';
import { work } from '@/lib/data';

export default function Work() {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <SectionTag label="work" />
      </div>
      <div className="flex flex-col gap-6">
        {work.map((job) => (
          <div key={job.company + job.title}>
            <p className="text-sm font-bold text-[#1a1a1a]">{job.title}</p>
            <p className="text-sm text-[#666]">
              {job.companyUrl ? (
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-[#333]"
                >
                  {job.company}
                </a>
              ) : (
                job.company
              )}{' '}
              · {job.type}
            </p>
            <p className="text-sm text-[#666]">
              {job.period} · {job.duration}
            </p>
            <p className="text-sm text-[#666]">{job.location} · {job.mode}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
