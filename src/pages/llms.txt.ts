import { getCollection } from "astro:content";
import { CATEGORY_LABELS } from "@/config/portfolio";
import { PROJECTS, type Project } from "@/lib/constants";

export async function GET() {
  const BASE_URL = import.meta.env.PUBLIC_SITE_URL || "https://goldsword.dev";

  const posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });

  const blogList = posts
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map(
      (post) => `- [${post.data.title}](${BASE_URL}/blog/${post.id})
  - ${post.data.description}
  - Tarih: ${post.data.date.toLocaleDateString("tr-TR")}`,
    )
    .join("\n\n");

  const caseStudies = (await getCollection("caseStudies"))
    .sort((a, b) => a.data.order - b.data.order)
    .map(
      (
        study,
      ) => `- [${study.data.title}](${BASE_URL}/vaka-calismalari/${study.id}): ${study.data.summary}
  - Sonuç: ${study.data.outcome}
  - Teknolojiler: ${study.data.stack.join(", ")}`,
    )
    .join("\n");

  const projects = PROJECTS.filter((p) => p.slug !== "fabric-detection");

  const formatProject = (project: Project) => {
    let impact = "";
    let techDecision = "";

    if (project.slug === "ingilizceciyiz") {
      impact =
        "**23K+ indirme (App Store 13.594, Google Play 10.000+); 9 Ekim 2026 itibarıyla 6.679 öğretmen hesabı, 3.416 öğretmenin ürettiği 28.963 belge.**";
      techDecision =
        "Platformu sıfırdan yazdım. Expo uygulamasını ve Astro'daki site ile yönetim panelini tek bir Turborepo deposunda topladım; hepsi aynı SQL şemasını kullanıyor. Word belgelerini telefonda değil, sunucuda Supabase Edge Functions hazırlıyor.";
    }
    if (project.slug === "getyo-mobile") {
      impact =
        "**App Store ve Google Play'de yayında; işletme Nisan 2026'da el değiştirdi ve teknik devri ben yaptım.**";
      techDecision =
        "Sadakat sağlayıcısının API anahtarını uygulamaya koymak yerine 12 tek işlevli sunucu fonksiyonu yazdım; anahtar telefona hiç inmiyor.";
    }
    if (project.slug === "kafadar-mobile") {
      impact = "**8 Mart 2026'dan beri Google Play'de.**";
      techDecision =
        "Paylaşım bağlantısını, uygulama kuruluysa Android App Links ile doğrudan uygulamaya, kurulu değilse veri tabanına bağlanmayan statik bir Astro sitesine yönlendirdim.";
    }
    if (project.slug === "frozen-yogurt-website") {
      techDecision =
        "Siteyi Readdy'den çıkarıp önce Next.js'e, Mart 2026'da statik Astro'ya taşıdım; menü yönetim panelinin açık API'sinden canlı geliyor. PageSpeed Insights mobil puanları: performans 100, erişilebilirlik 96, en iyi uygulamalar 100, SEO 100.";
    }
    if (project.slug === "qusafe-mobile") {
      impact = "**Google Play'de 1.4.0 sürümünde; 42 şifreli kasa hâlâ eşitleniyor.**";
      techDecision =
        "Anahtar ana paroladan cihazda Argon2id ile türetiliyor ve cihazdan çıkmıyor; sunucu yalnızca okuyamadığı AES-256-GCM şifreli veriyi saklıyor.";
    }
    if (project.slug === "react-native-password-intelligence") {
      impact = "**npm'de 0.4.1, provenance imzalı; React Native Directory'de listeleniyor.**";
      techDecision =
        "Tam İngilizce parola listesi yerine en sık 4.000 parolayı gömerek paketin gzip boyutunu 236 kB'tan yaklaşık 37 kB'a indirdim; çekirdeği React'siz ayrı bir pakete ayırdım.";
    }
    if (project.slug === "xiaomi-bootloader-unlocker") {
      techDecision =
        "Araç, sistem saatine güvenmeden Pekin saatini NTP'den alır ve kota sıfırlandığı anda 15 ms arayla 30 paralel istek gönderir.";
    }

    return `### [${project.title} (${CATEGORY_LABELS[project.category]})](${project.slug ? `${BASE_URL}/portfolio/${project.slug}` : BASE_URL})
${impact ? impact + "\n" : ""}
${project.description}

- **Ayrıntılar**: ${project.detailedDescription || project.description}
${techDecision ? `- **Teknik karar**: ${techDecision}\n` : ""}${project.caseStudy ? `- **Vaka çalışması**: ${BASE_URL}${project.caseStudy}\n` : ""}- **Teknolojiler**: ${project.technologies.join(", ")}`;
  };

  const projectList = projects.map(formatProject).join("\n\n");

  const content = `# goldsword.dev

## Geliştirici hakkında
**Ağırlıklı olarak mobil uygulama ve SaaS ürünleri geliştiriyorum.** Gaziantep'te yaşayan, full-stack çalışan freelance bir yazılım geliştiriciyim; 30'dan fazla ticari projede geliştirme yaptım. Projeyi fikir aşamasından yayına kadar tek başıma götürürüm.

Ekip de taşeron da yok: Kapsamdan mağazaya çıkışa, sonrasına kadar muhatabınız tek kişi. Trakya Üniversitesi Mobil Teknolojileri programından 2025'te mezun oldum (3,79/4,00).

## Çalışma biçimi
- **Uçtan uca:** Tasarım, frontend, backend ve yayına alma (deploy) işini tek başıma yaparım; muhatabınız tek kişidir.
- **Yayındaki işler:** Demo projelerle sınırlı kalmadım; müşteriler için yayında çalışan sistemler kurdum. Örnekleri aşağıdaki Projeler bölümünde.
- **Kısa karar zinciri:** Tek kişi olduğum için araya onay zinciri girmez; dolayısıyla geri bildirimi doğrudan koda yansıtırım.
- **Araçlar:** Bugün en çok Astro, React, Expo ve Supabase ile çalışıyorum.
- **Mimari ve planlama:** Kod yazmadan önce ihtiyacı ve veri modelini çıkarır, gerekirse teknik araştırma yaparım. Yapıyı, ürünün ileride büyüyebileceğini hesaba katarak kurarım.
- **Yayına alma:** Projeyi Vercel'de, Docker'la ya da Hetzner gibi bir VPS'te yayına alırım; güncellemeler için CI/CD kurarım.

## Süreç
1. **İhtiyaç:** Önce neyin gerektiğini birlikte netleştiririz.
2. **Sade çözüm:** İşin gerektirmediği karmaşıklığı eklemem.
3. **Aşamalar:** Önce çalışan ilk sürüm (MVP), sonra geliştirme, gerekirse ölçekleme.
4. **İletişim:** Her aşamada ne yapıldığını ve sırada ne olduğunu size bildiririm.

## Hizmetler
- **Mobil uygulama geliştirme:** Fikir aşamasından App Store ve Google Play'deki yayına kadar. Ayrıntılar: ${BASE_URL}/mobil-uygulama-gelistirme
- **Web geliştirme:** Hızı ve teknik SEO'su baştan düşünülmüş web siteleri. Ayrıntılar: ${BASE_URL}/web-site-yapimi-gaziantep
- **Teknik SEO:** Google'ın siteyi tarayıp dizine ekleyebilmesi için gereken teknik altyapı ve sayfa hızı.
- **Android yazılım desteği:** Açılmayan, güncellemeden sonra bozulan ya da yavaşlayan Android cihazların yazılım tarafı: kurtarma, ROM ve veri. Ayrıntılar: ${BASE_URL}/android-destek

## Projeler

${projectList}

## Vaka çalışmaları
Kaynak kodları kapalı bazı işlerin ayrıntılı anlatımı: sorun, yapılan iş, teknoloji seçimleri, sonuç ve yolda bozulanlar.

${caseStudies}

## Yazılar
${blogList}

Bütün yazılar: ${BASE_URL}/blog

## İletişim
Yeni bir ürün, var olan bir sistemin iyileştirilmesi ya da Android cihazınızdaki bir sorun için yazabilirsiniz.

- **E-posta:** mobilteknolojileri@gmail.com
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
