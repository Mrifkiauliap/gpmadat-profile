import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const kegiatan = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kegiatan' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { kegiatan };
