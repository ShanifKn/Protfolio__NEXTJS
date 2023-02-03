import Image from "next/image";
import React from "react";
import movieImg from "../public/assets/projects/movie.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const disney = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          src={movieImg}
          layout="fill"
          objectFit="cover"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Movie Club</h2>
          <h3>NextJs / IMDb API / tailwinf </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p className="mb-4">Project</p>
          <h2 className="mb-3">Overview</h2>
          <p>
            The "Movie Club" website is a personal project built with the
            purpose of learning and honing my skills in React, IMDb API,
            Tailwind CSS, and Next.js. This website allows users to browse and
            discover popular and top-rated movies, view movie details such as
            cast, ratings, and overview, and filter according to interest.
          </p>
          <p>
            The website is built using React as its main front-end library, IMDb
            API for fetching movie data, Tailwind CSS for styling, and Next.js
            for server-side rendering and optimization. The project aims to
            demonstrate my proficiency in these technologies and to create a
            user-friendly and visually appealing movie browsing experience.
          </p>
          <Link href="https://movie-club-ashen.vercel.app/?genre=fetchSciFi">
            <button className="px-8 py-2 mt-4 mr-8 " href="">
              Demo
            </button>
          </Link>
          <Link href="https://github.com/ShanifKn/Movie_Club">
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
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Imdb API
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
