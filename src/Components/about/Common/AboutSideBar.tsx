"use client";
import { useRouter, usePathname } from "next/navigation";

interface SideBar {
  href: string;
  label: string;
  shortLabel: string; // Mobile එකට කෙටි label එකක්
}

const sideBarLinks: SideBar[] = [
  { href: "aboutme", label: "About Me", shortLabel: "About" },
  { href: "education", label: "Education", shortLabel: "Education" },
  { href: "skills", label: "Skills", shortLabel: "Skills" },
  { href: "workExperience", label: "Work Experience", shortLabel: "Experience" },
];

const AboutSideBar = () => {
  const router = useRouter();
  const pathname = usePathname() || "/about/aboutme";

  const handleNavClick = (href: string) => {
    router.push(`/about/${href}`);
  };

  return (
    <>
      {/* Mobile Header Navigation - ඉහලට තියෙන navigation */}
      <div className="fixed left-0 w-full z-50 md:hidden mb-4">
  <div className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-xl p-3 z-40">
    <div className="flex justify-between items-center gap-1 overflow-x-auto scrollbar-hide">
      {sideBarLinks.map((link) => {
        const isActive = pathname.includes(link.href);
        return (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className={`transition-all duration-300 text-xs font-medium px-3 py-2 rounded-lg flex-shrink-0 whitespace-nowrap ${
              isActive
                ? "text-white bg-blue-600"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
          >
            {link.shortLabel}
          </button>
        );
      })}
    </div>
  </div>
</div>


      {/* Desktop Sidebar - desktop එකේ පැත්තේ තියෙන sidebar */}
      {/* <div className="hidden  md:flex md:flex-col w-64 bg-black border border-gray-800 text-white p-4 rounded-l-3xl md:mt-2"> */}
        {/* Navigation */}
        {/* <nav className="flex flex-col space-y-10 mt-6 flex-grow">
          {sideBarLinks.map((link) => {
            const isActive = pathname.includes(link.href);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`transition-all font-kulim duration-300 text-xl font-medium p-2 w-[90%] rounded-full flex text-center justify-center cursor-pointer ${
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
      </div> */}



       {/* Desktop Sidebar - desktop එකේ පැත්තේ තියෙන sidebar */}
      <div
        className="hidden md:flex md:flex-col w-64 bg-black border border-gray-800 text-white p-4 rounded-l-3xl
                    fixed top-27 left-24 h-[87%]"
      >
        {/* Navigation */}
        <nav className="flex flex-col space-y-10 mt-6= overflow-y-auto">
          {sideBarLinks.map((link) => {
            const isActive = pathname.includes(link.href);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`transition-all font-kulim duration-300 text-xl font-medium p-2 w-[90%] rounded-full flex text-center justify-center cursor-pointer ${
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
    </>
  );
};

export default AboutSideBar;