import Link from "next/link";
import React from "react";

const WorkExperience = () => {
  return (
    <div className="border border-gray-800 rounded-r-2xl text-white flex flex-col md:flex-row p-4 md:p-8 lg:p-12 mt-2">
      {/* Content */}
      <div className="flex-1 mt-6 md:mt-0">
        <div className="space-y-8">
          <h1
            className="text-4xl font-mono mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent animate-pulse "
            data-aos="fade-down"
          >
            Experience
          </h1>

          <div className="text-gray-300 leading-relaxed text-justify" data-aos="fade-up">
            <p>
              As a full-stack developer, I create quick, scalable, and intuitive
              web applications using the MERN stack, Next.js, and Redux for
              state management. I successfully completed a 6-month internship
              during which I worked on more than five desktop and web
              applications using these frameworks. During this time, I
              effectively utilized the GitHub web application and focused on
              writing clear, efficient, and reusable code while adhering to
              industry best practices including agile methodologies, version
              control (Git), and maintaining high code quality. I collaborated
              with cross-functional teams to enhance application security,
              optimize REST APIs, and develop user-friendly features.
            </p>
          </div>

          <div
            className="bg-[#252525] rounded-lg p-6 mt-8 w-1/2"
            data-aos="zoom-out"
          >
            <div className="text-[#1da1f2]">2024-2025</div>
            <h2 className="text-xl font-semibold mt-1">
              Intern Fullstack Developer
            </h2>
            <div className="mt-4 flex items-center animate-bounce">
              <div className="w-2 h-2 rounded-full bg-[#1da1f2] mr-2"></div>
              <Link
                href="https://cypsolabs.com/"
                className="cursor-pointer hover:text-blue-600 hover:underline "
              >
                Cypso Labs PVT LTD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
