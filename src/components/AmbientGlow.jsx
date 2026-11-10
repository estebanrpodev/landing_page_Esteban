export default function AmbientGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-emerald-500/20 blur-[100px] lg:blur-[120px]" />
      <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-emerald-500/15 blur-[100px] lg:blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-emerald-400/10 blur-[100px] lg:blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.06),_transparent_55%)]" />
    </div>
  )
}
