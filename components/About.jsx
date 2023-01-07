import React from "react";

export const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-col-3 gap-8">
        <div className="col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5] ">
            About
          </p>
          <h2 className="py-2 text-gray-600">Who I Am</h2>
          <p className="py-2 text-gray-600">
            ABout myself......................t is a long established fact that
            a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a{" "}
          </p>
          <p className="py-2 text-gray-600">
            Anout myself .....................t is a long established fact that
            a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a{" "}
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects...
          </p>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://www.howtogeek.com/wp-content/uploads/2021/07/macbook-pro-air-pink-blue-light.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1 "
          />
        </div>
      </div>
    </div>
  );
};
