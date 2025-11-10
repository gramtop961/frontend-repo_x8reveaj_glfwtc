import { Link, NavLink } from 'react-router-dom'
import { Menu, Car, Mountain, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-sky-100">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight text-sky-800">
          <span className="inline-flex h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white items-center justify-center shadow-sm">
            <Car className="h-5 w-5" />
          </span>
          Hammamet Drive
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sky-700">
          <NavLink to="/cars" className={({isActive})=>`hover:text-sky-900 ${isActive?'text-sky-900 font-semibold':''}`}>Cars</NavLink>
          <NavLink to="/excursions" className={({isActive})=>`hover:text-sky-900 ${isActive?'text-sky-900 font-semibold':''}`}>Excursions</NavLink>
          <NavLink to="/book" className={({isActive})=>`hover:text-sky-900 ${isActive?'text-sky-900 font-semibold':''}`}>Book</NavLink>
          <a href="tel:+21600000000" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700"><Phone className="h-4 w-4"/> +216</a>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-lg border border-sky-200 text-sky-700">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sky-700">
          <NavLink to="/cars" onClick={()=>setOpen(false)} className="block">Cars</NavLink>
          <NavLink to="/excursions" onClick={()=>setOpen(false)} className="block">Excursions</NavLink>
          <NavLink to="/book" onClick={()=>setOpen(false)} className="block">Book</NavLink>
          <a href="tel:+21600000000" className="block">Call us</a>
        </div>
      )}
    </header>
  )
}
