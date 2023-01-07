import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            AKLKHkjadhsfaksdhfkajdshf
          </p>
          <h1 className="py-2 text-gray-700">
            Hi,I'm <span className="text-[#5651e5]"> Shanif</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {" "}
            I'm a Web developer specializing in building (and occasionlly
            designing ) exceptional digital experiences.Currently.I'm focused on
            building MERN full-stack web applications.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-75">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-75">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-75">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-75">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
