"use client";

import React from "react";
//import Image from "next/image";
import Social from "./Social";
import { TypeAnimation } from "react-type-animation"; // make sure it's named correctly
import ProfilePhoto from "../ProfilePhoto";
import { FaDownload } from "react-icons/fa";

const Profile: React.FC = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black"
      id="p"
    >
      {/* Profile Image */}
      <div className="col-span-1 my-auto mx-auto lg:-ml-10">
        {/* <div className="w-[230px] h-auto lg:w-[320px] mix-blend-lighten">
          <Image
            src="https://res.cloudinary.com/dy972wrlb/image/upload/v1741633214/Portfolio%20%20%28React%20Js%29/lr88uy5trjaefcxsdjjj.png"
            alt="Mayuru Madhuranga's Profile Picture"
            width={320}
            height={320}
            priority
          />
        </div> */}
        <ProfilePhoto />
      </div>

      {/* Profile Info */}
      <div className="col-span-2 px-5 my-auto">
        <h1
          className="text-white text-4xl sm:text-8xl font-extrabold"
          data-aos="fade-in"
          data-aos-duration="1600"
        >
          <span className="primary">I&apos;m a</span>
        </h1>
        {/* Ignore TypeScript errors */}
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            1000,
            "MERN Stack Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-white text-2xl sm:text-5xl"
        />

        <p
          className="text-white sm:text-lg my-6 lg:text-xl"
          data-aos="zoom-in-down"
          data-aos-duration="1600"
        >
          I&apos;m Mayuru Madhuranga, and I&apos;m interested in Full-Stack
          Developer or MERN Stack Developer.
        </p>

        {/* Download CV Button */}
        <div className="my-8" data-aos="fade-in" data-aos-duration="2000">
          <a
            href="https://drive.google.com/uc?export=download&id=1nbZbBYUqh2TFZfLOYGHpd-LnxsOSm21D"
            download
            className="px-4 py-2 sm:px-6 sm:py-3 w-[150px] sm:w-[200px] rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-700 text-white hover:border-none flex items-center justify-center space-x-2 text-xs sm:text-sm md:text-base"
          >
            <FaDownload size={16} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Links */}
        <div>
          <Social Cstyle="flex gap-6" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
