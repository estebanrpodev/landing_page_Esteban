import {
  ArrowRight,
  Building2,
  GraduationCap,
  Puzzle,
  UserRound,
  Zap,
} from 'lucide-react'
import SectionHeading from './SectionHeading'

const facts = [
  {
    icon: GraduationCap,
    label: 'Ingeniería en Sistemas',
    detail: 'CUN · 5.º semestre',
  },
  {
    icon: Building2,
    label: 'Tecnólogo A.D.S.O.',
    detail: 'SENA · 2025 - 2026',
  },
  {
    icon: Zap,
    label: 'Aprendizaje rápido',
    detail: 'Curiosidad constante',
  },
  {
    icon: Puzzle,
    label: 'Resolución de problemas',
    detail: 'Enfoque práctico',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              icon={UserRound}
              eyebrow="Sobre mí"
              title="Construyo soluciones con curiosidad y disciplina"
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              <p>
                Soy estudiante de Ingeniería en Sistemas en el CUN y Tecnólogo en
                Análisis y Desarrollo de Software del SENA. Me enfoco en el
                desarrollo full stack: desde interfaces claras y responsivas hasta
                APIs y bases de datos bien estructuradas.
              </p>
              <p>
                Me caracterizo por aprender rápido y por disfrutar los problemas
                que exigen pensar distinto. Trabajo con orden, comunicación
                constante y atención al detalle, buscando siempre que el resultado
                sea simple de usar y fácil de mantener.
              </p>
            </div>

            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-200"
            >
              Hablemos de tu proyecto
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {facts.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-100">{label}</p>
                  <p className="mt-1 text-xs text-zinc-500">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
