---
title: "Geliştirici Blogları İçin Markdown Şablonu ve SEO"
description: "Teknik yazılarımda okumayı kolaylaştırmak ve SEO'ya katkı sağlamak için kullandığım Markdown kalıpları. Yeni bir yazıya başlarken kopyaladığım şablon da yazının sonunda."
date: 2026-03-22
updated: 2026-10-07
tags: ["markdown", "astro", "blog-sablonu", "seo", "teknik-yazarlik"]
category: "web"
heroImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2400&auto=format&fit=crop"
draft: false
intent: "guide"
---

Geliştirici olarak blog yazmak bazen kod yazmaktan daha yorucu. İlk yazılarımı düz metin ve renksiz kod bloklarıyla hazırlayıp geçiyordum. Zamanla fark ettim ki o uzun, bitmek bilmeyen paragrafları neredeyse kimse sonuna kadar okumuyor.

Teknik bir soruna çözüm arayan kişi genellikle yazıyı okumaz, tarar ve doğrudan çözümün olduğu satırı bulmak ister. Bir hatanın peşindeyken ben de böyle okuyorum.

Bu yüzden hem okuyanı yormayan hem de SEO'yu gözeten birkaç standart Markdown kalıbı oturttum. Hiçbiri ek bir eklenti gerektirmiyor; diğer bir deyişle, hepsi düz Markdown ile yazılıyor. Kendi projelerinizde de aynen kullanabilirsiniz.

## Yazının başında kısa bir özet

Yazının en başına ana fikri 2-3 cümlede veren belirgin bir alan koyuyorum. Bunun için Markdown'daki alıntı bloğunu (blockquote) kalın bir etiketle birleştiriyorum.

Markdown'da şöyle yazıyorum:

```markdown
> **Kısaca:** İnsanlar uzun yazıları baştan sona okumaz, tarar. Yazının başındaki kısa özet, aradıkları cevabın bu yazıda olup olmadığını ilk bakışta gösterir.
```

Sayfada şöyle görünüyor:

> **Kısaca:** İnsanlar uzun yazıları baştan sona okumaz, tarar. Yazının başındaki kısa özet, aradıkları cevabın bu yazıda olup olmadığını ilk bakışta gösterir.

## GitHub tarzı uyarı blokları

Kod paylaşmak her zaman yetmiyor. Bazen önemli bir uyarının ya da bir püf noktasının metnin arasında kaybolmaması gerekiyor. GitHub tarzı uyarı (alert) bloklarını gösteren eklentiler çoğu sitede kurulu olmadığı için en güvenli yol, aynı görünümü alıntı bloğuyla kendiniz kurmak. Etiket olarak emoji yerine "Dikkat:" ya da "Not:" gibi düz bir kelime yazıyorum, çünkü emojiler her sistemde aynı görünmüyor.

Markdown'da şöyle yazıyorum:

```markdown
> **Dikkat:**
> Veritabanı tablolarını silmeden önce mutlaka manuel bir `.sql` yedeği alın. Aksi hâlde verileriniz kaybolabilir.
```

Sayfada şöyle görünüyor:

> **Dikkat:**
> Veritabanı tablolarını silmeden önce mutlaka manuel bir `.sql` yedeği alın. Aksi hâlde verileriniz kaybolabilir.

## Kod değişikliğini yorum satırlarıyla göstermek

`diff` ile yazılan kırmızı-yeşil kod blokları bazen temayla uyuşmuyor ya da dilin söz dizimi renklendirmesini göstermiyor. Buna karşın kodun hatalı ve doğru hâlini yalnızca yorum satırlarıyla ayırmak her sistemde aynı sonucu veriyor.

Markdown'da şöyle yazıyorum:

````markdown
```javascript
// Hatalı: işlemin bitmesini beklemeden dönüyor
function veriGetir() {
  fetchVerisi();
}

// Doğru: işlemin bitmesini bekliyor
async function veriGetir() {
  await fetchVerisi();
}
```
````

Sayfada şöyle görünüyor:

```javascript
// Hatalı: işlemin bitmesini beklemeden dönüyor
function veriGetir() {
  fetchVerisi();
}

// Doğru: işlemin bitmesini bekliyor
async function veriGetir() {
  await fetchVerisi();
}
```

## Tablolarda durum etiketleri

Karmaşık emojiler Mac'te ve Windows'ta farklı görünebiliyor, uzun HTML rozet (badge) sınıfları da koyu temada beklenmedik şekilde bozulabiliyor. Öte yandan, köşeli parantez içine yazılmış düz metin bir etiket bu iki sorunu da yaşatmıyor ve tabloda derli toplu duruyor.

Markdown'da şöyle yazıyorum:

```markdown
| Optimizasyon | Sonuç analizi                                |
| ------------ | -------------------------------------------- |
| İlk sürüm    | **[ Başarısız ]**: Sayfa çok geç yükleniyor. |
| Son sürüm    | **[ Başarılı ]**: PageSpeed puanı 100/100    |
```

Sayfada şöyle görünüyor:

| Optimizasyon | Sonuç analizi                                |
| ------------ | -------------------------------------------- |
| İlk sürüm    | **[ Başarısız ]**: Sayfa çok geç yükleniyor. |
| Son sürüm    | **[ Başarılı ]**: PageSpeed puanı 100/100    |

## Yeni yazılar için kullandığım şablon

Yeni bir konuya başlarken ekranın karşısında saatlerce "nasıl başlasam" diye düşünmüyorum. Aşağıdaki iskeleti kopyalayıp içini dolduruyorum:

````markdown
---
title: "Konuyu Açıklayan Net Bir Başlık"
description: "Problemin ne olduğu ve bu yazıda nasıl bir çözüm sunacağınızın 140 karakterlik kısa özeti."
date: YYYY-MM-DD
tags: ["teknoloji", "odak-kelime"]
category: "web"
heroImage: "https://images.unsplash.com/photo-gorsel-kimligi?q=80&w=2400&auto=format&fit=crop"
draft: false
intent: "troubleshooting"
---

> **Kısaca:** Yalnızca çözümü arayanlar için yazının 2 cümlelik özeti ve anahtar kelimesi burada yer alır.

Problemin tam olarak ne olduğunu anlatan kısa bir giriş. Geliştirici burayı okuduğunda "Evet, benim aldığım hata tam olarak bu" demeli.

## Sorunun kaynağı

Mümkünse aldığınız hatanın log çıktısını ya da yanlış çalışan ekranı paylaşın. Sorunun neden çıktığını burada açıklayın.

> **Not:** Okuyucunun bilmesi gereken bir ön bilgi ya da kaçırmaması gereken bir detay varsa burada belirtilir.

## Çözüm adımları

Düzeltmeyi adım adım, kafa karıştırmadan anlatın:

1. Hangi dosyanın ya da ayarın değişeceğini yazın.
2. Değişikliği kod bloğuyla gösterin.
3. Değişiklikten sonra neyin yeniden başlatılacağını belirtin.

```javascript
// Hatalı:
const limit = 5;

// Düzeltilmiş:
const limit = 50;
```

## Sonraki adım

Düzeltmenin işe yaradığını okuyucunun nasıl kontrol edeceğini yazın: hangi komutu çalıştıracağını ya da hangi ekranda neyi göreceğini. Sorun devam ederse bakacağı bir sonraki yeri de ekleyin.
````
