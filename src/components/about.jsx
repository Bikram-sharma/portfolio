import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="text-white sm:h-[130vh] grid grid-cols-3 grid-rows-6 place-items-center bg-black px-50"
    >
      <p className="col-span-3 text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        About Me
      </p>

      <div className="row-span-3 col-span-3 w-full h-[60vh] bg-gradient-to-t from-[#FC00A3] via-[#BE02D6] to-[#9101FC] grid grid-cols-5 place-items-center pr-10 rounded">
        <div className="col-span-2 h-80 w-70 hexagon bg-[url(./images/me2.png)] bg-cover"></div>
        <p className="col-span-3 border p-5 rounded text-xl text-justify">
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

      <div className=" col-span-3 row-span-2 h-full w-full grid grid-cols-9 place-items-center gap-5">
        <p className="col-span-9 text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills
        </p>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/html.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/css.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/sass.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/tailwind.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/bootstrap.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/js.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/react.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/next.jpeg)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/git.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/node.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/express.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/python.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/postgres.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/mongodb.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/docker.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/autocad.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/arcgis.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
        <div className="border-2 border-gray-400 w-full h-full bg-[url(./images/logos/liscad.png)] bg-center bg-[length:60px_60px] bg-no-repeat"></div>
      </div>
    </div>
  );
}
