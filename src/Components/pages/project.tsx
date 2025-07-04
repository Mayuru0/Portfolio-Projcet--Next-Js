"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { GrView } from "react-icons/gr";
import type Project from "@/types/project"
import Image from "next/image"
import { projects } from "@/Data/Project"
const ProjectComponent: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0)
  const [currentImage, setCurrentImage] = useState<number>(0)

  // Reset image carousel when project changes
  useEffect(() => {
    setCurrentImage(0)
  }, [currentProject])

  // Projects array
  

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const nextImage = () => {
    const project = projects[currentProject]
    const imageCount = countImages(project)
    if (imageCount > 1) {
      setCurrentImage((prev) => (prev + 1) % imageCount)
    }
  }

  const prevImage = () => {
    const project = projects[currentProject]
    const imageCount = countImages(project)
    if (imageCount > 1) {
      setCurrentImage((prev) => (prev - 1 + imageCount) % imageCount)
    }
  }

  // Helper function to count images in a project
  const countImages = (project: Project): number => {
    let count = 0
    if (project.image) count++
    if (project.image1) count++
    if (project.image2) count++
    if (project.image3) count++
    if (project.image4) count++
    if (project.image5) count++
    if (project.image6) count++
    return count
  }

  // Helper function to get current image URL
  const getCurrentImageUrl = (project: Project): string | undefined => {
    switch (currentImage) {
      case 0:
        return project.image
      case 1:
        return project.image1
      case 2:
        return project.image2
      case 3:
        return project.image3
      case 4:
        return project.image4
      case 5:
        return project.image5
      case 6:
        return project.image6
      default:
        return project.image
    }
  }

  // Check if current project has multiple images
  const hasMultipleImages = countImages(projects[currentProject]) > 1

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <div className="pb-8" data-aos="fade-in" data-aos-duration="1600">
        <p className="text-4xl mb-3 font-bold primary">My Projects</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Description Section */}
        <div className="flex-1 md:order-1 text-center md:text-left">
          <h1
            className="text-4xl text-white font-extrabold"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1600"
          >
            {projects[currentProject].Count}
          </h1>
          <h3
            className="text-2xl font-bold mb-4 text-white"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1600"
          >
            {projects[currentProject].title}
          </h3>
          <div data-aos="zoom-in" data-aos-duration="1600">
            <p className="text-gray-200 mb-1">{projects[currentProject].description}</p>
            <p className="text-gray-200">{projects[currentProject].description0}</p>
            <p className="text-gray-500 ml-6">{projects[currentProject].description1}</p>
            <p className="text-gray-500 ml-6">{projects[currentProject].description2}</p>
            <p className="text-gray-500 ml-6">{projects[currentProject].description3}</p>
          </div>
          {projects[currentProject].link && (
            <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer">
              <div className="border-t-4 border-gray-700 mt-2">
                <button className="flex items-center text-white bg-gradient-to-r scale-100 px-6 py-2 rounded-full transition duration-300 mt-2 hover:bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-700">
                  View Project <GrView className="ml-2 scale-100" />
                </button>
              </div>
            </a>
          )}
        </div>

        {/* Media Section (Video, Image, or Carousel) */}
        <div className="flex-1 md:order-2">
          <div
            className="relative group rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up-left"
            data-aos-duration="1600"
          >
            {projects[currentProject].video ? (
              // Video display
              <video
                src={projects[currentProject].video}
                controls
                autoPlay
                muted
                loop
                className="w-full h-full object-cover "
              />
            ) : (
              // Image or Carousel display
              <div className="relative">
                <Image
                  width={500}
                  height={500}
                  src={getCurrentImageUrl(projects[currentProject]) || "/assets/default.png"}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover transform "
                />

                {/* Carousel Controls - Only show if multiple images */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
                      aria-label="Previous image"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
                      aria-label="Next image"
                    >
                      <FaChevronRight />
                    </button>

                    {/* Carousel Indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                      {Array.from({ length: countImages(projects[currentProject]) }).map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImage(index)
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentImage === index ? "bg-white scale-125" : "bg-white/50"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition duration-500"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={prevProject}
          className="text-white bg-gradient-to-r hover:bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-700 px-4 py-2 rounded-full transition duration-300"
        >
          Previous
        </button>
        <button
          onClick={nextProject}
          className="text-white bg-gradient-to-r hover:bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-700 px-4 py-2 rounded-full transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ProjectComponent

