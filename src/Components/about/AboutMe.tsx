"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const personalInfo = {
    name: "Mayuru Madhuranga",
    age: 25,
    from: "No 79,Maryland Wathurugama",
    languages: ["Sinhala", "English"],
    interests: ["Programming", "Video Editing"],
    hobbies: ["Coding", "Gaming", "Videography", "Traveling"],
  };

  return (
    <div className="min-h-screen bg-transparent border border-gray-800 rounded-xl md:rounded-r-2xl text-white flex flex-col p-3 sm:p-6 md:p-8 lg:p-12 mt-20 md:mt-2 ">
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 primary animate-bounce text-center sm:text-left">
          About Me
        </h1>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8 sm:mb-12 gap-4 sm:gap-6">
          {/* Profile Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gray-700 flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dy972wrlb/image/upload/v1741633214/Portfolio%20%20%28React%20Js%29/lr88uy5trjaefcxsdjjj.png"
              alt="Profile Picture"
              width={192}
              height={192}
              className="object-cover "
            />
          </div>

          {/* Personal Info */}
          <div className="flex-1 text-center md:text-left" data-aos="fade-left">
            <h2
              className="text-xl sm:text-2xl font-semibold"
              data-aos="fade-up"
            >
              {personalInfo.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-3 sm:mb-4 animate-pulse">
              Fullstack Developer | MERN Stack Developer
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm sm:text-base text-gray-300">
              <p>
                <span className="font-semibold primary">Age:</span>{" "}
                {personalInfo.age}
              </p>
              <p>
                <span className="font-semibold primary">From:</span>{" "}
                {personalInfo.from}
              </p>
              <p className="sm:col-span-2">
                <span className="font-semibold primary">Languages:</span>{" "}
                {personalInfo.languages.join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          data-aos="fade-left"
        >
          {/* Interests */}
          <section>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 primary">
              Interests
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 leading-relaxed space-y-1">
              {personalInfo.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </section>

          {/* Hobbies */}
          <section>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 primary">
              Hobbies
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 leading-relaxed space-y-1">
              {personalInfo.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* My Journey Section */}
        <section className="mt-8 sm:mt-12" data-aos="fade-up">
          <h3
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 primary"
            data-aos="fade-up"
          >
            My Journey
          </h3>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
            <p>
              I&apos;m a committed and capable student currently pursuing a{" "}
              <strong>Higher National Diploma in Information Technology</strong>
              . As a passionate and skilled{" "}
              <strong>Full-Stack Developer</strong>, I specialize in building
              responsive web applications using the <strong>MERN stack</strong>{" "}
              and <strong>Next.js</strong>, developing cross-platform desktop
              applications using <strong>Rust</strong> and{" "}
              <strong>Tauri.js</strong>, and creating mobile applications using{" "}
              <strong>React Native</strong>.
            </p>
            <p>
              I have <strong>6 months</strong> of hands-on internship experience
              and over <strong>1 year</strong> of self-driven project
              development, where I actively used <strong>GitHub</strong> for
              version control, collaboration, and code management. My backend
              development experience includes <strong>Node.js</strong>,{" "}
              <strong>Express.js</strong>, and basic knowledge of{" "}
              <strong>NestJS</strong>, along with using{" "}
              <strong>Firebase</strong> for backend services. Additionally, I
              have implemented image uploading functionality using{" "}
              <strong>Cloudinary</strong>.
            </p>
            <p>
              My development journey includes working with{" "}
              <strong>JavaScript</strong>, <strong>TypeScript</strong>, and{" "}
              <strong>Redux</strong>, as well as implementing{" "}
              <strong>JWT authentication</strong> and optimizing both{" "}
              <strong>MongoDB</strong> and <strong>MySQL</strong> databases for
              better performance and scalability.
            </p>
            <p>
              I&apos;ve also gained experience in <strong>Docker</strong> for
              containerizing applications, and implemented{" "}
              <strong>CI/CD pipelines</strong> using{" "}
              <strong>GitHub Actions</strong> to automate build, test, and
              deployment workflows. Furthermore, I&apos;ve deployed and managed
              applications on <strong>AWS EC2</strong> and{" "}
              <strong>AWS Lightsail</strong> with <strong>Nginx</strong> and{" "}
              <strong>SSL</strong> configurations, ensuring secure and efficient
              deployment processes.
            </p>
            <p>
              I&apos;m passionate about writing clean, efficient, and
              maintainable code, and I thrive in{" "}
              <strong>agile, collaborative development environments</strong>.
              With a solid foundation in multiple programming languages and
              tools, I&apos;m eager to contribute creative and practical
              solutions to dynamic, fast-paced teams. Additionally, I aim to
              pursue a <strong>top-up degree</strong> to further deepen my
              technical expertise and career growth.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
