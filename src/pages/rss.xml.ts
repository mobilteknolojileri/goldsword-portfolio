import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_CONFIG } from "@/config/site";

export async function GET(context: any) {
  const blog = await getCollection("blog");
  return rss({
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    site: context.site || "https://goldsword.dev",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>tr-tr</language>`,
  });
}
