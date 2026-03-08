import { defineCollection, z } from "astro:content";
import { CONTENT_INTENTS } from "@/config/seo";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(30).max(90),
    description: z.string().min(80).max(220),
    date: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string().min(2).max(40)).min(2).max(8),
    category: z.enum(["seo", "web", "mobile", "research", "case-study"]),
    heroImage: z.string().url().optional(),
    draft: z.boolean().default(false),
    faq: z
      .array(
        z.object({
          question: z.string().min(10).max(140),
          answer: z.string().min(20).max(500),
        }),
      )
      .max(8)
      .optional(),
    intent: z.enum(CONTENT_INTENTS).optional(),
    deviceBrand: z.string().min(2).max(40).optional(),
    deviceModel: z.string().min(2).max(60).optional(),
  }),
});

export const collections = {
  blog: blog,
};
