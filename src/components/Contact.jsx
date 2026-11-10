import { Mail, MessageSquare, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contacto" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 px-6 py-14 text-center sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[100px]"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <MessageSquare className="h-7 w-7" aria-hidden="true" />
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              ¿Trabajamos juntos?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Estoy abierto a oportunidades junior, prácticas y proyectos
              freelance. Escríbeme y conversemos sobre cómo puedo aportar a tu
              equipo.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:estebanrpo2008@gmail.com"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                estebanrpo2008@gmail.com
              </a>

              <a
                href="tel:+573135685882"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/60 px-6 py-4 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-zinc-100"
              >
                <Phone className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                +57 313-568-5882
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
