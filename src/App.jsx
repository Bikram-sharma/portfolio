import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {

  return (
    <div className='transition-transform duration-500 overflow-y-scroll'>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    
    </div>
  )
}

export default App
