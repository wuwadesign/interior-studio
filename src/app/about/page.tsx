import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About — Wuwa Design Studio',
  description: 'A Kuala Lumpur interior design practice working across Malaysia and Southeast Asia.',
}

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85"
          alt="Studio interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/20" />
        <div className="absolute bottom-10 left-6 md:left-16">
          <h1 className="font-display text-5xl md:text-7xl font-light text-cream leading-tight">
            About<br /><span className="italic">the studio</span>
          </h1>
        </div>
      </div>

      {/* Studio statement */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-6">Our philosophy</p>
            <h2 className="font-display text-3xl md:text-4xl font-light leading-snug">
              We design for how people{' '}
              <span className="italic">actually</span> live — not how a magazine imagines they do.
            </h2>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <p className="font-body text-sm text-muted leading-relaxed">
              Wuwa Design Studio was founded in 2016 with a simple conviction: that good design should be deeply personal. Not trendy. Not show-offy. Just honest, considered, and built to last.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed">
              We work with a small number of clients each year, dedicating full attention to each project. Our process begins with listening — to the rhythms of your daily life, to the light in the space, to what you&apos;ve never been able to name but always wanted to feel.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed">
              We are based in Kuala Lumpur and work across Malaysia and Southeast Asia.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto pb-24 border-t border-stone/20 pt-16">
        <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-12">The team</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: 'Nur Atika Yusoff',
              role: 'Founder & Principal Designer',
              image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=85',
              bio: 'With 15 years of experience across KL, Singapore, and London, Atika brings a measured sensibility shaped by global practice and a deep love of craft.',
            },
            {
              name: 'Haziq Rahman',
              role: 'Senior Interior Designer',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85',
              bio: 'Haziq brings meticulous attention to technical detail and a particular gift for furniture and material specification.',
            },
            {
              name: 'Siti Nadhirah',
              role: 'Project Coordinator',
              image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85',
              bio: 'Siti ensures every project runs with the same care and precision we bring to the design itself — on time, on budget, without surprises.',
            },
          ].map((member) => (
            <div key={member.name}>
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="font-display text-xl font-light">{member.name}</h3>
              <p className="font-body text-xs tracking-widest uppercase text-accent mt-1 mb-3">{member.role}</p>
              <p className="font-body text-sm text-muted leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Awards / recognition strip */}
      <div className="bg-dark text-cream py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-widest2 uppercase text-stone mb-10">Recognition</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { year: '2024', award: 'Best Residential Interior — IDA Malaysia' },
              { year: '2023', award: 'Emerging Practice — MIID Awards' },
              { year: '2022', award: 'Highly Commended — ASEAN Interior Design Awards' },
              { year: '2021', award: 'Design Excellence — Property Guru Awards' },
            ].map((a) => (
              <div key={a.award} className="border-t border-cream/10 pt-5">
                <p className="font-body text-xs text-stone mb-2">{a.year}</p>
                <p className="font-display text-base font-light italic text-cream/80">{a.award}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
          Ready to begin a project?
        </h2>
        <Link
          href="/contact"
          className="inline-block border border-dark px-10 py-4 font-body text-xs tracking-widest2 uppercase hover:bg-dark hover:text-cream transition-all duration-500"
        >
          Contact us
        </Link>
      </div>
    </div>
  )
}
