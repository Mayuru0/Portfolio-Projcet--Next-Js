"use client";

import React, { useEffect, useState } from "react";
import Social from "./Social";
import { TypeAnimation } from "react-type-animation";
import ProfilePhoto from "../ProfilePhoto";
import { FaDownload, FaArrowRight, } from "react-icons/fa";

const techStack = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Express" ];

const Profile: React.FC = () => {
  const [totalCommits, setTotalCommits] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/github-commits")
      .then((r) => r.json())
      .then((data) => {
        if (data.totalCommits !== null) setTotalCommits(data.totalCommits);
      })
      .catch(() => {});
  }, []);

  const stats = [
    { value: "2+", label: "Years Exp." },
    { value: "20+", label: "Projects" },
    { value: "10+", label: "Technologies" },
    {
      value: totalCommits !== null ? `${totalCommits}+` : "...",
      label: "Commits",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:min-h-[80vh] mx-auto py-16 px-4 bg-transparent items-center"
      id="p"
    >
      {/* Profile Image */}
      <div className="col-span-1 my-auto mx-auto sm:-ml-0 md:-ml-10 lg:-ml-20 ">
        <ProfilePhoto />
      </div>

      {/* Profile Info */}
      <div
        className="col-span-2 my-auto space-y-6"
        data-aos="fade-left"
        data-aos-duration="900"
      >
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 border border-cyan-400/20">
          <span className="w-2 h-2 rounded-full bg-cyan-400 glow-dot animate-pulse" />
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
            Available for work
          </span>
        </div>

        {/* Name + Title */}
        <div>
        <p className="font-mono text-sm mb-2 flex items-center gap-1.5">
          <span className="text-pink-400">println</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&quot;Hello, I&apos;m&quot;</span>
          <span className="text-gray-500">);</span>
        </p>
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold leading-tight mb-2">
            Mayuru{" "}
            <span className="primary">Madhuranga</span>
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-500 text-base sm:text-lg ">—</span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1400,
                "MERN Stack Developer",
                1400,
                "React / Next.js Developer",
                1400,
                "Backend Engineer",
                1400,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              className="text-cyan-400 text-xl sm:text-2xl font-semibold tracking-wide"
            />
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
          Passionate about building{" "}
          <span className="text-white font-medium">scalable, high-performance</span> web
          applications. I craft clean UI experiences backed by solid architecture — from
          database design to deployment.
        </p>

        {/* Tech Stack chips */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 rounded-lg
                glass border border-white/10 text-gray-300
                hover:border-cyan-400/40 hover:text-cyan-300
                transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-6 py-4 border-t border-b border-white/8">
          {stats.map(({ value, label }, i) => (
            <React.Fragment key={label}>
              <div className="text-center">
                <div className="text-white text-2xl font-extrabold leading-none">{value}</div>
                <div className="text-gray-500 text-xs mt-1 tracking-wide">{label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="h-8 w-px bg-white/10" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/project"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-gradient-to-r from-cyan-500 to-blue-600
              hover:from-cyan-400 hover:to-blue-500
              text-white font-semibold text-sm
              shadow-lg shadow-cyan-500/20
              hover:shadow-cyan-500/35 hover:scale-[1.03]
              transition-all duration-300"
          >
            <span>View My Work</span>
            <FaArrowRight size={13} />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1mJH34sHfYu8bwNXMZhKgqpNbIrk49WmL"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
              glass border border-white/12
              hover:border-cyan-400/40
              text-gray-300 hover:text-white font-semibold text-sm
              hover:scale-[1.03]
              transition-all duration-300"
          >
            <FaDownload size={13} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="pt-2">
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-3 font-medium">Find me on</p>
          <Social Cstyle="flex flex-wrap gap-2.5" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
