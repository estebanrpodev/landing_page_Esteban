import { ArrowRight, Sparkles } from 'lucide-react'
import GithubIcon from './GithubIcon'
import profileImage from '../assets/profile.png'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-24 overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-10">
          <div className="w-full max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Disponible para nuevos retos
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
              Hola, soy{' '}
              <span className="block text-zinc-100">Esteban Montoya Restrepo</span>
            </h1>

            <h2 className="mt-6 text-xl font-medium text-zinc-300 sm:text-2xl">
              Ingeniero en Sistemas &amp; Desarrollador Full Stack
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 lg:mx-0">
              Construyo aplicaciones web completas, desde interfaces limpias y
              responsivas hasta APIs y bases de datos. Enfocado en aprender rápido,
              resolver problemas y entregar software que se siente simple.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#proyectos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 sm:w-auto"
              >
                Ver Proyectos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="https://github.com/estebanrpodev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-800 sm:w-auto"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          <div className="relative shrink-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-110 rounded-full bg-emerald-500/20 blur-3xl"
            />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-zinc-800 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]">
              <img
                src={profileImage}
                alt="Foto de perfil de Esteban Montoya Restrepo"
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-zinc-800 bg-zinc-900/90 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              Full Stack Junior
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
