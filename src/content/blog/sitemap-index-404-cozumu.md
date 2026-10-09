---
title: "Astro sitemap-index.xml 404 Sorunu ve Çözümü"
description: "Astro projesinde sitemap-index.xml canlıda 404 verdiğinde baktığım yerler: sitemap entegrasyonu, robots.txt, build çıktısı ve vercel.json'daki yönlendirme kuralları."
date: 2026-02-15
updated: 2026-10-07
tags: ["sitemap", "astro", "teknik seo", "hata çözümü"]
category: "case-study"
heroImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2340&auto=format&fit=crop"
draft: false
intent: "troubleshooting"
---

Sitemap dosyanız localhost'ta açılıyor ama Vercel ya da Netlify'da 404 veriyorsa iki şeye bakın: Dosya build çıktısında gerçekten var mı, varsa sunucudaki yönlendirme ve rewrite kurallarından biri o adresi başka bir yere çeviriyor mu.

Astro projelerinde `sitemap-index.xml` dosyasının production ortamında 404 vermesi forumlarda sık rastlanan bir sorun; ne var ki çözümü pek net anlatılmıyor. Kendi projemi yayına alırken ben de aynı hatayla karşılaştım. Hatanın gerçekte nereden kaynaklandığını ve tekrar yaşanmaması için uyguladığım çözümü aşağıda yazdım.

## Hatanın kaynağı: build mi, sunucu mu

Astro varsayılan olarak statik bir site üretir. Astro 5'ten önce bunun yanında bir de `output: 'hybrid'` modu vardı. Astro 5 ile yalnızca `static` ve `server` kaldı; bir sayfanın build sırasında mı, istek geldiğinde mi üretileceği artık sayfa bazında `prerender` ile seçiliyor.

Sitemap entegrasyonu dosyayı build sürecinin en sonunda yazar. Dolayısıyla dosya build çıktısında var ama canlıda 404 veriyorsa sorun build'de değil, dosyanın yayında nasıl sunulduğundadır.

### Adım 1: Yapılandırmayı kontrol edin

Önce `astro.config.mjs` dosyanızda sitemap entegrasyonunun doğru tanımlandığından emin olun:

```javascript
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://goldsword.dev", // Sondaki slash olmamalı
  integrations: [sitemap()],
});
```

### Adım 2: `robots.txt` dosyasını doğrulayın

Sitemap adresini `robots.txt` dosyasına da yazın; Google, sitemap'i Search Console'a göndermeseniz de buradan bulabilir. `public/robots.txt` dosyanız şöyle görünmeli:

```text
User-agent: *
Allow: /

Sitemap: https://goldsword.dev/sitemap-index.xml
```

## `trailingSlash` ayarı ve yönlendirmeler

Astro'daki `trailingSlash: 'always'` ya da `'never'` ayarı sitemap dosyasının yerini değiştirmez. Sitemap açısından belirlediği şey, dosyanın içinde listelenen URL'lerin sonunda slash olup olmayacağıdır. Bu adreslerin canonical adreslerinizle aynı biçimde olması gerekir; bunu [trailing slash yazısında](/blog/astro-trailing-slash-seo-sorunu-cozumu) anlattım. Öte yandan, `sitemap-index.xml` dosyasının kendisi 404 veriyorsa sebep büyük ihtimalle başka yerdedir.

> Siteniz Vercel'deyse özellikle `vercel.json` dosyasındaki yönlendirme ve rewrite kurallarını kontrol edin.

## Kalıcı çözüm

1. `npm run build` sonrasında sitemap'in gerçekten `dist/` klasörüne çıktığından emin olun.
2. Yapılandırılmış veri şemalarında ve bağlantılarda her zaman mutlak URL kullanın.
3. Tarayıcıdan doğrudan `/sitemap-index.xml` adresine gidin; karşınıza XML çıktısı gelmeli.

## Sorun sürüyorsa

Bütün bu adımlara rağmen sorun devam ediyorsa Astro'nun sürüm güncellemelerine ve entegrasyon ayarlarına yeniden bakın.

Bu tür teknik sorunlarla uğraşmak yerine kendi işinize odaklanmak isterseniz [iletişim formundan](/#contact) bana yazabilirsiniz.
