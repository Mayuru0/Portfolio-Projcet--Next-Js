"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile toggle

interface SideBar {
  href: string;
  label: string;
}

const sideBarLinks: SideBar[] = [
  { href: "aboutme", label: "About Me" },
  { href: "education", label: "Education" },
  { href: "skills", label: "Skills" },
  { href: "workExperience", label: "Work Experience" },
];

const AboutSideBar = () => {
  const router = useRouter();
  const pathname = usePathname() || "/about/aboutme"; // Default path
  const [isOpen, setIsOpen] = useState(false); // Mobile sidebar toggle

  const handleNavClick = (href: string) => {
    router.push(`/about/${href}`);
    setIsOpen(false); // Close sidebar after selecting a link (for mobile)
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-black p-2 rounded-full border border-gray-700 text-white  mt-20 -ml-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-black border  border-gray-800 text-white transform transition-transform duration-300 ease-in-out p-4 rounded-l-3xl md:static md:translate-x-0 md:mt-2 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:flex md:flex-col`}
      >
        {/* Navigation */}
        <nav className="flex flex-col space-y-10 mt-6 flex-grow ">
          {sideBarLinks.map((link) => {
            const isActive = pathname.includes(link.href);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`transition-all font-kulim duration-300 text-xl font-medium p-2 w-[90%] rounded-full flex text-center justify-center ${
                  isActive
                    ? "text-white bg-blue-600"
                    : "text-white hover:text-[#6200EE] hover:underline"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Background Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AboutSideBar;
