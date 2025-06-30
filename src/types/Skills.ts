import { StaticImageData } from "next/image";

export interface Skill {
  name: string;
  img?: StaticImageData | string; 
}

export interface SkillCategory {
  title: string
  emoji?: string
  skills: Skill[]
}