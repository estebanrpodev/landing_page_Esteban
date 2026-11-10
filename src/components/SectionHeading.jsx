export default function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignment =
    align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {Icon ? <Icon className="h-4 w-4 text-emerald-400" aria-hidden="true" /> : null}
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
