"use client";

import type React from "react";
import type { FC } from "react";
import {
  LayoutGrid,
  Server,
  MonitorSmartphone,
  Laptop,
  Palette,
  Film,
  Code,
  Globe,
  Smartphone,
  Database,
  Settings,
  Layers,
} from "lucide-react";
import { BiMobile } from "react-icons/bi";
import { useGetServicesQuery } from "@/store/api/portfolioApi";
import { servicesData } from "@/Data/Services";

const iconMap: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="h-6 w-6" />,
  Server: <Server className="h-6 w-6" />,
  MonitorSmartphone: <MonitorSmartphone className="h-6 w-6" />,
  Laptop: <Laptop className="h-6 w-6" />,
  Palette: <Palette className="h-6 w-6" />,
  Film: <Film className="h-6 w-6" />,
  BiMobile: <BiMobile className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
  Globe: <Globe className="h-6 w-6" />,
  Smartphone: <Smartphone className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  Settings: <Settings className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
};

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

const SkeletonCard = () => (
  <div className="glass-card rounded-2xl p-6 h-full flex flex-col space-y-4">
    <div className="w-12 h-12 rounded-xl bg-white/8" />
    <div className="h-4 w-2/3 bg-white/8 rounded-full" />
    <div className="space-y-2 flex-1">
      <div className="h-3 bg-white/8 rounded-full" />
      <div className="h-3 bg-white/8 rounded-full w-5/6" />
      <div className="h-3 bg-white/8 rounded-full w-4/5" />
    </div>
  </div>
);

const Services: FC = () => {
  const { data, isLoading, isError } = useGetServicesQuery();
  const services = (isError || !data) ? servicesData : data;

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
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} data-aos-duration="700" data-aos-once="true">
                <SkeletonCard />
              </div>
            ))
          : services.map((service, index) => (
              <div
                key={service._id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="700"
                data-aos-once="true"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={iconMap[service.icon] ?? <LayoutGrid className="h-6 w-6" />}
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
