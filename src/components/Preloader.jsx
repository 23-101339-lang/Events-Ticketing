import { useEffect, useRef, useState } from 'react'

export default function Preloader({ onDone }) {
  const [out, setOut] = useState(false)
  const ref = useRef(onDone)
  ref.current = onDone

  useEffect(() => {
    const t = setTimeout(() => setOut(true), 1200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!out) return
    const t = setTimeout(() => ref.current?.(), 550)
    return () => clearTimeout(t)
  }, [out])

  return (
    <div className={'preloader' + (out ? ' preloader--exit' : '')} aria-live="polite">
      <div className="preloader__inner">
        <div className="preloader__spinner" aria-hidden="true" />
        <p className="preloader__text">
          <span className="preloader__brand">Pulse Pass</span>
        </p>
      </div>
    </div>
  )
}
