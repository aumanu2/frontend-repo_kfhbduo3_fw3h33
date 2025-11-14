import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { DesignSection, PerformanceSection, GallerySection, SpecsSection } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <DesignSection />
        <PerformanceSection />
        <GallerySection />
        <SpecsSection />
      </main>
      <footer className="border-t border-white/10 bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white/60 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} M4 Experience</p>
          <div className="flex items-center gap-6">
            <a href="#design" className="hover:text-white">Design</a>
            <a href="#performance" className="hover:text-white">Performance</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#specs" className="hover:text-white">Specs</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
