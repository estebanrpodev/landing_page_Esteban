import { Award, BookOpen, GraduationCap, Route } from 'lucide-react'
import SectionHeading from './SectionHeading'

const items = [
  {
    icon: GraduationCap,
    period: '2024 — En curso',
    title: 'Ingeniería en Sistemas',
    institution: 'CUN — Corporación Unificada Nacional',
    description:
      'Actualmente cursando 5.º semestre, con énfasis en desarrollo de software, bases de datos y arquitectura de sistemas.',
    current: true,
  },
  {
    icon: Award,
    period: '2025 — 2026',
    title: 'Tecnólogo en Análisis y Desarrollo de Software',
    institution: 'SENA',
    description:
      'Formación técnica orientada al ciclo completo de desarrollo: análisis, diseño, implementación y pruebas de aplicaciones.',
    current: false,
  },
  {
    icon: BookOpen,
    period: '2024',
    title: 'Bachiller Técnico en Turismo',
    institution: 'I.E. Pradito',
    description:
      'Bases en atención al cliente, comunicación y organización, habilidades que hoy aplico en el trabajo en equipo.',
    current: false,
  },
]

export default function Timeline() {
  return (
    <section id="formacion" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          icon={Route}
          eyebrow="Formación académica"
          title="Mi camino de aprendizaje"
          description="Formación técnica y académica que sostiene mi perfil como desarrollador."
        />

        <ol className="mt-12 space-y-8 border-l-2 border-zinc-800 pl-8 md:pl-12">
          {items.map(({ icon: Icon, period, title, institution, description, current }) => (
            <li key={title} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-zinc-950 bg-emerald-400 ring-4 ring-emerald-500/10 md:-left-[57px]"
              />

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-zinc-900 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {period}
                  </span>
                  {current ? (
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                      En curso
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-zinc-100">{title}</h3>
                <p className="mt-1 text-sm font-medium text-zinc-400">{institution}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
