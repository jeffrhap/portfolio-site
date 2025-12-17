export function GlowingOrbsBackground() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-emerald-400/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl" />
    </div>
  );
}

