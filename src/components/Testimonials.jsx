import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { testimonials } from '../config/portfolio'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-24 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          index="04"
          kicker="Testimoni"
          title="Apa kata orang-orang yang pernah bekerja sama dengan saya."
        />

        <div className="grid gap-6 md:grid-cols-3" style={{ perspective: 1200 }}>
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.08}>
              <motion.figure
                initial={{ opacity: 0, y: 48, rotateX: 16 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="flex h-full flex-col justify-between border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/40"
              >
                <div>
                  <motion.span
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="block w-fit font-display text-4xl leading-none text-accent"
                  >
                    “
                  </motion.span>
                  <blockquote className="mt-3 leading-relaxed text-paper/85">
                    {testimonial.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                  <span className="flex h-10 w-10 items-center justify-center border border-accent/50 font-mono text-sm text-accent">
                    {testimonial.name
                      .split(' ')
                      .map((word) => word[0])
                      .join('')}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-medium text-paper">
                      {testimonial.name}
                    </span>
                    <span className="block font-mono text-xs text-ash">
                      {testimonial.role}
                    </span>
                  </span>
                  {testimonial.instagram && (
                    <a
                      href={testimonial.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram ${testimonial.name}`}
                      data-cursor
                      className="ml-auto text-accent transition-colors duration-300 hover:text-paper"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  )}
                  </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
