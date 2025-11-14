import { Menu, Car, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-white">
          <div className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-br from-white/90 to-white/60 text-black">
            <Car className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-wide">BMW M4</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#design" className="hover:text-white transition-colors">Design</a>
          <a href="#performance" className="hover:text-white transition-colors">Performance</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#specs" className="hover:text-white transition-colors">Specs</a>
        </nav>

        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors">
          <Sparkles className="h-4 w-4" /> Build Yours
        </button>

        <button className="md:hidden text-white/90" aria-label="menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
