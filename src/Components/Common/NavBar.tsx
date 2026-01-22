"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Head from "next/head";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setNav(!nav);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle navigation with scroll to top
  const handleNavClick = () => {
    setNav(false);
    scrollToTop();
  };

  // Listen for scroll to change background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about/aboutme" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <Head>
        <title>Home | Mayuru Maduranga</title>
        <meta
          name="description"
          content="Welcome to my portfolio. I'm a full-stack developer passionate about building modern web applications."
        />
      </Head>

      <div
        className={`sticky top-0 z-50 h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center px-4 transition-all duration-300 ${
          scrolled ? " backdrop-blur-md rounded-b-lg" : "bg-transparent"
        }`}
      >
        <h1 className="text-3xl font-bold primary font-mono">
          <Link href="/" onClick={scrollToTop}>MAYURU MADHURANGA</Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`p-5 hover:text-blue-600 transition duration-300 ${
                pathname === link.path ? "text-blue-600 font-bold" : ""
              }`}
            >
            <Link href={link.path} onClick={scrollToTop}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer text-blue-500 "
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed h-full left-0 top-0 w-[60%] bg-black/90 z-20 ease-in-out duration-500 ${
            nav ? "left-0" : "left-[-100%]"
          }`}
        >
          <h1 className="text-3xl font-bold text-blue-500 m-4">
            Mayuru Madhuranga
          </h1>
          <ul className="pt-8 text-2xl">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`p-5 hover:text-blue-600 transition duration-300 ${
                  pathname === link.path ? "text-blue-600 font-bold" : ""
                }`}
              >
                <Link href={link.path} onClick={handleNavClick}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
