import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <h1 className="py-2 text-gray-900">
            Hi,I'm <span className="text-[#5651e5]"> Shanif</span>
          </h1>
          <h1 className="py-2 text-gray-900">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {" "}
            I am a Full-Stack Developer with a passion for creating innovative
            and effective web applications. I have a broad range of experience
            in designing and implementing applications from front-end to
            back-end, utilizing technologies such as HTML, CSS, JavaScript,
            React, Node.js, Express, and databases such as MySQL, MongoDB, and
            Firebase. I am skilled in crafting user-friendly interfaces and
            intuitive user experiences, as well as in developing scalable and
            efficient server-side logic.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/shanif-mohammed-a9592923a/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-75">
                <FaLinkedinIn />
              </div>
            </Link>

            <Link href="https://github.com/ShanifKn">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-75">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:Shanifkaraden06@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-75">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://drive.google.com/file/d/1BENCrA4DUQtos_9yuohrCh_JBkuHcDgv/view?usp=share_link">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-75">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
