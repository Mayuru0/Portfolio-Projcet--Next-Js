"use client";

import type React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about/aboutme" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/Mayuru0",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/mayuru-madhuranga-7bbb73312/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter size={20} />,
      url: "https://x.com/00_Marsh_00",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope size={20} />,
      url: "mailto:mayurumaduranga@gmail.com",
      label: "Gmail",
    },
  ];

  return (
    <footer className="relative mt-8 text-gray-400">
      {/* Top gradient line */}
      <div className="gradient-line w-full" />

      <div className="glass-nav py-12 pb-6">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* About */}
            <div>
              <h3 className="text-lg font-bold primary font-mono mb-3 tracking-wider">
                MAYURU MADHURANGA
              </h3>
              <p className="text-sm leading-relaxed mb-5 text-gray-500">
                Full-stack developer specializing in creating beautiful,
                functional, and responsive web applications.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-2 rounded-lg glass border border-white/8 text-gray-500
                      hover:text-cyan-400 hover:border-cyan-400/25 transition-all duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-white mb-4 tracking-widest uppercase">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold text-white mb-4 tracking-widest uppercase">
                Contact
              </h3>
              <div className="space-y-2 text-sm text-gray-500">
                <p>mayurumaduranga@gmail.com</p>
                <p>+94 774366459</p>
                <p>No. 79, Maryland, Wathurugama, Gampaha, Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/6 pt-6 text-center">
            <p className="text-xs text-gray-600">
              &copy; {currentYear} Mayuru Madhuranga. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
