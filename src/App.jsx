import {Navbar} from './components/Navbar'
import {Hero} from './components/Hero'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [])

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />

      <>
        <p>&copy; 2025 Shenara De Silva. All Rights Reserved.</p>
      </>
    </div>
  )
}

export default App;
