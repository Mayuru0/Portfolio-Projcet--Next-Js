"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProfileViews from "./Animating/ProfileViews";


const ProfilePhoto: React.FC = () => {
  return (
    <div className="relative">
      <motion.div>
        {/* Profile Image */}
        <div className="mix-blend-lighten absolute" data-aos="fade-in" data-aos-duration="1600">
          <Image
            src="https://res.cloudinary.com/dy972wrlb/image/upload/v1741633214/Portfolio%20%20%28React%20Js%29/lr88uy5trjaefcxsdjjj.png"
            alt="Profile"
            width={350}
            height={350}
            className=" ml-8 lg:ml-[50px] w-[230px] h-auto lg:w-[320px] mix-blend-lighten "
            priority
          />
        </div>

        {/* Animated SVG Circle */}
        <div className="w-[280px] lg:w-[400px]">
          <motion.svg fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#0AB2D6"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </div>
      </motion.div>
            {/* Profile Views */}
  <div className="flex justify-center mb-3 mt-10">
    <ProfileViews />
  </div>
    </div>
  );
};

export default ProfilePhoto;
