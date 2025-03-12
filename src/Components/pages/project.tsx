"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { GrView } from "react-icons/gr";
import type Project from "@/types/project"
import Image from "next/image"

const ProjectComponent: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0)
  const [currentImage, setCurrentImage] = useState<number>(0)

  // Reset image carousel when project changes
  useEffect(() => {
    setCurrentImage(0)
  }, [currentProject])

  // Projects array
  const projects: Project[] = [
    
    {
       image:'https://res.cloudinary.com/dy972wrlb/image/upload/v1741761243/Portfolio%20%20%28React%20Js%29/Event/hjjak3k05osjgckojk82.png',
       image1:"https://res.cloudinary.com/dy972wrlb/image/upload/v1741761240/Portfolio%20%20%28React%20Js%29/Event/ta6x9qtjzkmriyhvxlr0.png",
       image2:"https://res.cloudinary.com/dy972wrlb/image/upload/v1741761237/Portfolio%20%20%28React%20Js%29/Event/spzs3d7lldsowpvwxues.png",
      description:
        "The Event Management System simplifies the organization, scheduling, and management of events with a user-friendly interface. It allows administrators to create events, manage participants, and track event details, all while being powered by Redux state management and a robust backend.",
      description0: "💻Technologies Used: ",
      description1: "🔴Frontend: Next.js, Tailwind CSS",
      description2: "🔴Backend: Express.js, Node.js",
      description3: "🔴State Management: Redux",
      description4: "🔴Database: MongoDB",
      title: "Event Management System",
      link: "https://github.com/Mayuru0/Event-Management-System.git", // Link to your GitHub repo or project page
      Count: "01",
    },

     {
      image:"https://res.cloudinary.com/dy972wrlb/image/upload/v1741761909/Portfolio%20%20%28React%20Js%29/cypso%20labs/hw0sculxbrh1lpungf8u.png",
      image1:"https://res.cloudinary.com/dy972wrlb/image/upload/v1741761905/Portfolio%20%20%28React%20Js%29/cypso%20labs/yju1yeuqlpwnrsavbule.png",
      description: "The Cypsolabs website showcases innovative software solutions with a responsive design, offering seamless navigation and a modern user experience using Next.js and Tailwind CSS.",
      description0: "💻Technologies Used: ",
      description1: "🔴Frontend: Next JS, Tailwind CSS",
      description2: "🔴Backend: Node JS ",
      description3: "🔴Database: MongoDB ",
      title: "Cypsolabs Website",
      link: "https://cypsolabs.com/",
      Count: "02",
    },
    
    {
      video:
        "https://res.cloudinary.com/dy972wrlb/video/upload/v1741629585/Portfolio%20%20%28React%20Js%29/sepb75jiqary2vdaqw0k.mp4",
      description:
        "The Skyline Airline Reservation System simplifies flight booking and management with secure user accounts, easy flight search and an admin dashboard for efficient operations.",
      description0: "💻Technologies Used: ",
      description1: "🔴Frontend: React JS",
      description2: "🔴Backend: Express JS, Node JS",
      description3: "🔴Database: MongoDB",
      title: "MERN Airline Reservation System",
      link: "https://github.com/Mayuru0/Skyline-React-Project-.git",
      Count: "03",
    },
    
    {
      video:
        "https://res.cloudinary.com/dy972wrlb/video/upload/v1741757787/Portfolio%20%20%28React%20Js%29/wr9iuzfuqyjzt4kdwnwj.mp4",
      description:
        "A personal portfolio showcasing my skills, projects, and experience in web development, built with Next.js, TypeScript, and animated with AOS and Framer Motion. Designed with Tailwind CSS for a sleek, responsive interface.",
      description0: "💻Technologies Used: Next.js, TypeScript, AOS, Framer Motion, Tailwind CSS",
      title: "My Portfolio",
      link: "https://mayuru-portfolio.vercel.app/",
      Count: "04",
    },

    {
      image:"https://res.cloudinary.com/dy972wrlb/image/upload/v1741762816/Portfolio%20%20%28React%20Js%29/evertech/fdsl6n1cs7gvxgpldvsd.png",
      image1:"https://res.cloudinary.com/dy972wrlb/image/upload/v1741762815/Portfolio%20%20%28React%20Js%29/evertech/a0icaefuhrdd1w5mqtbm.png",
      image2:"https://res.cloudinary.com/dy972wrlb/image/upload/v1741762815/Portfolio%20%20%28React%20Js%29/evertech/ge3h1u49kpjxm6mdplvz.png",
      description: "The EverTech Computer Shop Management System simplifies inventory management, order processing, and customer management with a modern admin panel, built using Next.js, Express.js, Node.js, Redux, and Tailwind CSS.",
      description0: "💻Technologies Used: ",
      description1: "🔴Frontend: Next JS, Tailwind CSS, Redux RTK",
      description2: "🔴Backend: Express JS, Node JS",
      description3: "🔴Database: MongoDB",
      title: "EverTech Computer Shop Management System",
      link: "https://www.evertech.lk/",
      Count: "05",
    },

     {
      image:"https://res.cloudinary.com/dy972wrlb/image/upload/v1741763281/Portfolio%20%20%28React%20Js%29/travel/zgapndznofydrtdrhcic.png",
      image1:"https://res.cloudinary.com/dy972wrlb/image/upload/v1741763279/Portfolio%20%20%28React%20Js%29/travel/cnhdcy88fx7c8y3q8o1f.png",
      image2:"https://res.cloudinary.com/dy972wrlb/image/upload/v1741763277/Portfolio%20%20%28React%20Js%29/travel/gb9g84ms6brpcgueq44t.png",
      description: "Serendipity-Travels is a travel booking platform designed with Next.js and Tailwind CSS, offering users a seamless experience to explore and book various travel destinations.",
      description0: "💻Technologies Used: ",
      description1: "🔴Frontend: Next JS, Tailwind CSS",
      description2: "🔴Backend: Node JS (optional for backend API implementation)",
      description3: "🔴Database: MongoDB (if required)",
      title: "Serendipity-Travels (Travel Booking Website)",
      link: "https://serendipity-travels-vn85.vercel.app/",
      Count: "06",
    },
    
    {
      image: "/assets/java1.png",
      description: "An inventory management system to track and manage products, orders, and stock levels efficiently.",
      description0: "💻Technologies Used: ",
      description1: "🔴NetBeans IDE, Java, JavaScript, MySQL, XAMPP Server",
      title: "Inventory Management System",
      link: "https://github.com/Mayuru0/Pos-System-java-.git",
      Count: "07",
    },
    {
      video: '/assets/W.mp4',
      description:
        "Mark Computer Shop offers a seamless online shopping experience, bringing the latest tech products and exclusive deals right to your doorstep.",
      description0: "💻Technologies Used: ",
      description1: "🔴WordPress, XAMPP Server",
      title: "E-commerce Website (MARK Computer)",
      Count: "08",
    },
  ]

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

