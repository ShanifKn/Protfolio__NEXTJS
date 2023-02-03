import Image from "next/image";
import React from "react";
import amazonImg from "../public/assets/projects/amazon.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const amazon = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          src={amazonImg}
          layout="fill"
          objectFit="cover"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Amazon Clone</h2>
          <h3>React JS / Redux / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The Amazon Clone Website with React, Redux, and Firebase is a
            full-stack e-commerce web application that is designed to closely
            resemble the features and functionality of the popular e-commerce
            platform, Amazon. The project utilizes the latest web development
            technologies and tools, including React, Redux, and Firebase, to
            deliver an interactive and user-friendly interface.
          </p>
          <p>
            The website features include a product catalog that allows users to
            add items to their cart, and complete the checkout process.
            Additionally, the website includes an authentication system
            (google), which enables users to create an account and log in. The
            application also provides a dynamic and responsive design that is
            optimized for both desktop and tablet devices.
          </p>
          <p>
            In terms of back-end functionality, the Amazon Clone Website with
            React, Redux, and Firebase is powered by Firebase, which provides a
            scalable and secure database, as well as real-time data
            synchronization. This allows the application to provide real-time
            updates and fast response times, making it easier for users to
            interact with the website and complete transactions.
          </p>
          <p className="text-red-700">
            The Amazon Clone website project is a learning experience in which I
            used React, Redux, and Firebase to create a website that mimics the
            basic functionality of Amazon's e-commerce platform. The goal of the
            project was to improve my understanding of these technologies and
            demonstrate my ability to develop complex web applications. The
            website includes features such as product listings, shopping carts,
            and a database to store user information and orders. Despite being a
            cloning project, I made sure to implement my own unique touch and
            ideas to make it stand out. Overall, this project was a valuable
            learning experience that has helped me enhance my skills as a web
            developer.
          </p>
          <Link href="https://fir-8d970.firebaseapp.com/">
            <button className="px-8 py-2 mt-4 mr-8 " href="">
              Demo
            </button>
          </Link>
          <Link href="https://github.com/ShanifKn/Amazon_Clone/">
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
                Redux
              </p>
              <p className="text-gray-600  flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
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

export default amazon;
