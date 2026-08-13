import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export default function CountUp({ to, suffix = '', duration = 1.6, play, pad = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [val, setVal] = useState(reduce ? to : 0)
  const ready = play === undefined ? inView : inView && play

  useEffect(() => {
    if (!ready || reduce) return
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [ready, to, duration, reduce])

  return (
    <span ref={ref}>
      {String(val).padStart(pad, '0')}
      {suffix}
    </span>
  )
}