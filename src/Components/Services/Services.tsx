import type React from "react";
import type { FC } from "react";
import {
  LayoutGrid,
  Server,
  MonitorSmartphone,
  Laptop,
  Palette,
  Film,
} from "lucide-react";

const ServiceCard: FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#212129] rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#29a9e1]/10">
      <div className="bg-[#1a1a20] p-4 rounded-lg w-fit mb-4">
        <div className="text-[#29a9e1]">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services: FC = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Crafting visually appealing and responsive user interfaces using React.js, Next.js, Tailwind CSS, and modern UI libraries.",
      icon: <LayoutGrid className="h-6 w-6" />,
    },
    {
      title: "Backend Development",
      description:
        "Building scalable and secure server-side applications using Node.js, Express.js, NestJS, and MongoDB with API integrations.",
      icon: <Server className="h-6 w-6" />,
    },
    {
      title: "Fullstack Development",
      description:
        "Developing end-to-end web applications with both frontend and backend technologies for a seamless user experience.",
      icon: <MonitorSmartphone className="h-6 w-6" />,
    },
    {
      title: "Desktop App Development",
      description:
        "Creating powerful and efficient desktop applications using Tauri.js and other cross-platform frameworks.",
      icon: <Laptop className="h-6 w-6" />,
    },
    {
      title: "Graphic Design",
      description:
        "Designing stunning visuals, branding elements, and UI/UX assets using Adobe Photoshop, Illustrator, and Figma.",
      icon: <Palette className="h-6 w-6" />,
    },
    {
      title: "Video Editing",
      description:
        "Editing and producing high-quality videos with effects, transitions, and animations using Adobe Premiere Pro and After Effects.",
      icon: <Film className="h-6 w-6" />,
    },
  ];

  return (
    <div
      className="max-w-[1200px] mx-auto bg-transparent border border-gray-900 rounded-4xl sm:py-20 py-10 px-5"
      id="services"
      data-aos="fade-in"
      data-aos-duration="1600"
    >
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-white mb-4">My Services</h2>
        <div className="w-20 h-1 bg-[#29a9e1] mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I offer a comprehensive range of digital services to help bring your
          vision to life. Each service is tailored to meet your specific needs
          and goals.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-aos="zoom-out"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      <div className="mt-16 text-center" data-aos="fade-in">
        <div className="bg-[#212129] rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a custom solution?
          </h3>
          <p className="text-gray-400 mb-6">
            I&apos;m always open to discussing new projects and creative ideas.
            If you have a specific requirement that&apos;s not listed above,
            let&apos;s talk about it.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#29a9e1] text-white font-medium rounded-md hover:bg-[#1d8cbf] transition-colors"
          >
            Let&apos;s work together
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
