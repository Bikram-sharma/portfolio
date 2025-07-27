import React from "react";

export default function About() {
  const skills = [
    "html.png",
    "css.png",
    "bootstrap.png",
    "tailwind.png",
    "sass.png",
    "javascript.png",
    "react.png",
    "next.jpeg",
    "git.png",
    "node.png",
    "express.png",
    "python.png",
    "postgres.png",
    "mongodb.png",
    "docker.png",
    "autocad.png",
    "arcgis.png",
    "liscad.png",
  ];
  return (
    <div
      id="about"
      className="text-white min-h-screen bg-black px-4 sm:px-6 md:px-8 lg:px-50 py-8  "
    >
      <p className="m-auto w-[35vw] md:w-[20vw] text-3xl sm:text-4xl md:text-5xl text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        About Me
      </p>

      <div className="w-full border grid grid-cols-1 md:grid-cols-5 gap-4 place-items-center p-4 md:p-6 rounded-lg mt-5">
        <div className="col-span-1 md:col-span-2 h-48 sm:h-64 md:h-80 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] hexagon bg-[url(./images/me2.png)] bg-cover bg-[center_5%] filter grayscale"></div>
        <p className="col-span-1 md:col-span-3 p-4 sm:p-6 rounded-lg text-base sm:text-lg md:text-xl text-justify">
          I am a dedicated Full-Stack Developer transitioning from a four-year
          career as a Land Surveyor. Passionate about building responsive,
          scalable, and user-friendly applications, I specialize in both
          front-end and back-end development. Proficient in HTML, CSS,
          JavaScript, React, Next.js, Node.js, Express, Python, PostgreSQL, and
          MongoDB, I thrive in dynamic, innovative environments where I can
          leverage my technical expertise and problem-solving mindset. My goal
          is to contribute end-to-end solutions and help deliver exceptional
          user experiences as part of a forward-thinking development team.
        </p>
      </div>

      <div className="mt-8 grid gap-6">
        <p className="m-auto w-[20vw] md:w-[8vw] text-3xl sm:text-4xl md:text-5xl text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          skills
        </p>
        <div className=" hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 place-items-center ">
          {skills.map((logo, index) => (
            <div
              key={index}
              className="border-2 border-gray-400 w-full aspect-square max-w-[100px] sm:max-w-[120px] bg-[length:60px_60px] bg-no-repeat bg-center"
              style={{ backgroundImage: `url(src/images/logos/${logo})` }}
            ></div>
          ))}
        </div>
        <div className="px-5 sm:hidden border rounded-lg p-2">
          <ul className="grid grid-cols-3">
            {skills.map((skill, index) => (
              <li key={index}>{`> ${skill.slice(0, -4).toUpperCase()}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
