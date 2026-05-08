import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-cream py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div>
            <h3 className="font-body text-3xl uppercase tracking-widest mb-4 leading-none">Wuwa Design Studio</h3>
            <p className="font-body text-sm text-stone leading-relaxed max-w-xs">
              
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-stone mb-6">Navigation</p>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/projects', label: 'Projects' },
                { href: '/services', label: 'Services Process' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/70 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs tracking-widest2 uppercase text-stone mb-6">Get in touch</p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:wuwadesign@gmail.com"
                className="font-body text-sm text-cream/70 hover:text-cream transition-colors duration-300"
              >
                wuwadesign@gmail.com
              </a>
              <a
                href="https://wa.me/60175002582"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-cream/70 hover:text-cream transition-colors duration-300"
              >
                +6017 5002582 (WhatsApp)
              </a>
              <p className="font-body text-sm text-cream/50 mt-2">
                Kuala Lumpur, Malaysia
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/wuwadesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-widest uppercase text-stone hover:text-cream transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://xhslink.com/m/7cYMsTqWWl7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-widest uppercase text-stone hover:text-cream transition-colors duration-300"
              >
                Rednote
              </a>
              <a
              href="https://www.facebook.com/profile.php?id=100084153769952"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-widest uppercase text-stone hover:text-cream transition-colors duration-300"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-body text-xs text-stone/50">
            © 2026 Wuwa Design Studio. (SA0585225-v) All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
