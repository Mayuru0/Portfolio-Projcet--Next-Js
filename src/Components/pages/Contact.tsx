"use client"

import { useEffect, type FC } from "react"
import { Phone, Mail, MapPin, ChevronDown, Send } from "lucide-react"

import AOS from "aos";
import "aos/dist/aos.css"

const Contact: FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="max-w-[1200px] mx-auto px-4 sm:py-20 py-10"
      id="contact"
      data-aos="fade-in"
      data-aos-duration="1200"
    >
      {/* Section header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <span className="inline-block text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 glass rounded-full px-4 py-1.5 border border-cyan-400/20">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Contact Me</h2>
        <div className="gradient-line w-24 mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div
          className="glass-card rounded-2xl p-6 sm:p-10"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <form action="https://getform.io/f/ayvkqmeb" method="POST" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstname"
                placeholder="Firstname"
                className="glass-input w-full px-4 py-3 text-gray-300 placeholder-gray-600 rounded-xl text-sm"
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Lastname"
                className="glass-input w-full px-4 py-3 text-gray-300 placeholder-gray-600 rounded-xl text-sm"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="glass-input w-full px-4 py-3 text-gray-300 placeholder-gray-600 rounded-xl text-sm"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              className="glass-input w-full px-4 py-3 text-gray-300 placeholder-gray-600 rounded-xl text-sm"
            />

            <div className="relative">
              <select
                name="service"
                className="glass-input w-full px-4 py-3 text-gray-400 rounded-xl text-sm appearance-none"
                defaultValue=""
              >
                <option value="" className="bg-[#0a0f1e]">UI/UX Design</option>
                <option value="web-development" className="bg-[#0a0f1e]">Web Development</option>
                <option value="mern" className="bg-[#0a0f1e]">MERN Stack Developer</option>
                <option value="fullstack" className="bg-[#0a0f1e]">Full Stack Developer</option>
                <option value="mobile-app" className="bg-[#0a0f1e]">Mobile App Development</option>
                <option value="other" className="bg-[#0a0f1e]">Other</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>

            <textarea
              name="message"
              placeholder="Type your message here."
              className="glass-input w-full px-4 py-3 text-gray-300 placeholder-gray-600 rounded-xl text-sm resize-none"
              rows={5}
              required
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 p-4 rounded-xl
                bg-gradient-to-r from-cyan-500 to-blue-600
                hover:from-cyan-400 hover:to-blue-500
                text-white font-semibold text-sm
                shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35
                hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center space-y-5 md:pl-4">
          {[
            {
              icon: <Phone className="h-5 w-5 text-cyan-400" />,
              label: "Phone",
              value: "+94 774366459",
            },
            {
              icon: <Mail className="h-5 w-5 text-cyan-400" />,
              label: "Email",
              value: "mayurumaduranga@gmail.com",
            },
            {
              icon: <MapPin className="h-5 w-5 text-cyan-400" />,
              label: "Address",
              value: "No. 79, Maryland, Wathurugama, Gampaha, Sri Lanka",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 flex items-start space-x-4
                hover:border-cyan-400/25 transition-all duration-300"
              data-aos="fade-left"
              data-aos-delay={i * 120}
              data-aos-duration="700"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-cyan-400/20 shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-cyan-400 font-bold tracking-widest uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
