import { useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { profile } from '../config/portfolio'

const BARS = [2, 1, 3, 1, 2, 4, 1, 2, 2, 1, 3, 1, 1, 4, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 4, 1, 2, 1, 1, 3, 2, 2, 1, 4]

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
    <div className={`flex items-stretch gap-[2px] ${tall ? 'h-12' : 'h-7'}`}>
      {BARS.map((w, i) => (
        <span key={i} className="bg-paper/70" style={{ width: w }} />
      ))}
    </div>
  )
}

function Avatar() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 200 260"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="img"
        aria-label="Foto profil ID card"
      >
      <rect width="200" height="260" fill="#0E0E11" />
      <g stroke="rgba(231,230,225,0.07)">
        {Array.from({ length: 7 }, (_, n) => (
          <line key={`v${n}`} x1={n * 30} y1="0" x2={n * 30} y2="260" />
        ))}
        {Array.from({ length: 9 }, (_, n) => (
          <line key={`h${n}`} x1="0" y1={n * 30} x2="200" y2={n * 30} />
        ))}
      </g>
      <g fill="none" stroke="rgba(163,230,53,0.85)" strokeWidth="2">
        <rect x="55" y="20" width="90" height="80" rx="4" />
        <path d="M70 210 h60 M62 170 h76 M70 210 l-10 24 M130 210 l10 24" />
      </g>
      <g fill="#A3E635">
        <circle cx="100" cy="56" r="6" />
        <rect x="30" y="140" width="26" height="5" />
        <rect x="144" y="140" width="26" height="5" />
      </g>
      <g fill="rgba(139,139,142,0.5)">
        <rect x="40" y="152" width="120" height="3" />
        <rect x="48" y="160" width="104" height="3" />
      </g>
      <text x="12" y="24" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#8B8B8E">
        ID-PHOTO
      </text>
      <text x="12" y="248" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#8B8B8E">
        SECURE © 2026
      </text>
      </svg>

      {!photoError && (
        <img
          src="/foto-saya.jpeg"
          alt="Foto profil"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setPhotoError(true)}
        />
      )}
    </div>
  )
}

function Front() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden rounded-lg border border-line bg-surface [backface-visibility:hidden]">
      <span className="absolute left-1/2 top-2.5 z-30 h-4 w-4 -translate-x-1/2 rounded-full bg-ink ring-2 ring-line" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-transparent via-paper/[0.05] to-transparent" />

      <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-ash">
        <span className="flex items-center gap-2 text-paper">
          <span className="flex h-4 w-4 items-center justify-center border border-accent text-[8px] text-accent">
            P
          </span>
          precision id
        </span>
        <span className="text-accent">secure·01</span>
      </div>

      <div className="flex flex-1 items-stretch gap-5 px-5 py-4">
        <div className="relative w-24 shrink-0 overflow-hidden border border-line bg-ink md:w-28">
          <Avatar />
          <div className="animate-scan pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
          <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 font-mono text-[8px] text-accent">
            <span className="animate-pulse h-1 w-1 rounded-full bg-accent" />
            REC
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-between py-1">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              nama
            </p>
            <h3 className="mt-0.5 font-display text-lg font-semibold leading-tight text-paper md:text-2xl">
              {profile.name}
            </h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ash">
              {profile.role}
            </p>
          </div>
          <div className="space-y-1 font-mono text-[11px] text-ash">
            <p className="flex justify-between gap-6">
              <span>id</span>
              <span className="text-paper">MF-2026-041</span>
            </p>
            <p className="flex justify-between gap-6">
              <span>dept</span>
              <span className="text-paper">engineering</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-line px-5 py-3">
        <div className="flex items-end justify-between gap-4">
          <Barcode />
          <span className="font-mono text-[9px] uppercase tracking-widest text-ash">
            m f · 2026
          </span>
        </div>
      </div>
    </div>
  )
}

function Back() {
  const rows = [
    { label: 'email', value: profile.email },
    { label: 'lokasi', value: profile.location },
    { label: 'status', value: 'open for work' },
  ]

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden rounded-lg border border-line bg-surface [backface-visibility:hidden] [transform:rotateY(180deg)]">
      <span className="absolute left-1/2 top-2.5 z-30 h-4 w-4 -translate-x-1/2 rounded-full bg-ink ring-2 ring-line" />
      <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-ash">
        <span className="text-paper">precision id</span>
        <span className="text-accent">valid until 12/2030</span>
      </div>

      <div className="flex flex-1 gap-6 px-5 py-4">
        <div className="grid h-fit grid-cols-7 gap-[3px] border border-line bg-ink p-2">
          {QR.map((on, i) => (
            <span
              key={i}
              className={on ? 'h-2 w-2 bg-accent' : 'h-2 w-2 bg-ash/30'}
            />
          ))}
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between font-mono text-[11px]">
          <div className="space-y-2">
            {rows.map((row) => (
              <p key={row.label} className="flex items-baseline justify-between gap-4">
                <span className="text-ash">{row.label}</span>
                <span className="truncate text-paper">{row.value}</span>
              </p>
            ))}
          </div>
          <p className="text-[9px] leading-relaxed text-ash/70">
            kartu ini adalah representasi interaktif.
            <br />
            geser kursor untuk tilt · klik untuk balik.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-line px-5 py-3">
        <Barcode tall />
        <span className="font-mono text-xs text-paper/80">Muh. Fahmi</span>
      </div>
    </div>
  )
}

function Lanyard() {
  return (
    <svg viewBox="0 0 320 200" className="w-full" aria-hidden="true">
      <path
        d="M22 0 C 70 30, 110 42, 138 58"
        fill="none"
        stroke="#26262B"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M298 0 C 250 30, 210 42, 182 58"
        fill="none"
        stroke="#26262B"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M22 0 C 70 30, 110 42, 138 58"
        fill="none"
        stroke="rgba(163,230,53,0.35)"
        strokeWidth="2"
        strokeDasharray="4 6"
      />
      <path
        d="M298 0 C 250 30, 210 42, 182 58"
        fill="none"
        stroke="rgba(163,230,53,0.35)"
        strokeWidth="2"
        strokeDasharray="4 6"
      />
      <rect x="130" y="58" width="60" height="26" rx="6" fill="#121214" stroke="#3A3A40" strokeWidth="2" />
      <rect x="146" y="58" width="28" height="26" fill="#26262B" />
      <path d="M160 84 L160 122" stroke="#26262B" strokeWidth="8" strokeLinecap="round" />
      <rect x="132" y="122" width="56" height="48" rx="8" fill="#121214" stroke="#3A3A40" strokeWidth="2" />
      <rect x="144" y="136" width="32" height="6" rx="3" fill="rgba(163,230,53,0.7)" />
      <rect x="148" y="148" width="24" height="6" rx="3" fill="#26262B" />
      <path d="M160 170 C 160 184, 160 192, 160 202" fill="none" stroke="#3A3A40" strokeWidth="5" strokeLinecap="round" />
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

  const onMove = (e) => {
    if (reduce) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    ry.set(px * 16)
    rx.set(-py * 16)
  }

  const reset = () => {
    rx.set(0)
    ry.set(0)
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
          <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            onClick={() => setFlipped((v) => !v)}
            style={{ rotateX: srx, rotateY: sry }}
            className="aspect-[1.586] w-full cursor-pointer select-none [transform-style:preserve-3d]"
            data-cursor
            role="button"
            aria-label="Lanyard ID card — klik untuk membalik"
          >
            <motion.div
              className="relative h-full w-full [transform-style:preserve-3d]"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Front />
              <Back />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-ash">
        <span>
          <span className="text-accent">↖</span> gerakkan kursor
        </span>
        <span>
          klik untuk balik <span className="text-accent">↻</span>
        </span>
      </div>
    </div>
  )
}
