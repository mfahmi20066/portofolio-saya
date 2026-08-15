import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import ProjectThumb from './ProjectThumb'
import SectionHeading from './SectionHeading'
import { projects } from '../config/portfolio'

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const listItem = {
  hidden: { opacity: 0, y: 64, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

function ProjectImage({ seed, index }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-36, 36]), {
    stiffness: 90,
    damping: 26,
  })

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        style={reduce ? undefined : { y }}
        whileHover={{ scale: 1.15 }}
        transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        className="scale-[1.12]"
      >
        <ProjectThumb
          seed={seed}
          index={String(index).padStart(2, '0')}
          className="w-full"
        />
      </motion.div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-16 md:py-32">
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          index="02"
          kicker="Karya"
          title="Proyek yang pernah saya kerjakan."
          description="Baik itu backend dengan beban tinggi maupun antarmuka yang terasa hidup, setiap proyek saya kerjakan dengan satu standar: presisi."
        />

        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-16 md:gap-28"
        >
          {projects.map((project, i) => (
            <motion.div key={project.title} variants={listItem}>
              <article
                className={`group grid items-center gap-8 md:grid-cols-12 md:gap-12 ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="md:col-span-7">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="group/th relative block overflow-hidden border border-line bg-surface transition-colors duration-500 hover:border-accent/50"
                    data-cursor
                  >
                    <ProjectImage seed={i + 1} index={i + 1} />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover/th:opacity-100">
                      <span className="translate-y-3 border border-accent/60 bg-ink/80 px-4 py-2 font-mono text-sm text-accent transition-transform duration-500 group-hover/th:translate-y-0">
                        buka proyek ↗
                      </span>
                    </div>
                  </a>
                </div>

                <div className="md:col-span-5">
                  <div className="flex items-baseline justify-between gap-3 font-mono text-xs text-ash">
                    <span className="shrink-0 text-accent">
                      // 0{i + 1} — {project.year}
                    </span>
                    <span className="text-right leading-tight uppercase tracking-widest">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-semibold text-paper md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-ash">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-line px-3 py-1 font-mono text-xs text-paper/80 transition-colors duration-300 group-hover:border-accent/40"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex items-center gap-5 font-mono text-sm">
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                      className="inline-flex items-center gap-2 text-accent transition-opacity hover:opacity-70"
                      data-cursor
                    >
                      Kunjungi
                      <span>↗</span>
                    </motion.a>
                    <a
                      href={project.code}
                      className="inline-flex items-center gap-2 text-ash transition-colors hover:text-paper"
                      data-cursor
                    >
                      Source code ↗
                    </a>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
