import type { Metadata } from 'next';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import Icon from '@/components/Icon';

export const metadata: Metadata = { title: 'Proyectos', description: 'Explora mi colección de proyectos de desarrollo web y aplicaciones' };

export default function ProjectsPage() {
  return (
    <div className="site-container py-16 lg:py-24">
      <div className="mb-12 grid gap-8 rounded-[2rem] border border-[var(--border)] bg-white p-7 shadow-[0_16px_50px_rgba(30,24,51,.06)] md:grid-cols-[1fr_auto] md:items-end md:p-10">
        <div><p className="section-kicker">Código y experimentación</p><h1 className="section-title">Todos mis proyectos</h1><p className="section-copy mt-4">Una colección de laboratorios web, aplicaciones móviles y ejercicios de backend disponibles para revisar.</p></div>
        <a href={`${personalInfo.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="button-primary px-6 py-3.5"><Icon name="github" className="size-5"/> Ver GitHub</a>
      </div>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project}/>)}</div>
    </div>
  );
}
