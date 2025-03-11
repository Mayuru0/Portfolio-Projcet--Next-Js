"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
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
    age: 24,
    from: "79,Maryland Wathurugama",
    languages: ["Sinhala", "English"],
    interests: ["Programming", "Video Editing"],
    hobbies: ["Coding", "Gaming", "Videography", "Traveling"],
  };

  return (
    <div className="min-h-screen bg-black border border-gray-800 rounded-r-2xl text-white flex flex-col p-4 md:p-8 lg:p-12 mt-2">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-8 primary animate-bounce">About Me</h1>

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
            <h2 className="text-2xl font-semibold" data-aos="fade-up">{personalInfo.name}</h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 " data-aos="fade-left">
          {/* Interests */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 primary">
              Interests
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              {personalInfo.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </section>

          {/* Hobbies */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 primary">
              Hobbies
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              {personalInfo.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* My Journey Section */}
        <section className="mt-12" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4 primary" data-aos="fade-up">
            My Journey
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
  I&apos;m a committed and capable student now working toward a Higher
  National Diploma in Information Technology. A committed and skilled
  full-stack developer with expertise in the MERN stack, Next.js, and
  Rust, specializing in building responsive web applications and
  desktop applications. Passionate about writing high-quality,
  efficient code and contributing to collaborative, agile development
  environments. Experienced in developing RESTful APIs, integrating
  modern technologies, and ensuring seamless user experiences.
</p>
<p className="text-gray-300 leading-relaxed">
  I have a solid background in a variety of programming languages and
  development tools, and I&apos;m excited to provide creative, approachable
  solutions to a fast-paced, dynamic organization. Additionally, I aim
  to expand my knowledge by pursuing a top-up degree to further
  enhance my expertise.
</p>

        </section>
      </div>
    </div>
  );
}
