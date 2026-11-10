import { Code2, Server, Wrench } from 'lucide-react'
import SectionHeading from './SectionHeading'

const groups = [
  {
    icon: Code2,
    title: 'Frontend',
    description: 'Interfaces modernas y responsivas.',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    icon: Server,
    title: 'Backend & DB',
    description: 'Lógica de servidor y persistencia.',
    skills: ['Node.js', 'Python', 'MySQL'],
  },
  {
    icon: Wrench,
    title: 'Herramientas',
    description: 'Flujo de trabajo y productividad.',
    skills: ['Git', 'GitHub', 'Figma', 'Gemini', 'OpenCode'],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          icon={Code2}
          eyebrow="Stack tecnológico"
          title="Habilidades que pongo en práctica"
          description="Tecnologías con las que construyo, colaboro y sigo aprendiendo cada día."
          align="center"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {groups.map(({ icon: Icon, title, description, skills }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-zinc-900 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition-all duration-300 group-hover:bg-emerald-500/20">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
                  <p className="text-sm text-zinc-500">{description}</p>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-300 hover:border-emerald-500/40 hover:text-zinc-100"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
