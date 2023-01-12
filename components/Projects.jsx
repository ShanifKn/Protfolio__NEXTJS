import React from "react";
import { ProjectItems } from "./ProjectItems";
import propertyimg from "../public/assets/projects/property.jpg";
import crytpoImg from "../public/assets/projects/crypto.jpg";
import nextflixImg from "../public/assets/projects/netflix.jpg";
import twicthImg from "../public/assets/projects/twitch.jpg";

export const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Whats I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Property Finder"
            backgroundImg={propertyimg}
            projectUrl="/propeerty"
          />
          <ProjectItems
            title="PCrpto App"
            backgroundImg={crytpoImg}
            projectUrl="/propeerty"
          />
          <ProjectItems
            title="NetFlix"
            backgroundImg={nextflixImg}
            projectUrl="/propeerty"
          />
          <ProjectItems
            title="Twitch"
            backgroundImg={twicthImg}
            projectUrl="/propeerty"
          />
        </div>
      </div>
    </div>
  );
};
