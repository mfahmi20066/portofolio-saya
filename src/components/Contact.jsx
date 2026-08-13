import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { contactForm, profile } from '../config/portfolio'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: contactForm.accessKey,
          subject: `Pesan baru dari portofolio — ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
          _honey: '',
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const socials = [
    { label: 'GitHub', url: profile.socials.github },
    { label: 'WhatsApp', url: profile.socials.whatsapp },
    { label: 'Instagram', url: profile.socials.instagram },
  ]

  return (
    <section id="contact" className="relative scroll-mt-24 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 font-mono text-xs md:text-sm">
            <span className="text-accent">//</span>
            <span className="text-accent">05</span>
            <span className="text-ash uppercase tracking-widest">Kontak</span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-paper md:text-5xl">
            Ada proyek? Mari ngobrol.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-ash">
            Langsung terhubung lewat email — tanpa server, tanpa antrean.
          </p>
        </Reveal>

        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <Reveal delay={0.05}>
            <a
              href={profile.socials.email}
              data-cursor
              className="group inline-block break-all font-display text-xl font-medium text-paper md:text-4xl"
            >
              <span className="group-hover:text-accent">{profile.email}</span>
              <span className="mt-2 block h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </a>

            <p className="mt-10 font-mono text-xs uppercase tracking-widest text-ash">
              Temukan saya di
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3 }}
                    data-cursor
                    className="inline-block border border-line px-4 py-2 font-mono text-sm text-paper/85 transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    {social.label} ↗
                  </motion.a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-ash">
                    nama
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nama kamu"
                    className="border border-line bg-surface px-4 py-3 font-body text-sm text-paper placeholder:text-ash/60 outline-none transition-colors focus:border-accent/70"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-ash">
                    email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="kamu@email.com"
                    className="border border-line bg-surface px-4 py-3 font-body text-sm text-paper placeholder:text-ash/60 outline-none transition-colors focus:border-accent/70"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-ash">
                  pesan
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Ceritakan proyekmu..."
                  className="resize-none border border-line bg-surface px-4 py-3 font-body text-sm text-paper placeholder:text-ash/60 outline-none transition-colors focus:border-accent/70"
                />
              </label>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={status === 'sending'}
                className="inline-flex w-fit items-center gap-3 bg-accent px-7 py-3 font-mono text-sm font-medium text-ink disabled:cursor-wait disabled:opacity-60"
                data-cursor
              >
                {status === 'sending' ? 'Mengirim...' : 'Kirim pesan →'}
              </motion.button>

              {status === 'success' && (
                <p className="font-mono text-sm text-accent">
                  ✓ Terima kasih! Pesanmu terkirim ke {profile.email}.
                </p>
              )}
              {status === 'error' && (
                <p className="font-mono text-sm text-red-400">
                  ✗ Gagal mengirim. Coba lagi nanti, atau kirim langsung lewat
                  email di samping.
                </p>
              )}

              <p className="font-mono text-xs text-ash">
                <span className="text-accent">$</span> terkirim langsung ke{' '}
                {profile.email} — tanpa server, tanpa antrean. 
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
