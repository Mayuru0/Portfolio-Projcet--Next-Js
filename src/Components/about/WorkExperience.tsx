"use client";

import Link from "next/link";
import React from "react";
import { useGetExperienceQuery } from "@/store/api/portfolioApi";
import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";
import { workExperienceData } from "@/Data/WorkExperience";

const WorkExperience = () => {
  const { data, isLoading, isError } = useGetExperienceQuery();
  const experiences = (isError || !data) ? workExperienceData : data;

  return (
    <div className="glass-card rounded-2xl text-white p-5 sm:p-8 w-full">

      {/* Header */}
      <div className="mb-8" data-aos="fade-up">
        <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-1 animate-bounce">&lt;experience /&gt;</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Work{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
      </div>

      {/* Timeline */}
      <div data-aos="fade-up" data-aos-delay="100">
        {isLoading ? (
          <div className="flex gap-4 pb-7">
            <div className="w-9 h-9 rounded-xl bg-white/5 flex-shrink-0" />
            <div className="flex-1 glass border border-white/8 rounded-xl p-5 space-y-3">
              <div className="flex gap-2">
                <div className="h-5 w-20 bg-white/8 rounded-md" />
                <div className="h-5 w-28 bg-white/8 rounded-md" />
              </div>
              <div className="h-5 w-48 bg-white/8 rounded-md" />
              <div className="h-4 w-32 bg-white/8 rounded-md" />
              <div className="h-3 w-full bg-white/8 rounded-md" />
              <div className="h-3 w-4/5 bg-white/8 rounded-md" />
            </div>
          </div>
        ) : (
          experiences.map((exp, i) => (
            <div key={exp._id} className="flex gap-4">
              {/* Dot + line */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 flex-shrink-0 z-10">
                  <FaBriefcase size={14} />
                </div>
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 mt-2 bg-gradient-to-b from-cyan-400/30 to-transparent" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 pb-2">
                <div className="glass border border-white/8 hover:border-cyan-400/25 rounded-xl p-5 transition-all duration-300 hover:bg-white/3 group">

                  {/* Period + type */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-md px-2 py-0.5 animate-pulse" >
                      {exp.period}
                    </span>
                    <span className="text-xs text-gray-500 border border-white/8 rounded-md px-2 py-0.5">
                      {exp.type}
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  {exp.companyUrl ? (
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-4"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 flex-shrink-0" />
                      {exp.company}
                      <FaExternalLinkAlt size={9} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <p className="inline-flex items-center gap-1.5 text-sm text-gray-400 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 flex-shrink-0" />
                      {exp.company}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-0.5 rounded-lg border border-white/8 text-gray-300
                          hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer note */}
      <div className="mt-8 border-t border-white/8 pt-6">
        <p className="text-xs text-gray-500 font-mono text-center tracking-widest">
           more experience coming soon...
        </p>
      </div>

    </div>
  );
};

export default WorkExperience;
