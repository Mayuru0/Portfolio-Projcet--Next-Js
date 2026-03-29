import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  ApiProject,
  ApiSkillCategory,
  ApiProfessionalSkill,
  ApiEducation,
  ApiExperience,
  ApiService,
  ApiProfile,
  ContactInput,
} from '@/types/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/api` }),
  endpoints: (builder) => ({
    getProfile: builder.query<ApiProfile, void>({
      query: () => '/profile',
      transformResponse: (res: { data: ApiProfile }) => res.data,
    }),
    getServices: builder.query<ApiService[], void>({
      query: () => '/services',
      transformResponse: (res: { data: ApiService[] }) => res.data,
    }),
    getEducation: builder.query<ApiEducation[], void>({
      query: () => '/education',
      transformResponse: (res: { data: ApiEducation[] }) => res.data,
    }),
    getSkills: builder.query<ApiSkillCategory[], void>({
      query: () => '/skills',
      transformResponse: (res: { data: ApiSkillCategory[] }) => res.data,
    }),
    getProfessionalSkills: builder.query<ApiProfessionalSkill[], void>({
      query: () => '/skills/professional',
      transformResponse: (res: { data: ApiProfessionalSkill[] }) => res.data,
    }),
    getExperience: builder.query<ApiExperience[], void>({
      query: () => '/experience',
      transformResponse: (res: { data: ApiExperience[] }) => res.data,
    }),
    getProjects: builder.query<ApiProject[], void>({
      query: () => '/projects',
      transformResponse: (res: { data: ApiProject[] }) => res.data,
    }),
    sendContact: builder.mutation<{ success: boolean; message: string }, ContactInput>({
      query: (body) => ({
        url: '/contact',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetServicesQuery,
  useGetEducationQuery,
  useGetSkillsQuery,
  useGetProfessionalSkillsQuery,
  useGetExperienceQuery,
  useGetProjectsQuery,
  useSendContactMutation,
} = portfolioApi;
