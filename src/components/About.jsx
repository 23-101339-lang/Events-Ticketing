import { aboutFeatures, aboutStats } from '../data/events'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="section about" id="about">
      <span className="about__watermark" aria-hidden="true">02</span>
      <div className="about__grid">
        <div className="about__stats-col">
          {aboutStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="about__stat-line">
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="about__features">
          <Reveal>
            <h2 className="section__title about__heading">Built for Experiences</h2>
          </Reveal>
          <div className="about__feature-grid">
            {aboutFeatures.map((f, i) => (
              <Reveal key={f.id} delay={i * 70}>
                <article className="about__feature glass-card">
                  <div className="about__feature-icon">{f.icon}</div>
                  <h3 className="about__feature-title">{f.title}</h3>
                  <p className="about__feature-desc">{f.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
