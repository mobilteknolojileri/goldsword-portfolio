import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });

  const blogList = posts
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((post) => `- [${post.data.title}](https://goldsword.dev/blog/${post.slug})`)
    .join("\n");

  const content = `# goldsword.dev

## About
goldsword.dev is the portfolio of a freelance full-stack developer based in Gaziantep, Turkey.
Specializing in mobile app development (React Native, Flutter), web development (Astro, Next.js, React), game development (Unity, Godot), technical SEO, and AI integration.

## Services
- Mobile App Development (iOS & Android)
- Web Site Development & Design
- Technical SEO & Schema Optimization
- AI Integration & Automation
- Game Development (Unity, Godot)

## Projects

### Kafadar - Friendship Quiz App
A social mobile app for creating and sharing friendship quizzes. Built with React Native, Expo, Supabase.
URL: https://goldsword.dev/kafadar

### QuSafe - Encrypted Vault
End-to-end encrypted password, notes & file vault app with AES-256-GCM encryption.
URL: https://goldsword.dev/qusafe

### Legends of Aestera - 2D Platform Game
A 2D platform game built with Unity Engine.
URL: https://goldsword.dev/legends-of-aestera

## Blog
Technical SEO guides, web development tutorials, and mobile development insights.

${blogList}

URL: https://goldsword.dev/blog

## Contact
Email: mobilteknolojileri@gmail.com
Location: Gaziantep, Turkey
Website: https://goldsword.dev
GitHub: https://github.com/mobilteknolojileri
`;

  return new Response(content, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
