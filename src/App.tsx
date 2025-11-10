import { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Fleet from './components/Fleet'
import Excursions from './components/Excursions'
import Booking from './components/Booking'
import Footer from './components/Footer'

function Home() {
  return (
    <>
      <Hero />
      <section id="about" className="relative py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-sky-900">
              Hammamet-based. Tunisia-wide.
            </h2>
            <p className="mt-4 text-sky-800/80 leading-relaxed">
              We are a local agency in Hammamet offering premium car rentals and curated excursions across all of Tunisia.
              From Mediterranean coasts to Sahara dunes, ride with comfort and book unforgettable experiences with transparent pricing.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/cars" className="px-5 py-3 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition-colors">Browse Cars</Link>
              <Link to="/excursions" className="px-5 py-3 rounded-md border border-sky-300 text-sky-700 hover:bg-sky-50 transition-colors">Explore Excursions</Link>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-white to-sky-100 ring-1 ring-sky-100">
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(1200px_400px_at_0%_0%,rgba(59,130,246,0.15),transparent)]" />
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(800px_300px_at_100%_100%,rgba(14,165,233,0.15),transparent)]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <p className="text-sky-700 font-medium">24/7 Support • Free Delivery in Hammamet • Unlimited KM options</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fleet previewMode />
      <Excursions previewMode />
      <div className="py-12 flex justify-center">
        <Link to="/book" className="px-6 py-3 rounded-lg bg-sky-600 text-white hover:bg-sky-700 shadow-sm">Book Now</Link>
      </div>
    </>
  )
}

function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white text-sky-900">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="pt-16"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Fleet />} />
            <Route path="/excursions" element={<Excursions />} />
            <Route path="/book" element={<Booking />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
