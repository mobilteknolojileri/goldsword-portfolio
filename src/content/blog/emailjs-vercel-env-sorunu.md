---
title: "EmailJS ve Vercel Üzerinde Environment Variable Sorunları"
description: "Vercel'de EmailJS değişkenlerinin PUBLIC_ ve NEXT_PUBLIC_ ön ekleri karışınca iletişim formum canlıda “The public key is required” hatası verdi. Sorunun iki sebebini ve çözümünü yazdım."
date: 2026-03-10
updated: 2026-10-07
tags: ["emailjs", "vercel", "environment-variables", "astro", "bug-fix"]
category: "case-study"
draft: false
---

Vercel'de EmailJS ayarlarını yaparken ortam değişkenlerinin adlarına, özellikle baştaki `PUBLIC_` ve `NEXT_PUBLIC_` ön eklerine dikkat edin.

Nitekim Goldsword portfolyo sitesini Vercel'de yayına alırken EmailJS tarafında saatlerimi alan bir sorunla karşılaştım. Localhost'ta düzgün çalışan iletişim formu, canlı ortamda birden “The public key is required” hatası vermeye başladı.

## Sorunun kaynağı

Ortam değişkenleri (environment variables) Vercel Dashboard'da doğru şekilde tanımlanmıştı; buna karşın Astro projesi onları okuyamıyordu. İnceleyince sorunun iki sebebi olduğu ortaya çıktı:

1. Ön ekler uyuşmuyordu. Değişkenler Vercel'de `NEXT_PUBLIC_` ön ekiyle tanımlanmıştı, kod ise onları `PUBLIC_` ön ekiyle arıyordu.
2. EmailJS istemci tarafında, yani React bileşeninin içinde açıkça başlatılmıyordu. Bu da prop'lar aktarılırken zamanlama sorunlarına yol açabiliyordu.

## Çözüm adımları

### 1. İki ön eki de kontrol etmek

Astro sayfalarında değişkenleri okurken iki ön eke de bakan bir yapı kurdum:

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

### 2. EmailJS'i bileşenin içinde başlatmak

React bileşeni yüklendiğinde `emailjs.init()` metodunu çağırarak anahtarı EmailJS'e tanıttım:

```javascript
useEffect(() => {
  if (emailjsConfig.publicKey) {
    emailjs.init(emailjsConfig.publicKey);
  }
}, [emailjsConfig.publicKey]);
```

## Benzer bir hata alıyorsanız

Bu iki değişiklikten sonra iletişim formu hem yerelde hem canlı ortamda düzgün çalıştı. Dolayısıyla siz de benzer bir hata alıyorsanız önce değişken adlarınızın, kullandığınız framework'ün beklediği biçimde olup olmadığını kontrol edin.
