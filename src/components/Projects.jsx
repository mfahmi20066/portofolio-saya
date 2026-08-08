import ProjectThumb from './ProjectThumb'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../config/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          index="02"
          kicker="Karya"
          title="Proyek yang pernah saya kerjakan."
          description="Dari sistem backend berthroughput tinggi hingga antarmuka yang terasa hidup — setiap proyek dikerjakan dengan standar yang sama: presisi."
        />

        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.05}>
              <article
                className={`group grid items-center gap-8 md:grid-cols-12 md:gap-12 ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="md:col-span-7">
                  <a
                    href={project.link}
                    className="block overflow-hidden border border-line bg-surface transition-colors duration-500 hover:border-accent/50"
                    data-cursor
                  >
                    <ProjectThumb
                      seed={i + 1}
                      index={String(i + 1).padStart(2, '0')}
                      className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </a>
                </div>

                <div className="md:col-span-5">
                  <div className="flex items-baseline justify-between font-mono text-xs text-ash">
                    <span className="text-accent">
                      // 0{i + 1} — {project.year}
                    </span>
                    <span className="uppercase tracking-widest">
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
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-accent transition-opacity hover:opacity-70"
                      data-cursor
                    >
                      Kunjungi
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
