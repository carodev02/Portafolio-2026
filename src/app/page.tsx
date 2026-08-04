import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo, skills } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import Icon from '@/components/Icon';

const highlights = [
  { icon: 'code' as const, label: 'Desarrollo web', value: 'Interfaces modernas' },
  { icon: 'mobile' as const, label: 'Multiplataforma', value: 'Experiencias adaptables' },
  { icon: 'layers' as const, label: 'Full stack', value: 'Del concepto al producto' },
];

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="pointer-events-none absolute -right-36 -top-36 size-[34rem] rounded-full bg-[var(--soft)] blur-3xl" />
        <div className="site-container grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-sm">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" /> Disponible para nuevos proyectos
            </div>
            <p className="section-kicker">Hola, soy {personalInfo.name}</p>
            <h1 className="text-[clamp(3.1rem,7vw,6.2rem)] font-extrabold leading-[.94] tracking-[-.065em] text-[var(--text)]">
              Desarrollo ideas que <span className="text-[var(--primary)]">funcionan.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              {personalInfo.title}. {personalInfo.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['TypeScript', 'React', 'Next.js', 'Node.js', 'Dart'].map((tech) => (
                <span key={tech} className="rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-sm font-semibold text-[var(--muted)]">{tech}</span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#proyectos" className="button-primary px-6 py-3.5">Ver proyectos <Icon name="arrow" className="size-4" /></Link>
              <a href="/cv-ximena.html" download className="button-secondary px-6 py-3.5">Descargar CV</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-[var(--secondary)]/15" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-8 border-white bg-[var(--soft)] shadow-[0_28px_80px_rgba(66,45,103,.2)]">
              <Image src={personalInfo.avatar} alt="Fotografía profesional de Ximena" fill priority className="object-cover" sizes="(max-width: 1024px) 90vw, 470px" />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-xl sm:-left-9">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--secondary)]">En constante aprendizaje</p>
              <p className="mt-1 font-bold text-[var(--text)]">Web · Móvil · Backend</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container -mt-px grid gap-px overflow-hidden rounded-b-3xl border border-[var(--border)] bg-[var(--border)] shadow-sm md:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.label} className="flex items-center gap-4 bg-white p-6">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--soft)] text-[var(--primary)]"><Icon name={item.icon} className="size-5" /></span>
            <div><p className="text-xs font-bold uppercase tracking-wider text-[var(--secondary)]">{item.label}</p><p className="mt-1 font-bold text-[var(--text)]">{item.value}</p></div>
          </div>
        ))}
      </section>

      <section id="sobre-mi" className="section-space site-container reveal grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
        <div><p className="section-kicker">Sobre mí</p><h2 className="section-title">Curiosidad técnica con enfoque humano.</h2></div>
        <div className="grid gap-6 sm:grid-cols-2">
          <p className="section-copy sm:col-span-2">Me interesa transformar retos reales en productos digitales fáciles de entender y agradables de usar. Desarrollo proyectos web y multiplataforma mientras profundizo en arquitecturas modernas, interfaces accesibles y código mantenible.</p>
          <div className="rounded-3xl border border-[var(--border)] bg-white p-6"><Icon name="sparkles" className="mb-5 size-7 text-[var(--primary)]"/><h3 className="font-bold">Cómo trabajo</h3><p className="mt-2 leading-7 text-[var(--muted)]">Investigo, prototipo y construyo iterativamente, cuidando tanto la experiencia como los detalles técnicos.</p></div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--soft)] p-6"><Icon name="terminal" className="mb-5 size-7 text-[var(--primary)]"/><h3 className="font-bold">Qué me motiva</h3><p className="mt-2 leading-7 text-[var(--muted)]">Aprender nuevas tecnologías y convertir ese conocimiento en soluciones concretas.</p></div>
        </div>
      </section>

      <section id="habilidades" className="border-y border-[var(--border)] bg-white">
        <div className="section-space site-container reveal">
          <p className="section-kicker">Habilidades</p>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="section-title">Herramientas que uso para construir.</h2><p className="section-copy md:max-w-sm">Tecnologías aplicadas en proyectos académicos y personales.</p></div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => <div key={skill.name} className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 transition hover:-translate-y-1 hover:border-[var(--secondary)] hover:bg-[var(--soft)]"><span className="grid size-10 place-items-center rounded-xl bg-white font-mono text-sm font-bold text-[var(--primary)]">{String(index + 1).padStart(2, '0')}</span><div><p className="font-bold">{skill.name}</p><p className="text-xs text-[var(--muted)]">{skill.category}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="proyectos" className="section-space site-container reveal">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="section-kicker">Trabajo reciente</p><h2 className="section-title">Proyectos destacados</h2><p className="section-copy mt-4">Una selección de desarrollos web y multiplataforma disponibles en GitHub.</p></div>
          <Link href="/projects" className="button-secondary shrink-0 px-5 py-3">Ver todos <Icon name="arrow" className="size-4" /></Link>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>

      <section id="trayectoria" className="border-y border-[var(--border)] bg-[var(--text)] text-white">
        <div className="section-space site-container reveal grid gap-12 lg:grid-cols-2">
          <div><p className="section-kicker !text-[#C4B5FD]">Experiencia</p><h2 className="section-title !text-white">Aprender construyendo.</h2><p className="mt-5 max-w-lg leading-8 text-[#C9C4D5]">Mi experiencia se refleja en una serie continua de laboratorios y aplicaciones donde practico desarrollo frontend, backend y multiplataforma.</p></div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6"><div className="flex gap-4"><Icon name="code" className="mt-1 size-6 shrink-0 text-[#C4B5FD]"/><div><p className="text-sm font-bold text-[#C4B5FD]">Desarrollo de proyectos</p><h3 className="mt-1 text-xl font-bold">Web avanzada y APIs</h3><p className="mt-2 leading-7 text-[#C9C4D5]">Aplicaciones con TypeScript, React, Next.js, Express y MongoDB publicadas en GitHub.</p></div></div></div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6"><div className="flex gap-4"><Icon name="mobile" className="mt-1 size-6 shrink-0 text-[#C4B5FD]"/><div><p className="text-sm font-bold text-[#C4B5FD]">Desarrollo multiplataforma</p><h3 className="mt-1 text-xl font-bold">Aplicaciones móviles con Dart</h3><p className="mt-2 leading-7 text-[#C9C4D5]">Prácticas enfocadas en interfaces adaptables y lógica de aplicaciones móviles.</p></div></div></div>
          </div>
        </div>
      </section>

      <section id="educacion" className="section-space site-container reveal grid items-center gap-10 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--soft)] p-8 md:p-10"><Icon name="graduation" className="mb-8 size-10 text-[var(--primary)]"/><p className="section-kicker">Educación</p><h2 className="text-3xl font-extrabold tracking-tight">Formación en desarrollo de software</h2><p className="mt-4 leading-8 text-[var(--muted)]">Una ruta práctica que integra programación web avanzada, desarrollo móvil y proyectos multiplataforma.</p></div>
        <div><p className="section-kicker">Evolución constante</p><h2 className="section-title">Cada proyecto suma una nueva capacidad.</h2><p className="section-copy mt-5">El portafolio documenta el proceso: problemas resueltos, tecnologías exploradas y entregables que se pueden revisar directamente.</p><Link href="/about" className="mt-7 inline-flex items-center gap-2 font-bold text-[var(--primary)] hover:gap-3">Conocer más sobre mí <Icon name="arrow" className="size-4"/></Link></div>
      </section>

      <section id="contacto" className="site-container mb-16 overflow-hidden rounded-[2rem] bg-[var(--primary)] px-6 py-12 text-white shadow-[0_24px_70px_rgba(109,40,217,.25)] md:px-12 md:py-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="mb-3 text-xs font-bold uppercase tracking-[.15em] text-[#DDD6FE]">¿Creamos algo?</p><h2 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">Convirtamos una idea en una experiencia útil.</h2></div><Link href="/contact" className="button-secondary shrink-0 border-white bg-white px-6 py-3.5 text-[var(--primary)]">Hablemos <Icon name="arrow" className="size-4"/></Link></div>
      </section>
    </>
  );
}
