import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth - pointer events disabled per Spline guidance */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,255,255,0.12),rgba(0,0,0,0))]" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <p className="uppercase tracking-[0.3em] text-xs text-white/70">BMW M Series</p>
        <h1 className="mt-3 text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight">
          M4 Competition
        </h1>
        <p className="mt-4 max-w-xl text-white/80">
          A sleek, dark gray coupe engineered for precision. Twin-turbo power, razor-sharp handling, and an interior that glows with intent.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#build" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors">Configure</a>
          <a href="#gallery" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors">View Gallery</a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/80">
          <Spec label="0-60 mph" value="3.8s" />
          <Spec label="Horsepower" value="503 hp" />
          <Spec label="Torque" value="479 lb-ft" />
          <Spec label="Drivetrain" value="xDrive AWD" />
        </div>
      </div>
    </section>
  )
}

function Spec({ label, value }) {
  return (
    <div className="rounded-lg bg-white/5 border border-white/10 p-4">
      <div className="text-xs uppercase tracking-widest text-white/60">{label}</div>
      <div className="mt-1 text-xl font-semibold">{value}</div>
    </div>
  )
}
