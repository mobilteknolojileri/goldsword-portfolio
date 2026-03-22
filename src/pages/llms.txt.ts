import { getCollection } from "astro:content";

export async function GET() {
  const BASE_URL = import.meta.env.PUBLIC_SITE_URL || "https://goldsword.dev";

  const posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });

  const blogList = posts
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map(
      (post) => `- [${post.data.title}](${BASE_URL}/blog/${post.slug})
  - ${post.data.description}
  - Date: ${post.data.date.toISOString().split("T")[0]}`,
    )
    .join("\n\n");

  const content = `# goldsword.dev

## About goldsword.dev
Ölçeklenebilir, sürdürülebilir ve yüksek performanslı sistemler tasarlamaya gayret ederek projeleri uçtan uca geliştirip hayata geçiren bir geliştiriciyim. Sadece 'çalışan' kod değil; modern teknolojiler kullanarak uzun ömürlü ve ticari başarı hedefleyen ürünler üretmeyi hedefliyorum. Web tarafında Astro, Next.js ve React; Mobil tarafta ise React Native ve Flutter gibi teknolojilerle geniş bir yelpazede portfolyoya sahibim. Ek olarak Otomasyon sistemleri, AI entegrasyonları gibi projelerde teknik tecrübeye sahibim. Ayrıca bilgi güvenliği alanında akademik çalışmalarım bulunmakta.

## Services
- **Mobile App Development** (React Native, Flutter, Expo SDK 54)
- **Web Development** (Astro 5, Next.js, React 19, Tailwind CSS)
- **Technical SEO** (Schema.org, Performance Optimization, AI Indexing)
- **AI Integration** (Gemini, OpenAI, Automation Workflows)
- **Game Development** (Unity, Godot 4, 2D Platformers)

## Projects

### Kafadar - Friendship Quiz App
A Gen Z social mobile app for creating and sharing friendship quizzes. Built with React Native, Expo SDK 54, Supabase (Real-time), NativeWind, and Zustand.
URL: ${BASE_URL}/kafadar

### QuSafe - Encrypted Vault
End-to-end encrypted password, notes & file vault app with AES-256-GCM encryption and biometric unlock. Built with React Native.
URL: ${BASE_URL}/qusafe

### Legends of Aestera - 2D Platform Game
An epic 2D adventure game featuring pixel art, dynamic enemies, and hand-crafted levels. Built with Unity Engine.
URL: ${BASE_URL}/legends-of-aestera

## Blog
Technical SEO guides, web development tutorials, and mobile development insights.

${blogList}

View all posts: ${BASE_URL}/blog

## Contact
- Email: mobilteknolojileri@gmail.com
- Location: Gaziantep, Turkey / Worldwide (Remote)
- Website: ${BASE_URL}
- GitHub: https://github.com/mobilteknolojileri
- Bionluk: https://bionluk.com/goldsword
`;

  return new Response(content, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
