import { useEffect, useState } from 'react'

interface Excursion {
  _id?: string
  title: string
  region: string
  duration_hours: number
  price_per_person: number
  description: string
  image?: string
  highlights?: string[]
}

export default function Excursions({ previewMode = false }: { previewMode?: boolean }) {
  const [items, setItems] = useState<Excursion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/excursions`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="excursions" className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-sky-900">Signature Excursions</h2>
            <p className="mt-2 text-sky-800/80">From the azure coasts to golden dunes — curated routes across Tunisia.</p>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(loading ? Array.from({length:3}) : items).map((e: any, idx: number) => (
            <div key={idx} className="group rounded-2xl overflow-hidden border border-sky-100 hover:border-sky-200 transition-colors bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={e?.image || `https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop`} alt="excursion" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-sky-900">{e?.title || 'Excursion'}</h3>
                  <span className="text-sky-700 font-semibold">{e?.price_per_person ? `${e.price_per_person} TND` : 'Ask'}</span>
                </div>
                <p className="mt-1 text-sm text-sky-700/80">{e?.region || 'Tunisia'} • {e?.duration_hours || 8}h</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(e?.highlights || ['Culture','Sea','Desert']).slice(0,4).map((f:string,i:number)=>(
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
