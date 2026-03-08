---
title: "Astro'da sitemap-index.xml 404 Sorunu: Neden Olur, Nasıl Çözülür?"
description: "Astro projelerinde sitemap-index.xml dosyasının production ortamında 404 hatası vermesi sık rastlanan ama çözümü net bir problemdir. Bu yazıda bu hatanın gerçek nedenini detaylarıyla inceliyoruz."
date: 2026-02-15
updated: 2026-02-16
tags: ["sitemap", "astro", "teknik seo", "hata çözümü"]
category: "case-study"
heroImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2340&auto=format&fit=crop"
draft: false
intent: "troubleshooting"
---

Astro projelerinde `sitemap-index.xml` dosyasının production ortamında 404 hatası vermesi sık rastlanan ama çözümü net bir problemdir. Bu yazıda, bu hatanın **gerçek nedenini** ve kalıcı çözüm adımlarını inceliyoruz.

> **Sorun Özeti:** Yerel ortamda (dev mode) çalışan sitemap, Vercel veya Netlify gibi platformlara yüklendiğinde "Not Found" hatasına düşebiliyor.

## Hatanın Kaynağı: Static vs Hybrid Mode

Astro varsayılan olarak statik bir yapıdadır. Ancak sitemap üretimi bazen build sürecinin en sonunda gerçekleşir ve sunucu yapılandırmasıyla çakışabilir.

### Adım 1: Yapılandırma Kontrolü

İlk olarak `astro.config.mjs` dosyanızda sitemap entegrasyonunun doğru tanımlandığından emin olun:

```javascript
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://goldsword.dev", // Sondaki slash olmamalı
  integrations: [sitemap()],
});
```

### Adım 2: Robots.txt Doğrulaması

Botlar sitemap'i bulamazsa, tarama bütçeniz boşa gider. `public/robots.txt` dosyanız şu şekilde görünmeli:

```text
User-agent: *
Allow: /

Sitemap: https://goldsword.dev/sitemap-index.xml
```

## Neden 404 Alıyorsunuz?

En yaygın neden, **Trailing Slash** (sondaki eğik çizgi) ayarlarıdır. Astro'da `trailingSlash: 'always'` veya `'never'` ayarı, sitemap dosyasının fiziksel konumunu etkileyebilir.

> **Kritik Bilgi:** Eğer sitenizi Vercel'de barındırıyorsanız, Vercel'in kendi "Clean URLs" özelliği sitemap dosyasını yanlış yönlendiriyor olabilir.

## Kalıcı Çözüm Reçetesi

1. **Build Komutunu Güncelleyin:** `npm run build` sonrası sitemap'in gerçekten `dist/` klasörüne çıktığından emin olun.
2. **Absolute URL Kullanın:** Şemalarınızda ve linklerinizde her zaman mutlak (absolute) URL tercih edin.
3. **Manual Check:** Tarayıcıdan doğrudan `/sitemap-index.xml` adresine gittiğinizde XML çıktısını görmelisiniz.

## Sonuç

Sitemap hataları SEO performansınızı doğrudan etkiler. Eğer tüm adımlara rağmen sorun devam ediyorsa, Astro'nun versiyon güncellemelerini ve entegrasyon ayarlarını tekrar gözden geçirin.

Teknik sorunlarla uğraşmak yerine işinize odaklanmak isterseniz, [profesyonel destek](/#contact) alabilirsiniz. 👋
