import { useState } from 'react'
import './App.css'
import About from './components/About'
import Booking from './components/Booking'
import Categories from './components/Categories'
import Events from './components/Events'
import FeaturedEvent from './components/FeaturedEvent'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import Preloader from './components/Preloader'
import Testimonials from './components/Testimonials'

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true)

  return (
    <>
      {showPreloader && <Preloader onDone={() => setShowPreloader(false)} />}
      <div className={`app ${showPreloader ? 'app--loading' : 'app--ready'}`}>
        <Hero />
        <main>
          <Categories />
          <Events />
          <About />
          <FeaturedEvent />
          <Booking />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  )
}
