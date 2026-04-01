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
  className={`sticky top-0 z-50 h-[72px] text-gray-300 max-w-[1200px] mx-auto
  flex justify-between items-center px-6 transition-all duration-500
  ${scrolled
    ? "glass-nav rounded-2xl mt-2 mx-4 shadow-lg shadow-black/40"
    : "bg-transparent"
  }`}
>

        <h1 className="text-xl font-bold primary font-mono tracking-wider">
          <Link href="/" onClick={scrollToTop}>
            MAYURU MADHURANGA
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                onClick={scrollToTop}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${pathname === link.path
                    ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer text-cyan-400"
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed h-full top-0 w-[65%] z-50 ease-in-out duration-500
            backdrop-blur-2xl bg-black/80 border-r border-white/10
            ${nav ? "left-0" : "left-[-100%]"}`}
        >
          <h1 className="text-xl font-bold primary font-mono m-6 pt-4">
            MAYURU MADHURANGA
          </h1>
          <div className="mx-6 gradient-line mb-6" />
          <ul className="pt-2 space-y-1 px-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={handleNavClick}
                  className={`block px-4 py-3 rounded-xl text-lg transition-all duration-300
                    ${pathname === link.path
                      ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                >
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
