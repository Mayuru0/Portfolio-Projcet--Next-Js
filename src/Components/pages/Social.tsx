import React from 'react';
import { FaSquareFacebook, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin, FaYoutube, FaTwitterSquare } from "react-icons/fa";

// Define the type for the props
interface SocialProps {
  Cstyle: string; // Cstyle is a string for custom class names
}

const Social: React.FC<SocialProps> = ({ Cstyle }) => {
  const socialMedia = [
    { icon: <FaSquareFacebook className='text-[#316FF6] w-8 h-8 ' />, path: "https://www.facebook.com/profile.php?id=100080722121368" },
    { icon: <FaSquareInstagram className='bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] w-8 h-8 ' />, path: "https://www.instagram.com/_mayuru_madhuranga_/" },
    { icon: <FaLinkedin className='text-[#0077b5] w-8 h-8 '/>, path: "https://www.linkedin.com/in/mayuru-madhuranga-7bbb73312/" },
    { icon: <FaYoutube className='text-[#FF0000] w-9 h-9 '/>, path: "https://www.youtube.com/@0_madhuranga_0" },
    { icon: <FaTwitterSquare className='text-[#1C9CEA] w-8 h-8 ' />, path: "https://x.com/00_Marsh_00" },
    { icon: <FaSquareGithub className='text-white w-8 h-8 ' />, path: "https://github.com/Mayuru0" },
  ];

  return (
    <div className={Cstyle} data-aos="fade-right" data-aos-duration='1600'>
      {socialMedia.map((social, index) => (
        <a key={index} href={social.path} target="_blank" rel="noopener noreferrer">
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default Social;
