import Image from "next/image";
import React from "react";
import propertyimg from "../public/assets/projects/property.jpg";

export const Projects = () => { 
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-#5651e5">
          Projects
        </p>
        <h2 className="py-4">Whats I've Built</h2>
        <div className="grid md:grid-cols gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5 to-#709dff] ">
            <Image src={propertyimg} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};
