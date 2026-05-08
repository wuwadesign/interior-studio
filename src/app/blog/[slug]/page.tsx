import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Wuwa Design Studio`,
    description: post.description,
  }
}

// Simple markdown to HTML converter — no external deps needed
function parseMarkdown(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .split('\n\n')
    .map(block => {
      if (block.startsWith('<h') || block.startsWith('<ul')) return block
      if (block.trim() === '') return ''
      return `<p>${block.trim()}</p>`
    })
    .join('\n')
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const formattedDate = new Date(post.date).toLocaleDateString('en-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const htmlContent = parseMarkdown(post.content)

  return (
    <main className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-body text-xs tracking-widest uppercase text-muted">
              {post.category}
            </span>
            <span className="text-muted/40">·</span>
            <span className="font-body text-xs text-muted">{post.readTime}</span>
            <span className="text-muted/40">·</span>
            <span className="font-body text-xs text-muted">{formattedDate}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-light leading-[1.1] text-dark mb-6">
            {post.title}
          </h1>
          <p className="font-body text-sm text-muted leading-relaxed border-t border-dark/10 pt-6">
            {post.description}
          </p>
        </div>

        {/* Article body */}
        <article
          className="
            [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-light [&>h2]:text-dark [&>h2]:mt-12 [&>h2]:mb-4
            [&>h3]:font-display [&>h3]:text-xl [&>h3]:font-light [&>h3]:text-dark [&>h3]:mt-8 [&>h3]:mb-3
            [&>p]:font-body [&>p]:text-sm [&>p]:text-muted [&>p]:leading-relaxed [&>p]:mb-6
            [&>ul]:mb-6 [&>ul]:pl-4
            [&_li]:font-body [&_li]:text-sm [&_li]:text-muted [&_li]:leading-relaxed [&_li]:mb-2 [&_li]:list-disc
            [&_strong]:text-dark [&_strong]:font-medium
          "
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-dark/10">
          <p className="font-body text-xs tracking-widest2 uppercase text-muted mb-4">
            Ready to start?
          </p>
          <h2 className="font-display text-3xl font-light text-dark mb-6">
            Let's talk about your home.
          </h2>
          <a
            href="https://wa.me/60175002582?text=Hi%20Wuwa%20Design%2C%20I'd%20like%20to%20get%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dark text-cream font-body text-sm tracking-wide px-6 py-3 hover:bg-dark/80 transition-colors"
          >
            Chat with us on WhatsApp →
          </a>
        </div>

      </div>
    </main>
  )
}