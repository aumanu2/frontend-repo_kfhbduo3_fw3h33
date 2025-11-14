export function DesignSection() {
  return (
    <section id="design" className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Sculpted for Performance</h2>
        <p className="mt-3 text-white/80 max-w-3xl">
          Wide stance, aggressive kidney grille, carbon-fiber roof, and aerodynamic lines that cut through the air. The M4's design is as functional as it is striking.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Carbon Roof" desc="Lowers center of gravity and reduces weight for sharper handling." />
          <Card title="Air Curtains" desc="Channel airflow to reduce turbulence and improve efficiency." />
          <Card title="M Aerodynamics" desc="Diffusers, spoilers, and intakes engineered for stability at speed." />
        </div>
      </div>
    </section>
  )
}

export function PerformanceSection() {
  return (
    <section id="performance" className="relative bg-gradient-to-b from-black to-[#0a0a0a] text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Pure Driving Thrill</h2>
        <p className="mt-3 text-white/80 max-w-3xl">
          TwinPower Turbo inline-6 with 503 hp, adaptive M suspension, and available xDrive for relentless traction. Track-honed, road-ready.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Stat label="Top Speed" value="180 mph" />
          <Stat label="Brakes" value="M Compound" />
          <Stat label="Transmission" value="8-speed M Steptronic" />
        </div>
      </div>
    </section>
  )
}

export function GallerySection() {
  return (
    <section id="gallery" className="relative bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Gallery</h2>
        <p className="mt-3 text-white/80 max-w-3xl">Take in the details from every angle.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
              <div className="absolute inset-0 grid place-items-center text-white/50 text-sm">Image {i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SpecsSection() {
  return (
    <section id="specs" className="relative bg-[#0a0a0a] text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Key Specifications</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SpecRow label="Engine" value="3.0L TwinPower Turbo I6" />
          <SpecRow label="Output" value="503 hp / 479 lb-ft" />
          <SpecRow label="0-60 mph" value="3.8 seconds" />
          <SpecRow label="Drive" value="Rear or xDrive AWD" />
          <SpecRow label="Transmission" value="8-speed M Steptronic" />
          <SpecRow label="Brakes" value="M Compound / Carbon Ceramic" />
        </div>
      </div>
    </section>
  )
}

function Card({ title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-white/70 text-sm">{desc}</p>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="text-white/60 text-sm">{label}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  )
}

function SpecRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="text-white/60">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  )
}
