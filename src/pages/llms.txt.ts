import { getCollection } from "astro:content";
import { PROJECTS } from "@/lib/constants";

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
  - Tarih: ${post.data.date.toLocaleDateString("tr-TR")}`,
    )
    .join("\n\n");

  const projects = PROJECTS.filter((p) => p.slug !== "fabric-detection");

  const formatProject = (project: (typeof PROJECTS)[0]) => {
    let impact = "";
    let techDecision = "";

    if (project.slug === "ingilizceciyiz") {
      impact = "**→ 16.000+ aktif kullanıcıya hizmet veren sistem modernizasyonu.**";
      techDecision =
        "Monolith yapı yerine modüler backend mimarisi kurarak ölçeklenebilirliği ve bakım hızını artırdım.";
    }
    if (project.slug === "getyo-mobile") {
      impact = "**→ App Store ve Google Play'de aktif olarak yayında.**";
      techDecision =
        "Supabase kullanarak real-time veri senkronizasyonu ve auth süreçlerini tek sistemde çözerek geliştirme süresini %40 azalttım.";
    }
    if (project.slug === "kafadar-mobile") {
      impact = "**→ Yüksek etkileşimli sosyal quiz platformu.**";
      techDecision =
        "Deep linking ve dinamik tema yönetimi ile kullanıcı deneyimi (UX) kişiselleştirmesini tek başıma kurguladım.";
    }
    if (project.slug === "frozen-yogurt-website") {
      techDecision =
        "Readdy bağımlılığını kaldırıp Next.js + Supabase mimarisine geçerek güvenlik ve tam kontrol sağladım.";
    }
    if (project.slug === "qusafe-mobile") {
      techDecision =
        "Zero-knowledge mimari kurarak kullanıcı verisinin server tarafında okunamaz olmasını sağladım.";
    }

    return `### [${project.title} (${project.category})](${project.slug ? `${BASE_URL}/portfolio/${project.slug}` : BASE_URL})
${impact ? impact + "\n" : ""}
${project.description}

- **Katkım**: ${project.detailedDescription || project.description}
${techDecision ? `- **Teknik Karar**: ${techDecision}\n` : ""}- **Tech Stack**: ${project.technologies.join(", ")}`;
  };

  const projectList = projects.map(formatProject).join("\n\n");

  const content = `# goldsword.dev

## Geliştirici Hakkında
**Mobil uygulama ve SaaS ürünleri geliştirmeye odaklanıyorum.** 30+ ticari projede aktif olarak geliştirme yapmış bir Full-stack geliştiriciyim. Projeleri fikir aşamasından yayına (production) kadar tek başıma geliştiriyor; performans, sürdürülebilirlik ve kullanıcı deneyimini birlikte düşünerek çalışıyorum.

Öğrenci olmama rağmen gerçek kullanıcıya ulaşmış aktif kullanılan sistemler geliştirdim. Tek başıma çalışarak hızlı ve sürdürülebilir çözümleri üretiyorum.

## Neden Ben?
- **Uçtan Uca Geliştirme:** Tasarım, frontend, backend ve deploy süreçlerini tek başıma yönetirim. Karşınızda sadece tek bir muhatap olur.
- **Gerçek Proje Deneyimi:** Sadece demo projeler değil, gerçek müşteriler için üretim ortamında (production) çalışan sistemler kurdum.
- **Hızlı İterasyon:** Tek kişi olduğum için hızlı karar alır, projeyi hızla hayata geçirir ve geri dönüşlere göre anında güncellerim.
- **Modern Teknoloji:** En güncel araçları (Astro, React, Expo, Supabase) projelerimde aktif olarak kullanırım.
- **Stratejik Mimari & Planlama:** Projenin ihtiyaçlarını analiz eder, derinlemesine teknik araştırmalar yapar ve ölçeklenebilir, sürdürülebilir mimariler kurarım. Sadece anlık çözüm üretmez, projenin büyüme aşamalarını da (scaling) düşünerek sağlam bir temel atarım.
- **DevOps & Deployment:** Projeleri sadece geliştirmez, Vercel, Docker veya VPS (Hetzner vb.) üzerinde optimize şekilde yayına alırım. Kesintisiz güncellemeler için CI/CD süreçlerini kurgulayarak ürünün her zaman ayakta kalmasını sağlarım.

## Nasıl Çalışırım?
1. **Hızlı Analiz:** İhtiyacı doğru anlar, kafa karıştırmadan en net çözümü sunarım.
2. **Kompakt Çözüm:** Gereksiz karmaşıklıktan kaçınır, işi en sade ve performanslı şekilde çözerim.
3. **Süreç Yönetimi:** MVP (ilk çalışan sürüm) → Geliştirme → Ölçekleme yolunu izlerim.
4. **Kesintisiz İletişim:** Süreç boyunca iletişimi koparmadan, her adımda bilgilendirme yaparım.

## Hizmetler
- **Mobil Uygulama Geliştirme** → Fikirden marketlere (App Store/Play Store) kadar çalışan uygulamalar.
- **Web Geliştirme** → Hızlı, SEO uyumlu ve modern web siteleri.
- **Teknik SEO** → Google'da hızlıca indekslenen ve performans odaklı teknik altyapı.
- **AI Entegrasyonu** → İşleri otomatikleştiren yapay zeka ve otomasyon çözümleri.

## Projeler (Portfolio)

${projectList}

## Teknik Blog & Rehberler
${blogList}

View all posts: ${BASE_URL}/blog

## Bir fikrin mi var?
Yeni bir ürün geliştirmek, mevcut sistemini iyileştirmek veya sadece teknik bir konuda danışmak istersen benimle iletişime geçebilirsin.

- **Email:** mobilteknolojileri@gmail.com
- **Web:** ${BASE_URL}
- **GitHub:** https://github.com/mobilteknolojileri
- **Bionluk:** https://bionluk.com/goldsword
`;

  return new Response(content, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
