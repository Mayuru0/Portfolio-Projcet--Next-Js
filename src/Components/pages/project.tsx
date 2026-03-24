"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";
import type Project from "@/types/project";
import { projects } from "@/Data/Project";

const CATEGORIES = ["All", "Web", "Mobile", "Desktop"] as const;
type Category = (typeof CATEGORIES)[number];

function getProjectCategory(project: Project): "web" | "mobile" | "desktop" {
  if (project.status === "portrait") return "mobile";
  const allDesc = [
    project.description1,
    project.description2,
    project.description3,
    project.description4,
    project.description5,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  if (allDesc.includes("netbeans") || allDesc.includes("java ")) return "desktop";
  return "web";
}

function parseTechBadges(project: Project): string[] {
  const fields = [
    project.description0,
    project.description1,
    project.description2,
    project.description3,
    project.description4,
    project.description5,
  ];
  const techs: string[] = [];
  for (const field of fields) {
    if (!field) continue;
    const stripped = field.replace(/^[^a-zA-Z(]+/, "").trim();
    if (/^technologies used:?\s*$/i.test(stripped)) continue;
    const colonIdx = stripped.indexOf(":");
    const techPart =
      colonIdx !== -1 ? stripped.slice(colonIdx + 1).trim() : stripped;
    if (!techPart) continue;
    techPart.split(",").forEach((t) => {
      const cleaned = t.trim();
      if (cleaned && !techs.includes(cleaned)) techs.push(cleaned);
    });
  }
  return techs.slice(0, 6);
}

function getImages(project: Project): string[] {
  return [
    project.image,
    project.image1,
    project.image2,
    project.image3,
    project.image4,
    project.image5,
    project.image6,
  ].filter(Boolean) as string[];
}

const ProjectComponent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);

  const filtered = projects.filter((p) => {
    if (activeCategory === "All") return true;
    return getProjectCategory(p) === activeCategory.toLowerCase();
  });

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalImageIdx(0);
  };

  const closeModal = () => setSelectedProject(null);
  const modalImages = selectedProject ? getImages(selectedProject) : [];

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-500 mb-2 font-semibold">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold primary">
              My Projects
            </h1>
          </div>
          <span className="text-gray-700 text-sm font-mono hidden sm:block">
            {projects.length} projects
          </span>
        </div>
        <p className="text-gray-500 text-sm max-w-xl">
          A collection of my work spanning web applications, mobile apps, and
          desktop systems — each built to solve real problems.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mt-6">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter(
                    (p) => getProjectCategory(p) === cat.toLowerCase()
                  ).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20"
                    : "border border-white/10 text-gray-400 hover:border-cyan-500/40 hover:text-white"
                }`}
              >
                {cat}
                <span
                  className={`ml-1.5 text-xs ${
                    activeCategory === cat ? "text-white/60" : "text-gray-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project, idx) => {
          const images = getImages(project);
          const techs = parseTechBadges(project);
          return (
            <div
              key={project.Count}
              onClick={() => openModal(project)}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 flex flex-col"
            >
              {/* Media */}
              <div className="relative h-48 bg-black overflow-hidden flex-shrink-0">
                {project.video ? (
                  <video
                    src={project.video}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : images[0] ? (
                  <Image
                    src={images[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`transition-transform duration-700 group-hover:scale-105 ${
                      project.status === "portrait"
                        ? "object-contain p-3"
                        : "object-cover"
                    }`}
                    priority={idx < 3}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-4 py-1.5 rounded-full font-medium">
                    View Details
                  </span>
                </div>

                {/* Count badge */}
                <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm rounded-md px-2 py-0.5 border border-white/10">
                  <span className="text-xs font-bold primary">
                    {project.Count}
                  </span>
                </div>

                {/* Image count */}
                {images.length > 1 && (
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-sm text-[10px] text-gray-400 px-2 py-0.5 rounded-md border border-white/10">
                    1 / {images.length}
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-sm mb-2 line-clamp-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {techs.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {techs.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 leading-5"
                      >
                        {tech}
                      </span>
                    ))}
                    {techs.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/10 leading-5">
                        +{techs.length - 3}
                      </span>
                    )}
                  </div>
                )}

                <p className="text-gray-500 text-xs line-clamp-2 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {project.link && (
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-[9px]" />
                      Live Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors cursor-pointer"
              aria-label="Close"
            >
              <FaTimes size={12} />
            </button>

            {/* Media */}
            <div className="relative h-56 sm:h-72 bg-black overflow-hidden rounded-t-2xl">
              {selectedProject.video ? (
                <video
                  src={selectedProject.video}
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              ) : modalImages.length > 0 ? (
                <>
                  <Image
                    key={modalImageIdx}
                    src={modalImages[modalImageIdx]}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className={
                      selectedProject.status === "portrait"
                        ? "object-contain p-4"
                        : "object-cover"
                    }
                    priority
                  />
                  {modalImages.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setModalImageIdx(
                            (p) =>
                              (p - 1 + modalImages.length) % modalImages.length
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition cursor-pointer"
                      >
                        <FaChevronLeft size={12} />
                      </button>
                      <button
                        onClick={() =>
                          setModalImageIdx((p) => (p + 1) % modalImages.length)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition cursor-pointer"
                      >
                        <FaChevronRight size={12} />
                      </button>
                      {/* Dot indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {modalImages.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setModalImageIdx(i)}
                            className={`rounded-full transition-all cursor-pointer ${
                              i === modalImageIdx
                                ? "bg-white w-4 h-1.5"
                                : "bg-white/40 w-1.5 h-1.5"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : null}
            </div>

            {/* Modal content */}
            <div className="p-5 sm:p-6">
              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-black text-white/10 select-none leading-none">
                  {selectedProject.Count}
                </span>
                <h2 className="text-xl font-bold text-white leading-tight">
                  {selectedProject.title}
                </h2>
              </div>

              {/* Tech badges */}
              {parseTechBadges(selectedProject).length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {parseTechBadges(selectedProject).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {selectedProject.description}
              </p>

              {/* Tech breakdown */}
              {[
                selectedProject.description1,
                selectedProject.description2,
                selectedProject.description3,
                selectedProject.description4,
                selectedProject.description5,
              ].some(Boolean) && (
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 mb-5">
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-3">
                    Technologies Used
                  </p>
                  <div className="space-y-2">
                    {[
                      selectedProject.description1,
                      selectedProject.description2,
                      selectedProject.description3,
                      selectedProject.description4,
                      selectedProject.description5,
                    ]
                      .filter(Boolean)
                      .map((d, i) => {
                        const cleaned = d!.replace(/^[^a-zA-Z(]+/, "").trim();
                        const colonIdx = cleaned.indexOf(":");
                        if (colonIdx !== -1) {
                          const label = cleaned.slice(0, colonIdx).trim();
                          const value = cleaned.slice(colonIdx + 1).trim();
                          return (
                            <div
                              key={i}
                              className="flex items-baseline gap-2 text-sm"
                            >
                              <span className="text-gray-500 shrink-0 min-w-[80px]">
                                {label}
                              </span>
                              <span className="text-gray-300">{value}</span>
                            </div>
                          );
                        }
                        return (
                          <div key={i} className="text-sm text-gray-300">
                            {cleaned}
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* CTA */}
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
                >
                  View Live Project <FaExternalLinkAlt size={11} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectComponent;
