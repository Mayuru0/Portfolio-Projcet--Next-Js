import type { ApiAbout } from "@/types/api";

const AboutData: ApiAbout = {
  _id: "static",
  name: "Mayuru Madhuranga",
  role: "Full Stack Developer · MERN Stack",
  image:
    "https://res.cloudinary.com/dy972wrlb/image/upload/v1741633214/Portfolio%20%20%28React%20Js%29/lr88uy5trjaefcxsdjjj.png",
  imagePublicId: "",
  highlights: [
    { icon: "FaUser",         label: "Age",       value: "25" },
    { icon: "FaMapMarkerAlt", label: "Location",  value: "Wathurugama, Sri Lanka" },
    { icon: "FaLanguage",     label: "Languages", value: "Sinhala, English" },
    { icon: "FaCode",         label: "Interests", value: "Programming, Video Editing" },
    { icon: "FaGamepad",      label: "Hobbies",   value: "Coding, Gaming, Videography, Traveling" },
  ],
  stats: [
    { value: "2+",  label: "Years Exp." },
    { value: "20+", label: "Projects" },
    { value: "6mo", label: "Internship" },
  ],
  story: [
    "I'm a committed and capable student currently pursuing a Higher National Diploma in Information Technology. As a passionate and skilled Full-Stack Developer, I specialize in building responsive web applications using the MERN stack and Next.js, developing cross-platform desktop applications using Rust and Tauri.js, and creating mobile applications using React Native.",
    "I have 6 months of hands-on internship experience and over 1 year of self-driven project development, where I actively used GitHub for version control, collaboration, and code management. My backend development experience includes Node.js, Express.js, and basic knowledge of NestJS, along with using Firebase for backend services. Additionally, I have implemented image uploading functionality using Cloudinary.",
    "My development journey includes working with JavaScript, TypeScript, and Redux, as well as implementing JWT authentication and optimizing both MongoDB and MySQL databases for better performance and scalability.",
    "I've also gained experience in Docker for containerizing applications, and implemented CI/CD pipelines using GitHub Actions to automate build, test, and deployment workflows. Furthermore, I've deployed and managed applications on AWS EC2 and AWS Lightsail with Nginx and SSL configurations, ensuring secure and efficient deployment processes.",
    "I'm passionate about writing clean, efficient, and maintainable code, and I thrive in agile, collaborative development environments. With a solid foundation in multiple programming languages and tools, I'm eager to contribute creative and practical solutions to dynamic, fast-paced teams. Additionally, I aim to pursue a top-up degree to further deepen my technical expertise and career growth.",
  ],
  techHighlights: [
    "MERN Stack", "Next.js", "TypeScript", "React Native",
    "Tauri.js", "Docker", "CI/CD", "AWS EC2",
  ],
};

export default AboutData;
