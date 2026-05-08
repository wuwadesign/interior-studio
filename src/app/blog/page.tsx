import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Design Tips & Renovation Guides | Wuwa Design Studio KL',
  description: 'Practical guides for homeowners in Kuala Lumpur — renovation costs, design tips, and what to expect when renovating your home in Klang Valley.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-4">
          Resources
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-light leading-[1.1] text-dark">
          Renovation guides for <br />
          <span className="italic">KL homeowners</span>
        </h1>
        <p className="font-body text-sm text-muted leading-relaxed mt-6 max-w-xl">
          Honest, practical articles to help you plan your renovation — from budgeting to choosing the right designer in Klang Valley.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="font-body text-sm text-muted">Articles coming soon.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 border-t border-dark/10 pt-8 hover:border-dark/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="font-body text-xs tracking-widest uppercase text-muted">
                  {post.category}
                </span>
                <span className="text-muted/40">·</span>
                <span className="font-body text-xs text-muted">{post.readTime}</span>
              </div>
              <h2 className="font-display text-xl font-light leading-snug text-dark group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h2>
              <p className="font-body text-sm text-muted leading-relaxed line-clamp-3">
                {post.description}
              </p>
              <span className="font-body text-xs tracking-widest2 uppercase text-muted group-hover:text-dark transition-colors duration-300 inline-flex items-center gap-2 mt-auto">
                Read article
                <span className="w-6 h-px bg-current" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}