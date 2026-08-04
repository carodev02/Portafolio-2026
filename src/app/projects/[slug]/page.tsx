import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import Icon from '@/components/Icon';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: 'Proyecto no encontrado' };
  return { title: project.title, description: project.description, openGraph: { title: project.title, description: project.description, images: [project.image], type: 'article' } };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <div className="site-container py-16 lg:py-24">
      <Link href="/projects" className="mb-6 inline-flex items-center gap-2 font-bold text-[var(--primary)]">← Volver a proyectos</Link>
      <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_20px_60px_rgba(30,24,51,.08)] md:p-10">
        <p className="section-kicker">Proyecto</p><h1 className="section-title mb-8">{project.title}</h1>
        <div className="relative mb-8 aspect-[16/8] w-full overflow-hidden rounded-2xl bg-[var(--soft)]"><Image src={project.image} alt={project.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1180px"/></div>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start"><div><p className="text-lg leading-8 text-[var(--muted)]">{project.description}</p><h2 className="mb-4 mt-8 text-xl font-bold">Tecnologías utilizadas</h2><div className="flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full bg-[var(--soft)] px-3 py-1.5 text-sm font-semibold text-[var(--primary)]">{tech}</span>)}</div></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col">{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="button-primary px-6 py-3"><Icon name="external" className="size-4"/> Ver demo</a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button-secondary px-6 py-3"><Icon name="github" className="size-4"/> Ver código</a>}</div></div>
      </article>
    </div>
  );
}
