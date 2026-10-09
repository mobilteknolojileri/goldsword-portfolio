---
title: "Astro SEO: Trailing Slash '/' Sorunu ve Çözümü"
description: "Astro ile yaptığım sitemde 39 sayfanın yalnızca 3'ü Google'da dizine girmişti. Sebep, sitemap ile canonical etiketi arasındaki trailing slash farkıydı. Sorunu nasıl bulup çözdüğümü anlatıyorum."
date: 2026-03-22
updated: 2026-10-07
tags: ["seo", "astro", "trailing slash", "google indexing", "case study", "vaka analizi"]
category: "seo"
heroImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2400&auto=format&fit=crop"
draft: false
intent: "troubleshooting"
faq:
  - question: "Trailing slash nedir?"
    answer: "URL'nin en sonundaki eğik çizgidir (/). Arama motorları için '/blog' ile '/blog/' teknik olarak iki ayrı sayfa anlamına gelebilir."
  - question: "Astro'da trailing slash canonical sorunu nasıl çözülür?"
    answer: "Astro'nun yapılandırma dosyasında (astro.config.mjs) trailingSlash ayarını canonical adreslerinizle aynı biçime getirin: sonda slash yoksa 'never', varsa 'always'. Böylece sitemap'teki URL'ler de canonical adreslerle aynı biçimde üretilir."
---

Sitemi Astro ile yaptım. Lighthouse'ta bütün skorlar 100 üzerinden 100'dü, yazıları da hevesle yayımlıyordum. Ne var ki birkaç hafta sonra Google Search Console'u açtığımda karşıma çıkan tablo hiç iç açıcı değildi.

Sitede blog yazıları ve projelerle birlikte toplam 39 sayfa vardı. Google bunlardan yalnızca 3'ünü dizine eklemişti. Hatta özenle yazdığım SEO rehberlerinin ve blog yazılarının hiçbiri dizinde yoktu. Dizine eklenmeyen sayfaların ayrıntısına baktığımda Search Console'un o kafa karıştıran uyarısıyla karşılaştım: “Alternate page with proper canonical tag”, yani uygun canonical etiketine sahip alternatif sayfa.

Günlerce uğraştığım sitenin Google'da neredeyse hiç görünmemesinin sebebi tek bir karakterdi: URL'nin sonundaki slash (/).

## Uyumsuzluk nerede çıktı

Sorunun kaynağını bulmak için siteye bir arama motoru botunun gözünden baktım. Aynı yazının adresi dört ayrı yerde şöyle geçiyordu:

| Kaynak                    | URL biçimi                          | Durum                  |
| ------------------------- | ----------------------------------- | ---------------------- |
| Sitemap (`sitemap-0.xml`) | `.../astro-seo-10-madde-checklist/` | Hata: Sonda slash var  |
| Canonical etiketi         | `.../astro-seo-10-madde-checklist`  | Doğru: Sonda slash yok |
| OG URL etiketi            | `.../astro-seo-10-madde-checklist`  | Doğru: Sonda slash yok |
| RSS akışı                 | `.../astro-seo-10-madde-checklist/` | Hata: Sonda slash var  |

Googlebot siteye geldiğinde olanlar şöyleydi. Sitemap ona `/blog/astro-seo-10-madde-checklist/` adresini gösteriyor. Bot bu adrese gidiyor ve sayfanın kaynak kodunda `<link rel="canonical">` etiketini okuyor. Etiket ise sayfanın asıl adresinin sonunda slash olmayan `/blog/astro-seo-10-madde-checklist` olduğunu söylüyor.

Sitemap'in verdiği adresle sayfanın kendisi için bildirdiği adres farklı olunca Google sayfayı dizine eklemiyordu. Bu, trailing slash uyumsuzluğu (canonical mismatch) olarak bilinen bir sorun. Geliştirme sırasında pek göze batmıyor; buna karşın sitenin arama trafiğini ciddi biçimde düşürebiliyor.

## Çözüm: slash'ı her yerden kaldırmak

Teşhis konunca çözüm oldukça basitti. Canonical etiketi, sitemap, RSS akışı ve site içi bağlantılar aynı adresi göstermeliydi; bunun için URL'lerde ya her yerde slash olacaktı ya da hiçbir yerde. Ben `never` seçeneğinde, yani slash'ın hiçbir yerde olmamasında karar kıldım. Bu bir tercih meselesi: `always` de her yerde tutarlı uygulandığı sürece aynı işi görür.

### 1. Astro yapılandırması

İlk ve en önemli değişiklik `astro.config.mjs` dosyasındaydı. Amaç, Astro'ya hangi URL biçimini kullandığımı söylemek ve sitemap eklentisinin de buna uymasını sağlamaktı. Gereken ayar şuydu:

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

Bu ayar Astro'ya, sitenin URL'lerinin sonda slash olmadan kullanılacağını söylüyor. Sitemap eklentisi de bu ayarı okuyup adresleri sonda slash olmadan yazıyor. Kodun içine elle yazılmış adresler ise kendiliğinden değişmiyor; onları sonraki iki adımda düzelttim.

### 2. RSS bağlantıları

Sitemap düzeldi ama RSS okuyucuları ve botlar için de aynı tutarlılık gerekiyordu. `rss.xml.ts` dosyasındaki bağlantıları da sonda slash olmadan güncelledim:

```javascript
// src/pages/rss.xml.ts'den Bir Kesit
items: posts.map((post) => ({
  // Eski (Uyumsuz) Kullanım:
  // link: `/blog/${post.slug}/`,

  // Yeni ve Sağlıklı Kullanım:
  link: `/blog/${post.slug}`,
})),
```

### 3. Site içi bağlantılar

Son olarak menülerde, bileşenlerde ve sayfalar arasında elle yazılmış bütün bağlantılardaki fazladan `/` işaretlerini temizledim.

Örneğin ana sayfadaki hero bileşeninde bağlantılar şöyle değişti:

- `/portfolio/` yerine `/portfolio`
- `/qusafe/privacy-policy/` yerine `/qusafe/privacy-policy`

Artık site içinde hangi bağlantıya tıklanırsa tıklansın, botlar sonunda fazladan `/` olan bir adrese gitmiyor.

## Yayına aldıktan sonra

Değişiklikleri içeren commit'i `main` branch'ine gönderdim ve site Vercel üzerinden yeniden yayına çıktı. Ardından Google Search Console'da temizlenmiş `sitemap-index.xml` dosyasını elle yeniden gönderdim, birkaç önemli blog adresi için de “Dizine Eklenmesini İste” düğmesini kullandım.

Sonrasını kendi Search Console hesabımdan izledim. Birkaç gün içinde Google yeni sitemap'i ve temizlenmiş URL'leri benimsedi. Dizine eklenen, yani aramada bulunabilen sayfa sayısı hedeflediğim seviyeye, 39 ve üzerine çıktı. Canonical uyarıları da zamanla grafikten tamamen kalktı.

URL'nin sonundaki tek bir `/` önemsiz görünebilir. Ama arama motoru için bu, iki ayrı adres anlamına gelebiliyor. Bu fark da içeriğin kopya sayılmasına ya da dizin dışında kalmasına yol açabiliyor.

Kısacası, Google bazı sayfalarınızı dizine eklemiyorsa ilk bakacağınız yer şu: `sitemap.xml` dosyanızdaki adres ile sayfadaki `<link rel="canonical">` etiketinin gösterdiği adres, **sondaki slash dâhil birebir aynı olmalı**.
