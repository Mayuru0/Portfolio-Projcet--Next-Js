"use client";

import React, { useState } from "react";
import { skillCategories, professionalSkills } from "@/Data/Skills";
import Image from "next/image";

const Profile: React.FC = () => {
  const [active, setActive] = useState(0);

  const category = skillCategories[active];

  return (
    <div className="w-full">
      <section
        className="text-white py-6 sm:py-10 glass-card rounded-2xl"
        data-aos="fade-in"
        data-aos-duration="1200"
      >
        <div className="container mx-auto px-3 sm:px-6">

          {/* Header */}
          <div className="mb-8">
            <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-1">
              &lt;skills /&gt;
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Technical{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skillCategories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
                  ${active === i
                    ? "bg-cyan-500/20 border border-cyan-400/50 text-cyan-300"
                    : "border border-white/8 text-gray-400 hover:border-white/20 hover:text-gray-200"
                  }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.title.trim()}</span>
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {category.skills.map((skill, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-2 p-3 rounded-xl
                  border border-white/8 bg-white/3
                  hover:border-cyan-400/30 hover:bg-cyan-400/5
                  transition-all duration-200 cursor-default"
              >
                <div className="w-9 h-9 flex items-center justify-center
                  rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-200">
                  <Image
                    src={skill.img || "/placeholder.svg"}
                    alt={skill.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <span className="text-[11px] text-gray-400 group-hover:text-gray-200
                  text-center leading-tight transition-colors duration-200 font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-white/8" />

          {/* Professional Skills */}
          <div>
            <div className="mb-6">
              <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-1">
                &lt;soft-skills /&gt;
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Professional{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {professionalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-xs font-mono text-cyan-400">{skill.percentage}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      style={{
                        width: `${skill.percentage}%`,
                        boxShadow: "0 0 8px rgba(6,182,212,0.4)",
                        transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Profile;
