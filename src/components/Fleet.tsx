import { useEffect, useState } from 'react'

interface Car {
  _id?: string
  brand: string
  model: string
  transmission: string
  seats: number
  fuel: string
  price_per_day: number
  image?: string
  features?: string[]
}

export default function Fleet({ previewMode = false }: { previewMode?: boolean }) {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/cars`)
        const data = await res.json()
        setCars(data)
      } catch (e) {
        setCars([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="cars" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-sky-900">Our Fleet</h2>
            <p className="mt-2 text-sky-800/80">Reliable, comfortable, and perfectly suited for Tunisian roads.</p>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(loading ? Array.from({length:3}) : cars).map((car: any, idx: number) => (
            <div key={idx} className="group rounded-2xl overflow-hidden border border-sky-100 hover:border-sky-200 transition-colors bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={car?.image || `https://images.unsplash.com/photo-1549921296-3cce18d7c7c7?q=80&w=1200&auto=format&fit=crop`} alt="car" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-sky-900">{car?.brand || 'Car'} {car?.model || ''}</h3>
                  <span className="text-sky-700 font-semibold">{car?.price_per_day ? `${car.price_per_day} TND/day` : 'Ask'}</span>
                </div>
                <p className="mt-1 text-sm text-sky-700/80">{car?.transmission || 'Automatic'} • {car?.fuel || 'Petrol'} • {car?.seats || 5} seats</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(car?.features || ['A/C','Bluetooth']).slice(0,4).map((f:string,i:number)=>(
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
