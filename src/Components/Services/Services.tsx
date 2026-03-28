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
import { BiMobile } from "react-icons/bi";

const ServiceCard: FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 h-full flex flex-col">
      {/* Icon */}
      <div className="mb-5 w-fit">
        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-cyan-400/20">
          <div className="text-cyan-400">{icon}</div>
        </div>
      </div>

      <h3 className="text-base font-bold text-white mb-2 tracking-wide">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-grow">{description}</p>
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
      title: "Desktop  App Development",
      description:
        "Creating powerful and efficient desktop applications using Tauri.js and other cross-platform frameworks.",
      icon: <Laptop className="h-6 w-6" /> ,
    },
    {
  title: "Mobile App Development",
  description:
    "Building high-performance and user-friendly mobile applications using Flutter, React Native, and other modern cross-platform technologies.",
  icon: <BiMobile className="h-6 w-6" />,
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
      className="max-w-[1200px] mx-auto px-4 sm:py-20 py-10"
      id="services"
      data-aos="fade-in"
      data-aos-duration="1200"
    >
      {/* Section header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <span className="inline-block text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 glass rounded-full px-4 py-1.5 border border-cyan-400/20">
          What I Do
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">My Services</h2>
        <div className="gradient-line w-24 mx-auto mb-6" />
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          A comprehensive range of digital services tailored to bring your
          vision to life with modern technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="700"
            data-aos-once="true"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center" data-aos="fade-up">
        <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto border border-cyan-400/10">
          <h3 className="text-2xl font-bold text-white mb-3">
            Need a custom solution?
          </h3>
          <p className="text-gray-400 text-sm mb-7 max-w-lg mx-auto leading-relaxed">
            I&apos;m always open to discussing new projects and creative ideas.
            If you have a specific requirement, let&apos;s talk about it.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl
              bg-gradient-to-r from-cyan-500 to-blue-600
              hover:from-cyan-400 hover:to-blue-500
              text-white font-semibold text-sm
              shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35
              hover:scale-[1.03] transition-all duration-300"
          >
            Let&apos;s work together
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
