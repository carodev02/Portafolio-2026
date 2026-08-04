import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { personalInfo, skills } from '@/lib/data';
import Icon from '@/components/Icon';

export const metadata: Metadata = { title: 'Sobre mí', description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}` };

export default function AboutPage() {
  return (
    <>
      <section className="site-container grid items-center gap-12 py-16 lg:grid-cols-[.8fr_1.2fr] lg:py-24">
        <div className="relative mx-auto w-full max-w-sm"><div className="absolute -inset-3 -rotate-3 rounded-[2rem] bg-[var(--soft)]"/><div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border-8 border-white shadow-2xl"><Image src={personalInfo.avatar} alt={`Fotografía profesional de ${personalInfo.name}`} fill className="object-cover" sizes="384px" priority/></div></div>
        <div><p className="section-kicker">Perfil profesional</p><h1 className="section-title">Hola, soy {personalInfo.name}.</h1><p className="mt-6 text-xl leading-8 text-[var(--muted)]">Soy desarrolladora full stack y disfruto convertir ideas en experiencias digitales claras y funcionales.</p><div className="mt-6 space-y-4 leading-8 text-[var(--muted)]"><p>Mi formación combina desarrollo web avanzado, backend y aplicaciones multiplataforma. En cada laboratorio busco fortalecer la calidad del código y la experiencia de uso.</p><p>Trabajo con una mentalidad práctica: entender el problema, construir una solución y aprender de cada iteración.</p></div><div className="mt-6 flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--soft)] text-[var(--primary)]"><Icon name="graduation" className="size-5"/></span><div><p className="text-xs font-bold uppercase tracking-wider text-[var(--secondary)]">Idiomas</p><p className="mt-1 font-semibold text-[var(--text)]">Inglés: nivel básico completado y nivel intermedio en curso.</p></div></div><Link href="/contact" className="button-primary mt-8 px-6 py-3.5">Trabajemos juntos <Icon name="arrow" className="size-4"/></Link></div>
      </section>
      <section className="border-y border-[var(--border)] bg-white"><div className="section-space site-container"><p className="section-kicker">Habilidades técnicas</p><h2 className="section-title">Tecnologías en mi caja de herramientas.</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skills.map((skill) => <div key={skill.name} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5"><Icon name="code" className="mb-5 size-6 text-[var(--primary)]"/><p className="font-bold">{skill.name}</p><p className="mt-1 text-sm text-[var(--muted)]">{skill.category}</p></div>)}</div></div></section>
      <section className="section-space site-container grid gap-6 md:grid-cols-2"><div className="rounded-3xl border border-[var(--border)] bg-[var(--soft)] p-8"><Icon name="graduation" className="mb-6 size-8 text-[var(--primary)]"/><p className="section-kicker">Educación</p><h2 className="text-2xl font-extrabold">Formación en desarrollo de software</h2><p className="mt-4 leading-7 text-[var(--muted)]">Programación web avanzada, desarrollo móvil y soluciones multiplataforma.</p></div><div className="rounded-3xl bg-[var(--text)] p-8 text-white"><Icon name="layers" className="mb-6 size-8 text-[#C4B5FD]"/><p className="section-kicker !text-[#C4B5FD]">Experiencia práctica</p><h2 className="text-2xl font-extrabold">Proyectos publicados y revisables</h2><p className="mt-4 leading-7 text-[#C9C4D5]">Laboratorios construidos con TypeScript, Dart, React, Express y MongoDB.</p></div></section>
    </>
  );
}
