---
title: "Astro SEO İçin 10 Maddelik Teknik Kontrol Listesi"
description: "Astro ile yaptığım siteleri yayına almadan önce kullandığım teknik SEO kontrol listesi: canonical, sitemap, görseller, meta etiketleri, yapılandırılmış veri ve performans için 10 madde."
date: 2026-02-15
updated: 2026-10-07
tags: ["seo checklist", "astro", "teknik seo", "web performans"]
category: "seo"
heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
draft: false
intent: "how-to"
faq:
  - question: "Bu listedeki maddeleri hangi sırayla uygulamalıyım?"
    answer: "Önce taranabilirlik ve canonical kontrollerini yapın, ardından yapılandırılmış veri ve performans maddelerine geçin. En sonda her şeyi Search Console'dan doğrulayın."
---

Temiz kod, bir sitenin dizine girmesi ve hızlı açılması için tek başına yetmiyor. Astro projelerinde sitemap'in, görsel optimizasyonunun, `robots.txt` dosyasının ve meta etiketlerinin birbiriyle uyumlu çalışması gerekiyor.

Yeni bir Astro projesinin hız testlerinden 100/100 alması insanın hoşuna gidiyor. Bununla birlikte SEO altyapısı hazır değilse o hızın pek bir anlamı kalmıyor. Kendi projelerimi canlıya almadan önce her seferinde aynı şeyleri baştan araştırmamak için bir teknik SEO kontrol listesi çıkardım. Aşağıdaki liste onun toparlanmış hâli.

Astro'nun burada bir avantajı var: “Zero JS by default” yaklaşımıyla sayfaya varsayılan olarak hiç JavaScript göndermiyor. Bu da Core Web Vitals metriklerinde işe bir adım önde başlamak demek.

Gerisi ayarlara kalıyor. Yayından önce kontrol etmenizi önerdiğim 10 madde aşağıda.

## 1. Canonical URL yapılandırması

Her sayfanın asıl adresini arama motorlarına `canonical` etiketiyle bildirin. Böylece yinelenen içerik (duplicate content) sorununun önüne geçersiniz. Adresi her sayfaya elle yazmak yerine `Astro.url` ile dinamik olarak üretin.

## 2. `robots.txt` ve sitemap entegrasyonu

Botların sitede yolunu bulabilmesi için önce `@astrojs/sitemap` paketini kurun. Ardından `robots.txt` dosyasında sitemap adresini açıkça belirtin.

## 3. Görsel optimizasyonu

Bu maddede işin çoğunu Astro'nun yerleşik `<Image />` bileşeni üstleniyor:

- Görselleri otomatik olarak WebP formatına çevirir.
- Boyut belirtmeyi zorunlu tuttuğu için sayfa yüklenirken düzen kaymasını (CLS) önler.
- Geç yükleme (lazy loading) ile ilk açılışı hızlandırır.

## 4. Meta etiketleri ve Open Graph

Sayfa başlığı tek başına yetmez. Bağlantılarınızın sosyal medyada düzgün görünmesi için `og:image`, `og:title` ve `og:description` etiketlerini her sayfaya ayrı ayrı yazın. Twitter card tipini de belirleyin.

## 5. Yapılandırılmış veri ve zengin sonuçlar

Sayfalara JSON-LD formatında yapılandırılmış veri ekleyin. Blog yazılarında `BlogPosting`, hizmet sayfalarında `Service` şemasını kullanın. Bu işaretleme, Google'ın sayfanın neyi anlattığını anlamasına yardımcı olur; üstelik sayfa zengin sonuçla gösterildiğinde tıklanma oranını (CTR) da artırabilir.

Zengin sonuç ise garanti değil. Nitekim Google, SSS zengin sonuçlarını Ağustos 2023'ten itibaren yalnızca tanınmış devlet ve sağlık sitelerinde gösteriyordu; 7 Mayıs 2026'dan beri hiçbir sitede göstermiyor. Bir işletme kendisi hakkındaki yorumları kendi sitesinde yayımlıyorsa, o yorumların yıldızlarını da 2019'dan beri göstermiyor.

## 6. Sayfalandırma ve iç bağlantılar

Botların sitenin derindeki sayfalara da ulaşabilmesi için kategori ve etiket sayfalarını doğru kurgulayın. Yazıların altına bir “ilgili yazılar” bölümü ekleyin; sayfalar birbirine bağlandıkça hem okuyucu hem bot sitede dolaşmaya devam eder.

## 7. Yazı tipleri ve LCP (Largest Contentful Paint)

Yazı tiplerinin geç yüklenmesi performansı düşürür. Google Fonts kullanıyorsanız yazı tiplerini kendi sunucunuzda barındırın ya da `font-display: swap` kullanın. Sayfanın ilk ekranında kullanılan yazı tiplerini de preload edin.

## 8. 404 sayfası ve hata yönetimi

Yanlış bir adrese düşen ziyaretçiyi kaybetmemek için markanıza uygun, onu sitenin geri kalanına yönlendiren bir 404 sayfası tasarlayın. Kırık bağlantıları da düzenli olarak kontrol edin.

## 9. Mobil uyumluluk ve dokunma hedefleri

Sayfayı önce telefon için düşünün. Düğmelere ve bağlantılara parmakla rahatça dokunulabildiğini test edin, `viewport` meta etiketinin de doğru tanımlandığından emin olun.

## 10. Performans testi ve sürekli takip

Yayına çıkmadan önce Lighthouse ya da PageSpeed Insights skorunuz en az 90 olmalı. Gerçek kullanıcı verilerini (RUM) izleyecek araçları da bu aşamada bağlayın.

## Yayından sonra

Teknik SEO aslında bir kere yapılıp unutulan bir iş değil. Astro sağlam bir altyapı sunuyor; aramadaki görünürlük ise bu altyapıyı doğru yapılandırmanıza bağlı.

Sitenizde hâlâ eksik bir şey olduğunu düşünüyorsanız [iletişim formundan](/#contact) teknik analiz isteyebilirsiniz.
