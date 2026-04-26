import Link from 'next/link'

export const metadata = {
  title: 'Services — Wuwa Design Studio',
  description: 'Interior design services for residential and commercial projects.',
}

export default function ServicesPage() {


  return (
    <div className="pt-20 md:pt-24">


      {/* Process section */}
      <div className="bg-dark text-cream px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-widest2 uppercase text-stone mb-12">How we work</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We chat, we listen. We learn how you live, what you love, your budget, your concept and what you\'re really asking for.' },
              { step: '02', title: 'Design Fee Estimation', desc: 'Estimated design fees based on scope of services' },
              { step: '03', title: 'Site Measurement & Concept', desc: 'Concept mood board proposal & space planning.' },
              { step: '04', title: 'Design Development', desc: '3D visual presentation and discussion of design details.' },
              { step: '05', title: 'Quotation', desc: 'Explanation on materials used, design details, adjustments of items to fit budget before proceeding with construction drawings of final design.' },
              { step: '06', title: 'Construction Drawing', desc: 'Construction drawings will be produced and discussed with owner in details including material selections discussion.' },
              { step: '07', title: 'Delivery', desc: 'We oversee installation and the whole process of renovation, ensuring the vision translates perfectly into the finished space.' },
              { step: '08', title: 'Hand Over', desc: 'Final site inspection with owner, photoshoot session before handover.' },
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
        <h2 className="font-display text-4xl font-light mb-3">Would like to know more?</h2>
        <p className="font-body text-sm text-muted mb-10">Reach out to us, don't be shy</p>
        <Link
          href="/contact"
          className="inline-block border border-dark px-10 py-4 font-body text-xs tracking-widest2 uppercase hover:bg-dark hover:text-cream transition-all duration-500"
        >
          LET'S CHAT
        </Link>
      </div>
    </div>
  )
}
