"use client";

import React from "react";
import AboutSideBar from "./AboutSideBar";
import Particles from "@/Components/Animating/Particles";

interface AboutLayoutProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden">

      {/* Background particles */}
      <Particles />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-full max-w-7xl px-3 sm:px-6 lg:px-10 pt-[132px] md:pt-8 pb-12">
          <AboutSideBar />

          <main
            className="md:pl-64 w-full md:-ml-8 md:-mt-4 -mt-18"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
