"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { FaUser, FaGraduationCap, FaCode, FaBriefcase } from "react-icons/fa";

interface SideBar {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const sideBarLinks: SideBar[] = [
  { href: "aboutme",        label: "About Me",   icon: <FaUser size={15} /> },
  { href: "education",      label: "Education",  icon: <FaGraduationCap size={15} /> },
  { href: "skills",         label: "Skills",     icon: <FaCode size={15} /> },
  { href: "workExperience", label: "Experience", icon: <FaBriefcase size={15} /> },
];

const AboutSideBar = () => {
  const router   = useRouter();
  const pathname = usePathname() || "/about/aboutme";
  const [loading, setLoading] = useState<string | null>(null);

  const navigate = (href: string) => {
    if (pathname.includes(href)) return;
    setLoading(href);
    router.push(`/about/${href}`);
    // clear loading after transition completes
    setTimeout(() => setLoading(null), 800);
  };

  return (
    <>
      {/* ── Mobile top tab bar ───────────────────────────────── */}
      <div className="fixed top-[72px] left-0 w-full z-40 md:hidden">
        <div className="glass-nav border-b border-white/8 px-4 py-2">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide max-w-lg mx-auto">
            {sideBarLinks.map(({ href, label, icon }) => {
              const active    = pathname.includes(href);
              const isLoading = loading === href;
              return (
                <button
                  key={href}
                  onClick={() => navigate(href)}
                  disabled={isLoading}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium
                    flex-shrink-0 whitespace-nowrap transition-all duration-300
                    ${active
                      ? "bg-cyan-500/20 border border-cyan-400/40 text-cyan-400"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <span className={`transition-all duration-300 ${active ? "text-cyan-400" : "text-gray-500"}`}>
                    {isLoading ? <Spinner /> : icon}
                  </span>
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Desktop sidebar ──────────────────────────────────── */}
      <aside className="hidden md:flex flex-col w-56 fixed top-[88px] left-[max(1rem,calc((100vw-80rem)/2+1rem))] z-30">
        <div className="glass-card rounded-2xl p-5 space-y-1">
          <p className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold mb-4 px-1">
            Navigation
          </p>

          <nav className="flex flex-col gap-1">
            {sideBarLinks.map(({ href, label, icon }) => {
              const active    = pathname.includes(href);
              const isLoading = loading === href;
              return (
                <button
                  key={href}
                  onClick={() => navigate(href)}
                  disabled={isLoading}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl
                    text-sm font-medium text-left w-full transition-all duration-300
                    ${active
                      ? "bg-gradient-to-r from-cyan-500/15 to-blue-500/10 border border-cyan-400/30 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                >
                  <span className={`flex-shrink-0 transition-colors duration-300
                    ${active ? "text-cyan-400" : "text-gray-600 group-hover:text-gray-400"}`}>
                    {isLoading ? <Spinner /> : icon}
                  </span>

                  {label}

                  {active && !isLoading && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 glow-dot" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="gradient-line mt-4 rounded-full" />
        </div>
      </aside>
    </>
  );
};

const Spinner = () => (
  <svg
    className="animate-spin text-cyan-400"
    width="15" height="15" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round"
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

export default AboutSideBar;
