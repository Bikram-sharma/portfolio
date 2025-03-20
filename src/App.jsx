import { useEffect, useState } from 'react'
import './App.css'
import $ from 'jquery'
import 'jquery.ripples'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Loder from './components/loder'

function App() {

  const [loading, setLoading] = useState(true)
  

  useEffect(()=>{
  
    $('body').ripples({
      resulation: 512,
      dropRadious:40,
      perturbance:0.04
    })


    const loadhandler = ()=> setLoading(false)
    
    if(document.readyState === 'complete'){
      setLoading(false)
    }else{
      window.addEventListener('load', loadhandler )
    }

    return ()=>{
      $('body').ripples('destroy')
      window.removeEventListener('load', loadhandler)}
  },[])

  return (
    <>
    { loading ? <Loder/> : 
    
    <div className='transition-transform duration-500 overflow-y-scroll scroll-smooth'>
     
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    
    </div>
}
    </>
  )
}

export default App
