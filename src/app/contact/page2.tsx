'use client'
export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/images/contact-hero.jpg"
          alt="Wuwa Design Studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="font-body text-xs tracking-widest2 uppercase text-cream/70 mb-6">
            Wuwa Design Studio
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-10 leading-tight">
            Get Your Free Quote Today
          </h1>
          
            href="https://wa.me/60175002582"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cream px-10 py-4 font-body text-xs tracking-widest2 uppercase text-cream hover:bg-cream hover:text-dark transition-all duration-500"
          >
            Free Quote
          </a>
        </div>
      </section>
    </div>
  )
}