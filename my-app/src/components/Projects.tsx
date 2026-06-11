import SectionTag from './SectionTag';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <SectionTag label="things i've built" />
      </div>
      <ul className="flex flex-col gap-1">
        {projects.map((project) => (
          <li key={project.name} className="text-sm text-[#1a1a1a] flex gap-2">
            <span className="shrink-0">·</span>
            <span>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-2 hover:text-[#555]"
                >
                  {project.name}
                </a>
              ) : (
                <span className="font-bold">{project.name}</span>
              )}{' '}
              <span className="text-[#666]">{project.description}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
