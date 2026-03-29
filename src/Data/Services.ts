import type { ApiService } from '@/types/api';

export const servicesData: ApiService[] = [
  {
    _id: 'srv-1',
    title: 'Frontend Development',
    description:
      'Crafting visually appealing and responsive user interfaces using React.js, Next.js, Tailwind CSS, and modern UI libraries.',
    icon: 'LayoutGrid',
    order: 1,
    isActive: true,
  },
  {
    _id: 'srv-2',
    title: 'Backend Development',
    description:
      'Building scalable and secure server-side applications using Node.js, Express.js, NestJS, and MongoDB with API integrations.',
    icon: 'Server',
    order: 2,
    isActive: true,
  },
  {
    _id: 'srv-3',
    title: 'Fullstack Development',
    description:
      'Developing end-to-end web applications with both frontend and backend technologies for a seamless user experience.',
    icon: 'MonitorSmartphone',
    order: 3,
    isActive: true,
  },
  {
    _id: 'srv-4',
    title: 'Desktop App Development',
    description:
      'Creating powerful and efficient desktop applications using Tauri.js and other cross-platform frameworks.',
    icon: 'Laptop',
    order: 4,
    isActive: true,
  },
  {
    _id: 'srv-5',
    title: 'Mobile App Development',
    description:
      'Building high-performance and user-friendly mobile applications using Flutter, React Native, and other modern cross-platform technologies.',
    icon: 'BiMobile',
    order: 5,
    isActive: true,
  },
  {
    _id: 'srv-6',
    title: 'Graphic Design',
    description:
      'Designing stunning visuals, branding elements, and UI/UX assets using Adobe Photoshop, Illustrator, and Figma.',
    icon: 'Palette',
    order: 6,
    isActive: true,
  },
  {
    _id: 'srv-7',
    title: 'Video Editing',
    description:
      'Editing and producing high-quality videos with effects, transitions, and animations using Adobe Premiere Pro and After Effects.',
    icon: 'Film',
    order: 7,
    isActive: true,
  },
];
