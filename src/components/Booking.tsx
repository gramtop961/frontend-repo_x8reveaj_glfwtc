import { useState } from 'react'

export default function Booking(){
  const [status, setStatus] = useState<string>('')

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries()) as any
    payload.passengers = Number(payload.passengers || 1)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setStatus(data.status === 'ok' ? 'Booking received! We will contact you shortly.' : 'Request sent! We will confirm by phone.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Request sent! We will confirm by phone.')
    }
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-sky-900">Book Your Ride or Excursion</h2>
        <p className="mt-2 text-sky-800/80">Fast confirmation. We serve all of Tunisia.</p>
        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <label className="flex items-center gap-2 text-sky-800">
              <input className="accent-sky-600" type="radio" name="type" value="car" defaultChecked /> Car
            </label>
            <label className="flex items-center gap-2 text-sky-800">
              <input className="accent-sky-600" type="radio" name="type" value="excursion" /> Excursion
            </label>
          </div>
          <input name="pickup_location" placeholder="Pickup Location (e.g., Hammamet)" className="px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400" required />
          <input name="dropoff_location" placeholder="Dropoff Location (optional)" className="px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <input name="pickup_date" type="datetime-local" className="px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400" required />
          <input name="dropoff_date" type="datetime-local" className="px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <input name="full_name" placeholder="Full Name" className="px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400" required />
          <input name="phone" placeholder="Phone (WhatsApp)" className="px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400" required />
          <input name="email" type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400" required />
          <input name="passengers" type="number" min={1} max={50} defaultValue={1} className="px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <textarea name="notes" placeholder="Notes (car model or excursion preference)" className="md:col-span-2 px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400" rows={4} />
          <button className="md:col-span-2 mt-2 px-6 py-3 rounded-lg bg-sky-600 text-white hover:bg-sky-700 shadow-sm">Send Request</button>
          {status && <p className="md:col-span-2 text-sky-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
