import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Projects — Wuwa Design Studio',
  description: 'Interior design and renovation projects across Klang Valley  — Shah Alam, Damansara, Petaling Jaya, Subang, Mont Kiara, Hartamas, Kepong, Old Klang Road, Oug, Puchong, Sri Damansara and Kuala Lumpur. Residential homes, commercial spaces, office and F&B restaurants by Wuwa Design Studio.',
}

export default function ProjectsPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Page header */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto py-12 border-b border-stone/20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-3">
              Our work
            </p>
            <h1 className="font-body text-3xl md:text-4xl font-light">PROJECTS</h1>
          </div>
          
        </div>
      </div>

      {/* Projects grid - alternating sizes */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} size="wide" index={i + 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  size,
  index,
}: {
  project: (typeof projects)[0]
  size: 'large' | 'medium' | 'small' | 'wide'
  index: number
}) {
  const aspectMap = {
    large: 'aspect-[3/4]',
    medium: 'aspect-[4/3]',
    small: 'aspect-square',
    wide: 'aspect-[16/9]',
  }

  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <div className={`project-card relative overflow-hidden ${aspectMap[size]}`}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-700" />

        {/* Index number */}
        <span className="absolute top-4 left-4 font-display text-xs text-cream/0 group-hover:text-cream/60 transition-colors duration-500 italic">
          {String(index).padStart(2, '0')}
        </span>
      </div>

      {/* Card info below image */}
      <div className="pt-4 pb-2 border-b border-stone/20 flex justify-between items-end">
        <div>
          <h2 className="font-display text-xl md:text-2xl font-light group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h2>
          <p className="font-body text-xs text-muted mt-1">
            {project.location}
          </p>
        </div>
        
      </div>
    </Link>
  )
}
