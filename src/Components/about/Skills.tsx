"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import CountUp from "react-countup";
import html from "../../../public/assets/html.png";
import css from "../../../public/assets/css.png";
import javascript from "../../../public/assets/javascript.png";
import react from "../../../public/assets/react.png";
import java from "../../../public/assets/java.png";
import Nodejs from "../../../public/assets//Nodejs.png";
import expressjs from "../../../public/assets/express-js.png";

import tailwind from "../../../public/assets/tailwind.png";
import mysql from "../../../public/assets/mysql.png";
import mongoDB from "../../../public/assets/mongoDB.png";
import Figma from "../../../public/assets/Figma.png";
import wordpress from "../../../public/assets/wordpress.png";
import AdobePhotoshop from "../../../public/assets/AdobePhotoshop.png";
import AdobeLightroom from "../../../public/assets/AdobeLightroom.png";
import AdobePremiere from "../../../public/assets/AdobePremiere.png";
import nextjs from "../../../public/assets/nextjs.png";
import typescript from "../../../public/assets/typescript.png";
import nest from "../../../public/assets/nest.png";
import tauri from "../../../public/assets/tauri.jpg";
import redux from "../../../public/assets/redux.png";
import Context from "../../../public/assets/Context.png";
import github from "../../../public/assets/github.png";
import docker from "../../../public/assets/docker.png";
interface Skill {
  name: string;
  img?: StaticImageData | string; // Update this line
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "JavaScript", img: javascript },
        { name: "TypeScript", img: typescript },
        { name: "React.js", img: react },
        { name: "Next.js", img: nextjs },
        { name: "Node.js", img: Nodejs },
        { name: "Express.js", img: expressjs },
        { name: "Nest.js", img: nest },
        { name: "Tauri.js", img: tauri },
        { name: "HTML", img: html },
        { name: "CSS", img: css },
        { name: "Tailwind CSS", img: tailwind },
        { name: "Java", img: java },
      ],
    },
    {
      title: "State Management",
      skills: [
        { name: "Redux RTK", img:redux },
        { name: "Context API", img: Context },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "GitHub", img:github },
        { name: "Docker", img: docker },
        { name: "Figma", img: Figma },
        { name: "WordPress", img: wordpress },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", img: mongoDB },
        { name: "MySQL", img: mysql },
      ],
    },
    {
      title: "Editing",
      skills: [
        { name: "Adobe Lightroom", img: AdobeLightroom },
        { name: "Adobe Photoshop", img: AdobePhotoshop },
        { name: "Adobe Premiere Pro", img: AdobePremiere },
      ],
    },
  ]

  const professionalSkills = [
    { name: "Creativity", percentage: 90 },
    { name: "Communication", percentage: 65 },
    { name: "Problem Solving", percentage: 75 },
    { name: "Teamwork", percentage: 85 },
  ]

  return (
    <div className="w-5xl mt-2">
    <section className="text-white py-10  bg-black border border-gray-800 rounded-r-2xl" data-aos="fade-in" data-aos-duration="1600">
      <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent animate-bounce">
  My Technical Skills
</h2>


        {skillCategories.map((category, index) => (
          <div key={index} className="mb-8 ">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-l from-cyan-500 to-blue-500 bg-clip-text text-transparent" data-aos="fade-down">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex flex-col items-center " data-aos="zoom-out">
                  <Image
                    src={skill.img || "/placeholder.svg"}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-sm mt-2 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Professional Skills */}
      <div className="container mx-auto px-6 mt-12">
        <h2 className="text-3xl font-semibold text-center mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent animate-bounce" data-aos="fade-down">Professional Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {professionalSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center" data-aos="zoom-out">
              <div className="relative mb-4">
                <svg className="w-24 h-24">
                  <circle cx="50%" cy="50%" r="40" strokeWidth="6" stroke="#1E293B" fill="none" />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40"
                    strokeWidth="6"
                    stroke="#0ea5e9"
                    strokeDasharray={`${2.5 * skill.percentage} 251`}
                    fill="none"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold">
                    <CountUp end={skill.percentage} duration={4} />%
                  </span>
                </div>
              </div>
              <p className="text-center text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Skills

