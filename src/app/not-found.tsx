import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-display italic text-stone text-7xl md:text-9xl font-light mb-4">404</p>
      <h2 className="font-display text-3xl font-light mb-4">Page not found</h2>
      <p className="font-body text-sm text-muted mb-10 max-w-xs">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-3 font-body text-xs tracking-widest2 uppercase text-accent hover:text-dark transition-colors duration-300"
      >
        <span className="w-8 h-px bg-current" />
        Back to home
      </Link>
    </div>
  )
}
