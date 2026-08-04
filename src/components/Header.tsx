import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import Icon from './Icon';

export default function Header() {
  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/projects', label: 'Proyectos' },
    { href: '/about', label: 'Sobre Mi' },
    { href: '/contact', label: 'Contacto' },
  ];

  return (
    <header className="site-header">
      <nav className="site-container flex h-[72px] items-center justify-between gap-6" aria-label="Navegación principal">
          <Link href="/" className="group flex items-center gap-2 text-xl font-extrabold tracking-tight text-[var(--text)]">
            <span className="grid size-9 place-items-center rounded-xl bg-[var(--primary)] text-sm text-white shadow-[0_8px_24px_rgba(109,40,217,.22)] transition-transform group-hover:-rotate-6">X</span>
            {personalInfo.name}<span className="text-[var(--primary)]">.</span>
          </Link>
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--soft)] hover:text-[var(--primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <details className="mobile-menu relative md:hidden">
            <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-xl border border-[var(--border)] bg-white text-[var(--text)]" aria-label="Abrir menú">
              <Icon name="menu" className="size-5" />
            </summary>
            <ul className="absolute right-0 top-12 min-w-48 rounded-2xl border border-[var(--border)] bg-white p-2 shadow-xl">
              {links.map((link) => <li key={link.href}><Link href={link.href} className="block rounded-xl px-4 py-3 font-semibold text-[var(--muted)] hover:bg-[var(--soft)] hover:text-[var(--primary)]">{link.label}</Link></li>)}
            </ul>
          </details>
      </nav>
    </header>
  );
}
