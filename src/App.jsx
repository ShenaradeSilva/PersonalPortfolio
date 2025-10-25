import {Navbar} from './components/Navbar'
import {Hero} from './components/Hero'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'
import './App.css'

function App() {
  return (
    <div className='app'>
      {" "}
      <Navbar />
      <Hero />
      <Projects />
      <Contact />

      <>
        <p>&copy: 2025 Shenara De Silva. All Rights Reserved.</p>
      </>
    </div>
  )
}

export default App
