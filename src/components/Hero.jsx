import { heroStats } from '../data/events'
import { scrollToId } from '../scroll'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__mesh" aria-hidden="true" />
      <div className="hero__inner">
        <nav className="hero__nav">
          <button type="button" className="hero__logo" onClick={() => scrollToId('top')}>
            Pulse Pass
          </button>
          <ul className="hero__nav-links">
            <li><button type="button" onClick={() => scrollToId('categories')}>Categories</button></li>
            <li><button type="button" onClick={() => scrollToId('events')}>Events</button></li>
            <li><button type="button" onClick={() => scrollToId('booking')}>Book</button></li>
          </ul>
        </nav>

        <div className="hero__grid">
          <Reveal className="hero__content">
            <h1 className="hero__title">PULSE PASS</h1>
            <p className="hero__sub">
              Discover live music, comedy, talks, and community experiences. Book in seconds
              with secure checkout and instant digital tickets.
            </p>
            <div className="hero__actions">
              <button type="button" className="btn btn--primary-light" onClick={() => scrollToId('events')}>
                Explore Now
              </button>
              <button type="button" className="hero__link-play" onClick={() => scrollToId('about')}>
                <span className="hero__play-icon" aria-hidden="true">▶</span>
                How it works
              </button>
            </div>
          </Reveal>

          <Reveal className="hero__stats-wrap" delay={120}>
            <ul className="hero__stats">
              {heroStats.map((s) => (
                <li key={s.label} className="hero__stat glass-card">
                  <span className="hero__stat-value">{s.value}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </header>
  )
}
