"use client";

import React, { type CSSProperties } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { ApiSocialMedia } from "@/types/api";

const iconMap: Record<string, React.ElementType> = {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
};

const colorMap: Record<string, string> = {
  FaLinkedin: "#0A66C2",
  FaGithub: "#e6edf3",
  FaXTwitter: "#e6edf3",
  FaInstagram: "#E1306C",
  FaYoutube: "#FF0000",
  FaFacebook: "#316FF6",
};

const fallbackSocialMedia: ApiSocialMedia[] = [
  { icon: "FaLinkedin",  platform: "LinkedIn",   url: "https://www.linkedin.com/in/mayuru-madhuranga-7bbb73312/" },
  { icon: "FaGithub",    platform: "GitHub",     url: "https://github.com/Mayuru0" },
  { icon: "FaXTwitter",  platform: "Twitter",    url: "https://x.com/00_Marsh_00" },
  { icon: "FaInstagram", platform: "Instagram",  url: "https://www.instagram.com/_mayuru_madhuranga_/" },
  { icon: "FaYoutube",   platform: "YouTube",    url: "https://www.youtube.com/@MadhurangaOfficial" },
  { icon: "FaFacebook",  platform: "Facebook",   url: "https://www.facebook.com/profile.php?id=100080722121368" },
];

interface SocialProps {
  Cstyle: string;
  socialMedia?: ApiSocialMedia[];
}

const Social: React.FC<SocialProps> = ({ Cstyle, socialMedia }) => {
  const items = socialMedia && socialMedia.length > 0 ? socialMedia : fallbackSocialMedia;
  return (
    <div className={Cstyle} data-aos="fade-right" data-aos-duration="1200">
      {items.map(({ platform, url, icon }, index) => {
        const Icon = iconMap[icon];
        if (!Icon) return null;
        const color = colorMap[icon] ?? "#e6edf3";
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={platform}
            title={platform}
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
              {platform}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default Social;
