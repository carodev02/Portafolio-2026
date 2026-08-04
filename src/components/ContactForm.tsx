'use client';

import { useState } from 'react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

type Status = 'idle' | 'success';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contactDetails = [
      `Mi nombre es ${form.name}.`,
      `Mi correo es ${form.email}.`,
      '',
      form.message,
    ].join('\n');
    window.location.assign(buildWhatsAppUrl(contactDetails));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  const fieldClass =
    'w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-[var(--text)] outline-none transition placeholder:text-[#9A92A8] focus:border-[var(--secondary)] focus:ring-4 focus:ring-[#8B5CF6]/10';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-bold text-[var(--text)]">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className={fieldClass}
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-bold text-[var(--text)]">
          Correo electronico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className={fieldClass}
          placeholder="tu@email.com"
        />
      </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold text-[var(--text)]">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className={`${fieldClass} resize-none`}
          placeholder="Escribe tu mensaje..."
        />
      </div>

      <button
        type="submit"
        className="button-primary w-full px-6 py-3.5"
      >
        Enviar por WhatsApp
      </button>

      {status === 'success' && (
        <p className="rounded-xl bg-emerald-50 p-3 text-center font-medium text-emerald-700">
          Se abrió WhatsApp con tu mensaje listo para enviar.
        </p>
      )}
    </form>
  );
}
