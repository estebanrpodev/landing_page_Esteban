import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Formación', href: '#formacion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6 md:h-20 md:px-12">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="group flex items-center gap-2.5"
          aria-label="Ir al inicio"
        >
          <span className="text-sm font-semibold tracking-wide text-zinc-100 sm:text-base">
            Esteban<span className="text-zinc-500">.dev</span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-zinc-400 transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:text-zinc-100 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 md:inline-flex"
          >
            Contactar
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-300 transition-colors duration-300 hover:border-zinc-700 hover:text-zinc-100 md:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-zinc-800/80 bg-zinc-950/95 backdrop-blur-md md:hidden"
        >
          <nav
            className="container mx-auto flex flex-col gap-1 px-6 py-4"
            aria-label="Navegación móvil"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:bg-zinc-900 hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-emerald-400"
            >
              Contactar
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
