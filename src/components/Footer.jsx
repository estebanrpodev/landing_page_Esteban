import { Mail } from 'lucide-react'
import GithubIcon from './GithubIcon'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-800/80 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
        <p className="text-center text-sm text-zinc-500 md:text-left">
          © {year} Esteban Montoya Restrepo. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/estebanrpodev"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-all duration-300 hover:border-emerald-500/40 hover:text-emerald-400"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:estebanrpo2008@gmail.com"
            aria-label="Enviar correo electrónico"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-all duration-300 hover:border-emerald-500/40 hover:text-emerald-400"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
