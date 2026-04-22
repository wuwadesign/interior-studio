import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function HomePage() {
  const featured = projects.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=90"
          alt="Interior design hero"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark/30" />

        {/* Hero text */}
        <div className="absolute bottom-16 left-6 md:left-16 right-6 md:right-auto">
          <p className="font-body text-xs tracking-widest2 uppercase text-cream/70 mb-6 line-decoration">
            Interior Design Studio
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-[1.05] max-w-2xl">
            Spaces that<br />
            <span className="italic">endure</span>
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-16 right-6 md:right-16 flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-cream/40 animate-pulse" />
          <span className="font-body text-xs tracking-widest text-cream/50 uppercase"
            style={{ writingMode: 'vertical-rl' }}>
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
              Wuwa Design Studio is a Kuala Lumpur–based interior design practice working across residential and commercial projects throughout Malaysia and Southeast Asia.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed">
              We believe in slow design — a process that takes time to understand how people live, what they value, and how a space can quietly serve them for decades.
            </p>
            <Link
              href="/about"
              className="font-body text-xs tracking-widest2 uppercase text-accent hover:text-dark transition-colors duration-300 mt-4 inline-flex items-center gap-3"
            >
              <span className="w-8 h-px bg-current" />
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="px-6 md:px-16 pb-28 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-3">
              Selected work
            </p>
            <h2 className="font-display text-3xl font-light">Recent Projects</h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-3 font-body text-xs tracking-widest2 uppercase text-muted hover:text-accent transition-colors duration-300"
          >
            View all
            <span className="w-8 h-px bg-current" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large left card */}
          <Link
            href={`/projects/${featured[0].id}`}
            className="project-card md:col-span-7 group relative overflow-hidden aspect-[4/3]"
          >
            <Image
              src={featured[0].coverImage}
              alt={featured[0].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="bg-cream/95 backdrop-blur-sm p-4">
                <p className="font-body text-xs tracking-widest text-muted uppercase mb-1">
                  {featured[0].location} — {featured[0].year}
                </p>
                <h3 className="font-display text-2xl font-light">{featured[0].title}</h3>
              </div>
            </div>
          </Link>

          {/* Right column — 2 stacked */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {[featured[1], featured[2]].map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="project-card group relative overflow-hidden aspect-[3/2]"
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-cream/95 backdrop-blur-sm p-3">
                    <p className="font-body text-xs tracking-widest text-muted uppercase mb-0.5">
                      {project.location} — {project.year}
                    </p>
                    <h3 className="font-display text-xl font-light">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex md:hidden">
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
                desc: 'Private homes, apartments, and penthouses crafted around the people who live in them.',
              },
              {
                title: 'Commercial',
                desc: 'Offices, hospitality, and retail spaces where identity is expressed through material and light.',
              },
              {
                title: 'Renovation',
                desc: 'Transforming existing spaces with respect for their history and ambition for their future.',
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
              href="/services"
              className="inline-flex items-center gap-4 font-body text-xs tracking-widest2 uppercase text-stone hover:text-cream transition-colors duration-300"
            >
              <span className="w-8 h-px bg-current" />
              Explore our services
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
