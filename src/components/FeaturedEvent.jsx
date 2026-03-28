import { useState } from 'react'
import { featuredEvent } from '../data/events'
import { scrollToId } from '../scroll'
import Reveal from './Reveal'

export default function FeaturedEvent() {
  const [qty, setQty] = useState(1)

  return (
    <section className="section featured-event" id="featured">
      <div className="featured-event__bg" style={{ backgroundImage: `url(${featuredEvent.image})` }} aria-hidden="true" />
      <div className="featured-event__overlay" />
      <div className="featured-event__inner">
        <Reveal>
          <span className="featured-event__badge">{featuredEvent.badge}</span>
          <h2 className="featured-event__title">{featuredEvent.title}</h2>
          <ul className="featured-event__details">
            <li><span className="featured-event__detail-icon" aria-hidden="true">◆</span>{featuredEvent.date}</li>
            <li><span className="featured-event__detail-icon" aria-hidden="true">◆</span>{featuredEvent.time}</li>
            <li><span className="featured-event__detail-icon" aria-hidden="true">◆</span>{featuredEvent.location}</li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div className="featured-event__panel glass-card">
            <div className="featured-event__stats">
              {featuredEvent.stats.map((s) => (
                <div key={s.label} className="featured-event__stat">
                  <span className="featured-event__stat-value">{s.value}</span>
                  <span className="featured-event__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="featured-event__buy">
              <div className="featured-event__price-block">
                <span className="featured-event__currency">$</span>
                <span className="featured-event__price">{featuredEvent.price}</span>
              </div>
              <div className="featured-event__cta-row">
                <label className="visually-hidden" htmlFor="featured-qty">Tickets</label>
                <select id="featured-qty" className="featured-event__select" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
                <button type="button" className="btn btn--primary-light featured-event__reserve" onClick={() => scrollToId('booking')}>
                  Reserve Tickets
                </button>
              </div>
              <p className="featured-event__hint">
                {qty} ticket{qty > 1 ? 's' : ''} · Midnight Odyssey Festival 2026
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
