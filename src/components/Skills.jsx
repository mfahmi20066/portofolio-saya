import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../config/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          index="03"
          kicker="Skill"
          title="Alat yang saya kuasai."
          description="Kemampuan yang dirawat terus-menerus — bukan sekadar daftar buzzword."
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="h-full border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/40">
                <div className="flex items-center justify-between font-mono text-sm">
                  <span className="flex items-center gap-2 text-accent">
                    <span>&gt;</span>
                    <span className="uppercase tracking-widest">
                      {group.title}
                    </span>
                  </span>
                  <span className="text-ash">
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <span
                        data-cursor
                        className="block border border-line px-3 py-1.5 font-mono text-xs text-paper/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
                      >
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-col gap-3 border border-line bg-surface/50 px-6 py-5 font-mono text-sm md:flex-row md:items-center md:justify-between">
            <span className="text-ash">
              <span className="text-accent">$</span> sedang dipelajari:
            </span>
            <span className="text-paper/80">
              WebAssembly · Edge Computing · Real-time Collaboration
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
