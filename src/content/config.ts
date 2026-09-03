import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    category: z.string(),          // "SaaS Core", "AI Search", "Design System"
    tag: z.string(),                // "2024 · Production", "Open-Source", "15k+ descargas/mes"
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    color: z.enum(['indigo', 'violet', 'slate']).default('indigo'),
    featured: z.boolean().default(false), // true = card full width
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
          variant: z.enum(['solid', 'outline']).default('outline'),
        })
      )
      .optional(),
    chart: z
      .object({
        label: z.string(),
        liveLabel: z.string(),
        values: z.array(z.number()),
      })
      .optional(),
    code: z.string().optional(),
    npm: z
      .object({
        install: z.string(),
        stars: z.string(),
      })
      .optional(),
  }),
});

export const collections = { projects };