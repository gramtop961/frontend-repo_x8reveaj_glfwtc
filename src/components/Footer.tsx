export default function Footer(){
  return (
    <footer className="border-t border-sky-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sky-800/80">
        <div>
          <h3 className="text-sky-900 font-semibold">Hammamet Drive</h3>
          <p className="mt-2">Local agency based in Hammamet. We operate across Tunisia with door-to-door delivery and custom itineraries.</p>
        </div>
        <div>
          <h4 className="text-sky-900 font-semibold">Contact</h4>
          <p className="mt-2">Phone/WhatsApp: +216</p>
          <p>Email: booking@hammametdrive.tn</p>
          <p>Hammamet, Nabeul, Tunisia</p>
        </div>
        <div>
          <h4 className="text-sky-900 font-semibold">Hours</h4>
          <p className="mt-2">We operate 7/7 • 24/7 support</p>
          <p>Airport transfers available (NBE, TUN, MIR)</p>
        </div>
      </div>
      <div className="text-center text-sky-700/70 text-sm py-4">© {new Date().getFullYear()} Hammamet Drive. Sea to Sahara with you.</div>
    </footer>
  )
}
