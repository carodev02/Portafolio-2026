import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white py-10">
      <div className="site-container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left"><Link href="/" className="text-lg font-extrabold">{personalInfo.name}<span className="text-[var(--primary)]">.</span></Link><p className="mt-1 text-sm text-[var(--muted)]">Diseño, código y aprendizaje continuo.</p></div>
        <div className="flex gap-2">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)]" aria-label="GitHub"><Icon name="github" className="size-4"/></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)]" aria-label="LinkedIn"><Icon name="linkedin" className="size-4"/></a>
          <a href={`mailto:${personalInfo.email}`} className="grid size-10 place-items-center rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)]" aria-label="Email"><Icon name="mail" className="size-4"/></a>
        </div>
        <p className="text-center text-sm text-[var(--muted)] md:text-right">© {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
