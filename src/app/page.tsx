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
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-[1.05] max-w-2xl" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>
            Where space<br />
            <span style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}>meets intentions</span>
          </h1>
        </div>
        <div className="absolute bottom-16 right-6 md:right-16 flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-cream/40 animate-pulse" />
          <span className="font-body text-xs tracking-widest text-cream/50 uppercase" style={{ writingMode: 'vertical-rl' }}>
            Scroll
          </span>
        </div>
      </section>

      {/* Intro statement */}
      <section className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-8">
              About the studio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.1] text-dark">
              We design interiors that are{' '}
              <span className="italic">deeply considered,</span>{' '}
              beautifully restrained, and built to endure.
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-body text-sm text-muted leading-relaxed">
              Wuwa Design Studio is a Kuala Lumpur–based interior design practice working across residential and commercial projects throughout Malaysia.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed">
              We provide space planning, design conceptualisation and construction - translating ideas into thoughtfully built spaces, shaped by how people use and experience them over time.
            </p>
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
            <h2 className="font-display text-3xl font-light">Explore Projects</h2>
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
                desc: 'Private homes, apartments, and penthouses crafted around the people who will live in them.',
              },
              {
                title: 'Commercial',
                desc: 'Offices, hospitality, and retail spaces where identity is expressed through material and light.',
              },
              {
                title: 'Renovation',
                desc: 'Transforming existing spaces with new intentions.',
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

      {/* CTA Banner */}
      <section className="py-32 px-6 md:px-16 text-center">
        <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-6">
          Start a conversation
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-light leading-tight mb-10">
          Let&apos;s design something<br />
          <span className="italic text-accent">remarkable</span> together.
        </h2>
        <Link
          href="/contact"
          className="inline-block border border-dark px-12 py-4 font-body text-xs tracking-widest2 uppercase hover:bg-dark hover:text-cream transition-all duration-500"
        >
          Get in touch
        </Link>
      </section>
    </>
  )
}