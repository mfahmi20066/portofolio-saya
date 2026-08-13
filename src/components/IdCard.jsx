import { useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { profile } from '../config/portfolio'

const BARS = [2, 1, 3, 1, 2, 4, 1, 2, 2, 1, 3, 1, 1, 4, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 4, 1, 2, 1, 1, 3, 2, 2, 1, 4]

const currentYear = new Date().getFullYear()

const QR = [
  1, 0, 1, 0, 1, 0, 1,
  0, 1, 0, 1, 1, 0, 0,
  1, 0, 1, 0, 1, 1, 1,
  0, 1, 0, 1, 0, 0, 1,
  1, 1, 1, 0, 1, 0, 1,
  0, 0, 1, 1, 0, 1, 0,
  1, 0, 1, 0, 1, 0, 1,
]

function Barcode({ tall = false }) {
  return (
    <div className={`flex items-stretch gap-[2px] ${tall ? 'h-6 md:h-8' : 'h-4 md:h-5'}`}>
      {BARS.map((w, i) => (
        <span key={i} className="rounded-[1px] bg-paper/40" style={{ width: w }} />
      ))}
    </div>
  )
}

function Avatar() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <div className="relative h-full w-full overflow-hidden">
      <svg
        viewBox="0 0 200 260"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="img"
        aria-label="Foto profil ID card"
      >
        <rect width="200" height="260" fill="#0F0F13" />
        <circle cx="100" cy="90" r="42" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 6" />
        <circle cx="100" cy="90" r="18" fill="rgba(163,230,53,0.14)" />
        <path
          d="M100 134 c-34 0-50 18-52 44 l-4 82 h112 l-4-82 c-2-26-18-44-52-44z"
          fill="rgba(255,255,255,0.06)"
        />
        <text x="12" y="22" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="rgba(255,255,255,0.4)">
          ID-PHOTO
        </text>
        <text x="12" y="248" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="rgba(255,255,255,0.4)">
          SECURE © {currentYear}
        </text>
      </svg>

      {!photoError && (
        <img
          src={`${import.meta.env.BASE_URL}foto-saya.jpeg`}
          alt="Foto profil"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setPhotoError(true)}
        />
      )}

      <div className="animate-scan pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
    </div>
  )
}

function GlassFace({ glare, rotate = false, children }) {
  return (
    <div
      className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-px shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] [backface-visibility:hidden] ${
        rotate ? '[transform:rotateY(180deg)]' : ''
      }`}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[15px] bg-gradient-to-br from-surface/90 via-ink/95 to-ink backdrop-blur-xl">
        <span className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <span className="absolute left-1/2 top-3 z-30 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-black/60 ring-1 ring-white/15 backdrop-blur-sm" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.04)_45%,transparent_60%)]" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20"
          style={{ background: glare }}
        />
        {children}
      </div>
    </div>
  )
}

function Front({ glare }) {
  return (
    <GlassFace glare={glare}>
      <div className="flex items-center justify-between px-4 pt-5 md:px-5 md:pt-6">
        <span className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-accent to-accentDim font-display text-[10px] font-bold text-ink shadow-[0_0_16px_rgba(163,230,53,0.35)]">
            F
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/80">fahmi · id</span>
        </span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-ash">member · 26</span>
      </div>

      <div className="mt-3 flex flex-1 items-center gap-3 px-4 md:mt-4 md:gap-5 md:px-5">
        <div className="relative h-full w-16 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10 md:w-24">
          <Avatar />
        </div>

        <div className="flex min-w-0 flex-col justify-center gap-1.5">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-accent md:text-[9px]">
              member
            </p>
            <h3 className="mt-0.5 truncate font-display text-base font-semibold leading-tight text-paper md:text-xl">
              {profile.name}
            </h3>
            <p className="mt-0.5 truncate font-mono text-[9px] uppercase tracking-widest text-ash md:text-[10px]">
              {profile.role}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="block h-6 w-9 rounded-md bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-[3px] shadow-[0_2px_10px_rgba(251,191,36,0.35)] md:h-7 md:w-10">
              <span className="flex h-full w-full items-center justify-center gap-px rounded-[4px] bg-gradient-to-br from-ink/10 to-ink/25">
                <span className="h-3.5 w-[3px] rounded-full bg-ink/30" />
                <span className="h-3.5 w-[3px] rounded-full bg-ink/30" />
              </span>
            </span>
            <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-ash/80">
              contactless
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/[0.07] px-4 pb-3.5 pt-2.5 md:px-5 md:pb-4">
        <div className="flex items-center gap-2.5 font-mono text-[9px] md:text-[10px]">
          <span className="text-ash">ID</span>
          <span className="text-paper">MF-{currentYear}-022</span>
          <span className="h-3 w-px bg-white/10" />
          <span className="text-ash">DEPT</span>
          <span className="text-paper">ENG</span>
        </div>
        <Barcode />
      </div>
    </GlassFace>
  )
}

function Back({ glare }) {
  const rows = [
    { label: 'email', value: profile.email },
    { label: 'lokasi', value: profile.location },
    { label: 'status', value: 'open for work' },
  ]

  return (
    <GlassFace glare={glare} rotate>
      <div className="flex items-center justify-between px-4 pt-5 md:px-5 md:pt-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/80">fahmi · id</span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-ash">mf-22</span>
        </div>

        <div className="mt-3 flex flex-1 items-center gap-3 px-4 md:mt-4 md:gap-5 md:px-5">
          <div className="shrink-0 rounded-2xl border border-white/[0.08] bg-black/40 p-2 backdrop-blur-sm">
            <div className="grid grid-cols-7 gap-[3px] p-0.5">
              {QR.map((on, i) => (
                <span
                  key={i}
                  className={on ? 'h-1.5 w-1.5 rounded-[1px] bg-accent shadow-[0_0_6px_rgba(163,230,53,0.5)]' : 'h-1.5 w-1.5 rounded-[1px] bg-white/[0.08]'}
                />
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 font-mono text-[9px] md:text-[10px]">
            <div className="space-y-1.5">
              {rows.map((row) => (
                <p key={row.label} className="flex items-baseline justify-between gap-4">
                  <span className="text-ash">{row.label}</span>
                  <span className="truncate text-paper">{row.value}</span>
                </p>
              ))}
            </div>
            <p className="flex items-center gap-1.5 text-[9px] text-ash/80">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
              verified · tilde & flip to explore
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/[0.07] px-4 pb-3.5 pt-2.5 md:px-5 md:pb-4">
          <Barcode tall />
          <span className="border-b border-white/10 pb-0.5 font-mono text-[11px] italic text-paper/90">
            Muh. Fahmi
          </span>
        </div>
    </GlassFace>
  )
}

function Lanyard() {
  return (
    <svg viewBox="0 0 320 200" className="w-full" aria-hidden="true">
      <defs>
        <linearGradient id="lanyardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A3E635" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <path
        d="M22 0 C 70 30, 110 42, 138 58"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M298 0 C 250 30, 210 42, 182 58"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M22 0 C 70 30, 110 42, 138 58"
        fill="none"
        stroke="url(#lanyardGrad)"
        strokeWidth="2"
        strokeDasharray="4 6"
        opacity="0.6"
      />
      <path
        d="M298 0 C 250 30, 210 42, 182 58"
        fill="none"
        stroke="url(#lanyardGrad)"
        strokeWidth="2"
        strokeDasharray="4 6"
        opacity="0.6"
      />
      <rect x="130" y="58" width="60" height="26" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <rect x="146" y="58" width="28" height="26" fill="rgba(255,255,255,0.08)" />
      <path d="M160 84 L160 122" stroke="rgba(255,255,255,0.15)" strokeWidth="7" strokeLinecap="round" />
      <rect x="132" y="122" width="56" height="48" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      <rect x="144" y="136" width="32" height="6" rx="3" fill="rgba(163,230,53,0.75)" />
      <rect x="148" y="148" width="24" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <path d="M160 170 C 160 184, 160 192, 160 202" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export default function IdCard() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const [flipped, setFlipped] = useState(false)

  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 160, damping: 16, mass: 0.5 })
  const sry = useSpring(ry, { stiffness: 160, damping: 16, mass: 0.5 })

  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)
  const sGlareX = useSpring(glareX, { stiffness: 120, damping: 22 })
  const sGlareY = useSpring(glareY, { stiffness: 120, damping: 22 })
  const glare = useMotionTemplate`radial-gradient(440px circle at ${sGlareX}% ${sGlareY}%, rgba(255,255,255,0.09), transparent 60%)`

  const onMove = (e) => {
    if (reduce) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    ry.set((px - 0.5) * 16)
    rx.set(-(py - 0.5) * 16)
    glareX.set(px * 100)
    glareY.set(py * 100)
  }

  const reset = () => {
    rx.set(0)
    ry.set(0)
    glareX.set(50)
    glareY.set(50)
  }

  return (
    <div className="relative">
      <motion.div
        animate={reduce ? undefined : { rotate: [0, 1.1, 0, -1.1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'top center' }}
        className="relative mx-auto flex w-full max-w-[400px] flex-col items-center"
      >
        <div className="relative z-10 w-full">
          <Lanyard />
        </div>

        <div className="relative z-0 -mt-9 w-full [perspective:1200px]">
          <div className="pointer-events-none absolute -left-8 top-8 h-44 w-44 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 top-24 h-52 w-52 rounded-full bg-violet-500/30 blur-3xl" />

          <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            onClick={() => setFlipped((v) => !v)}
            style={{ rotateX: srx, rotateY: sry }}
            className="aspect-[1.586] w-full cursor-pointer select-none [transform-style:preserve-3d]"
            data-cursor
            role="button"
            aria-label="Lanyard ID card"
          >
            <motion.div
              className="relative h-full w-full [transform-style:preserve-3d]"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Front glare={glare} />
              <Back glare={glare} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-ash">
        <span className="hidden sm:block">
          <span className="text-accent">↖</span> gerakkan kursor
        </span>
        <span className="mx-auto sm:mx-0">
          klik untuk balik <span className="text-accent">↻</span>
        </span>
      </div>
    </div>
  )
}