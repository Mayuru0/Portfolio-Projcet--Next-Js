"use client";

import React, { type CSSProperties } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialProps {
  Cstyle: string;
}

const socialMedia = [
  { Icon: FaLinkedin,  label: "LinkedIn",   path: "https://www.linkedin.com/in/mayuru-madhuranga-7bbb73312/", color: "#0A66C2" },
  { Icon: FaGithub,    label: "GitHub",     path: "https://github.com/Mayuru0",                                color: "#e6edf3" },
  { Icon: FaXTwitter,  label: "Twitter",    path: "https://x.com/00_Marsh_00",                                color: "#e6edf3" },
  { Icon: FaInstagram, label: "Instagram",  path: "https://www.instagram.com/_mayuru_madhuranga_/",           color: "#E1306C" },
  { Icon: FaYoutube,   label: "YouTube",    path: "https://www.youtube.com/@MadhurangaOfficial",              color: "#FF0000" },
  { Icon: FaFacebook,  label: "Facebook",   path: "https://www.facebook.com/profile.php?id=100080722121368", color: "#316FF6" },
];

const Social: React.FC<SocialProps> = ({ Cstyle }) => {
  return (
    <div className={Cstyle} data-aos="fade-right" data-aos-duration="1200">
      {socialMedia.map(({ Icon, label, path, color }, index) => (
        <a
          key={index}
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          style={{ "--brand": color } as CSSProperties}
          className="group flex items-center gap-2 px-3 py-2 rounded-xl
            glass border border-white/8
            hover:border-white/18 hover:bg-white/6
            transition-all duration-300 hover:scale-[1.05] hover:-translate-y-0.5"
        >
          <span className="text-gray-500 group-hover:[color:var(--brand)] transition-colors duration-300">
            <Icon className="w-4 h-4" />
          </span>
          <span className="text-xs text-gray-500 font-medium group-hover:text-gray-200 transition-colors duration-300 hidden sm:inline">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Social;
