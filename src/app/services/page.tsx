import Link from 'next/link'

export const metadata = {
  title: 'Services — Wuwa Design Studio',
  description: 'Interior design services for residential and commercial projects.',
}

export default function ServicesPage() {
  const services = [
    {
      number: '01',
      title: 'Full Interior Design',
      subtitle: 'Concept to completion',
      desc: 'Our most comprehensive offering. We guide you through every decision — space planning, material selection, furniture, lighting, artwork, and styling — from first sketch to the day you move in.',
      includes: ['Concept development', 'Space planning', 'Material & finish selection', 'Furniture specification', 'Lighting design', 'Art & accessory curation', 'Contractor coordination', 'Project management'],
    },
    {
      number: '02',
      title: 'Design Consultation',
      subtitle: 'Strategic direction',
      desc: 'For those who want expert guidance but prefer to manage execution themselves. We provide a clear creative direction, material palette, and prioritised action plan.',
      includes: ['Site visit & brief review', 'Concept presentation', 'Material & palette recommendation', 'Supplier introductions', 'Action plan document'],
    },
    {
      number: '03',
      title: 'Renovation Design',
      subtitle: 'Existing spaces transformed',
      desc: 'Breathe new life into a space you already love — or one you\'ve outgrown. We work with your existing structure to create something that feels entirely new.',
      includes: ['Existing condition assessment', 'Renovation scope guidance', 'New layout planning', 'Finishes & fixtures selection', 'Contractor brief'],
    },
    {
      number: '04',
      title: 'Commercial & Hospitality',
      subtitle: 'Brand expressed through space',
      desc: 'Offices, cafes, boutiques, and hospitality venues. We bring the same considered approach to commercial projects — creating environments that serve both brand and the people within it.',
      includes: ['Brand alignment strategy', 'Customer journey mapping', 'Space planning & zoning', 'Custom fixture design', 'Full project delivery'],
    },
  ]

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto py-16 md:py-20 border-b border-stone/20">
        <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-4">What we offer</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Services
          </h1>
          <p className="font-body text-sm text-muted leading-relaxed max-w-md">
            Every project is different. We offer four core service models, but we always begin with a conversation to understand what you actually need.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto py-12">
        {services.map((service, i) => (
          <div
            key={service.number}
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 py-14 ${
              i < services.length - 1 ? 'border-b border-stone/20' : ''
            }`}
          >
            {/* Number */}
            <div className="md:col-span-1">
              <span className="font-display text-stone/40 text-lg italic">{service.number}</span>
            </div>

            {/* Title */}
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl md:text-4xl font-light mb-2">{service.title}</h2>
              <p className="font-body text-xs tracking-widest uppercase text-accent">{service.subtitle}</p>
            </div>

            {/* Description */}
            <div className="md:col-span-4">
              <p className="font-body text-sm text-muted leading-relaxed">{service.desc}</p>
            </div>

            {/* Includes */}
            <div className="md:col-span-3">
              <p className="font-body text-xs tracking-widest uppercase text-muted/60 mb-4">Includes</p>
              <ul className="flex flex-col gap-2">
                {service.includes.map((item) => (
                  <li key={item} className="font-body text-xs text-muted flex items-start gap-2">
                    <span className="text-stone mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Process section */}
      <div className="bg-dark text-cream px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-widest2 uppercase text-stone mb-12">How we work</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We meet, we listen. We learn how you live, what you love, and what you\'re really asking for.' },
              { step: '02', title: 'Concept', desc: 'A spatial narrative takes shape — a clear creative direction backed by a material palette and layout strategy.' },
              { step: '03', title: 'Design', desc: 'We develop every detail. Furniture, lighting, finishes, and bespoke elements are resolved with precision.' },
              { step: '04', title: 'Delivery', desc: 'We oversee installation and styling, ensuring the vision translates perfectly into the finished space.' },
            ].map((p) => (
              <div key={p.step} className="border-t border-cream/10 pt-6">
                <span className="font-display italic text-stone/40 text-2xl">{p.step}</span>
                <h3 className="font-display text-2xl font-light mt-4 mb-3">{p.title}</h3>
                <p className="font-body text-sm text-stone/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6 text-center">
        <h2 className="font-display text-4xl font-light mb-3">Not sure which service fits?</h2>
        <p className="font-body text-sm text-muted mb-10">Let&apos;s have a 30-minute call — no commitment required.</p>
        <Link
          href="/contact"
          className="inline-block border border-dark px-10 py-4 font-body text-xs tracking-widest2 uppercase hover:bg-dark hover:text-cream transition-all duration-500"
        >
          Book a call
        </Link>
      </div>
    </div>
  )
}
