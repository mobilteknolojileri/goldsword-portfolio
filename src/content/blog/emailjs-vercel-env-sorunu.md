---
title: "EmailJS ve Vercel Üzerinde Environment Variable Sorunları"
description: "Vercel üzerinde EmailJS yapılandırması sırasında karşılaşılan PUBLIC_ vs NEXT_PUBLIC_ ön ek karmaşası ve çözüm yolları."
date: 2026-03-10
tags: ["emailjs", "vercel", "environment-variables", "astro", "bug-fix"]
category: "case-study"
draft: false
---

> 💡 **TL;DR:** Vercel üzerinde EmailJS ayarlarınızı yaparken değişken (ENV) adlarınızın başındaki `PUBLIC_` ve `NEXT_PUBLIC_` karmaşasına dikkat edin.

Geçtiğimiz günlerde Goldsword portfolyo sitesini Vercel üzerinde devreye alırken EmailJS ile ilgili beni saatlerce ekrana kitleyen ilginç bir sorunla karşılaştım. Yerelde (localhost) tıkır tıkır çalışan iletişim formu, prod ortamında aniden "The public key is required" hatası fırlatmaya başladı.

## Sorunun Tespiti ve Orijini

Vercel Dashboard üzerinde çevre değişkenleri (environment variables) doğru şekilde tanımlanmış olmasına rağmen, Astro projesi bu değişkenleri okuyamıyordu. Yapılan incelemede sorunun iki ana nedeni olduğu anlaşıldı:

1.  **Prefix (Ön Ek) Uyumsuzluğu:** Vercel üzerinde değişkenler `NEXT_PUBLIC_` ön ekiyle tanımlanmışken, kod içerisinde `PUBLIC_` ön ekiyle aranıyordu.
2.  **Client-Side Initialization:** EmailJS'in istemci tarafında (React bileşeni içinde) açıkça başlatılmaması, prop geçişleri sırasında zamanlama sorunlarına neden olabiliyordu.

## Çözüm Adımları

### 1. Dinamik Önek Kontrolü

Astro sayfalarında değişkenleri okurken her iki ön eki de kontrol edecek bir yapı kurduk:

```javascript
const emailjsConfig = {
  serviceId:
    import.meta.env.PUBLIC_EMAILJS_SERVICE_ID ||
    import.meta.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
    "",
  templateId:
    import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID ||
    import.meta.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
    "",
  publicKey:
    import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY ||
    import.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
    "",
};
```

### 2. Bileşen Düzeyinde Initialization

React bileşeni yüklendiğinde `emailjs.init()` metodunu çağırarak anahtarı sisteme tanıttık:

```javascript
useEffect(() => {
  if (emailjsConfig.publicKey) {
    emailjs.init(emailjsConfig.publicKey);
  }
}, [emailjsConfig.publicKey]);
```

## Sonuç

Bu basit ama kritik dokunuşlar sayesinde hem yerel hem de canlı ortamda çalışan stabil bir iletişim formu elde ettik. Eğer siz de benzer bir hata alıyorsanız, öncelikle değişken adlarınızın framework'ünüzün beklediği formata uygun olup olmadığını kontrol edin.
