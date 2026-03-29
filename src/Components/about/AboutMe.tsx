"use client";

import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt, FaLanguage, FaGamepad, FaCode, FaUser } from "react-icons/fa";

const highlights = [
  { icon: <FaUser size={12} />,         label: "Age",       value: "25" },
  { icon: <FaMapMarkerAlt size={12} />, label: "Location",  value: "Wathurugama, Sri Lanka" },
  { icon: <FaLanguage size={12} />,     label: "Languages", value: "Sinhala, English" },
  { icon: <FaCode size={12} />,         label: "Interests", value: "Programming, Video Editing" },
  { icon: <FaGamepad size={12} />,      label: "Hobbies",   value: "Coding, Gaming, Videography, Traveling" },
];

const techHighlights = [
  "MERN Stack", "Next.js", "TypeScript", "React Native",
  "Tauri.js", "Docker", "CI/CD", "AWS EC2",
];

const stats = [
  { value: "2+",  label: "Years Exp." },
  { value: "20+", label: "Projects" },
  { value: "6mo", label: "Internship" },
];

export default function AboutMe() {
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
                src="https://res.cloudinary.com/dy972wrlb/image/upload/v1741633214/Portfolio%20%20%28React%20Js%29/lr88uy5trjaefcxsdjjj.png"
                alt="Mayuru Madhuranga"
                width={144}
                height={144}
                className="object-cover w-full "
              />
            </div>
            {/* Available badge */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 text-[10px] font-semibold bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 rounded-full px-2.5 py-0.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse " />
              Available
            </span>
          </div>

          {/* Name + role + stats */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-0.5">Mayuru Madhuranga</h3>
            <p className="text-sm text-cyan-400 font-mono mb-4 animate-pulse">Full Stack Developer · MERN Stack</p>

            {/* Mini stats */}
            <div className="flex justify-center sm:justify-start gap-5">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center ">
                  <div className="text-lg font-extrabold text-white">{value}</div>
                  <div className="text-[10px] text-gray-500 tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10" data-aos="fade-up" data-aos-delay="150">
          {highlights.map(({ icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 glass border border-white/8 rounded-xl px-4 py-3">
              <span className="mt-0.5 text-cyan-400 flex-shrink-0">{icon}</span>
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
            <p>
              I&apos;m a committed and capable student currently pursuing a{" "}
              <span className="text-white font-medium">Higher National Diploma in Information Technology</span>. As a passionate and skilled{" "}
              <span className="text-white font-medium">Full-Stack Developer</span>, I specialize in building responsive web applications using the{" "}
              <span className="text-cyan-400 font-medium">MERN stack</span> and{" "}
              <span className="text-cyan-400 font-medium">Next.js</span>, developing cross-platform desktop applications using{" "}
              <span className="text-cyan-400 font-medium">Rust</span> and{" "}
              <span className="text-cyan-400 font-medium">Tauri.js</span>, and creating mobile applications using{" "}
              <span className="text-cyan-400 font-medium">React Native</span>.
            </p>
            <p>
              I have <span className="text-white font-medium">6 months</span> of hands-on internship experience and over{" "}
              <span className="text-white font-medium">1 year</span> of self-driven project development, where I actively used{" "}
              <span className="text-cyan-400 font-medium">GitHub</span> for version control, collaboration, and code management. My backend
              development experience includes <span className="text-cyan-400 font-medium">Node.js</span>,{" "}
              <span className="text-cyan-400 font-medium">Express.js</span>, and basic knowledge of{" "}
              <span className="text-cyan-400 font-medium">NestJS</span>, along with using{" "}
              <span className="text-cyan-400 font-medium">Firebase</span> for backend services. Additionally, I have implemented image uploading
              functionality using <span className="text-cyan-400 font-medium">Cloudinary</span>.
            </p>
            <p>
              My development journey includes working with{" "}
              <span className="text-cyan-400 font-medium">JavaScript</span>,{" "}
              <span className="text-cyan-400 font-medium">TypeScript</span>, and{" "}
              <span className="text-cyan-400 font-medium">Redux</span>, as well as implementing{" "}
              <span className="text-cyan-400 font-medium">JWT authentication</span> and optimizing both{" "}
              <span className="text-cyan-400 font-medium">MongoDB</span> and{" "}
              <span className="text-cyan-400 font-medium">MySQL</span> databases for better performance and scalability.
            </p>
            <p>
              I&apos;ve also gained experience in <span className="text-cyan-400 font-medium">Docker</span> for containerizing applications, and
              implemented <span className="text-cyan-400 font-medium">CI/CD pipelines</span> using{" "}
              <span className="text-cyan-400 font-medium">GitHub Actions</span> to automate build, test, and deployment workflows. Furthermore,
              I&apos;ve deployed and managed applications on{" "}
              <span className="text-cyan-400 font-medium">AWS EC2</span> and{" "}
              <span className="text-cyan-400 font-medium">AWS Lightsail</span> with{" "}
              <span className="text-cyan-400 font-medium">Nginx</span> and{" "}
              <span className="text-cyan-400 font-medium">SSL</span> configurations, ensuring secure and efficient deployment processes.
            </p>
            <p>
              I&apos;m passionate about writing clean, efficient, and maintainable code, and I thrive in{" "}
              <span className="text-white font-medium">agile, collaborative development environments</span>. With a solid foundation in multiple
              programming languages and tools, I&apos;m eager to contribute creative and practical solutions to dynamic, fast-paced teams.
              Additionally, I aim to pursue a <span className="text-white font-medium">top-up degree</span> to further deepen my technical
              expertise and career growth.
            </p>
          </div>
        </div>

        {/* Tech highlights */}
        <div data-aos="fade-up" data-aos-delay="250">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mb-3">Core Technologies</p>
          <div className="flex flex-wrap gap-2">
            {techHighlights.map((tech) => (
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
