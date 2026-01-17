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
        <div className="flex px-10 w-full max-w-7xl">
          <AboutSideBar />

          <main className="flex-1 ml-1 flex items-center">
            {children}
          </main>
        </div>
      </div>

    </div>
  );
};

export default AboutLayout;
