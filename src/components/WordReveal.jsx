import { motion, useReducedMotion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
}

const word = {
  hidden: { y: '115%', opacity: 0, filter: 'blur(8px)' },
  show: {
    y: '0%',
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function WordReveal({
  text,
  className = '',
  delay = 0,
  play,
}) {
  const reduce = useReducedMotion()
  const words = text.split(' ')

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate={play === undefined ? undefined : play ? 'show' : 'hidden'}
      whileInView={play === undefined ? 'show' : undefined}
      viewport={{ once: true, amount: 0.6 }}
      variants={container}
      transition={{ delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-[0.12em] align-bottom"
          style={{ marginBottom: '-0.12em' }}
        >
          <motion.span
            variants={reduce ? undefined : word}
            className="inline-block whitespace-pre"
          >
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}