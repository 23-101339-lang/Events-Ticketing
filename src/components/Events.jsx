import { happeningNow } from '../data/events'
import { scrollToId } from '../scroll'
import Reveal from './Reveal'

export default function Events() {
  const { featured, grid } = happeningNow

  return (
    <section className="section events" id="events">
      <Reveal>
        <h2 className="section__title events__title">
          Happening <span className="gradient-text">Now</span>
        </h2>
      </Reveal>

      <div className="events__grid">
        <Reveal className="events__featured-wrap">
          <article
            className="events__featured glass-card"
            style={{ backgroundImage: `url(${featured.image})` }}
          >
            <div className="events__featured-overlay" />
            <div className="events__featured-body">
              <h3 className="events__featured-title">{featured.title}</h3>
              <p className="events__featured-meta">
                {featured.date} · {featured.location}
              </p>
              <div className="events__featured-row">
                <span className="events__price">${featured.price}</span>
                <button
                  type="button"
                  className="events__arrow-btn"
                  aria-label="View event"
                  onClick={() => scrollToId('booking')}
                >
                  →
                </button>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="events__subgrid">
          {grid.map((e, i) => (
            <Reveal key={e.id} delay={i * 70}>
              <article
                className="events__mini glass-card"
                style={{ backgroundImage: `url(${e.image})` }}
              >
                <div className="events__mini-overlay" />
                <div className="events__mini-body">
                  <div className="events__mini-copy">
                    <div className="events__mini-title-row">
                      <h4 className="events__mini-title">{e.title}</h4>
                      <span className="events__mini-price">
                        {e.price === 0 ? 'Free' : `$${e.price}`}
                      </span>
                    </div>
                    <p className="events__mini-date">{e.date}</p>
                  </div>
                  <button
                    type="button"
                    className="events__arrow-btn events__arrow-btn--mini"
                    aria-label={`Book ${e.title}`}
                    onClick={() => scrollToId('booking')}
                  >
                    →
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
