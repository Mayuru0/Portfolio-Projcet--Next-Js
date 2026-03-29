"use client";

import React, { useEffect, useRef, useState } from "react";
import Social from "./Social";
import { TypeAnimation } from "react-type-animation";
import ProfilePhoto from "../ProfilePhoto";
import { FaDownload, FaArrowRight, } from "react-icons/fa";
import { useGetProfileQuery } from "@/store/api/portfolioApi";
import AOS from "aos";
import "aos/dist/aos.css";

function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger || target === 0) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, trigger]);
  return count;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const numMatch = value.match(/^(\d+)/);
  const num = numMatch ? parseInt(numMatch[1], 10) : null;
  const suffix = num !== null ? value.slice(String(num).length) : null;

  const animated = useCountUp(num ?? 0, 1800, visible && num !== null);

  return (
    <div ref={ref} className="text-center">
      <div className="text-white text-2xl font-extrabold leading-none">
        {num !== null && visible ? `${animated}${suffix}` : value}
      </div>
      <div className="text-gray-500 text-xs mt-1 tracking-wide">{label}</div>
    </div>
  );
}

const statusColorMap: Record<string, string> = {
  cyan: "bg-cyan-400",
  green: "bg-green-400",
  yellow: "bg-yellow-400",
  red: "bg-red-400",
};

const statusTextColorMap: Record<string, string> = {
  cyan: "text-cyan-400",
  green: "text-green-400",
  yellow: "text-yellow-400",
  red: "text-red-400",
};

const statusBorderColorMap: Record<string, string> = {
  cyan: "border-cyan-400/20",
  green: "border-green-400/20",
  yellow: "border-yellow-400/20",
  red: "border-red-400/20",
};

const Profile: React.FC = () => {
  const { data: profile } = useGetProfileQuery();
  const [totalCommits, setTotalCommits] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    fetch("/api/github-commits")
      .then((r) => r.json())
      .then((data) => {
        if (data.totalCommits !== null) setTotalCommits(data.totalCommits);
      })
      .catch(() => {});
  }, []);

  const techStack = profile?.techStack ?? ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Express"];

  const baseStats = profile?.stats?.length
    ? profile.stats
    : [
        { value: "2+", label: "Years Exp." },
        { value: "20+", label: "Projects" },
        { value: "10+", label: "Technologies" },
        { value: "...", label: "Commits" },
      ];

  const stats = baseStats.map((s) =>
    s.label === "Commits"
      ? { ...s, value: totalCommits !== null ? `${totalCommits}+` : s.value }
      : s
  );

  const typingSequence: (string | number)[] = profile?.typingTitles?.length
    ? profile.typingTitles.flatMap((t) => [t, 1400])
    : ["Full Stack Developer", 1400, "MERN Stack Developer", 1400, "React / Next.js Developer", 1400, "Backend Engineer", 1400];

  const statusColor = profile?.statusColor ?? "cyan";
  const nameParts = profile?.name?.split(" ") ?? ["Mayuru", "Madhuranga"];
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:min-h-[80vh] mx-auto py-16 px-4 bg-transparent items-center"
      id="p"
    >
      {/* Profile Image */}
      <div
        className="col-span-1 my-auto mx-auto sm:-ml-0 md:-ml-10 lg:-ml-20"
        data-aos="fade-right"
        data-aos-duration="900"
      >
        <ProfilePhoto imageUrl={profile?.image} />
      </div>

      {/* Profile Info */}
      <div
        className="col-span-2 my-auto space-y-6"
        data-aos="fade-down"
        data-aos-duration="900"
      >
        {/* Status badge */}
        <div className={`inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 border animate-pulse ${statusBorderColorMap[statusColor]}`}>
          <span className={`w-2 h-2 rounded-full ${statusColorMap[statusColor]} glow-dot animate-pulse`} />
          <span className={`${statusTextColorMap[statusColor]} text-xs font-semibold tracking-widest uppercase`}>
            {profile?.statusText ?? "Available for work"}
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
            {firstName}{" "}
            <span className="primary">{lastName}</span>
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-500 text-base sm:text-lg ">—</span>
            <TypeAnimation
              sequence={typingSequence}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              className="text-cyan-400 text-xl sm:text-2xl font-semibold tracking-wide"
            />
          </div>
        </div>

      {/* Bio */}
{/* Bio */}
<p 
 data-aos="fade-left"
 data-aos-duration="900"
className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl text-justify">
  {profile?.bio ?? (
    <>
      I am a dedicated IT student pursuing a Higher National Diploma, with a strong
      passion for Full-Stack Development. I specialize in building{" "}
      <span className="text-white font-medium">scalable, high-performance</span> web
      applications using MERN stack and Next.js, along with mobile and desktop app
      development. With hands-on internship experience and real-world projects, I focus
      on writing clean, efficient, and maintainable code.
    </>
  )}
</p>

        {/* Tech Stack chips */}
        <div className="flex flex-wrap gap-2"
         data-aos="fade-left"
        data-aos-duration="900"
        >
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
              <StatItem value={value} label={label} />
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
            href={profile?.cvLink ?? "https://drive.google.com/uc?export=download&id=1mJH34sHfYu8bwNXMZhKgqpNbIrk49WmL"}
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
          <Social Cstyle="flex flex-wrap gap-2.5" socialMedia={profile?.socialMedia} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
