'use client'

import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const carouselImages = [
    '/images/thevale/Wuwa_The Vale_Deliverables_260423_07414-7.jpg',
    '/images/thevale/Wuwa_The Vale_Deliverables_260423_07449-10.jpg',
    '/images/thevale/Wuwa_The Vale_Deliverables_260423_07619-14.jpg',
    '/images/elmina green3/LIVING-7.jpg',
    '/images/elmina green3/LIVING-5.jpg',
    // add more images here
  ]

  const heroImages = [
    '/images/thevale/Wuwa_The Vale_Deliverables_260423_07414-7.jpg',
    '/images/thevale/Wuwa_The Vale_Deliverables_260423_07629-15.jpg',
    '/images/elmina green3/LIVING-9.jpg',
    // add more hero images here
  ]

  const [current, setCurrent] = useState(0)
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])
  return (
    <>
      {/* Hero */}
<section className="relative h-[100dvh] overflow-hidden">
  {heroImages.map((img, i) => (
    <div
      key={i}
      className="absolute inset-0 transition-opacity duration-1000"
      style={{ opacity: i === heroIndex ? 1 : 0 }}
    >
      <Image
        src={img}
        alt={`Hero image ${i + 1}`}
        fill
        priority={i === 0}
        className="object-cover"
      />
    </div>
  ))}
  <div className="absolute inset-0 bg-dark/30" />
  <div className="absolute bottom-16 left-6 right-6 md:left-[max(4rem,calc(50vw-42rem))] md:right-auto">
    <p className="font-body text-xs tracking-widest2 uppercase text-cream/70 mb-6 line-decoration">
      Interior Design Studio
    </p>
    <h1 className="font-display text-2xl md:text-4xl lg:text-6xl font-light text-cream leading-[1.05] max-w-2xl" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>
      We design beautiful homes in Kuala Lumpur <br />
      <span style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}>fully managed, from A-Z </span>
    </h1>
  </div>
  <div className="absolute bottom-16 right-6 md:right-16 flex flex-col items-center gap-3">
    <div className="w-px h-16 bg-cream/40 animate-pulse" />
    <span className="font-body text-xs tracking-widest text-cream/50 uppercase" style={{ writingMode: 'vertical-rl' }}>
      Scroll
    </span>
  </div>
</section>

{/* Stats strip */}
<section className="border-y border-dark/10 py-10 px-6 md:px-16">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
    {[
      { value: '90%', label: 'clients from referrals' },
      { value: '8+', label: 'Years designing in KL' },
      { value: 'Residential & Commercial', label: 'Project types' },
      { value: 'Concept to handover', label: 'Full turnkey delivery' },
    ].map(({ value, label }) => (
      <div key={label} className="flex flex-col gap-2 md:border-r md:border-dark/10 md:last:border-r-0 md:px-10 first:pl-0">
        <span className="font-display text-2xl md:text-3xl font-light text-dark">{value}</span>
        <span className="font-body text-xs tracking-widest uppercase text-muted">{label}</span>
      </div>
    ))}
  </div>
</section>

      {/* Intro statement */}
<section className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
  <div className="flex flex-col gap-10 max-w-3xl">
    <p className="font-body text-xs tracking-widest2 uppercase text-muted">
      About the studio
    </p>
    <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.1] text-dark">
      For homeowners who want a beautiful, liveable home without the renovation stress. We handle everything —{' '}
      <span className="italic">so you don't have to.</span>
    </h2>
    <div className="flex flex-col gap-6">
      <p className="font-body text-sm text-muted leading-relaxed">
        We help home owners in Kuala Lumpur turn their property into a home they love — handling everything from space planning and 3D concepts to materials, contractors and final handover.
      </p>
    </div>
     <div className="flex flex-col gap-3">
      <a
        href="https://wa.me/60175002582?text=Hi%20Wuwa%20Design%2C%20I'd%20like%20to%20get%20a%20free%20quote"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center self-start gap-2 bg-dark text-cream font-body text-sm tracking-wide px-6 py-3 hover:bg-dark/80 transition-colors"
      >
        Get a free quote on WhatsApp →
      </a>
      <a
        href="#projects"
        className="font-body text-xs text-muted tracking-wide hover:text-dark transition-colors self-start"
      >
        See some of our completed projects ↓
      </a>
    </div>
  </div>
</section>

      {/* Featured projects — Carousel */}
      <section className="pb-28">
        <div className="px-6 md:px-16 max-w-7xl mx-auto flex justify-between items-end mb-12">
          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-3">
              Selected work
            </p>
            <h2 className="font-display text-3xl font-light">Our Work — real homes and spaces</h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-3 font-body text-xs tracking-widest2 uppercase text-muted hover:text-accent transition-colors duration-300"
          >
            View all
            <span className="w-8 h-px bg-current" />
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative w-full aspect-[4/3] max-w-3xl mx-auto overflow-hidden">
          {carouselImages.map((img, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <Image
                src={img}
                alt={`Featured work ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-cream w-4' : 'bg-cream/40'}`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream text-2xl px-3 py-2"
          >
            ←
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % carouselImages.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream text-2xl px-3 py-2"
          >
            →
          </button>
        </div>

        <div className="mt-8 flex md:hidden px-6">
          <Link
            href="/projects"
            className="font-body text-xs tracking-widest2 uppercase text-muted hover:text-accent transition-colors duration-300 inline-flex items-center gap-3"
          >
            View all projects
            <span className="w-8 h-px bg-current" />
          </Link>
        </div>
      </section>

      {/* Services strip */}
<section className="bg-dark text-cream py-24 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    <p className="font-body text-xs tracking-widest2 uppercase text-stone mb-12">
      What we do
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {[
        {
          title: 'Residential',
          desc: 'Whether it\'s your apartment or a landed home, we design around how you actually live — your routines, your family, your style. No cookie-cutter layouts.',
        },
        {
          title: 'Commercial',
          desc: 'Offices, cafes and retail spaces that reflect who you are and make people want to stay. We translate your brand into a space that works hard for your business.',
        },
        {
          title: 'Renovation',
          desc: 'Already own a property that needs refresh? We redesign existing spaces — big or small, to match your needs. We handle demolition, redesign and rebuild.',
        },
      ].map((s) => (
        <div key={s.title} className="border-t border-cream/10 pt-8">
          <h3 className="font-display text-2xl font-light italic mb-4">{s.title}</h3>
          <p className="font-body text-sm text-stone/70 leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-14">
      <Link
        href="/projects"
        className="inline-flex items-center gap-4 font-body text-xs tracking-widest2 uppercase text-stone hover:text-cream transition-colors duration-300"
      >
        <span className="w-8 h-px bg-current" />
        Explore our completed projects
      </Link>
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="py-24 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-12">
      What our clients say
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
      {[
        {
          quote: 'Initially we just wanted to decor the house ourselves, after seeing your 3D visuals especially the wet kitchen for my wife, I know I have to engage wuwa for the design and build services. Thanks for making our new house just the way we wanted it.',
          name: 'Za** & Ai**',
          project: '3-bedroom terrace, Shah Alam',
        },
        {
          quote: 'As first-time homeowner I had no idea where to start. They walked me through every decision without any pressure. Most importantly they didn\'t hardsell anything, they really followed my tight budget.',
          name: 'Ms Foong',
          project: 'Condominium, Sri Damansara',
        },
        {
          quote: 'They finished on schedule and within budget. I didn\'t have to chase them for dateline, it\s my first time renovating, I was quite worried in the beginning but seeing how they supervised the site, I was less worried.',
          name: 'Michelle T.',
          project: 'Landed home, Puchong',
        },

      ].map((t) => (
        <div key={t.name} className="border-t border-dark/10 pt-8 flex flex-col gap-6">
          <p className="font-display text-xl font-light italic leading-relaxed text-dark">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div>
            <p className="font-body text-sm text-dark">{t.name}</p>
            <p className="font-body text-xs text-muted tracking-wide mt-1">{t.project}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Risk Reversal */}
<section className="py-24 px-6 md:px-16 bg-dark/[0.03]">
  <div className="max-w-7xl mx-auto">
    <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-12">
      Our promise to you
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
      {[
        {
          title: 'Honest estimate upfront',
          desc: 'Before any design work begins, we give you a clear estimate of fees and expected renovation costs. No surprises, no hidden charges.',
        },
        {
          title: 'Revisions until you\'re happy',
          desc: 'Not satisfied with the initial concept? We revise it until you are — at no extra cost. You\'ll never be pressured to approve something you\'re unsure about.',
        },
        {
          title: 'We manage everything',
          desc: 'We handle contractor coordination, site visits, and quality checks throughout the build. You get updates without having to chase anyone.',
        },
        {
          title: 'Free consultation, no obligation',
          desc: 'Our first conversation is completely free. If we\'re not the right fit for your project, we\'ll tell you honestly — no hard sell, ever.',
        },
      ].map((item) => (
        <div key={item.title} className="border-t border-dark/10 pt-8 flex flex-col gap-3">
          <h3 className="font-display text-xl font-light italic text-dark">{item.title}</h3>
          <p className="font-body text-sm text-muted leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* FAQ */}
<section className="py-24 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-12">
      Frequently asked questions
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
      {[
        {
          q: 'How much does interior design cost?',
          a: 'Design fees for residential projects typically start from RM5,000 depending on the size and scope of work. Renovation costs are separate and vary by finish level. We will give you a clear, honest estimate in our very first conversation before you commit to anything.',
        },
        {
          q: 'How long does a typical renovation take?',
          a: 'Most of our residential projects, a standard terrace house for example, takes between 12-20 weeks from design sign-off to handover, depending on scope of work. We\'ll give you a realistic timeline at the start and we will stick to it. ',
        },
        {
          q: 'Do I need to manage the contractors myself?',
          a: 'No. That\'s one of the biggest things we take off your plate. We manage all contractors and site visits throughout the build. You get regular updates without having to chase anyone.',
        },
        {
          q: 'How accurate are your 3D designs?',
          a: 'Our visuals are created with real-world execution in mind. What you see is designed to be achievable — not just for presentation, but for actual build.',
        },
        {
          q: 'What if i don\'t like the initial design concept (moodboard).',
          a: 'We revise the concept until you are happy — at no extra cost. You will never be pressured to approve something you are unsure about.',
        },
        {
          q: 'Do you only work in Puchong?',
          a: 'We are based in Puchong but we take on projects across Klang Valley and beyond. Drop us a message and we\'ll let you know if we can serve your area.',
        },
      ].map((item) => (
        <div key={item.q} className="border-t border-dark/10 pt-6 flex flex-col gap-3">
          <h3 className="font-display text-xl font-light italic text-dark">
            {item.q}
          </h3>
          <p className="font-body text-sm text-muted leading-relaxed">
            {item.a}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CTA Banner */}
<section className="py-32 px-6 md:px-16 text-center">
  <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-6">
    Start a conversation
  </p>
  <h2 className="font-display text-5xl md:text-7xl font-light leading-tight mb-10">
    Ready to turn your new home<br />
    into something you&apos;ll <span className="italic text-accent">love?</span>
  </h2>
  <div className="flex flex-col items-center gap-4">
    <a
      href="https://wa.me/60175002582?text=Hi%20Wuwa%20Design%2C%20I'd%20like%20to%20get%20a%20free%20quote"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-dark text-cream px-12 py-4 font-body text-xs tracking-widest2 uppercase hover:bg-dark/80 transition-all duration-500"
    >
      Get my free quote on WhatsApp →
    </a>
    <p className="font-body text-xs text-muted">
      No hard sell. We reply within 24 hours.
    </p>
  </div>
</section>
    </>
  )
}