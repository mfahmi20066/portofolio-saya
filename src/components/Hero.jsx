import { lazy, Suspense, useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import WordReveal from './WordReveal'
import CountUp from './CountUp'
import Magnetic from './Magnetic'
import { marquee, profile } from '../config/portfolio'

const HeroScene = lazy(() => import('./HeroScene'))

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
  const sectionRef = useRef(null)
  const [first, ...rest] = profile.name.split(' ')
  const lastName = rest.join(' ')

  const animate = ready ? 'show' : 'hidden'

  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(velocity, { stiffness: 100, damping: 30 })
  const marqueeDuration = useTransform(smoothVelocity, [-800, 0, 800], [36, 26, 14])

  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const smx = useSpring(mx, { stiffness: 120, damping: 22 })
  const smy = useSpring(my, { stiffness: 120, damping: 22 })
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${smx}% ${smy}%, rgba(163,230,53,0.08), transparent 60%)`

  const { scrollYProgress: heroProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const contentY = useSpring(
    useTransform(heroProgress, [0, 1], [0, -180]),
    { stiffness: 90, damping: 26 },
  )
  const contentOpacity = useTransform(heroProgress, [0, 0.75], [1, 0])

  const onMouseMove = (e) => {
    if (reduce) return
    const rect = sectionRef.current.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width) * 100)
    my.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      <div className="bg-grid animate-[grid-pan_10s_linear_infinite] absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <Suspense fallback={null}>
          <HeroScene reduce={reduce} />
        </Suspense>
        <motion.div
          className="absolute inset-0"
          style={{ background: spotlight }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_45%_42%,rgba(10,10,11,0.8),rgba(10,10,11,0.35)_55%,transparent_80%)]" />
        <motion.div
          className="absolute -right-24 top-20 hidden h-80 w-80 rounded-full border border-dashed border-paper/[0.07] lg:block"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        />
        <div className="bg-noise absolute inset-0 opacity-30" />
      </div>

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-16 pt-28 md:px-10"
      >
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
            est. 2026 · {profile.location}
          </motion.span>
          <motion.span variants={item} className="md:hidden">
            {profile.location}
          </motion.span>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center gap-2 font-mono text-xs text-accent md:mt-14">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          <span>[ developer ]</span>
        </motion.div>

        <h1 className="mt-4 font-display text-[clamp(2.5rem,10.5vw,9rem)] font-semibold leading-[0.95] tracking-tight">
          <WordReveal text={first} play={ready} className="block text-paper" />
          {lastName && (
            <WordReveal text={lastName} play={ready} className="text-stroke block" />
          )}
        </h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl leading-relaxed text-paper/80"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Magnetic>
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
          </Magnetic>
          <Magnetic>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 border border-line px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-accent/60 hover:text-accent"
            >
              Hubungi Saya
            </motion.a>
          </Magnetic>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-3 border-t border-line pt-6 md:mt-20"
        >
          {profile.stats.map((stat) => {
            const to = parseInt(stat.value.replace(/\D/g, ''), 10) || 0
            const suffix = stat.value.replace(/[\d.]/g, '')
            return (
              <div key={stat.label} className="pr-4">
                <div className="font-display text-2xl font-semibold text-paper md:text-4xl">
                  <CountUp to={to} suffix={suffix} play={ready} />
                </div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-ash md:text-xs">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative border-y border-line bg-ink/70 py-4 backdrop-blur-sm"
      >
        <div className="flex overflow-hidden whitespace-nowrap font-mono text-xs text-ash md:text-sm">
          <motion.div
            className="flex shrink-0 items-center"
            animate={reduce ? undefined : { x: ['0%', '-50%'] }}
            transition={{
              duration: marqueeDuration,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...marquee, ...marquee].map((word, i) => (
              <span key={i} className="flex items-center">
                <span className="px-6">{word}</span>
                <span className="text-accent">*</span>
              </span>
            ))}
          </motion.div>
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