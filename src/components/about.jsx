import React from 'react'
import me from '../images/me.png'
import Slide from './slider'


export default function About() {
  return (
    <div id='about' className='text-white sm:h-[100vh] grid place-items-center grid-cols-4 sm:grid-rows-8 place-items-center pr-5 sm:pr-20 auto-rows-min bg-black'>
        <div className='col-span-4 text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>About Me</div>
        <div className=' sm:col-span-2 sm:row-span-5 sm:row-start-2 sm:h-5/6 sm:w-4/6 rounded-3xl hidden lg:grid border-20  place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <img src={me} className='w-4/6 h-5/6 rounded-b-full filter grayscale' alt="profile" />
        </div>

        <div className='col-span-4 sm:col-span-2 sm:row-span-2 sm:row-start-2 p-5 sm:p-0 sm:col-start-3 text-justify'>
            <p> I am a dedicated, self-taught Front-End Developer transitioning from a four-year career as a Land Surveyor. Passionate
                about building responsive, scalable, and user-friendly web applications. Proficient in HTML, CSS, JavaScript, React, and
                Next.js, I thrive in dynamic, innovative environments where I can apply my technical expertise and analytical mindset. I am
                seeking a Front-End Developer role to contribute creative solutions and enhance user experiences.
            </p>
        </div>

       <div className='col-span-4 sm:col-span-2 sm:row-span-2 sm:row-start-4 sm:col-start-3 text-justify w-full h-full grid grid-cols-4 place-items-center sm:grid-cols-4 grid-rows-4 sm:place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 gap-[1px]'>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># HTML</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># CSS</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># SASS</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># Tailwind</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># Bootstrap</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># JavaScript</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># React.js</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># Next.js</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># Git</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># GitHub</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># Netlify</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># Chrome DevTools</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># AutoCAD</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># ArcGIS</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># LisCAD</span>
            <span className='bg-black/60 w-[100%] h-[100%] grid place-items-center transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 text-xs sm:text-sm'># Microsoft Office</span>
       </div>
        <div className='col-span-4 row-start-7 w-[90vw]'> <Slide/></div>
    </div>
  )
}
