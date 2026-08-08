import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { profile } from '../config/portfolio'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Halo ${profile.name}, saya menemukan portofolio Anda`,
    )
    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const socials = [
    { label: 'GitHub', url: profile.socials.github },
    { label: 'LinkedIn', url: profile.socials.linkedin },
    { label: 'Instagram', url: profile.socials.instagram },
  ]

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 md:py-32">
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
            Form di bawah akan membuka email client kamu. Balasan dijamin masuk,
            bukan ke folder spam.
          </p>
        </Reveal>

        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <Reveal delay={0.05}>
            <a
              href={profile.socials.email}
              data-cursor
              className="group inline-block font-display text-2xl font-medium text-paper md:text-4xl"
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
                className="inline-flex w-fit items-center gap-3 bg-accent px-7 py-3 font-mono text-sm font-medium text-ink"
                data-cursor
              >
                Kirim pesan →
              </motion.button>

              <p className="font-mono text-xs text-ash">
                <span className="text-accent">$</span> mode: mailto · tanpa
                server, tanpa database
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
