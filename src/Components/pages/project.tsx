"use client";

import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import type Project from '@/types/project';



const Project: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  // Projects array
  const projects: Project[] = [
    {
      video: "https://res.cloudinary.com/dy972wrlb/video/upload/v1741629585/Portfolio%20%20%28React%20Js%29/sepb75jiqary2vdaqw0k.mp4",
      description: "The Skyline Airline Reservation System simplifies flight booking and management with secure user accounts, easy flight search and an admin dashboard for efficient operations.",
      description0: "💻Technologies Used: ",
      description1: "🔴Frontend: React JS",
      description2: "🔴Backend: Express JS, Node JS",
      description3: "🔴Database: MongoDB",
      title: "MERN Airline Reservation System",
      link: "https://github.com/Mayuru0/Skyline-React-Project-.git",
      Count: "01",
    },
    {
      video: "https://res.cloudinary.com/dy972wrlb/video/upload/v1741629596/Portfolio%20%20%28React%20Js%29/zetorq460rg2isubzxfg.mp4",
      description: "A personal portfolio showcasing my skills, projects, and experience in web development.",
      description0: "💻Technologies Used: React JS, JavaScript",
      title: "My Portfolio",
      link: "https://github.com/Mayuru0/Portfolio-Project--React-Js---vite-.git",
      Count: "02",
    },
    {
      image: '/assets/java1.png', 
      description: "An inventory management system to track and manage products, orders, and stock levels efficiently.",
      description0: "💻Technologies Used: ",
      description1: "🔴NetBeans IDE, Java, JavaScript, MySQL, XAMPP Server",
      title: "Inventory Management System",
      link: "https://github.com/Mayuru0/Pos-System-java-.git",
      Count: "03",
    },
    {
      video: '/assets/W.mp4', // Example path for video
      description: "Mark Computer Shop offers a seamless online shopping experience, bringing the latest tech products and exclusive deals right to your doorstep.",
      description0: "💻Technologies Used: ",
      description1: "🔴WordPress, XAMPP Server",
      title: "E-commerce Website (MARK Computer)",
      Count: "04",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className='max-w-[1200px] mx-auto p-5'>
      <div className='pb-8' data-aos="fade-in" data-aos-duration='1600'>
        <p className='text-4xl mb-3 font-bold primary'>My Projects</p>
        <p className='text-gray-400'>Check out some of my recent work</p>
      </div>

      <div className='flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6'>
        {/* Description Section */}
        <div className='flex-1 md:order-1 text-center md:text-left'>
          <h1 className='text-4xl text-white font-extrabold'
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration='1600'>
            {projects[currentProject].Count}
          </h1>
          <h3 className='text-2xl font-bold mb-4 text-white'
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration='1600'>
            {projects[currentProject].title}
          </h3>
          <div data-aos="zoom-in" data-aos-duration='1600'>
            <p className='text-gray-200 mb-1'>{projects[currentProject].description}</p>
            <p className='text-gray-200'>{projects[currentProject].description0}</p>
            <p className='text-gray-500 ml-6'>{projects[currentProject].description1}</p>
            <p className='text-gray-500 ml-6'>{projects[currentProject].description2}</p>
            <p className='text-gray-500 ml-6'>{projects[currentProject].description3}</p>
          </div>
          {projects[currentProject].link && (
            <a href={projects[currentProject].link} target='_blank' rel='noopener noreferrer'>
              <div className='border-t-4 border-gray-700 mt-2'>
                <button className='flex items-center text-white bg-gradient-to-r scale-100 px-6 py-2 rounded-full transition duration-300 mt-2 hover:bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-700'>
                  View Project <FaGithub className='ml-2 scale-100' />
                </button>
              </div>
            </a>
          )}
        </div>

        {/* Media Section (Image or Video) */}
        <div className='flex-1 md:order-2'>
          <div className='relative group rounded-lg shadow-lg overflow-hidden' data-aos="fade-up-left" data-aos-duration='1600'>
            {projects[currentProject].video ? (
              <video
                src={projects[currentProject].video}
                controls
                autoPlay
                muted
                loop
                className='w-full h-full object-cover transform group-hover:scale-110 transition duration-500'
              />
            ) : (
              <img
                src={projects[currentProject].image || '/assets/default.png'} // Default image if no image path is available
                alt={projects[currentProject].title}
                className='w-full h-full object-cover transform group-hover:scale-110 transition duration-500'
              />
            )}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition duration-500'></div>
          </div>
        </div>
      </div>

      <div className='flex justify-between mt-8'>
        <button
          onClick={prevProject}
          className='text-white bg-gradient-to-r hover:bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-700 px-4 py-2 rounded-full transition duration-300'>
          Previous
        </button>
        <button
          onClick={nextProject}
          className='text-white bg-gradient-to-r hover:bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-700 px-4 py-2 rounded-full transition duration-300'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Project;
