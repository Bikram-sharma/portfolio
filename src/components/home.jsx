import React from 'react'
import me from '../images/me.png'

export default function Home() {
  return (
    <div className='text-white h-[86vh] grid place-items-center grid-cols-4 grid-rows-8 auto-rows-min'>
        <div className='col-span-4 row-span-3 place-items-center overflow-hidden w-50 h-50 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <img src={me} className='h-50 w-40 rounded-full filter grayscale' alt="profile" />
        </div>

        <div className='col-span-4 row-span-2 h-auto text-2xl sm:text-5xl font-mono place-items-center'>
            <p className='w-5/6 text-center'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>I am Bikram Sharma,</span> a Front-End Developer bringing designs to life with code. </p>
        </div>
        <div className='col-span-4 text-center'>
            <p>"A passionate Front-End Developer crafting dynamic, responsive, and user-friendly web experiences with modern technologies."</p>
        </div>

        <div className=' col-span-2 h-1/2 w-5/6 sm:col-span-1 sm:col-start-2 sm:h-4/6 sm:w-4/6 lg:w-1/2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full grid place-items-center transition-transform duration-300 hover:scale-103'>
       <a href="#contact">
        Connect With Me
       </a>
      </div>

      <div className='col-span-2 h-1/2 w-5/6 sm:col-span-1 sm:h-4/6 sm:w-4/6 lg:w-1/2 px-4 border hover:border-indigo-500 rounded-full grid place-items-center transition-transform duration-300 hover:scale-103'>
       <a target='black' href="https://drive.google.com/file/d/19LTSRcQgxMzghz2yhVS1w8tYY4WV11zc/view?usp=sharing">
        My Resume
       </a>
      </div>
    
    </div>
  )
}

