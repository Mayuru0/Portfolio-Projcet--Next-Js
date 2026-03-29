"use client";

import Image from "next/image";
import React from "react";
import {
  FaMapMarkerAlt,
  FaLanguage,
  FaGamepad,
  FaCode,
  FaUser,
} from "react-icons/fa";
import { useGetAboutQuery } from "@/store/api/portfolioApi";
import AboutData from "@/Data/About";

const iconMap: Record<string, React.ReactNode> = {
  FaUser:         <FaUser size={12} />,
  FaMapMarkerAlt: <FaMapMarkerAlt size={12} />,
  FaLanguage:     <FaLanguage size={12} />,
  FaCode:         <FaCode size={12} />,
  FaGamepad:      <FaGamepad size={12} />,
};

export default function AboutMe() {
  const { data: apiData, isError, isLoading } = useGetAboutQuery();

  // Use API data if available, otherwise fall back to static data
  const about = (!isLoading && !isError && apiData) ? apiData : AboutData;

  return (
    <div className="glass-card rounded-2xl text-white p-5 sm:p-8 w-full">
      <div className="max-w-4xl mx-auto w-full">

        {/* Header */}
        <div className="mb-8" data-aos="fade-up">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-1 animate-bounce">&lt;about-me /&gt;</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Who{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              I Am
            </span>
          </h2>
        </div>

        {/* Profile card */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10" data-aos="fade-up" data-aos-delay="100">

          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-cyan-400/25 shadow-lg shadow-cyan-400/10">
              <Image
                src={about.image}
                alt={about.name}
                width={144}
                height={144}
                className="object-cover w-full"
              />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 text-[10px] font-semibold bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 rounded-full px-2.5 py-0.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </span>
          </div>

          {/* Name + role + stats */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-0.5">{about.name}</h3>
            <p className="text-sm text-cyan-400 font-mono mb-4 animate-pulse">{about.role}</p>

            {/* Mini stats */}
            <div className="flex justify-center sm:justify-start gap-5">
              {about.stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-lg font-extrabold text-white">{value}</div>
                  <div className="text-[10px] text-gray-500 tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10" data-aos="fade-up" data-aos-delay="150">
          {about.highlights.map(({ icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 glass border border-white/8 rounded-xl px-4 py-3">
              <span className="mt-0.5 text-cyan-400 flex-shrink-0">
                {iconMap[icon] ?? <FaUser size={12} />}
              </span>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mb-0.5">{label}</p>
                <p className="text-sm text-gray-300">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 mb-8" />

        {/* Journey */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-1 animate-bounce">&lt;my-journey /&gt;</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Story
            </span>
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            {about.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Tech highlights */}
        <div data-aos="fade-up" data-aos-delay="250">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mb-3">Core Technologies</p>
          <div className="flex flex-wrap gap-2">
            {about.techHighlights.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-lg border border-white/8 text-gray-300
                  hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
