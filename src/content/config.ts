import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
