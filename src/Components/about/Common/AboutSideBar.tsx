"use client";
import { useRouter, usePathname } from "next/navigation";

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

  const handleNavClick = (href: string) => {
    router.push(`/about/${href}`); // Ensure it navigates correctly
  };

  return (
    <div className="w-64 bg-black border border-gray-800 text-white mt-2 rounded-l-3xl flex flex-col justify-between p-4">
      {/* Navigation */}
      <nav className="flex flex-col space-y-10 mt-6 flex-grow">
        {sideBarLinks.map((link) => {
          const isActive = pathname.includes(link.href); // Check if the current path includes the href
          return (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`transition-all font-kulim duration-300 text-xl font-medium p-2 w-[90%] rounded-full flex text-center justify-center  ${
                isActive
                  ? "text-white bg-blue-600 "
                  : "text-white hover:text-[#6200EE] hover:underline"
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default AboutSideBar;
