import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import IdCard from './IdCard'
import { profile, toolkits } from '../config/portfolio'

const eksperimenToolkits = toolkits.filter((t) =>
  ['Flutter', 'React Native', 'Kotlin', 'Swift'].includes(t.name),
)

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          index="01"
          kicker="Tentang"
          title="Orang di balik terminal."
          description="Sedikit data diri, dibaca secepat mungkin — seperti dokumentasi yang baik."
        />

        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal delay={0.05}>
            <IdCard />
          </Reveal>

          <div>
            <Reveal>
              <p className="leading-relaxed text-paper/90">
                {profile.bio[0]}
              </p>
              <p className="mt-4 leading-relaxed text-ash">{profile.bio[1]}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <ul className="divide-y divide-line border-y border-line font-mono text-xs md:text-sm">
                <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3.5">
                  <span className="text-accent">$</span>
                  <span className="flex-1 text-ash">lokasi</span>
                  <span className="text-paper">{profile.location}</span>
                </li>
                <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3.5">
                  <span className="text-accent">$</span>
                  <span className="flex-1 text-ash">fokus</span>
                  <span className="text-paper">Web Engineering</span>
                </li>
                <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3.5">
                  <span className="text-accent">$</span>
                  <span className="flex-1 text-ash">eksperimen</span>
                  <span className="text-paper">
                    {eksperimenToolkits.map((toolkit, i) => (
                      <span key={toolkit.name}>
                        {i > 0 && <span className="text-ash"> · </span>}
                        <a
                          href={toolkit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor
                          className="transition-colors duration-300 hover:text-accent"
                        >
                          {toolkit.name}
                        </a>
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3.5">
                  <span className="text-accent">$</span>
                  <span className="flex-1 text-ash">status</span>
                  <span className="flex items-center gap-2 text-accent">
                    <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                    open for work
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
