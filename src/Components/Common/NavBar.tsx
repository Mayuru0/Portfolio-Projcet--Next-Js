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

  const handleNav = () => setNav(!nav);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = () => {
    setNav(false);
    scrollToTop();
  };

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Prevent background scroll when mobile menu open (iOS fix)
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

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

      {/* 🔥 NAVBAR */}
      <div
        className={`sticky top-0 z-50 h-[72px] text-gray-300 max-w-[1200px] mx-auto
        flex justify-between items-center px-6 transition-all duration-500
        ${
          scrolled
            ? "glass-nav rounded-2xl mt-2 mx-4 shadow-lg shadow-black/40"
            : "bg-transparent"
        }`}
      >
        {/* LOGO */}
        <h1 className="text-xl font-bold primary font-mono tracking-wider">
          <Link href="/" onClick={scrollToTop}>
            MAYURU MADHURANGA
          </Link>
        </h1>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                onClick={scrollToTop}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${
                  pathname === link.path
                    ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE ICON */}
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer text-cyan-400 z-50"
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>

        {/* 🔥 MOBILE MENU */}
        <div
          className={`fixed top-0 left-0 h-full w-[65%] z-40
          transition-all duration-500 ease-in-out
          
          /* iOS + fallback fix */
          bg-black/80 supports-[backdrop-filter]:bg-black/40
          backdrop-blur-xl
          
          border-r border-white/10
          will-change-transform
          
          ${nav ? "translate-x-0" : "-translate-x-full"}`}
        >
          <h1 className="text-xl font-bold primary font-mono m-6 pt-4">
            MAYURU MADHURANGA
          </h1>

          <div className="mx-6 gradient-line mb-6" />

          <ul className="px-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={handleNavClick}
                  className={`block px-4 py-3 rounded-xl text-lg transition-all duration-300
                  ${
                    pathname === link.path
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

        {/* 🔥 OVERLAY (dark background when menu open) */}
        {nav && (
          <div
            onClick={() => setNav(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </div>
    </>
  );
};

export default Navbar;