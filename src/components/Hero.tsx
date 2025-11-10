import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative h-[80vh] md:h-[88vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white pointer-events-none"/>
      <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="max-w-2xl">
          <p className="text-sky-700/90 font-medium">Hammamet • Tunisia-wide</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight text-sky-900">
            Futuristic Car Rentals & Sea-to-Sahara Excursions
          </h1>
          <p className="mt-4 text-lg text-sky-800/80">Clean, minimal, and tech-inspired. Book a car or craft a bespoke adventure across Tunisia.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book" className="px-6 py-3 rounded-lg bg-sky-600 text-white hover:bg-sky-700 shadow-sm">Book Now</Link>
            <Link to="/cars" className="px-6 py-3 rounded-lg border border-sky-300 text-sky-700 hover:bg-sky-50">View Fleet</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
