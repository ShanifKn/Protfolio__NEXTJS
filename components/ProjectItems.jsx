import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ProjectItems = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative md:flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2e2d4e] to-[#709dff] ">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-black tracking-wider text-center md:mb-5">
          {title}
        </h3>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
      <div className=" md:hidden">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-blue-500 text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};
