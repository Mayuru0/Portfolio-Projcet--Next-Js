"use client";

import React from "react";
import AboutSideBar from "./AboutSideBar";

interface AboutLayoutProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-black items-center ">
      <div className="flex px-10 w-full max-w-7xl ">
        <AboutSideBar />
        <main className="flex-1 overflow-y-auto ml-1 flex  items-center">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AboutLayout;
