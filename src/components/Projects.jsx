import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import GithubIcon from './GithubIcon'
import SectionHeading from './SectionHeading'
import capiImage from '../assets/project-1-placeholder.svg'
import documetonImage from '../assets/project-2-placeholder.svg'

const projects = [
  {
    title: 'CapiFront — Finanzas personales',
    description:
      'Dashboard de finanzas personales con autenticación, gráficos, metas de ahorro, presupuestos y un asistente IA integrado (CapiBot).',
    image: capiImage,
    tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/josuealvarez21/CapiFront',
    highlight: 'Frontend',
  },
  {
    title: 'Documeton — Consolidado de reportes',
    description:
      'Script en Python con pandas que consolida reportes de ventas de varias sucursales, limpia los datos y genera Excel, gráficos y un resumen ejecutivo de forma automática.',
    image: documetonImage,
    tags: ['Python', 'pandas', 'Matplotlib', 'Automatización'],
    github: 'https://github.com/estebanrpodev/documeton-DataFrame',
    highlight: 'Data',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          icon={FolderGit2}
          eyebrow="Proyectos destacados"
          title="Trabajo real, aprendizaje constante"
          description="Una muestra de los proyectos donde he aplicado mis habilidades de desarrollo full stack."
          align="center"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-zinc-700/80 bg-zinc-950/70 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md">
                  {project.highlight}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs font-medium text-zinc-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-4 text-xl font-semibold text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-emerald-500/40 hover:text-emerald-400"
                >
                  <GithubIcon className="h-4 w-4" />
                  Ver código
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
