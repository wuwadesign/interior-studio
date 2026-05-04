import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-24 min-h-screen">

      {/* Cover image */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/images/thevale/Wuwa_The Vale_Deliverables_260423_07629-15.jpg"
          alt="Wuwa Design Studio interior"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 px-6 text-center">
          <h2 className="font-display text-6xl md:text-8xl font-light text-cream leading-tight mb-6">
            <span className="italic">Let's talk about your home</span>
          </h2>
          <p className="font-body text-sm font-bold text-cream/80 mb-3 max-w-md">
            Tell us a little about your project and we'll get back to you within 24 hours.
          </p>
          <p className="font-body text-xs font-bold text-cream/60 max-w-md leading-relaxed mb-10">
            No hard sell. No obligation. Just a friendly conversation about what you're hoping to create — and whether we're the right fit to help you get there.
          </p>
          <a
            href="https://wa.me/60175002582?text=Hi%20Wuwa%20Design%2C%20I%27d%20like%20to%20get%20a%20free%20quote%20for%20my%20project.%0A%0AName%20%3A%20%0AProperty%20Type%20%3A%20%0AProperty%20Size%20%3A%20%0AProperty%20Location%20%3A%20%0ARenovation%20Month%20%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-cream border border-cream rounded-full px-8 py-3 font-body text-xs tracking-widest2 uppercase text-dark hover:bg-transparent hover:text-cream transition-all duration-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.833L.057 23.077a.75.75 0 00.916.948l5.453-1.427A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-4.953-1.355l-.355-.211-3.664.959.981-3.573-.231-.368A9.725 9.725 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Chat with us on WhatsApp
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-4">
              <path d="M2 12h26M20 5l8 7-8 7"/>
            </svg>
          </a>
        </div>
      </div>

      {/* What happens next */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-12">
            Here's what happens next
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'You send us a message',
                desc: 'Takes 30 seconds. Just tell us a little about your property and what you have in mind.',
              },
              {
                step: '02',
                title: 'We reply within 24 hours',
                desc: 'We\'ll get back to you to arrange a free 30-minute call (or not) at a time that suits you.',
              },
              {
                step: '03',
                title: 'You receive a written estimate',
                desc: 'After the call, we\'ll send you a clear written estimate. No strings attached, no obligation.',
              },
            ].map((item) => (
              <div key={item.step} className="border-t border-dark/10 pt-8 flex flex-col gap-4">
                <span className="font-display italic text-dark/20 text-4xl">{item.step}</span>
                <h3 className="font-display text-2xl font-light">{item.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

function ContactForm() {
  return (
    <div className="flex flex-col gap-6">
    </div>
  )
}