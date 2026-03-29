export interface ApiSkillItem {
  name: string;
  imageUrl: string;
  imagePublicId: string;
}

export interface ApiSkillCategory {
  _id: string;
  emoji: string;
  title: string;
  skills: ApiSkillItem[];
  order: number;
  isActive: boolean;
}

export interface ApiProfessionalSkill {
  _id: string;
  name: string;
  percentage: number;
  order: number;
}

export interface ApiEducation {
  _id: string;
  year: string;
  title: string;
  institute: string;
  link?: string;
  type: 'education' | 'certification';
  order: number;
}

export interface ApiExperience {
  _id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  type: string;
  description: string;
  stack: string[];
  order: number;
  isActive: boolean;
}

export interface ApiService {
  _id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
  isActive: boolean;
}

export interface ApiProjectImage {
  url: string;
  publicId: string;
}

export interface ApiDescriptionItem {
  label: string;
  value: string;
}

export interface ApiProject {
  _id: string;
  title: string;
  count: string;
  status: 'landscape' | 'portrait';
  images: ApiProjectImage[];
  video?: string;
  link?: string;
  description: string;
  descriptionItems: ApiDescriptionItem[];
  order: number;
  isActive: boolean;
}

export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiSocialMedia {
  platform: string;
  url: string;
  icon: string;
}

export interface ApiStat {
  value: string;
  label: string;
}

export interface ApiProfile {
  _id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  imagePublicId: string;
  statusText: string;
  statusColor: string;
  techStack: string[];
  stats: ApiStat[];
  cvLink: string;
  socialMedia: ApiSocialMedia[];
  typingTitles: string[];
}
