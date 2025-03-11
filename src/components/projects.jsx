import React from 'react'


export default function Projects() {
  return (
    <div id='project' className=' pt-10 sm:m-0 text-white h-[100vh] w-screen sm:grid sm:grid-cols-3 sm:grid-rows-5 place-items-center sm:px-20 gap-6 px-15 sm:p-1 bg-black'>
        <div className='text-5xl col-span-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Projects</div>
          <div className='h-[80vh] w-screen grid grid-cols-2 grid-rows-3 gap-6 sm:hidden p-5 border-box'>
            <a href="https://login-aut-system.netlify.app/signup" className='bg-white/10 col-span-1 row-span-1 rounded-lg border-2 border-white bg-[url(./images/auth.png)] bg-cover bg-center'></a>
            <a href="https://shoptheshoe.netlify.app/" className='bg-white/10 col-span-1 row-span-1 rounded-lg border-2 border-white bg-[url(./images/theme.png)] bg-cover bg-center'></a>
            <a href="https://thetodolists.netlify.app/" className='bg-white/10 col-span-1 row-span-1 rounded-lg border-2 border-white bg-[url(./images/todo.png)] bg-cover bg-center'></a>
            <a href="https://random-quote-for-you.netlify.app/" className='bg-white/10 col-span-1 row-span-1 rounded-lg border-2 border-white bg-[url(./images/quote.png)] bg-cover bg-center'></a>
            <a href="https://muzic-drum.netlify.app/" className='bg-white/10 col-span-1 row-span-1 rounded-lg border-2 border-white bg-[url(./images/drum.png)] bg-cover bg-center'></a>
            <a href="https://dev-calcy.netlify.app/" className='bg-white/10 col-span-1 row-span-1 rounded-lg border-2 border-white bg-[url(./images/cal.png)] bg-cover bg-center'></a>

          </div>
        <a href="https://login-aut-system.netlify.app/signup" className='sm:col-span-1 row-span-2 w-full h-full hidden sm:grid'>
        <div className='mt-4 sm:m-0 w-full h-full transition-transform duration-300 border hover:scale-103 hover:border-indigo-500 rounded-lg  border-4 bg-[url(./images/auth.png)] bg-cover bg-center'>
        <div className='hover:bg-black/50  text-transparent hover:text-white w-full h-full row-start-2 grid place-items-center text-center px-15'>
        A secure authentication system built with Next.js,
        featuring JWT authentication and role-based access control. User data is securely stored in MongoDB,
        ensuring seamless authentication, session management, and protected routes.
        </div>
        </div>
        </a>

        <a href="https://shoptheshoe.netlify.app/" className='col-span-1 row-span-2 w-full h-full hidden sm:grid'>
        <div className='mt-4 sm:m-0 w-full h-full transition-transform duration-300 border hover:scale-103 hover:border-indigo-500 rounded-lg  border-4 bg-[url(./images/theme.png)] bg-cover bg-center'>
        <div className='hover:bg-black/50 text-transparent hover:text-white w-full h-full grid place-items-center text-center px-15'>
        Implemented a React.js and Tailwind CSS-based theme-switching system for an e-commerce platform, 
        allowing seamless transitions between light and dark modes for an improved user experience.
        </div>
        </div>
        </a>

        <a href="https://thetodolists.netlify.app/" className='col-span-2 sm:col-span-1 row-span-2 w-full h-full hidden sm:grid'>
        <div className='mt-4 sm:m-0 w-full h-full transition-transform duration-300 border hover:scale-103 hover:border-indigo-500 rounded-lg  border-4 bg-[url(./images/todo.png)] bg-cover bg-center'>
        <div className='hover:bg-black/50 text-transparent hover:text-white w-full h-full grid place-items-center text-center px-15'>
        A simple and interactive To-Do List built with React.js, allowing users to add, edit, delete, and mark tasks as complete. 
        </div>
        </div>
        </a>

        <a href="https://random-quote-for-you.netlify.app/" className='col-span-3 sm:col-span-1 row-span-2 w-full h-full hidden sm:grid'>
        <div className='mt-4 sm:m-0 w-full h-full transition-transform duration-300 border hover:scale-103 hover:border-indigo-500 rounded-lg  border-4 bg-[url(./images/quote.png)] bg-cover bg-center'>
        <div className='hover:bg-black/50 text-transparent hover:text-white w-full h-full grid place-items-center text-center px-15'>
        A React.js application that displays randomly generated quotes from a curated collection.
        Features include a "New Quote" button, dynamic background changes, and Twitter sharing functionality.
        </div>
        </div>
        </a>

        <a href="https://muzic-drum.netlify.app/" className='col-span-3 sm:col-span-1 row-span-2 w-full h-full hidden sm:grid'>
        <div className='mt-4 sm:m-0 w-full h-full transition-transform duration-300 border hover:scale-103 hover:border-indigo-500 rounded-lg  border-4 bg-[url(./images/drum.png)] bg-cover bg-center'>
        <div className='hover:bg-black/50 text-transparent hover:text-white w-full h-full grid place-items-center text-center px-15'>
        A React.js-based interactive drum kit that allows users to play sounds by clicking on virtual drums or pressing corresponding keyboard keys.
        Features include a responsive UI, sound animations, keyboard event handling, and a power toggle to enable or disable the drum kit.
        </div>
        </div>
        </a>

        <a href="https://dev-calcy.netlify.app/" className='col-span-3 sm:col-span-1 row-span-2 w-full h-full hidden sm:grid'>
        <div className='mt-4 sm:m-0 w-full h-full transition-transform duration-300 border hover:scale-103 hover:border-indigo-500 rounded-lg  border-4 bg-[url(./images/cal.png)] bg-cover bg-center'>
        <div className='hover:bg-black/50 text-transparent hover:text-white w-full h-full grid place-items-center text-center px-15'>
        A responsive calculator built with HTML, CSS, and JavaScript that supports basic arithmetic operations.
        Features a clean, intuitive UI and smooth user experience with input validation.
        </div>
        </div>
        </a>
    </div>

  )
}
