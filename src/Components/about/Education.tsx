import Link from "next/link";
import React from "react";
import { CertificationsDetails, educationDetails } from "@/Data/Education";

const Education = () => {
  return (
    <div className="border border-gray-800 rounded-xl md:rounded-r-2xl text-white flex flex-col p-3 sm:p-6 md:p-8 lg:p-12  w-full mt-20 md:mt-2">
      {/* Education Section */}
      <div className="space-y-6 sm:space-y-8">
        <h1
          className="text-2xl sm:text-3xl font-mono mb-4 sm:mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent animate-bounce text-center md:text-left"
          data-aos="fade-up"
        >
          Education
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6" data-aos="zoom-out-up">
          {educationDetails.map((edu, index) => (
            <div key={index} className="bg-[#252525] rounded-lg p-4 sm:p-6 relative">
              <div className="text-[#1da1f2] animate-pulse text-sm sm:text-base">
                {edu.year}
              </div>
              <h2 className="text-base sm:text-lg font-semibold mt-1">
                {edu.title}
              </h2>
              <div className="mt-3 sm:mt-4 flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#1da1f2] mr-2 flex-shrink-0"></div>
                <Link
                  href={edu.link}
                  className="cursor-pointer hover:text-blue-600 hover:underline text-sm sm:text-base break-words"
                >
                  {edu.institute}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
        <h1
          className="text-2xl sm:text-3xl font-mono mb-4 sm:mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent animate-bounce text-center md:text-left"
          data-aos="fade-up"
        >
          Certifications
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6" data-aos="zoom-out-up">
          {CertificationsDetails.map((cert, index) => (
            <div key={index} className="bg-[#252525] rounded-lg p-4 sm:p-6 relative">
              <div className="text-[#1da1f2] animate-pulse text-sm sm:text-base">
                {cert.year}
              </div>
              <h2 className="text-base sm:text-lg font-semibold mt-1">
                {cert.title}
              </h2>
              <div className="mt-3 sm:mt-4 flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#1da1f2] mr-2 flex-shrink-0"></div>
                <Link
                  href={cert.link}
                  className="cursor-pointer hover:text-blue-600 hover:underline text-sm sm:text-base break-words"
                >
                  {cert.institute}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;