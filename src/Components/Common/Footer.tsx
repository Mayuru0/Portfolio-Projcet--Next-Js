import React from 'react'
import { FaSquareFacebook, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin, FaYoutube, FaTwitterSquare } from "react-icons/fa";

// Define the type for each social media link object
interface SocialMedia {
  icon: React.ReactElement;
  path: string;
}

const Footer: React.FC = () => {
  // Define an array of social media links with their corresponding icons and paths
  const socialMedia: SocialMedia[] = [
    { icon: <FaSquareFacebook className='text-white w-5 h-5' />, path: "https://www.facebook.com/profile.php?id=100080722121368" },
    { icon: <FaSquareInstagram className='text-white w-5 h-5' />, path: "https://www.instagram.com/_mayuru_madhuranga_/" },
    { icon: <FaLinkedin className='text-white w-5 h-5' />, path: "https://www.linkedin.com/in/mayuru-madhuranga-7bbb73312/" },
    { icon: <FaYoutube className='text-white w-5 h-5' />, path: "https://www.youtube.com/@0_madhuranga_0" },
    { icon: <FaTwitterSquare className='text-white w-5 h-5' />, path: "https://x.com/00_Marsh_00" },
    { icon: <FaSquareGithub className='text-white w-5 h-5' />, path: "https://github.com/Mayuru0" },
  ];

  return (
    <div className='max-w-[1200px] p-6 sm:p-12 flex flex-col sm:flex-row justify-between items-center sm:items-start mx-auto'>
      <span className='primary text-center sm:text-left'>
        <a href='/home'>MAYURU MADHURANGA</a>
      </span>

      <div className='flex gap-6 mt-6 sm:mt-0 sm:mb-0'>
        {socialMedia.map((social, index) => (
          <a key={index} href={social.path} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        ))}
      </div>

      <p className='text-gray-600 text-center sm:text-right mt-6 sm:mt-0'>
        maurumaduranga5@gmail.com
      </p>
    </div>
  );
}

export default Footer;
