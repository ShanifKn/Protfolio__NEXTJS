import Image from "next/image";
import React from "react";
import disneyImg from "../public/assets/projects/disney.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const disney = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          src={disneyImg}
          layout="fill"
          objectFit="cover"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">E-Commerce Web Application</h2>
          <h3>Node.js / Express / MongoDB / EJS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p className="mb-4">Project</p>
          <h2 className="mb-3">Overview</h2>
          <p>
            This is a Disney clone website that is built for learning purposes,
            utilizing NextJs, styled-components and Next.js. The website aims to
            provide a similar user experience as the original Disney website and
            showcases the integration of different technologies.
          </p>
          <p>
            The website features a clean and modern user interface that allows
            users to browse through different Disney content, such as movies and
            TV shows. The front-end using React and styled-components. The
            application is built with Next.js, which enables server-side
            rendering and provides an optimized user experience.
          </p>
          <p className="text-red-700">
            The project serves as a practical learning experience to improve my
            skills in React, styled-components, and Next.js.
          </p>
          <Link href="https://disney-clone-swart.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8 " href="">
              Demo
            </button>
          </Link>
          <Link href="https://github.com/ShanifKn/Disney_Clone">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Styled Components
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default disney;
