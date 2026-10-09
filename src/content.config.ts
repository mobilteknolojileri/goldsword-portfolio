import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { CONTENT_INTENTS } from "@/config/seo";

// File name = URL
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().min(30).max(90),
    description: z.string().min(80).max(220),
    date: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string().min(2).max(40)).min(2).max(8),
    category: z.enum(["seo", "web", "mobile", "research", "case-study", "yazılım", "android"]),
    heroImage: z.url().optional(),
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

// Turkish versions of github.com/mobilteknolojileri/case-studies
const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string().min(2).max(40),
    seoTitle: z.string().min(30).max(65),
    description: z.string().min(110).max(160),
    summary: z.string().min(20).max(170),
    lead: z.string().min(20).max(420),
    /** Slug in PROJECTS */
    project: z.string(),
    order: z.number().int(),
    /** Publication date of the Turkish version */
    date: z.date(),
    role: z.string(),
    timeline: z.string(),
    status: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.url() })),
    stack: z.array(z.string()).min(2),
    outcome: z.string().min(10).max(120),
    cover: z.object({
      src: z.string().startsWith("/"),
      alt: z.string().min(10),
      caption: z.string().min(10),
      width: z.number().int(),
      height: z.number().int(),
    }),
    /** English original on GitHub */
    original: z.url(),
  }),
});

export const collections = { blog, caseStudies };
