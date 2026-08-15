import { motion } from 'framer-motion'
import Reveal from './Reveal'
import CountUp from './CountUp'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../config/portfolio'

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const chip = {
  hidden: { opacity: 0, scale: 0.8, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          index="03"
          kicker="Skill"
          title="Alat yang saya kuasai."
          description="Kemampuan yang terus saya rawat dan kembangkan, bukan sekadar daftar nama teknologi."
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-6" style={{ perspective: 1000 }}>
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <motion.div
                initial={{ opacity: 0, y: 40, rotateX: 14 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="h-full border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/40"
              >
                <div className="flex items-center justify-between font-mono text-sm">
                  <span className="flex items-center gap-2 text-accent">
                    <span>&gt;</span>
                    <span className="uppercase tracking-widest">
                      {group.title}
                    </span>
                  </span>
                  <span className="text-ash">
                    <CountUp to={group.items.length} pad={2} play />
                  </span>
                </div>

                <motion.ul
                  variants={list}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {group.items.map((skill) => (
                    <motion.li key={skill} variants={chip}>
                      <motion.span
                        data-cursor
                        whileHover={{ y: -4, scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                        className="block border border-line px-3 py-1.5 font-mono text-xs text-paper/80 transition-colors duration-300 hover:border-accent/60 hover:text-accent"
                      >
                        {skill}
                      </motion.span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-col gap-3 border border-line bg-surface/50 px-6 py-5 font-mono text-sm md:flex-row md:items-center md:justify-between">
            <span className="text-ash">
              <span className="text-accent">$</span> sedang dipelajari:
            </span>
            <span className="text-paper/80">
              Flutter · Dart · React Native · Kotlin · Swift · Jetpack Compose
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
