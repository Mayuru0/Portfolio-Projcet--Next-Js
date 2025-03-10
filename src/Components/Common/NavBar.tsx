'use client';

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setNav(!nav);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skill' },
    { name: 'About', path: '/about' },
    { name: 'Project', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className='bg-black h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='text-3xl font-bold primary ml-4 font-mono'>
        <Link href='/'>MAYURU MADHURANGA</Link>
      </h1>
      
      <ul className='hidden md:flex'>
        {navLinks.map((link) => (
          <li 
            key={link.name} 
            className={`p-5 hover:text-blue-600 ${pathname === link.path ? 'text-blue-600 border-b-2 border-blue-600 ' : ''}`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] z-10 ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className='text-3xl font-bold primary m-4'>Mayuru Madhuranga</h1>
        <ul className='pt-8 text-2xl'>
          {navLinks.map((link) => (
            <li 
              key={link.name} 
              className={`p-5 hover:text-blue-600 ${pathname === link.path ? 'text-blue-600' : ''}`}
            >
              <Link href={link.path} onClick={() => setNav(false)}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};  

export default Navbar;
