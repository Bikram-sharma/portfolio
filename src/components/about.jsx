import React from 'react'
import me from '../images/me.png'

export default function About() {
  return (
    <div id='about' className='text-white sm:h-[100vh] grid place-items-center grid-cols-4 sm:grid-rows-8 place-items-center pr-5 sm:pr-20 auto-rows-min'>
        <div className='col-span-4 text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>About Me</div>
        <div className=' sm:col-span-2 sm:row-span-6 sm:h-5/6 sm:w-4/6 rounded-3xl hidden lg:grid border-20  place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <img src={me} className='w-4/6 h-5/6 rounded-b-full filter grayscale' alt="" />
        </div>

        <div className='col-span-4 sm:col-span-2 sm:row-span-2 sm:row-start-3 sm:col-start-3 text-justify p-5'>
            <p> I am a dedicated, self-taught Front-End Developer transitioning from a four-year career as a Land Surveyor. Passionate
                about building responsive, scalable, and user-friendly web applications. Proficient in HTML, CSS, JavaScript, React, and
                Next.js, I thrive in dynamic, innovative environments where I can apply my technical expertise and analytical mindset. I am
                seeking a Front-End Developer role to contribute creative solutions and enhance user experiences.
            </p>
        </div>

       <div className='col-span-4 sm:col-span-2 sm:row-span-2 sm:row-start-5 sm:col-start-3 text-justify p-2 sm:pr-10 w-full h-full grid grid-cols-4 place-items-center sm:grid-cols-5 grid-rows-4 sm:place-items-start'>
             <span className='col-span-2 sm:col-span-1 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># HTML</span>
             <span className='col-span-2 sm:col-span-1 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># CSS</span>
             <span className='col-span-2 sm:col-span-1 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># SASS</span>
             <span className='col-span-2 sm:col-span-2 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># Tailwind</span>
             <span className='col-span-2 sm:col-span-2 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># Bootstrap</span>
             <span className='col-span-2 sm:col-span-2 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># JavaScript</span>
             <span className='col-span-2 sm:col-span-2 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># React.js</span>
             <span className='col-span-2 sm:col-span-1 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># Next.js</span>
             <span className='col-span-2 sm:col-span-1 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># Git</span>
             <span className='col-span-2 sm:col-span-1 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># GitHub</span>
             <span className='col-span-2 sm:col-span-2 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># Chrome DevTools</span>
             <span className='col-span-2 sm:col-span-1 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># AutoCAD</span>
             <span className='col-span-2 sm:col-span-1 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># ArcGIS</span>
             <span className='col-span-2 sm:col-span-1 border rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># LisCAD</span>
             <span className='col-span-2 sm:col-span-2 border col-span-2 rounded-full px-3 py-1 transition-transform duration-300 hover:scale-103'># Microsoft Office</span>
        




       </div>
        
    </div>
  )
}
