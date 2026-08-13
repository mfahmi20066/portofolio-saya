import Reveal from './Reveal'
import WordReveal from './WordReveal'
import Parallax from './Parallax'

export default function SectionHeading({ index, kicker, title, description }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <Parallax speed={30}>
        <div className="flex items-center gap-3 font-mono text-xs md:text-sm">
          <span className="text-accent">//</span>
          <span className="text-accent">{index}</span>
          <span className="text-ash uppercase tracking-widest">{kicker}</span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-paper md:text-5xl">
          <WordReveal text={title} />
        </h2>
        {description && (
          <p className="mt-4 max-w-xl leading-relaxed text-ash">{description}</p>
        )}
      </Parallax>
    </Reveal>
  )
}
