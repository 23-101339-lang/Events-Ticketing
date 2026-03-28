import { categories } from '../data/events'
import Reveal from './Reveal'

export default function Categories() {
  return (
    <section className="section categories" id="categories">
      <div className="categories__layout">
        <Reveal>
          <h2 className="section__title categories__heading">Find Your Next Experience</h2>
        </Reveal>
        <ul className="categories__list">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 60}>
              <li>
                <button type="button" className="categories__card glass-card">
                  <span className={`categories__icon cat-icon--${c.color}`}>
                    <img
                      src={c.image}
                      alt=""
                      className="categories__icon-img"
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                  </span>
                  <span className="categories__text">
                    <span className="categories__name">{c.name}</span>
                    <span className="categories__sub">{c.subtext}</span>
                  </span>
                  <span className="categories__chevron" aria-hidden="true">
                    ›
                  </span>
                </button>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
