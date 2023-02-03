import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
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
          <h2 className="py-2">E-Commerce Web Application</h2>
          <h3>Node.js / Express / MongoDB / EJS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p className="mb-4">Project</p>
          <h2 className="mb-3">Overview</h2>
          <p>
            The website is built using MongoDB for data storage, Express.js for
            server-side routing, EJS (Embedded JavaScript Templating) for the
            user interface, and Node.js for server-side scripting. The website
            features an intuitive and user-friendly interface that makes
            browsing and purchasing products easy. Customers can search for
            products, add items to their cart, and proceed to checkout, all
            within a few clicks. The website integrates with various payment
            gateways to ensure secure and fast transactions (Razorpay and COD).
          </p>
          <p>
            On the admin side, the website features a comprehensive back-end
            panel that allows the owner to manage products, orders, customers,
            and other aspects of the business. The panel is intuitive and easy
            to use, making it simple for the owner to update and maintain the
            website. Additionally, the website is mobile-responsive, allowing
            customers to shop from any device.
          </p>
          <Link href="https://scotchly.shop/">
            <button className="px-8 py-2 mt-4 mr-8 " href="">
              Demo
            </button>
          </Link>
          <Link href="https://github.com/ShanifKn/Scotch">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                EJS
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
                Mongoose
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JWT
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Twilio
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                RazarPay
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Sass
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

export default property;
