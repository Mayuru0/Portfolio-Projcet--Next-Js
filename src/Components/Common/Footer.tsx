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
    <footer className="bg-black text-gray-400 pt-10 pb-6">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              MAYURU MADHURANGA
            </h3>
            <p className="mb-4">
              Full-stack developer specializing in creating beautiful,
              functional, and responsive web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          

          {/* Quick Links */}
          <div className="grid">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="hover:text-blue-600 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <p className="mb-2">Email: mayurumaduranga@gmail.com</p>
            <p className="mb-2">Phone: +94 774366459</p>
            <div className="flex">
              <p className="mr-2">Location:</p>
              <p className="flex">
                No. 79, Maryland, Wathurugama, Gampaha, Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p>&copy; {currentYear} Mayuru Madhuranga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
