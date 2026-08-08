import { motion, useReducedMotion } from 'framer-motion'
import { marquee, profile } from '../config/portfolio'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero({ ready }) {
  const reduce = useReducedMotion()
  const [first, ...rest] = profile.name.split(' ')
  const lastName = rest.join(' ')

  const animate = ready ? 'show' : 'hidden'

  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-16 pt-28 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={animate}
          className="flex items-center justify-between font-mono text-xs text-ash md:text-sm"
        >
          <motion.span variants={item}>
            <span className="text-accent">$</span> whoami
          </motion.span>
          <motion.span variants={item} className="hidden md:inline">
            est. 2019 · {profile.location}
          </motion.span>
          <motion.span variants={item} className="md:hidden">
            {profile.location}
          </motion.span>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center gap-2 font-mono text-xs text-accent md:mt-14">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          <span>[ fullstack_developer ]</span>
        </motion.div>

        <h1 className="mt-4 font-display text-[clamp(2.5rem,10.5vw,9rem)] font-semibold leading-[0.95] tracking-tight">
          <motion.span
            variants={item}
            className="block text-paper"
            data-cursor
          >
            {first}
          </motion.span>
          {lastName && (
            <motion.span variants={item} className="text-stroke block">
              {lastName}
            </motion.span>
          )}
        </h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl leading-relaxed text-ash"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 bg-accent px-6 py-3 font-mono text-sm font-medium text-ink transition-colors"
          >
            Lihat Karya
            <span className="transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 border border-line px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-accent/60 hover:text-accent"
          >
            Hubungi Saya
          </motion.a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-3 border-t border-line pt-6 md:mt-20"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="pr-4">
              <div className="font-display text-2xl font-semibold text-paper md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-ash md:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative border-y border-line bg-ink/70 py-4 backdrop-blur-sm"
      >
        <div className="flex overflow-hidden whitespace-nowrap font-mono text-xs text-ash md:text-sm">
          <div className="flex shrink-0 animate-marquee items-center">
            {[...marquee, ...marquee].map((word, i) => (
              <span key={i} className="flex items-center">
                <span className="px-6">{word}</span>
                <span className="text-accent">*</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.1 }}
          className="absolute bottom-24 right-6 hidden font-mono text-[11px] text-ash md:block"
          style={{ writingMode: 'vertical-rl' }}
        >
          scroll untuk menjelajah ↓
        </motion.div>
      )}
    </section>
  )
}
