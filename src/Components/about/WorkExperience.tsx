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

          <div className="text-gray-300 leading-relaxed" data-aos="fade-up">
            <p>
              As a full-stack developer, I create quick, scalable, and intuitive
              online apps with MERN and Next.js. Additionally, I successfully
              finished a good internship where I worked on more than five
              desktop and web programs using the framework. Additionally,
              learned how to use the GitHub web application effectively and
              concentrated on developing code that was clear, effective, and
              reusable while adhering to industry best practices for agile
              techniques, version control (Git), and code quality. worked in
              cross-functional teams to improve application security, optimize
              APIs, and develop user-friendly features.
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
