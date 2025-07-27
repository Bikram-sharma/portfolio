import React from "react";

export default function Projects() {
  return (
    <div className="bg-black flex flex-col items-center ">
      <div className="sm:m-10 text-3xl sm:text-5xl sm:col-span-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Projects
      </div>
      <div
        id="project"
        className="sm:m-0 text-white  w-full sm:w-[100vw] grid grid-rows-6 sm:grid-cols-3 sm:grid-rows-5 place-items-center sm:px-20 gap-6 px-5 sm:p-1 bg-black"
      >
        <a
          href="https://login-aut-system.netlify.app/signup"
          className="sm:col-span-1 sm:row-span-2 w-full h-[40vh] sm:grid"
        >
          <div className="mt-4 sm:m-0 w-full h-full transition-transform duration-300  hover:scale-103  border-4 bg-[url(/images/auth.png)]  filter grayscale bg-cover bg-center">
            <div className="hover:bg-black  text-transparent hover:text-white w-full h-full row-start-2 grid place-items-center text-center px-15">
              A secure authentication system built with Next.js, featuring JWT
              authentication and role-based access control. User data is
              securely stored in MongoDB, ensuring seamless authentication,
              session management, and protected routes.
            </div>
          </div>
        </a>

        <a
          href="https://shoptheshoe.netlify.app/"
          className="sm:col-span-1 sm:row-span-2 w-full  h-[40vh] sm:grid"
        >
          <div className="mt-4 sm:m-0 w-full h-full transition-transform duration-300  hover:scale-103  border-4 bg-[url(/images/theme.png)] filter grayscale bg-cover bg-center ">
            <div className="hover:bg-black text-transparent hover:text-white w-full h-full grid place-items-center text-center px-15">
              Implemented a React.js and Tailwind CSS-based theme-switching
              system for an e-commerce platform, allowing seamless transitions
              between light and dark modes for an improved user experience.
            </div>
          </div>
        </a>

        <a
          href="https://thetodolists.netlify.app/"
          className="sm:col-span-1 sm:row-span-2 w-full  h-[40vh] sm:grid"
        >
          <div className="mt-4 sm:m-0 w-full h-full transition-transform duration-300 hover:scale-103   border-4 bg-[url(/images/todo.png)] filter grayscale bg-cover bg-center">
            <div className="hover:bg-black text-transparent hover:text-white w-full h-full grid place-items-center text-center px-15">
              A simple and interactive To-Do List built with React.js, allowing
              users to add, edit, delete, and mark tasks as complete.
            </div>
          </div>
        </a>

        <a
          href="https://random-quote-for-you.netlify.app/"
          className="sm:col-span-1 sm:row-span-2 w-full  h-[40vh] sm:grid"
        >
          <div className="mt-4 sm:m-0 w-full h-full transition-transform duration-300 hover:scale-103 border-4 bg-[url(/images/quote.png)] filter grayscale bg-cover bg-center">
            <div className="hover:bg-black text-transparent hover:text-white w-full h-full grid place-items-center text-center px-15">
              A React.js application that displays randomly generated quotes
              from a curated collection. Features include a "New Quote" button,
              dynamic background changes, and Twitter sharing functionality.
            </div>
          </div>
        </a>

        <a
          href="https://muzic-drum.netlify.app/"
          className=" sm:col-span-1 sm:row-span-2 w-full  h-[40vh] sm:grid"
        >
          <div className="mt-4 sm:m-0 w-full h-full transition-transform duration-300 hover:scale-103  border-4 bg-[url(/images/drum.png)] filter grayscale bg-cover bg-center">
            <div className="hover:bg-black text-transparent hover:text-white w-full h-full grid place-items-center text-center px-15">
              A React.js-based interactive drum kit that allows users to play
              sounds by clicking on virtual drums or pressing corresponding
              keyboard keys. Features include a responsive UI, sound animations,
              keyboard event handling, and a power toggle to enable or disable
              the drum kit.
            </div>
          </div>
        </a>

        <a
          href="https://booktheticket.netlify.app"
          className=" sm:col-span-1 sm:row-span-2 w-full h-[40vh] sm:grid"
        >
          <div className="mt-4 sm:m-0 w-full h-full transition-transform duration-300 hover:scale-103  border-4 bg-[url(/images/ticketbooking.png)] filter grayscale bg-cover bg-center">
            <div className="hover:bg-black text-transparent hover:text-white w-full h-full grid place-items-center text-center px-15">
              The Ticket Booking App is a React.js and Express.js-based platform
              with a clean UI, real-time ticket generation, validation, instant
              notifications, smooth navigation, and a download feature for easy
              ticket saving.
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
