import type { ApiExperience } from '@/types/api';

export const workExperienceData: ApiExperience[] = [
  {
    _id: 'exp-1',
    period: '2024 - 2025',
    role: 'Intern Fullstack Developer',
    company: 'Cypso Labs PVT LTD',
    type: 'Internship · 6 months',
    description: `As a full-stack developer, I create quick, scalable, and intuitive web applications using the MERN stack, Next.js, and Redux for state management. I successfully completed a 6-month internship during which I worked on more than five desktop and web applications using these frameworks. During this time, I effectively utilized GitHub and focused on writing clean, efficient, and reusable code while adhering to industry best practices including agile methodologies, version control (Git), and maintaining high code quality. I collaborated with cross-functional teams to enhance application security, optimize REST APIs, and develop user-friendly features.`,
    stack: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Redux', 'Git'],
    order: 1,
    isActive: true,
  },
];