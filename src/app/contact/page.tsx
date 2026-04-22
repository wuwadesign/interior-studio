export const metadata = {
  title: 'Contact — Wuwa Design Studio',
  description: 'Get in touch with Wuwa Design Studio to begin your interior design project.',
}

export default function ContactPage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto py-16 md:py-20 border-b border-stone/20">
        <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-4">Reach out</p>
        <h1 className="font-display text-5xl md:text-7xl font-light leading-tight">
          Let&apos;s start a<br />
          <span className="italic">conversation</span>
        </h1>
      </div>

      {/* Contact grid */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left — info */}
        <div className="flex flex-col gap-12">
          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-5">Studio</p>
            <p className="font-body text-sm text-dark leading-relaxed">
              Bukit Puchong<br />
              Selangor<br />
              Malaysia
            </p>
          </div>
          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-5">Contact</p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:wuwadesign@gmail.com"
                className="font-body text-sm text-dark hover:text-accent transition-colors duration-300"
              >
                wuwadesign@gmail.com
              </a>
              <a
                href="tel:+60312345678"
                className="font-body text-sm text-dark hover:text-accent transition-colors duration-300"
              >
                +6017 5002582
              </a>
            </div>
          </div>
          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-5">Follow</p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/wuwadesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-dark hover:text-accent transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://xhslink.com/m/7cYMsTqWWl7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-dark hover:text-accent transition-colors duration-300"
              >
                REDNOTE   
              </a>
            </div>
          </div>
          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-5">Studio hours</p>
            <p className="font-body text-sm text-muted leading-relaxed">
              Monday – Friday<br />
              9:00 am – 6:00 pm MYT
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div>
          <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-8">
            Send us a message
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

function ContactForm() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-body text-xs tracking-widest uppercase text-muted">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            className="border-b border-stone/40 bg-transparent py-3 font-body text-sm text-dark placeholder:text-muted/40 focus:outline-none focus:border-dark transition-colors duration-300"
            placeholder="Nur"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-body text-xs tracking-widest uppercase text-muted">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            className="border-b border-stone/40 bg-transparent py-3 font-body text-sm text-dark placeholder:text-muted/40 focus:outline-none focus:border-dark transition-colors duration-300"
            placeholder="Aisyah"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-body text-xs tracking-widest uppercase text-muted">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="border-b border-stone/40 bg-transparent py-3 font-body text-sm text-dark placeholder:text-muted/40 focus:outline-none focus:border-dark transition-colors duration-300"
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-body text-xs tracking-widest uppercase text-muted">
          Project type
        </label>
        <select
          name="projectType"
          className="border-b border-stone/40 bg-transparent py-3 font-body text-sm text-dark focus:outline-none focus:border-dark transition-colors duration-300 appearance-none"
        >
          <option value="" disabled>Select one</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="renovation">Renovation</option>
          <option value="consultation">Consultation only</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-body text-xs tracking-widest uppercase text-muted">
          Tell us about your project
        </label>
        <textarea
          name="message"
          rows={5}
          className="border-b border-stone/40 bg-transparent py-3 font-body text-sm text-dark placeholder:text-muted/40 focus:outline-none focus:border-dark transition-colors duration-300 resize-none"
          placeholder="Location, size, timeline, budget range, what you&apos;re hoping to create..."
        />
      </div>

      <button
        type="button"
        className="mt-4 self-start border border-dark px-10 py-4 font-body text-xs tracking-widest2 uppercase hover:bg-dark hover:text-cream transition-all duration-500"
      >
        Send message
      </button>

      <p className="font-body text-xs text-muted/50 leading-relaxed">
        We respond to all enquiries within 2 business days.
      </p>
    </div>
  )
}
