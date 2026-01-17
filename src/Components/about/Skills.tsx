"use client";

import React from "react";
import CountUp from "react-countup";
import { skillCategories, professionalSkills } from "@/Data/Skills";
import Image from "next/image";

const Skills: React.FC = () => {
  return (
    <div className="w-full mt-20 md:mt-2">
      <section
        className="text-white py-6 sm:py-10 border border-gray-800 rounded-xl md:rounded-r-2xl"
        data-aos="fade-in"
        data-aos-duration="1600"
      >
        <div className="container mx-auto px-3 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent animate-bounce">
            My Technical Skills
          </h2>

          {skillCategories.map((category, index) => (
            <div key={index} className="mb-6 sm:mb-8">
              <h3
                className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2"
                data-aos="fade-down"
              >
                <span className="text-white text-xl sm:text-2xl">{category.emoji}</span>
                <span className="bg-gradient-to-l from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-2"
                    data-aos="zoom-out"
                  >
                    <Image
                      src={skill.img || "/placeholder.svg"}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                    <span className="text-xs sm:text-sm mt-2 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills */}
        <div className="container mx-auto px-3 sm:px-6 mt-8 sm:mt-12">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent animate-bounce"
            data-aos="fade-down"
          >
            Professional Skills
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {professionalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center"
                data-aos="zoom-out"
              >
                <div className="relative mb-3 sm:mb-4">
                  <svg className="w-20 h-20 sm:w-24 sm:h-24">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="35"
                      strokeWidth="5"
                      stroke="#1E293B"
                      fill="none"
                      className="sm:r-40 sm:stroke-[6]"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="35"
                      strokeWidth="5"
                      stroke="#0ea5e9"
                      strokeDasharray={`${2.2 * skill.percentage} 220`}
                      fill="none"
                      className="sm:r-40 sm:stroke-[6]"
                      style={{
                        strokeDasharray: `${2.5 * skill.percentage} 251`,
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg sm:text-xl font-bold">
                      <CountUp end={skill.percentage} duration={4} />%
                    </span>
                  </div>
                </div>
                <p className="text-center text-sm sm:text-base lg:text-lg font-medium">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;