---
title: "Astro SEO: Trailing Slash '/' Sorunu ve Çözümü"
description: "Sitemizde her şey mükemmel görünürken, blog yazılarımızın Google'da çıkmamasının arkasındaki o ufak ama yıkıcı 'Trailing Slash' sorununu nasıl çözdüğümüzü anlatıyorum."
date: 2026-03-22
updated: 2026-03-22
tags: ["seo", "astro", "trailing slash", "google indexing", "case study", "vaka analizi"]
category: "seo"
heroImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2400&auto=format&fit=crop"
draft: false
intent: "troubleshooting"
faq:
  - question: "Trailing Slash nedir?"
    answer: "URL'nin en sonundaki eğik çizgi (/) işaretidir. Arama motorları için '/blog' ile '/blog/' teknik olarak tamamen farklı iki sayfa anlamına gelebilir."
  - question: "Astro'da trailing slash canonical sorunu nasıl çözülür?"
    answer: 'astro.config.mjs dosyasına ''trailingSlash: "never"'' ayarı eklenerek sitemap ile canonical URL formatının uyumlu hale gelmesi sağlanır.'
---

Astro ile harika bir site geliştirdiğinizi, Lighthouse skorlarınızın tavan yaptığını (her şey 100 üzerinden 100!) ve içeriklerinizi büyük bir hevesle yayınladığınızı düşünün. Tam da bizim hikayemiz böyle başladı. Ta ki birkaç hafta sonra Google Search Console'a girip o can sıkıcı tabloyla karşılaşana kadar...

Sitemizde toplam 39 adet sayfamız (blog yazıları, projeler vb.) vardı, fakat **Google dizininde sadece 3 tanesi indekslenmişti.** Dahası, özenle kaleme aldığımız SEO rehberleri ve blog yazılarımızın hiçbiri ortalıkta yoktu. Dışlanan sayfaların detaylarına baktığımızda o meşhur ve kafa karıştırıcı uyarı yatıyordu: _"Alternate page with proper canonical tag" (Uygun canonical etiketine sahip alternatif sayfa)_.

Peki günlerce üzerinde uğraştığımız sitemizin Google tarafından "görünmez" ilan edilmesinin sebebi ne olabilirdi? Spoilere hazır olun: **Sadece tek bir slash (/) işareti.**

## Olay Yeri İncelemesi: Nerede Hata Yaptık?

Sorunun kaynağını bulmak için Sherlock Holmes şapkamızı taktık ve sitemizin teknik anatomisini incelemeye başladık. Arama motoru botlarının gözünden senaryoyu yeniden oynattığımızda, karşımıza çıkan tablo tam olarak şuydu:

| Kaynak                        | URL Formatı                | Sorun Tespiti                    |
| ----------------------------- | -------------------------- | -------------------------------- |
| **Sitemap** (`sitemap-0.xml`) | `.../astro-seo-checklist/` | **[Hata] - Trailing slash var**  |
| **Canonical Etiketi**         | `.../astro-seo-checklist`  | **[Doğru] - Trailing slash yok** |
| **OG URL Etiketi**            | `.../astro-seo-checklist`  | **[Doğru] - Trailing slash yok** |
| **RSS Feed**                  | `.../astro-seo-checklist/` | **[Hata] - Trailing slash var**  |

Google botları sitemize geldiğinde olanlar aslında trajikomikti. Sitemap dosyası onlara bir hedef gösteriyor: _“Gitmen gereken adres `/blog/astro-seo-checklist/`”_.

Bot uslu uslu bu ucağı slash'lı adrese gidip, sayfanın kaynak kodunu okuduğunda ise `<link rel="canonical">` etiketiyle karşılaşıyor. Sayfa resmen Google'a bağırarak diyordu ki: _"Hey, bana bakma, benim asıl orijinal versiyonum (canonical adresim) `/blog/astro-seo-checklist` (slash olmadan!)."_

Google haklı olarak şaşkınlık içinde: _"Hmm, sitemap'te bana verdiği adres ile sayfanın iddia ettiği orijinal adresi farklı. En iyisi risk almayayım, ben bu sayfayı dizine ekleyemem,"_ diyordu. Bu, SEO dünyasında **Trailing Slash Uyumsuzluğu (Canonical Mismatch)** olarak bilinen, geliştirme safhasında pek göze batmayan ama sitenin trafiğini balta gibi kesen kritik bir problem.

## Çözüm Planı: Slash'lardan Kurtuluş Operasyonu

Sorunun teşhisini koyduktan sonra tedavi aslında çok basitti. Site genelinde mutlak bir tutarlılık sağlamamız gerekiyordu: URL'lerimizde ya her yerde slash olacaktı ya da hiçbir yerde. Biz modern web standartlarına ve Astro'nun varsayılan yapısına daha uygun olan "hiçbir yerde olmaması (never)" seçeneğinde karar kıldık ve kolları sıvadık.

### 1. Astro Konfigürasyonuna Müdahale

İlk ve en önemli adım `astro.config.mjs` dosyasında sitemap ve url üretici eklentilerini yola getirmekti. Devreye giren sihirli ayar şuydu:

```javascript
// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  trailingSlash: "never", // İşin sırrı tam olarak bu satırda yatıyor!
  site: "https://goldsword.dev",
  // ...diğer ayarlar
});
```

Bu ufak ayar, Astro'ya proje derlenirken tüm URL rotalarının sondaki slash işaretinden arındırılması gerektiğini komut ediyor. Böylece Sitemap eklentisi sayfaları taradığında, yapılarıyla birebir uyuşacak şekilde slash olmadan URL üretiyor. Birinci ve en kritik raundu kazandık!

### 2. RSS Yapısını Düzeltmek

Sitemap'i düzelttik ama RSS takipçilerimiz veya botları için de aynı tutarlılığı sağlamalıydık. `rss.xml.ts` dosyamızdaki linkleri de slash kullanmadan güncelledik:

```javascript
// src/pages/rss.xml.ts'den Bir Kesit
items: posts.map((post) => ({
  // Eski (Uyumsuz) Kullanım:
  // link: `/blog/${post.slug}/`,

  // Yeni ve Sağlıklı Kullanım:
  link: `/blog/${post.slug}`,
})),
```

### 3. İç Linklerde (Internal Links) Son Bahar Temizliği

Son olarak, sitemizin kod mimarisinde sabit olarak yazdığımız (hard-coded) tüm menülerde, komponentlerde ve sayfalar arası köprülerde bulunan fazlalık `/` işaretlerini makasladık.

Örneğin, React komponentimiz olan `src/features/hero/index.tsx` içerisindeki portföy yönlendirmesini şu şekilde temizledik:

- `/portfolio/` yerine `/portfolio`
- `/qusafe/privacy-policy/` yerine `/qusafe/privacy-policy`

Böylelikle site içinde nereye tıklarsanız tıklayın, hiçbir arama motoru botu izlemesi tehlikeli olan o ekstra "/" ile karşılaşmamaya başladı.

## Mutlu Son

Değişikliklerin yer aldığı commit'i `main` branch'imize gönderip, sitemizi Vercel üzerinden yenileyerek tekrar yayına aldık. Hemen ardından Google Search Console'a girip, temizlenmiş `sitemap-index.xml` dosyamızı manuel olarak tekrar gönderdik ve birkaç kilit blog adresini "Dizine Eklenmesini İste" ile dürttük.

Sonuç mu? Müthiş bir rahatlama.

Sadece birkaç gün içinde Google yeni haritamızı ve temizlenmiş URL standartlarımızı benimsedi. Arama dizininde indekslenen (ve aratıldığında bulunabilen) sayfa sayımız roket gibi fırlayarak hedeflenen sayılara (39 adet ve daha fazlası) ulaştı. O sinir bozucu "canonical" uyarıları yavaş yavaş grafiğimizden tam olarak silindi.

Siz siz olun, _"ne olacak canım bir `/` işaretinden alt tarafı bir çizgi"_ demeyin. Bir makine ve arama motoru algoritmasının gözünde URL'nin ucundaki en ufak sembol farklılığı, içeriğinizin tamamen kopya (duplicate) sayılmasına veya dizinden sonsuza dek çıkarılmasına sebep olabilir.

Eğer siz de benzer şekilde Google'ın belirli sayfalarınızı indekslemekten kaçındığını görüyorsanız, **ilk kontrol etmeniz gereken yer sitemap.xml dosyanız ile sayfalarınızdaki `<link rel="canonical">` etiketinin (Trailing Slash yönüyle) birbirinin teyzesi kızı değil, birebir aynısı olup olmadığı kuralıdır!**
