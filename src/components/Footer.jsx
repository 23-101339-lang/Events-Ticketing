import { footerLinks } from '../data/events'
import { scrollToId } from '../scroll'

function LinkList({ title, links }) {
  return (
    <div>
      <h3 className="footer__heading">{title}</h3>
      <ul className="footer__links">
        {links.map((l) => (
          <li key={l.label}>
            <button type="button" onClick={() => scrollToId(l.to)}>{l.label}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <button type="button" className="footer__logo" onClick={() => scrollToId('top')}>
            Pulse Pass
          </button>
          <p className="footer__tagline">
            The modern way to discover and book unforgettable live experiences worldwide.
          </p>
        </div>
        <LinkList title="Explore" links={footerLinks.explore} />
        <LinkList title="About" links={footerLinks.about} />
        <LinkList title="Legal" links={footerLinks.legal} />
      </div>
      <div className="footer__bottom">
        <div className="footer__social" aria-label="Social">
          <span className="footer__social-icon" aria-hidden="true">𝕏</span>
          <span className="footer__social-icon" aria-hidden="true">in</span>
          <span className="footer__social-icon" aria-hidden="true">◎</span>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} Pulse Pass. All rights reserved.</p>
        <div className="footer__locale">
          <span className="footer__pill">EN</span>
          <span className="footer__pill">USD</span>
        </div>
      </div>
    </footer>
  )
}
