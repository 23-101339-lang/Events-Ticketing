import { useState } from 'react'
import { newsletterTopics } from '../data/events'
import Reveal from './Reveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section className="section newsletter" id="newsletter">
      <Reveal>
        <div className="newsletter__card">
          <div className="newsletter__left">
            <h2 className="newsletter__title">Never Miss A Beat</h2>
            <p className="newsletter__desc">
              Get lineups, presale codes, and curated picks delivered to your inbox.
            </p>
            <form
              className="newsletter__form"
              onSubmit={(e) => {
                e.preventDefault()
                if (!email.trim()) return
                setSent(true)
                setEmail('')
              }}
            >
              <div className="newsletter__input-wrap">
                <label htmlFor="newsletter-email" className="visually-hidden">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setSent(false)
                  }}
                />
                <button type="submit" className="newsletter__submit" aria-label="Subscribe">
                  →
                </button>
              </div>
              {sent && (
                <p className="newsletter__thanks" role="status">
                  Thanks — you&apos;re on the list.
                </p>
              )}
            </form>
          </div>
          <ul className="newsletter__topics">
            {newsletterTopics.map((t) => (
              <li key={t} className="newsletter__pill">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
