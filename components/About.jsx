import React from "react";
import Link from "next/link";

export const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5] ">
            About
          </p>
          <h2 className="py-2 text-gray-900">Who I Am</h2>
          <p className="py-2 text-gray-700">
            Hello, my name is Shanif Mohammed,and I am a skilled Full-Stack
            Developer with expertise in the MERN stack. I have honed my skills
            through self-study and hands-on projects, and have a strong
            portfolio to showcase my expertise in developing dynamic and
            user-friendly web applications.
          </p>
          <p className="py-2 text-gray-700">
            Being self-taught, I bring a unique perspective and a creative
            approach to problem-solving. I am experienced in developing
            intuitive user interfaces, efficient server-side logic, and
            integrating with databases to ensure seamless performance. I am
            confident in my ability to tackle any challenge and deliver results
            that meet the needs of my users, and I understand the importance of
            effective communication and collaboration in a team environment.
          </p>
          <Link href="https://github.com/ShanifKn/Taksi">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects...
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl hidden shadow-gray-400 rounded-xl md:flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://www.howtogeek.com/wp-content/uploads/2021/07/macbook-pro-air-pink-blue-light.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1 "
          />
        </div>
      </div>
    </div>
  );
};
