"use client";

import React from "react";
import { motion } from "framer-motion";
import ProfileViews from "./Animating/ProfileViews";


const ProfilePhoto: React.FC = () => {
  return (
    <div className="relative">
      <motion.div>
        {/* Animated SVG Circle with Profile Image clipped inside */}
        <div className="w-[200px] sm:w-[260px] lg:w-[400px]" data-aos="fade-in" data-aos-duration="1600">
          <motion.svg fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="profileCircleClip">
                <circle cx="253" cy="253" r="246" />
              </clipPath>
            </defs>

            {/* Profile image clipped to circle */}
            <image
              href="https://res.cloudinary.com/dy972wrlb/image/upload/v1741633214/Portfolio%20%20%28React%20Js%29/lr88uy5trjaefcxsdjjj.png"
              x="-40"
              y="20"
              width="600"
              height="600"
              clipPath="url(#profileCircleClip)"
              preserveAspectRatio="xMidYMid meet"
            />

            {/* Animated stroke circle */}
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
  <div className="flex justify-center mb-3 mt-4 sm:mt-10">
    <ProfileViews />
  </div>
    </div>
  );
};

export default ProfilePhoto;
