import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'

const items = [
  'FULLSTACK',
  'REACT',
  'NODE.JS',
  'PRESISI',
  'TAILWIND',
  'POSTGRESQL',
]

export default function ScrollMarquee() {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['4%', '-46%'])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-line bg-surface/40 py-12 md:py-20"
    >
      <div className="bg-grid absolute inset-0 opacity-30 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      <motion.div
        style={{ x: reduce ? undefined : x }}
        className="relative flex w-max items-center whitespace-nowrap font-display text-5xl font-semibold tracking-tight md:text-7xl"
        aria-hidden
      >
        {[...items, ...items, ...items, ...items].map((word, i) => (
          <span key={i} className="flex items-center">
            <span
              className={
                i % 3 === 1
                  ? 'text-stroke px-8'
                  : i % 3 === 2
                    ? 'px-8 text-accent'
                    : 'px-8 text-paper'
              }
            >
              {word}
            </span>
            <span className="font-mono text-xl text-accent/60 md:text-3xl">
              //
            </span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}