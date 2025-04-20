"use client"

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        if (targetId === "#") return

        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          })
        }
      })
    })
  }, [])

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-white">
        <Header />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default App
