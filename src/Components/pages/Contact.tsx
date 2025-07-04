"use client"

import { useEffect, type FC } from "react"
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react"

import AOS from "aos";
import "aos/dist/aos.css"
const Contact: FC = () => {


    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Animation happens only once
          easing: "ease-in-out", // Animation easing
        });
      }, []);
  return (
    <div
      className="max-w-[1200px] mx-auto bg-black border border-gray-700 rounded-4xl sm:py-20 py-10 px-5"
      id="contact"
      data-aos="fade-in"
      data-aos-duration="1600"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-[#212129] rounded-xl p-6 sm:p-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent animate-bounce mb-8 flex text-center justify-center">Contact Me</h2>

          <form action="https://getform.io/f/ayvkqmeb" method="POST" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  className="bg-[#212129] w-full px-4 py-3 text-gray-400 placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:border-[#29a9e1]"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  className="bg-[#212129] w-full px-4 py-3 text-gray-400 placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:border-[#29a9e1]"
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="bg-[#212129] w-full px-4 py-3 text-gray-400 placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:border-[#29a9e1]"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="bg-[#212129] w-full px-4 py-3 text-gray-400 placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:border-[#29a9e1]"
              />
            </div>

            <div className="relative">
              <select
                name="service"
                className="bg-[#212129] w-full px-4 py-3 text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-[#29a9e1] appearance-none"
                defaultValue=""
              >
                <option value="" >
                  UI/UX Design
                </option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">MERN Stack Developer</option>
                <option value="mobile-app">Full Stack Developer</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Type your message here."
                className="bg-[#212129] w-full px-4 py-3 text-gray-400 placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:border-[#29a9e1]"
                rows={5}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="text-xl w-full p-4 font-medium text-white bg-[#29a9e1] rounded-md hover:bg-[#1d8cbf] transition-colors cursor-pointer"
              >
                Send message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center space-y-8 md:pl-8" >
          <div className="flex items-center space-x-6" data-aos="fade-in">
            <div className="bg-[#212129] p-4 rounded-lg">
              <Phone className="h-6 w-6 text-[#29a9e1] animate-pulse"  />
            </div>
            <div >
              <h3 className="text-xl font-medium text-white">Phone</h3>
              <p className="text-gray-400">+94 774366459</p>
            </div>
          </div>

          <div className="flex items-center space-x-6" data-aos="fade-in">
            <div className="bg-[#212129] p-4 rounded-lg">
              <Mail className="h-6 w-6 text-[#29a9e1] animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">Email</h3>
              <p className="text-gray-400">mayurumaduranga@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-6" data-aos="fade-in">
            <div className="bg-[#212129] p-4 rounded-lg">
              <MapPin className="h-6 w-6 text-[#29a9e1] animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">Address</h3>
              <p className="text-gray-400">No. 79, Maryland,Wathurugama, Gampaha, Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

