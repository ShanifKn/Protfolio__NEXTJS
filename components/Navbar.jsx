import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full px-2 2xl:px-16">
        <Image src="/../public/assets/sh.png" alt="/" width="80" height="50" />
        <div>
          <Link href="/">
            <li></li>
          </Link>
        </div>
      </div>
    </div>
  );
};
