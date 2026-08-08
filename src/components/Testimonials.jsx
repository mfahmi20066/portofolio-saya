import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { testimonials } from '../config/portfolio'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          index="04"
          kicker="Testimoni"
          title="Kata mereka yang pernah bekerja sama."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div>
                  <span className="font-display text-4xl leading-none text-accent">
                    “
                  </span>
                  <blockquote className="mt-3 leading-relaxed text-paper/85">
                    {testimonial.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                  <span className="flex h-10 w-10 items-center justify-center border border-accent/50 font-mono text-sm text-accent">
                    {testimonial.name
                      .split(' ')
                      .map((word) => word[0])
                      .join('')}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-medium text-paper">
                      {testimonial.name}
                    </span>
                    <span className="block font-mono text-xs text-ash">
                      {testimonial.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
