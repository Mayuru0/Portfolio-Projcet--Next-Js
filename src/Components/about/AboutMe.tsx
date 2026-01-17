"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
      easing: "ease-in-out", // Animation easing
    });
  }, []);
  const personalInfo = {
    name: "Mayuru Madhuranga",
    age: 25,
    from: "79,Maryland Wathurugama",
    languages: ["Sinhala", "English"],
    interests: ["Programming", "Video Editing"],
    hobbies: ["Coding", "Gaming", "Videography", "Traveling"],
  };

  return (
    <div className="min-h-screen bg-transparent border border-gray-800 rounded-r-2xl text-white flex flex-col p-4 md:p-8 lg:p-12 mt-2">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-8 primary animate-bounce">
          About Me
        </h1>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-12 gap-6">
          {/* Profile Image */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-gray-700">
            <Image
              src="https://res.cloudinary.com/dy972wrlb/image/upload/v1741633214/Portfolio%20%20%28React%20Js%29/lr88uy5trjaefcxsdjjj.png"
              alt="Profile Picture"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>

          {/* Personal Info */}
          <div className="flex-1 " data-aos="fade-left">
            <h2 className="text-2xl font-semibold" data-aos="fade-up">
              {personalInfo.name}
            </h2>
            <p className="text-lg text-gray-400 mb-4 animate-pulse">
              Fullstack Developer | MERN Stack Developer
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <p>
                <span className="font-semibold primary">Age:</span>{" "}
                {personalInfo.age}
              </p>
              <p>
                <span className="font-semibold primary">From:</span>{" "}
                {personalInfo.from}
              </p>
              <p>
                <span className="font-semibold primary">Languages:</span>{" "}
                {personalInfo.languages.join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 "
          data-aos="fade-left"
        >
          {/* Interests */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 primary">Interests</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              {personalInfo.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </section>

          {/* Hobbies */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 primary">Hobbies</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              {personalInfo.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* My Journey Section */}
        <section className="mt-12" data-aos="fade-up">
          <h3
            className="text-2xl font-semibold mb-4 primary"
            data-aos="fade-up"
          >
            My Journey
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4 text-justify">
            I&apos;m a committed and capable student currently pursuing a Higher
            National Diploma in Information Technology. As a passionate and
            skilled Full-Stack Developer, I specialize in building responsive
            web applications using the MERN stack and Next.js, and developing
            cross-platform desktop applications using Rust and Tauri.js.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4 text-justify">
            I have 6 months of hands-on internship experience and over 1 year of
            self-driven project development, where I actively used GitHub for
            version control, collaboration, and code management. My backend
            development experience includes Node.js, Express.js, and basic
            knowledge of NestJS, along with using Firebase for backend services.
            Additionally, I have implemented image uploading functionality using
            Cloudinary.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4 text-justify">
            My development journey includes working with JavaScript, TypeScript,
            and Redux, as well as implementing JWT authentication and optimizing
            both MongoDB and MySQL databases for better performance and
            scalability.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4 text-justify">
            I&apos;ve also gained experience in Docker for containerizing
            applications, and implemented CI/CD pipelines using GitHub Actions
            to automate build, test, and deployment workflows. Furthermore, I&apos;ve
            deployed and managed applications on AWS EC2 and AWS Lightsail with Nginx and SSL
            configurations, ensuring secure and efficient deployment processes.
          </p>
          <p className="text-gray-300 leading-relaxed text-justify ">
            I&apos;m passionate about writing clean, efficient, and maintainable
            code, and I thrive in agile, collaborative development environments.
            With a solid foundation in multiple programming languages and tools,
            I&apos;m eager to contribute creative and practical solutions to dynamic,
            fast-paced teams. Additionally, I aim to pursue a top-up degree to
            further deepen my technical expertise and career growth.
          </p>
        </section>
      </div>
    </div>
  );
}
