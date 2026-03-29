"use client";

import Link from "next/link";
import React from "react";
import { useGetEducationQuery } from "@/store/api/portfolioApi";
import { educationData } from "@/Data/Education";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const TimelineItem = ({
  year,
  title,
  institute,
  link,
  icon,
  last,
}: {
  year: string;
  title: string;
  institute: string;
  link?: string;
  icon: React.ReactNode;
  last?: boolean;
}) => (
  <div className="flex gap-4">
    {/* Line + dot */}
    <div className="flex flex-col items-center">
      <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 flex-shrink-0 z-10">
        {icon}
      </div>
      {!last && <div className="w-px flex-1 mt-2 bg-gradient-to-b from-cyan-400/30 to-transparent" />}
    </div>

    {/* Card */}
    <div className={`pb-7 flex-1 ${last ? "" : ""}`}>
      <div className="glass border border-white/8 hover:border-cyan-400/25 rounded-xl p-4 transition-all duration-300 hover:bg-white/3 group">
        <span className="inline-block text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-md px-2 py-0.5 mb-2 animate-pulse">
          {year}
        </span>
        <h3 className="text-sm sm:text-base font-semibold text-white leading-snug mb-2">
          {title}
        </h3>
        {link && link !== "#" ? (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 flex-shrink-0" />
            {institute}
            <FaExternalLinkAlt size={9} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ) : (
          <p className="inline-flex items-center gap-1.5 text-xs text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 flex-shrink-0" />
            {institute}
          </p>
        )}
      </div>
    </div>
  </div>
);

const SkeletonItem = () => (
  <div className="flex gap-4 pb-7">
    <div className="w-9 h-9 rounded-xl bg-white/5 flex-shrink-0" />
    <div className="flex-1 glass border border-white/8 rounded-xl p-4 space-y-2">
      <div className="h-4 w-16 bg-white/8 rounded-md" />
      <div className="h-4 w-3/4 bg-white/8 rounded-md" />
      <div className="h-3 w-1/2 bg-white/8 rounded-md" />
    </div>
  </div>
);

const Education = () => {
  const { data, isLoading, isError } = useGetEducationQuery();

  const resolvedData = (isError || !data) ? educationData : data;
  const educationItems = resolvedData.filter((e) => e.type === "education");
  const certificationItems = resolvedData.filter((e) => e.type === "certification");

  return (
    <div className="glass-card rounded-2xl text-white p-5 sm:p-8 w-full">

      {/* Education */}
      <div className="mb-10">
        <div className="mb-6" data-aos="fade-up">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-1 animate-bounce">&lt;education /&gt;</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Academic{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          {isLoading
            ? Array.from({ length: 2 }).map((_, i) => <SkeletonItem key={i} />)
            : educationItems.map((edu, i) => (
                <TimelineItem
                  key={edu._id}
                  year={edu.year}
                  title={edu.title}
                  institute={edu.institute}
                  link={edu.link}
                  icon={<FaGraduationCap size={15} />}
                  last={i === educationItems.length - 1}
                />
              ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/8 mb-10" />

      {/* Certifications */}
      <div>
        <div className="mb-6" data-aos="fade-up">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-1">&lt;certifications /&gt;</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Certificates &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Training
            </span>
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonItem key={i} />)
            : certificationItems.map((cert, i) => (
                <TimelineItem
                  key={cert._id}
                  year={cert.year}
                  title={cert.title}
                  institute={cert.institute}
                  link={cert.link}
                  icon={<FaCertificate size={14} />}
                  last={i === certificationItems.length - 1}
                />
              ))}
        </div>
      </div>

    </div>
  );
};

export default Education;
