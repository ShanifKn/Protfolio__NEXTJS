import React from "react";
import { ProjectItems } from "./ProjectItems";
import propertyimg from "../public/assets/projects/property.jpg";
import crytpoImg from "../public/assets/projects/crypto.jpg";
import amazonImg from "../public/assets/projects/amazon.png";
import disneyImg from "../public/assets/projects/disney.png";
import movieImg from "../public/assets/projects/movie.png";
import taksi from "../public/assets/projects/taksi.png";

export const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Whats I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="E-Commerce Web Application"
            backgroundImg={propertyimg}
            projectUrl="/property"
          />
          <ProjectItems
            title="Tak-si (ride-hailing platform)"
            backgroundImg={taksi}
            projectUrl="/taksi"
          />
          <ProjectItems
            title="Social media website"
            backgroundImg={crytpoImg}
            projectUrl="/crypto"
          />
          <ProjectItems
            title="Amazone Clone"
            backgroundImg={amazonImg}
            projectUrl="/amazon"
          />
          <ProjectItems
            title="Movie Club"
            backgroundImg={movieImg}
            projectUrl="/Movie"
          />
          <ProjectItems
            title="Disney Clone"
            backgroundImg={disneyImg}
            projectUrl="/Disney"
          />
        </div>
      </div>
    </div>
  );
};
