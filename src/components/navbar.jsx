import React, { useEffect } from "react";
import "../index.css";

export default function Navbar() {
  const navdisplayer = () => {
    document.querySelector(".nav").classList.add("hidden");
    document.querySelector(".smallnav").classList.remove("hidden").add("flex ");
  };

  const navhidder = () => {
    document.querySelector(".smallnav").classList.add("hidden");
    document.querySelector(".nav").classList.remove("hidden");
  };

  return (
    <>
      <div className="font-sans text-white flex justify-between items-center mx-[5%] sm:mx-[10%] h-[14vh] text-lg z-10">
        <div
          id="logo"
          className="text-5xl  flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          B
        </div>
        <div className="w-1/2 h-4/6 align-middle  items-center hidden sm:flex">
          <ul className="flex justify-between w-full">
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text hover:text-transparent"
            >
              <li>
                <p>Home</p>
              </li>
            </a>
            <a
              href="#about"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text hover:text-transparent"
            >
              <li>
                <p>About Me</p>
              </li>
            </a>
            <a
              href="#project"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text hover:text-transparent"
            >
              <li>
                <p>Projects</p>
              </li>
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text hover:text-transparent"
            >
              <li>
                <p>Contact</p>
              </li>
            </a>
          </ul>
        </div>
        <div className="h-3/6 w-fit px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center transition-transform duration-300 hover:scale-103 hidden sm:flex">
          <a href="#contact">Connect With Me</a>
        </div>

        <div className="flex sm:hidden nav" onClick={navdisplayer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </div>
      <div className="smallnav hidden sm:hidden  h-screen w-50vw absolute top-1/2 left-1/2 right-0 -translate-y-1/2 bg-black z-10">
        <div className="h-25 flex justify-end items-center pr-[10%] text-white">
          <span onClick={navhidder}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        <div className="text-white p-[10%] h-2/6">
          <ul className="h-full flex flex-col justify-evenly">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About Me</li>
            </a>
            <a href="#project">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
