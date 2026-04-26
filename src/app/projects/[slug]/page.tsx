import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Wuwa Design Studio`,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.id === params.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <article className="pt-20 md:pt-24">
      

      {/* Project header */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Title */}
          <div className="md:col-span-7">
            <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-5 line-decoration">
              {project.category}
            </p>
            <h1 className="font-outfit text-4xl md:text-5xl font-light leading-[1.05] mb-6">
              {project.title}
            </h1>
            <p className="font-outfit text-sm text-muted">
              {project.location}
            </p>
          </div>

          {/* Details sidebar */}
          <div className="md:col-span-5 md:pt-4">
            <div className="border-l-2 border-stone/30 pl-8 flex flex-col gap-6">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted/60 mb-1">Scope</p>
                <p className="font-body text-sm text-dark">{project.details.scope}</p>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted/60 mb-1">Area</p>
                <p className="font-body text-sm text-dark">{project.details.area}</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Image gallery */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto pb-20">
        {/* All images — 2 per row */}
        {project.images.length > 0 && (
          <div className={`grid gap-8 px-16 ${project.id === 'thongbowlioi' || project.id === 'officeconcept' || project.id === 'mapleresidence' ? 'grid-cols-1' : 'grid-cols-2'}`}>
            {project.images.map((img, i) => (
              <div key={i}>
                <Image
  src={img}
  alt={`${project.title} — view ${i + 1}`}
  width={600}
  height={800}
  className={`h-auto ${project.id === 'thongbowlioi' || project.id === 'officeconcept' || project.id === 'mapleresidence' ? 'w-1/2 mx-auto' : 'w-full'}`}
/>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Back to projects */}
      <div className="px-6 md:px-16 py-4">
        <Link
          href="/projects"
          className="font-body text-xs tracking-widest2 uppercase text-muted hover:text-dark transition-colors duration-300 inline-flex items-center gap-3"
        >
          <span className="w-8 h-px bg-current" />
          All projects
        </Link>
      </div>

      {/* Next project */}
      <Link
        href={`/projects/${nextProject.id}`}
        className="group block mt-10 relative overflow-hidden h-60 md:h-80"
      >
        <Image
          src={nextProject.coverImage}
          alt={nextProject.title}
          fill
          className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-dark/50 group-hover:bg-dark/40 transition-colors duration-500" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-cream text-center">
          <p className="font-body text-xs tracking-widest2 uppercase text-cream/60 mb-3">Next project</p>
          <h2 className="font-display text-4xl md:text-6xl font-light italic">
            {nextProject.title}
          </h2>
          <p className="font-outfit text-xs text-cream/50 mt-2">{nextProject.location}</p>
        </div>
      </Link>
    </article>
  )
}