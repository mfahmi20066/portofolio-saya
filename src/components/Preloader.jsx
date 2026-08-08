import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../config/portfolio'

export default function Preloader() {
  const reduce = useReducedMotion()
  const name = profile.name
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (reduce) {
      setShown(name.length)
      return
    }
    const id = setInterval(() => {
      setShown((n) => {
        if (n >= name.length) {
          clearInterval(id)
          return n
        }
        return n + 1
      })
    }, 75)
    return () => clearInterval(id)
  }, [name, reduce])

  const progress = Math.round((shown / name.length) * 100)

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink"
      exit={{ opacity: 0, y: reduce ? 0 : -24 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="font-mono text-sm text-ash">
        <span className="text-accent">$</span> init --portfolio
      </div>

      <div className="font-display text-4xl font-semibold tracking-tight text-paper md:text-6xl">
        {name.slice(0, shown)}
        <span className="cursor-blink text-accent">_</span>
      </div>

      <div className="flex items-center gap-3 font-mono text-xs text-ash">
        <div className="relative h-px w-40 overflow-hidden bg-line">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span>{progress}%</span>
      </div>
    </motion.div>
  )
}
