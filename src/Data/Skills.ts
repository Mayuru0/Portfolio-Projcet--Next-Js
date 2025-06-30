import html from "../../public/assets/html.png";
import css from "../../public/assets/css.png";
import JavaScript from "../../public/assets/JavaScript.png";
import react from "../../public/assets/react.png";
import java from "../../public/assets/java.png";
import Nodejs from "../../public/assets//Nodejs.png";
import expressjs from "../../public/assets/express-js.png";

import tailwind from "../../public/assets/tailwind.png";
import mysql from "../../public/assets/mysql.png";
import mongoDB from "../../public/assets/mongoDB.png";
import Figma from "../../public/assets/Figma.png";
import wordpress from "../../public/assets/wordpress.png";
import AdobePhotoshop from "../../public/assets/AdobePhotoshop.png";
import AdobeLightroom from "../../public/assets/AdobeLightroom.png";
import AdobePremiere from "../../public/assets/AdobePremiere.png";
import nextjs from "../../public/assets/nextjs.png";
import typescript from "../../public/assets/typescript.png";
import nest from "../../public/assets/nest.png";
//import tauri from "../../public/assets/tauri.jpg";
import redux from "../../public/assets/redux.png";
import Context from "../../public/assets/Context.png";
import github from "../../public/assets/github.png";
import docker from "../../public/assets/docker.png";
import Python from "../../public/assets/Python.png";
import { SkillCategory } from "@/types/Skills";
import C from "../../public/assets/C Sharp Logo.svg";
import Redux from "../../public/assets/Reduxq.png";
import turi from "../../public/assets/tauri.png";
import Flutter from "../../public/assets/Flutter.png";
import PostgreSQL from "../../public/assets/PostgreSQL.png";
import VSCode from "../../public/assets/VSCode.png";
import IntelliJ from "../../public/assets/IntelliJ.png";
import NetBeans from "../../public/assets/NetBeans.png";
import Android from "../../public/assets/Android.png";
import GIT from "../../public/assets/GIT.png";
import POSTMAN from "../../public/assets/POSTMAN.png";
import Firebase from "../../public/assets/Firebase.png";
import Xampp from "../../public/assets/XAMPP.webp";
import Vercel from "../../public/assets/Vercel.png";
import Cloudinary from "../../public/assets/Cloudinary.png";

export const skillCategories: SkillCategory[] = [
  {
    emoji: "👨‍💻",
    title: " Programming Languages",
    skills: [
      { name: "JavaScript", img: JavaScript },
      { name: "TypeScript", img: typescript },
      { name: "Java", img: java },
      { name: "C#", img: C },
      { name: "Python", img: Python },
      { name: "HTML", img: html },
      { name: "CSS", img: css },
    ],
  },
  {
    emoji: "🌐",
    title: " Frontend Development",
    skills: [
      { name: "React.js", img: react },
      { name: "Next.js", img: nextjs },
      { name: "Redux", img: Redux },
       { name: "Tailwind CSS", img: tailwind },
      { name: "HTML", img: html },
      { name: "CSS", img: css },
    ],
  },
  {
    emoji: "⚙️",
    title: " Backend Development",
    skills: [
      { name: "Node.js", img: Nodejs },
      { name: "Express.js", img: expressjs },
      { name: "Nest.js", img: nest },
    ],
  },
  {
    emoji: "📦",
    title: " State Management",
    skills: [
      { name: "Redux RTK", img: redux },
      { name: "Context API", img: Context },
    ],
  },
    {
    emoji: "🖥",
    title: " Desktop Development",
    skills: [
      { name: "Tauri.js", img: turi },
     
    ],
  },
    {
    emoji: "📱",
    title: " Mobile Development",
    skills: [
      { name: "Flutter", img: Flutter },
    ],
  },
   {
    emoji: "☁",
    title: " Databases ",
    skills: [
      { name: "MongoDB", img: mongoDB },
      { name: "MySQL", img: mysql },
      { name: "PostgreSQL", img: PostgreSQL },
    ],
  },
  {
    emoji: "🛠 ",
    title: "Software & Tools",
    skills: [
      { name: "VS Code", img: VSCode },
      { name: "IntelliJ", img: IntelliJ },
      { name: "Apache NetBeans", img:  NetBeans },
      { name: "Android Studio", img: Android },
      { name: "GitHub", img: github },
      { name: "GIT", img: GIT },
      { name: "Docker", img: docker },
      { name: "POSTMAN", img: POSTMAN },
      { name: "Xampp", img: Xampp },
      { name: "Firebase", img: Firebase },
      { name: "Vercel", img: Vercel },
      { name: "Cloudinary", img: Cloudinary }, 
      { name: "WordPress", img: wordpress },
    ],
  },
 
  {
    emoji: "🎨",
    title: "  Editing",
    skills: [
      { name: "Adobe Lightroom", img: AdobeLightroom },
      { name: "Adobe Photoshop", img: AdobePhotoshop },
      { name: "Adobe Premiere Pro", img: AdobePremiere },
      { name: "Figma", img: Figma },
    ],
  },
];

export const professionalSkills = [
  { name: "Creativity", percentage: 90 },
  { name: "Communication", percentage: 65 },
  { name: "Problem Solving", percentage: 75 },
  { name: "Teamwork", percentage: 85 },
];
