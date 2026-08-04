import type { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import { buildWhatsAppUrl, whatsappAutomaticMessage } from '@/lib/whatsapp';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}. Hablemos sobre tu próximo proyecto.`,
};

export default function ContactPage() {
  return (
    <div className="site-container grid items-center gap-12 py-16 lg:min-h-[calc(100svh-145px)] lg:grid-cols-[.85fr_1.15fr] lg:py-20">
      <div>
        <p className="section-kicker">Contacto</p>
        <h1 className="section-title">Hablemos de tu próxima idea.</h1>
        <p className="section-copy mt-5">
          Si tienes un proyecto, una oportunidad de colaboración, puedes escribirme directamente por WhatsApp.
        </p>
        <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[var(--muted)]">
          <span className="size-2.5 rounded-full bg-emerald-500" />
          Disponible para conversar
        </div>
      </div>

      <div className="space-y-4">
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-[2rem] border border-[var(--secondary)] bg-[var(--soft)] p-7 shadow-[0_20px_60px_rgba(109,40,217,.12)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(109,40,217,.2)] md:p-9"
        >
          <div className="flex items-start gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[var(--primary)] text-white shadow-lg">
              <Icon name="whatsapp" className="size-7" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="section-kicker mb-1">WhatsApp</p>
              <h2 className="text-2xl font-extrabold text-[var(--text)]">
                Escríbeme directamente
              </h2>
              <p className="mt-1 font-bold text-[var(--primary)]">+51 985 842 746</p>
            </div>
            <span className="hidden size-10 place-items-center rounded-full bg-white text-[var(--primary)] transition group-hover:translate-x-1 sm:grid">
              <Icon name="arrow" className="size-5" />
            </span>
          </div>
          <div className="mt-6 rounded-2xl border border-white/80 bg-white/70 p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--secondary)]">
              Mensaje preparado
            </p>
            <p className="leading-7 text-[var(--muted)]">“{whatsappAutomaticMessage}”</p>
          </div>
          <span className="button-primary mt-6 w-full px-6 py-3.5">
            Abrir conversación <Icon name="arrow" className="size-4" />
          </span>
        </a>

        <div className="grid gap-4 sm:grid-cols-2">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[var(--secondary)] hover:shadow-lg sm:col-span-2">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--soft)] text-[var(--primary)]"><Icon name="mail" className="size-5" /></span>
            <div className="min-w-0"><p className="text-xs font-bold uppercase tracking-wider text-[var(--secondary)]">Correo</p><p className="truncate font-bold">{personalInfo.email}</p></div>
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[var(--secondary)] hover:shadow-lg">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--soft)] text-[var(--primary)]"><Icon name="github" className="size-5" /></span>
            <div><p className="text-xs font-bold uppercase tracking-wider text-[var(--secondary)]">Código</p><p className="font-bold">GitHub</p></div>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[var(--secondary)] hover:shadow-lg">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--soft)] text-[var(--primary)]"><Icon name="linkedin" className="size-5" /></span>
            <div><p className="text-xs font-bold uppercase tracking-wider text-[var(--secondary)]">Perfil profesional</p><p className="font-bold">LinkedIn</p></div>
          </a>
        </div>
      </div>
    </div>
  );
}
