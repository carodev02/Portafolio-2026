import Link from 'next/link';
import { Project } from '@/types';
import Icon from './Icon';
import ProjectCarousel from './ProjectCarousel';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-white">
      <ProjectCarousel images={project.images} title={project.title} imageFit={project.imageFit} />
      <div className="flex flex-1 flex-col p-6">
        <Link href={`/projects/${project.slug}`} className="block">
          <h3 className="mb-2 text-xl font-bold leading-snug text-[var(--text)] transition-colors hover:text-[var(--primary)]">
            {project.title}
          </h3>
        </Link>
        <p className="mb-4 leading-relaxed text-[var(--muted)]">{project.description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-semibold text-[var(--primary)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-[#f3e8ff] text-[#5b21b6] px-2 py-1 rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <div className="mt-auto flex flex-wrap gap-3">
        {project.githubUrl && <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary px-4 py-2.5 text-sm"
          >
            <Icon name="github" className="size-4" /> GitHub
          </a>}
          {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="button-primary px-4 py-2.5 text-sm"><Icon name="external" className="size-4" /> Demo</a>}
        </div>
      </div>
    </article>
  );
}
