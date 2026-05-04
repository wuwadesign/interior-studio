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
        { step: 'Step 1', title: 'A Free Chat', desc: 'We listen first. Tell us about your new home, your lifestyle and your budget. No jargon, no pressure. We want to understand how you actually live before we suggest anything.' },
        { step: 'Step 2', title: 'Honest Cost Estimate', desc: 'Before any design work starts, we will give you a clear estimate of design fees and renovation costs. No hidden fees, no bait-and-switch.' },
        { step: 'Step 3', title: 'Concept + Space Planning', desc: 'We will present a mood board and floor plan tailored to your brief. You will start to see how the space could feel and flow.' },
        { step: 'Step 4', title: '3D visuals & design details', desc: 'We bring the design to life in 3D so you can walk through your home before a single wall is touched.' },
        { step: 'Step 5', title: 'Materials & Final Budget', desc: 'We walk you through every material, fitting and finishing. We will also explain costs clearly — no surprise bills.' },
        { step: 'Step 6', title: 'Construction Drawings', desc: 'Detailed drawings go to contractors. We brief them and stay involved — you don\'t have to manage anyone.' },
        { step: 'Step 7', title: 'We Oversee the Build', desc: 'We handle site visits, contractor coordination and quality checks throughout. You get updates without having to chase anyone.' },
        { step: 'Step 8', title: 'Hand Over', desc: 'We inspect every corner with you before you move in. Professional photography included — your home documented at its best.' },
      ].map((p) => (
        <div key={p.step} className="border-t border-cream/10 pt-6">
          <span className="font-display italic text-stone/40 text-2xl">{p.step}</span>
          <h3 className="font-display text-2xl font-light mt-4 mb-3">{p.title}</h3>
          <p className="font-body text-sm text-stone/70 leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>

    {/* Budget anchor */}
    <div className="border-t border-cream/10 mt-16 pt-10 max-w-2xl">
      <p className="font-body text-sm text-stone/70 leading-relaxed">
        Every project is different — scope, size and finishes all affect the final number.
        What we can promise is a{' '}
        <span className="text-cream">clear, honest estimate in our first conversation,</span>{' '}
        before you commit to anything.
      </p>
      <a
        href="https://wa.me/60175002582?text=Hi%20Wuwa%20Design%2C%20I'd%20like%20to%20get%20a%20free%20quote"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center self-start gap-2 bg-cream text-dark font-body text-xs tracking-widest2 uppercase px-8 py-4 mt-8 hover:bg-stone transition-colors duration-300"
      >
        Get a free estimate on WhatsApp →
      </a>
    </div>
  </div>
</div>

      {/* CTA */}
      <div className="py-24 px-6 text-center">
        <h2 className="font-display text-4xl font-light mb-3">Curious what your home could look like? </h2>
        <p className="font-body text-sm text-muted mb-10">Let's talk — It's free, it's friendly and there's no obligation.</p>
        <Link
          href="/contact"
          className="inline-block border border-dark px-10 py-4 font-body text-xs tracking-widest2 uppercase hover:bg-dark hover:text-cream transition-all duration-500"
        >
          Chat On WhatsApp
        </Link>
      </div>
    </div>
  )
}
