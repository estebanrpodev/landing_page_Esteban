import AmbientGlow from './components/AmbientGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 font-sans text-zinc-300 antialiased selection:bg-emerald-500/30 selection:text-emerald-100">
      <AmbientGlow />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
