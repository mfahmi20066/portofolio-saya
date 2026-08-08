import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [pressed, setPressed] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    document.documentElement.classList.add('has-cursor')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) =>
      setActive(
        Boolean(
          e.target.closest('a, button, input, textarea, [data-cursor]'),
        ),
      )
    const down = () => setPressed(true)
    const up = () => setPressed(false)

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[95]"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-accent"
          animate={{ scale: pressed ? 0.5 : active ? 0.4 : 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[94]"
        style={{ x, y }}
      >
        <motion.div
          className="-ml-[18px] -mt-[18px] h-9 w-9 rounded-full border border-accent/60"
          animate={{ scale: pressed ? 0.75 : active ? 1.9 : 1, opacity: active ? 0.9 : 0.5 }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>
    </>
  )
}
