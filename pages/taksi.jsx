import Image from "next/image";
import React from "react";
import taksi from "../public/assets/projects/taksi.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const disney = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          src={taksi}
          layout="fill"
          objectFit="cover"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Tak-si</h2>
          <h3>MongoDB /React / Express / Node /Tailwind </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p className="mb-4">Project</p>
          <h2 className="mb-3">Overview</h2>
          <p>
            The Tak-si MERN stack project is a ride-hailing platform that
            utilizes the Model-View-Controller (MVC) architecture. The platform
            is built using the MERN stack (MongoDB, Express, React, and Node.js)
            and is integrated with Mapbox for map visualization, JWT for
            authentication, and Redux for state management.
          </p>
          <p>
            The project covers various aspects of web development, including
            creating a dynamic user interface with React, building a robust and
            scalable back-end with Node.js and Express, integrating with
            external APIs and services like Mapbox and JWT, and using Redux for
            state management.The user interface is designed using Tailwind CSS,
            and{" "}
            <span className="text-red-700">
              the project is still in development.
            </span>
          </p>
          <Link href="https://github.com/ShanifKn/Taksi">
            <button className="px-8 py-2 mt-4 mr-8 " href="">
              Demo
            </button>
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JWT
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Twilio
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
