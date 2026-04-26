'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Service Process' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-cream/95 backdrop-blur-sm border-b border-stone/20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-body text-xl md:text-2xl tracking-wider text-dark hover:text-accent transition-colors duration-300"
          >
            WUWA DESIGN STUDIO <span className="italic"></span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body text-xs tracking-widest2 uppercase transition-colors duration-300 relative group ${
                    pathname === link.href ? 'text-accent' : 'text-dark hover:text-accent'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-dark transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-dark transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-dark transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream flex flex-col justify-center px-10 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-8">
          {links.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              className={`transition-all duration-500 ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link
                href={link.href}
                className="font-display text-4xl font-light italic text-dark hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-16 font-body text-xs tracking-widest text-muted uppercase">
          © 2026 Wuwa Design Studio
        </div>
      </div>
    </>
  )
}
