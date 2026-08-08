// Thumbnail proyek generatif — SVG teknis ala "telemetry dashboard".
// Tampil cepat, tak bergantung pada gambar eksternal, dan jadi
// signature detail visual situs.

const ACCENT = '#A3E635'
const SOFT = 'rgba(231,230,225,0.22)'
const FAINT = 'rgba(231,230,225,0.07)'
const MUTED = 'rgba(139,139,142,0.65)'

function rand(seed, n) {
  const x = Math.sin(seed * 12.9898 + n * 78.233) * 43758.5453
  return x - Math.floor(x)
}

export default function ProjectThumb({ seed = 0, index = '01', className = '' }) {
  const bars = Array.from({ length: 12 }, (_, n) => 20 + rand(seed, n) * 60)
  const pulses = Array.from({ length: 6 }, (_, n) => rand(seed, n * 3 + 1))

  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      role="img"
      aria-label={`Visualisasi proyek ${index}`}
    >
      <rect width="800" height="500" fill="#0E0E11" />

      {Array.from({ length: 9 }, (_, n) => (
        <line key={`v${n}`} x1={n * 100} y1="0" x2={n * 100} y2="500" stroke={FAINT} strokeWidth="1" />
      ))}
      {Array.from({ length: 6 }, (_, n) => (
        <line key={`h${n}`} x1="0" y1={n * 100} x2="800" y2={n * 100} stroke={FAINT} strokeWidth="1" />
      ))}

      {[
        [0, 0],
        [800, 0],
        [0, 500],
        [800, 500],
      ].map(([cx, cy], n) => (
        <g key={`c${n}`} stroke={SOFT} strokeWidth="1.5">
          <line x1={cx} y1={cy} x2={cx + (cx === 0 ? 18 : -18)} y2={cy} />
          <line x1={cx} y1={cy} x2={cx} y2={cy + (cy === 0 ? 18 : -18)} />
        </g>
      ))}

      <text
        x="60"
        y="118"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="88"
        fontWeight="600"
        fill="none"
        stroke={SOFT}
        strokeWidth="1.2"
      >
        {index}
      </text>

      <text x="60" y="74" fontFamily="'JetBrains Mono', monospace" fontSize="14" fill={ACCENT}>
        $ npm run deploy --target production
      </text>

      <line x1="60" y1="400" x2="740" y2="400" stroke={SOFT} strokeWidth="1.5" />
      {bars.map((h, n) => (
        <rect
          key={`b${n}`}
          x={60 + n * 56}
          y={400 - h}
          width="34"
          height={h}
          fill={n === 3 ? ACCENT : 'none'}
          stroke={n === 3 ? ACCENT : SOFT}
          strokeWidth="1.5"
        />
      ))}

      {pulses.map((p, n) => (
        <circle
          key={`p${n}`}
          cx={90 + n * 130}
          cy={90 + (n % 3) * 50}
          r="4"
          fill={ACCENT}
          opacity={0.12 + p * 0.35}
        />
      ))}

      <text x="60" y="452" fontFamily="'JetBrains Mono', monospace" fontSize="13" fill={MUTED}>
        uptime 99.99% · p95 120ms · status: stable
      </text>
    </svg>
  )
}
