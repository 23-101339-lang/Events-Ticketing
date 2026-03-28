import { useState } from 'react'
import { bookableEvents, serviceFee } from '../data/events'
import Reveal from './Reveal'

const empty = { firstName: '', lastName: '', email: '', phone: '', eventId: '', cardNumber: '', expiry: '', cvv: '' }

export default function Booking() {
  const [tickets, setTickets] = useState(2)
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)

  const pick = bookableEvents.find((e) => e.id === form.eventId)
  const subtotal = pick ? tickets * pick.pricePerTicket : 0
  const total = subtotal + serviceFee

  function set(name, value) {
    setSubmitted(null)
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((x) => ({ ...x, [name]: '' }))
  }

  function validate() {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim()) e.lastName = 'Last name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.eventId) e.eventId = 'Select an event'
    if (!form.cardNumber.replace(/\s/g, '')) e.cardNumber = 'Card number is required'
    else if (form.cardNumber.replace(/\s/g, '').length < 12) e.cardNumber = 'Card number looks too short'
    if (!form.expiry.trim()) e.expiry = 'Expiry is required'
    else if (!/^\d{2}\/\d{2}$/.test(form.expiry.trim())) e.expiry = 'Use MM/YY'
    if (!form.cvv.trim()) e.cvv = 'CVV is required'
    else if (!/^\d{3,4}$/.test(form.cvv.trim())) e.cvv = 'Invalid CVV'
    setErrors(e)
    return !Object.keys(e).length
  }

  function onSubmit(ev) {
    ev.preventDefault()
    if (!validate()) return
    setSubmitted({
      eventName: pick?.name ?? 'Event',
      tickets,
      total,
      subtotal,
      email: form.email.trim(),
      name: `${form.firstName.trim()} ${form.lastName.trim()}`,
    })
  }

  const err = (name) => errors[name] ? <span className="field-error">{errors[name]}</span> : null

  return (
    <section className="section booking" id="booking">
      <Reveal>
        <h2 className="section__title booking__title">Secure Your Ticket</h2>
      </Reveal>

      <div className="booking__layout">
        <Reveal>
          <aside className="booking__summary glass-card">
            <h3 className="booking__summary-heading">Order summary</h3>
            <div className="booking__qty">
              <button type="button" className="booking__qty-btn" onClick={() => { setSubmitted(null); setTickets((n) => Math.max(1, n - 1)) }}>−</button>
              <span className="booking__qty-value">{tickets}</span>
              <button type="button" className="booking__qty-btn" onClick={() => { setSubmitted(null); setTickets((n) => Math.min(10, n + 1)) }}>+</button>
            </div>
            <dl className="booking__breakdown">
              <div><dt>Tickets</dt><dd>{pick ? `$${subtotal}` : '—'}</dd></div>
              <div><dt>Service</dt><dd>${serviceFee}</dd></div>
            </dl>
            <p className="booking__total">
              <span>Total</span>
              <span className="booking__total-num">${pick ? total : '0'}</span>
            </p>
          </aside>
        </Reveal>

        <Reveal delay={80}>
          <div className="booking__form-wrap glass-card">
            {submitted ? (
              <div className="booking__success" role="status">
                <h3 className="booking__success-title">You&apos;re booked</h3>
                <p className="booking__success-text">Confirmation sent to <strong>{submitted.email}</strong>.</p>
                <div className="booking__success-summary glass-card">
                  <p><span className="booking__success-label">Event</span>{submitted.eventName}</p>
                  <p><span className="booking__success-label">Tickets</span>{submitted.tickets}</p>
                  <p><span className="booking__success-label">Ticket cost</span>${submitted.subtotal}</p>
                  <p><span className="booking__success-label">Service</span>${serviceFee}</p>
                  <p className="booking__success-total"><span className="booking__success-label">Total</span>${submitted.total}</p>
                  <p className="booking__success-name">{submitted.name}</p>
                </div>
                <button type="button" className="btn btn--gradient booking__another" onClick={() => { setSubmitted(null); setForm(empty); setErrors({}); setTickets(2) }}>
                  Book another
                </button>
              </div>
            ) : (
              <form className="booking__form" onSubmit={onSubmit} noValidate>
                <fieldset className="booking__fieldset">
                  <legend>Personal details</legend>
                  <div className="booking__row">
                    <div className="booking__field">
                      <label htmlFor="firstName">First name</label>
                      <input id="firstName" value={form.firstName} onChange={(e) => set('firstName', e.target.value)} className={errors.firstName ? 'input--error' : ''} />
                      {err('firstName')}
                    </div>
                    <div className="booking__field">
                      <label htmlFor="lastName">Last name</label>
                      <input id="lastName" value={form.lastName} onChange={(e) => set('lastName', e.target.value)} className={errors.lastName ? 'input--error' : ''} />
                      {err('lastName')}
                    </div>
                  </div>
                  <div className="booking__field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)} className={errors.email ? 'input--error' : ''} />
                    {err('email')}
                  </div>
                  <div className="booking__field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
                  </div>
                  <div className="booking__row">
                    <div className="booking__field">
                      <label htmlFor="eventId">Event</label>
                      <select id="eventId" value={form.eventId} onChange={(e) => set('eventId', e.target.value)} className={errors.eventId ? 'input--error' : ''}>
                        <option value="">Select event</option>
                        {bookableEvents.map((ev) => <option key={ev.id} value={ev.id}>{ev.name}</option>)}
                      </select>
                      {err('eventId')}
                    </div>
                    <div className="booking__field">
                      <label htmlFor="ticketsInput">Tickets</label>
                      <input id="ticketsInput" type="number" min={1} max={10} value={tickets} onChange={(e) => { setTickets(Math.min(10, Math.max(1, Number(e.target.value) || 1))); setSubmitted(null) }} />
                    </div>
                  </div>
                </fieldset>

                <fieldset className="booking__fieldset">
                  <legend>Payment details</legend>
                  <div className="booking__field">
                    <label htmlFor="cardNumber">Card number</label>
                    <input id="cardNumber" inputMode="numeric" placeholder="0000 0000 0000 0000" value={form.cardNumber} onChange={(e) => set('cardNumber', e.target.value)} className={errors.cardNumber ? 'input--error' : ''} />
                    {err('cardNumber')}
                  </div>
                  <div className="booking__row">
                    <div className="booking__field">
                      <label htmlFor="expiry">Expiry</label>
                      <input id="expiry" placeholder="MM/YY" value={form.expiry} onChange={(e) => set('expiry', e.target.value)} className={errors.expiry ? 'input--error' : ''} />
                      {err('expiry')}
                    </div>
                    <div className="booking__field">
                      <label htmlFor="cvv">CVV</label>
                      <input id="cvv" inputMode="numeric" value={form.cvv} onChange={(e) => set('cvv', e.target.value)} className={errors.cvv ? 'input--error' : ''} />
                      {err('cvv')}
                    </div>
                  </div>
                </fieldset>

                <button type="submit" className="btn btn--gradient booking__submit">PURCHASE TICKET</button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
