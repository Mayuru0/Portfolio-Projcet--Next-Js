import Link from 'next/link';
import React from 'react';

const educationDetails = [
  {
    year: '2021-Present',
    title: 'Higher National Diploma in Information Technology',
    institute: 'Advanced Technological Institute-Gampaha',
    link: 'http://gampaha.sliate.ac.lk/',
  },
  {
    year: '2019',
    title: 'G.C.E. A/L Examination',
    institute: 'Obtained 1C & 2S passes in Art Stream ',
    link: '#',
  },
];


const CertificationsDetails = [
  {
    year: '2021',
    title: ' Certificate course in English',
    institute: ' Discovery Educational Centre Kiridiwela',
    link: '',
  },
  {
    year: '2019',
    title: 'Certificate Course in Graphics Designing',
    institute: 'Wijeya Graphics Gampaha',
    link: '#',
  },
  {
    year: '2019',
    title: 'Certificate Course in Graphics Designing',
    institute: 'Wijeya Graphics Gampaha',
    link: '#',
  },
  {
    year: '2016',
    title: 'NVQ Level 1 Certificate in National Youth Corps',
    institute: 'National Youth Corps Yakkala',
    link: '#',
  },
  // {
  //   year: '2016',
  //   title: 'Adventure-Based Training in Naula ',
  //   institute: '',
  //   link: '#',
  // },
  // {
  //   year: '2016',
  //   title: 'Ledership & Personality Development Training in National Youth Corps Yakkala',
  //   institute: '',
  //   link: '#',
  // },
];

const Education = () => {
  return (
    <div className="border border-gray-800 rounded-r-2xl text-white flex flex-col md:flex-row p-4 md:p-8 lg:p-12 mt-2 ">
      {/* Content */}
      <div className="flex-1 mt-6 md:mt-0">
        <div className="space-y-8">
          <h1 className="text-3xl font-mono mb-6 primary animate-bounce" data-aos="fade-up">Education</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="zoom-out-up">
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-[#252525] rounded-lg p-6 relative">
            <div className="text-[#1da1f2] animate-pulse z-50 ml-5">{edu.year}</div>
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#1D3C4D] rounded-tl-full animate-pulse"></div>
            <h2 className="text-lg font-semibold mt-1">{edu.title}</h2>
            <div className="absolute top-0 left-0 w-12 h-12 bg-[#1D3C4D] rounded-br-full animate-pulse"></div>
            <div className="mt-4 flex items-center animate-none">
              <div className="w-2 h-2 rounded-full bg-[#1da1f2] mr-2"></div>
              <Link
                href={edu.link}
                className="cursor-pointer hover:text-blue-600 hover:underline"
              >
                {edu.institute}
              </Link>
            </div>
           
          </div>
        ))}
      </div>
        </div>

        <div className="space-y-8 mt-4">
          <h1 className="text-3xl font-mono mb-6 primary animate-bounce" data-aos="fade-up">Certifications</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="zoom-out-up">
        {CertificationsDetails.map((edu, index) => (
          <div key={index} className="bg-[#252525] rounded-lg p-6 relative">
            <div className="text-[#1da1f2] animate-pulse">{edu.year}</div>
            <div className="absolute top-0 right-0 w-12 h-12 bg-[#1D3C4D] rounded-bl-full animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#1D3C4D] rounded-tr-full animate-pulse"></div>
            <h2 className="text-xl font-semibold mt-1">{edu.title}</h2>
            <div className="mt-4 flex items-center animate-none">
              <div className="w-2 h-2 rounded-full bg-[#1da1f2] mr-2 ml-5"></div>
              <Link
                href={edu.link}
                className="cursor-pointer hover:text-blue-600 hover:underline"
              >
                {edu.institute}
              </Link>
            </div>
          </div>
        ))}
      </div>
        </div>



       
    </div>
    </div>
  );
};

export default Education;
