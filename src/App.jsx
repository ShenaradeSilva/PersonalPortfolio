import {Navbar} from './components/Navbar'
import {Hero} from './components/Hero'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'
import { motion } from 'framer-motion'
import './App.css'
import { useState, useEffect } from 'react'
import emailjs from "@emailjs/browser"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAIJS_PUBLIC_KEY)
  }, [])

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />

      <motion.footer
        className='footer'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; 2025 Shenara De Silva. All Rights Reserved.</p>
      </motion.footer>
    </div>
  )
}

export default App;
