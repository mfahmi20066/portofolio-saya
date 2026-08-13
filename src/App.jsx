import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollMarquee from './components/ScrollMarquee'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>

      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero ready={!loading} />
        <About />
        <ScrollMarquee />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
