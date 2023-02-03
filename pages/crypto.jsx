import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/crypto.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          src={propertyImg}
          layout="fill"
          objectFit="cover"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Social media website</h2>
          <h3>React JS / @mui / Node.js / MongoDB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a Mini MERN stack social media website built using MongoDB,
            Express.js, React.js, and Node.js. The aim of the project is to
            provide users with a platform to connect, share and interact with
            each other. The website allows users to create an account, post
            updates, like on other users' posts, and send friend request.
          </p>
          <h5 className="mt-2">Features</h5>
          <p>
            1. User Authentication: The website implements secure user
            authentication and authorization, allowing users to create an
            account, log in, and access their profile and posts.
          </p>
          <p>
            2. Post Management: Users can create, edit and delete their own
            posts, as well as like on other users' posts.
          </p>
          <p>
            3. Real-time Updates: The website implements real-time updates,
            allowing users to see new posts, comments in real-time without
            having to refresh the page.
          </p>
          <p>
            The website is designed to be scalable, secure, and easy to use,
            making it a great platform for users to connect and interact with
            each other.
            <span className="text-gray-500">
              {" "}
              This project is currently under construction and is being actively
              developed to bring it to completion
            </span>
          </p>
          <Link href="https://github.com/ShanifKn/Social_Media">
            <button className="px-8 py-2 mt-4 mr-8 ">Demo</button>
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
                @mui
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JWT
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

export default crypto;
