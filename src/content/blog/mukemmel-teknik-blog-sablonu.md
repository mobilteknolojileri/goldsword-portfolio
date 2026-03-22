---
title: "Geliştirici Blogları İçin Markdown Şablonu ve SEO"
description: "Teknik blog yazarken hem okunabilirliği (UX) artıran hem de SEO'ya katkı sağlayan kullanışlı Markdown notlarım. Kendi kullandığım şablonu da aşağıya bıraktım."
date: 2026-03-22
updated: 2026-03-22
tags: ["markdown", "astro", "blog-sablonu", "seo", "teknik-yazarlik"]
category: "web"
heroImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2400&auto=format&fit=crop"
draft: false
intent: "guide"
---

Geliştirici olarak blog yazmak bazen kod yazmaktan daha yorucu olabiliyor. İlk başlarda yazılarımı sadece düz metinler ve renksiz kod bloklarıyla hazırlayıp geçiyordum. Fakat zamanla fark ettim ki, kimse ekrandaki o uzun ve bitmek bilmeyen paragrafları sonuna kadar okumuyor.

Teknik bir soruna çözüm aradığımızda hepimiz yazıyı hızlıca "tarıyor" ve direkt çözüm satırını bulmak istiyoruz.

Bu yüzden zamanla makalelerimin hem arama motorlarında (SEO) daha iyi performans göstermesi hem de okuyan kişiyi yormaması için bazı standart Markdown formatları geliştirdim. Ekstra hiçbir eklentiye (plugin'e) ihtiyaç duymadan, saf Markdown'ın limitleriyle blogları anlaşılır kılmak için kendi uyguladığım bu yöntemleri kendi projelerinizde de kullanabilirsiniz.

## 1. Yazının Başındaki Özet Kutusu (TL;DR)

Yazının hemen girişine, makalenin ana fikrini 2-3 cümlede özetleyen belirgin bir alan koymak sayfayı terk etme (bounce) oranını oldukça düşürüyor. Bunun için standart "Alıntı" (Blockquote) özelliğini kalın fontlarla birleştiriyorum.

**Nasıl yazıyorum:**

```markdown
> 💡 **Kısacası (TL;DR):** İnsanlar uzun yazıları okumaz, tararlar. Yazının başına eklenecek mini bir özet alanı okuyucunun sayfada kalma süresini ciddi oranda artırabilir.
```

**Canlı Görünümü:**

> 💡 **Kısacası (TL;DR):** İnsanlar uzun yazıları okumaz, tararlar. Yazının başına eklenecek mini bir özet alanı okuyucunun sayfada kalma süresini ciddi oranda artırabilir.

## 2. GitHub Benzeri Uyarı (Alert) Blokları

Sadece kod paylaşmak yetmiyor, bazen kritik bir uyarıyı veya püf noktasını aradan sıyırmak gerekiyor. Çoğu sitede GitHub tarzı "Alert" eklentileri kurulu olmadığı için, en güvenli yol kendi şemamızı oluşturmak.

**Nasıl yazıyorum:**

```markdown
> ⚠️ **KRİTİK UYARI:**
> Veritabanı tablolarını silmeden önce mutlaka manuel bir `.sql` yedeği alın. Aksi halde verileriniz kaybolabilir.
```

**Canlı Görünümü:**

> ⚠️ **KRİTİK UYARI:**
> Veritabanı tablolarını silmeden önce mutlaka manuel bir `.sql` yedeği alın. Aksi halde verileriniz kaybolabilir.

## 3. Kod Değişikliklerinde Eski / Yeni Kıyaslaması

`diff` özellikli kırmızı/yeşil kod blokları bazen temayla uyuşmayabilir veya syntax highlight desteklemeyebilir. Sadece yorum satırlarını kullanarak durumu aktarmak her sistemde garantili sonuç verir.

**Nasıl yazıyorum:**

````markdown
```javascript
// Eski ve yavaş çalışan yapı:
function veriGetir() {
  fetchVerisi();
}

// Yeni ve optimize edilmiş yapı:
async function hizliVeriGetir() {
  await fetchVerisi();
}
```
````

**Canlı Görünümü:**

```javascript
// Eski ve yavaş çalışan yapı:
function veriGetir() {
  fetchVerisi();
}

// Yeni ve optimize edilmiş yapı:
async function hizliVeriGetir() {
  await fetchVerisi();
}
```

## 4. Tablolarda Durum Belirteçleri

Karmaşık emojiler (Mac/Windows farkı nedeniyle) veya uzun HTML Badge sınıfları (Dark Mode nedeniyle) bazen sürpriz bozulmalar yaratabilir. Sert köşeli parantezler ile düz metin rozetleri oluşturmak son derece profesyonel durur.

**Nasıl yazıyorum:**

```markdown
| Optimizasyon | Sonuç Analizi                                 |
| ------------ | --------------------------------------------- |
| İlk Sürüm    | **[ Başarısız ]** - Sayfa çok geç yükleniyor. |
| Son Sürüm    | **[ Başarılı ]** - Pagespeed: 100/100         |
```

**Canlı Görünümü:**
| Optimizasyon | Sonuç Analizi |
|--------------|---------------|
| İlk Sürüm | **[ Başarısız ]** - Sayfa çok geç yükleniyor. |
| Son Sürüm | **[ Başarılı ]** - Pagespeed: 100/100 |

---

## Yeni Yazılarım İçin Örnek Şablon

Yeni bir konuya değineceğim zaman ekranın karşısına geçip saatlerce "konuya nasıl başlasam" demek yerine, direkt aşağıdaki blok yapısını kopyalayıp içini dolduruyorum:

```markdown
---
title: "Konuyu Açıklayan Net Bir Başlık"
description: "Problemin ne olduğu ve bu yazıda nasıl bir çözüm sunacağınızın 140 karakterlik kısa özeti."
date: YYYY-MM-DD
tags: ["teknoloji", "odak-kelime"]
category: "web"
heroImage: "/gorsel-adresi.webp"
draft: false
intent: "troubleshooting"
---

> 💡 **TL;DR:** Sadece çözüme odaklanmak isteyenler için yazının 2 cümlelik özeti ve anahtar kelimesi burada yer alır.

Problemin tam olarak ne olduğunu anlatan ufak bir giriş. Geliştirici burayı okuduğunda "Evet, tam olarak benim yaşadığım hata!" demeli.

## Hatanın/Durumun Kaynağı Nedir?

Mümkünse hatayı aldığınız log çıktısını veya yanlış çalışan ekranı paylaşın. Sorunun teorik açıklaması burada yer almalı.

> ℹ️ **Not:** Okuyucu için ön bilgi veya kaçırmaması gereken detay varsa burada belirtilir.

## Çözüm Adımları

Adım adım, kafa karıştırmadan doğrudan düzeltmeleri veya mimariyi paylaşın.

\`\`\`javascript
// Eski Hatalı Kod:
const limit = 5;

// Yeni Çözülmüş Kod:
const limit = 50;
\`\`\`

## Sonuç

Burada da işlemin başarıyla bittiğinden bahsedin. Değerli bilgiler paylaştıkça, hem kişisel not defteriniz genişler hem de arama motoru optimizasyonu kendiliğinden gerçekleşir.
```
