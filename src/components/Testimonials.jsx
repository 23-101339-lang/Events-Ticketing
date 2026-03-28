import { testimonials, trustBarStats } from '../data/events'
import Reveal from './Reveal'

export default function Testimonials() {
  const { featured, cards } = testimonials
  const n = featured.rating

  return (
    <section className="section testimonials" id="testimonials">
      <Reveal>
        <h2 className="section__title testimonials__title">
          Trusted by <span className="gradient-text">Thousands</span>
        </h2>
      </Reveal>

      <div className="testimonials__masonry">
        <Reveal className="testimonials__featured-wrap">
          <article className="testimonials__featured glass-card">
            <span className="testimonials__stars" aria-label={`${n} out of 5 stars`}>
              {'★'.repeat(n)}
            </span>
            <blockquote className="testimonials__quote">&ldquo;{featured.quote}&rdquo;</blockquote>
            <footer className="testimonials__author">
              <span className="testimonials__avatar" aria-hidden="true" />
              <div>
                <div className="testimonials__name">{featured.name}</div>
                <div className="testimonials__role">{featured.role}</div>
              </div>
            </footer>
          </article>
        </Reveal>

        <div className="testimonials__stack">
          {cards.map((c, i) => (
            <Reveal key={c.id} delay={i * 50}>
              <article className="testimonials__card glass-card">
                <p className="testimonials__snippet">&ldquo;{c.quote}&rdquo;</p>
                <p className="testimonials__card-name">{c.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <ul className="testimonials__bar">
          {trustBarStats.map((s) => (
            <li key={s.label} className="testimonials__bar-item glass-card">
              <span className="testimonials__bar-value">{s.value}</span>
              <span className="testimonials__bar-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
