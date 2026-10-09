---
title: "Tutorial Hell'den Çıkış: AI ile Öğrenerek Üretmek"
description: "Saatlerce eğitim izleyip hiçbir şey üretememe döngüsünü kırmak için yapay zekâyı nasıl kullandığımı yazdım: yalnızca kod yazdıran bir araç olarak değil, mimariyi birlikte düşündüğüm bir mentor olarak."
date: 2026-03-22
updated: 2026-10-07
tags: ["ai", "öğrenme", "yazılım", "verimlilik", "kariyer"]
category: "yazılım"
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2400&auto=format&fit=crop"
draft: false
intent: "guide"
---

Yazılıma başlayan hemen herkesin düştüğü bir tuzak var, muhtemelen siz de tanıyorsunuz: tutorial hell, yani eğitim cehennemi.

Saatlerce kurs izlersiniz, not alırsınız, "anladım ya" hissi gelir. Sonra VS Code'u açarsınız ve karşınızda boş bir ekran. Hiçbir şey yazamazsınız.

Asıl sorun şu: İzlemek, yapabilmek demek değil.

Bu döngüyü kırdığımda şunu fark ettim: Yapay zekâ döneminde en değerli beceri kod yazmak değil, doğru şeyi tasarlamak ve doğru soruyu sormak.

## Önce öğrenip sonra yapmayı bıraktım

Eski yöntemde 40 saat kurs izler, not alır, öğrendiklerinizi belki bir gün kullanırsınız. Öte yandan, yenisinde bir fikir bulur, doğrudan başlar ve öğrenirken üretirsiniz.

Ben artık şöyle çalışıyorum:

1. Bir fikir seçiyorum.
2. Konuyu hiç bilmesem bile doğrudan projeye giriyorum.
3. Yapay zekâya "Bunu nasıl yaparım?" diye değil, "Bunu doğru şekilde nasıl tasarlarız?" diye soruyorum.

## Yapay zekâdan kod değil, mimari isteyin

Çoğu kişinin düştüğü hata, yapay zekâya "Bana X uygulamasının kodunu yaz" demek. Bu sizi geliştirici yapmaz, kopyala-yapıştır operatörü yapar.

"Login sistemi yaz" demek yerine şunları isteyin:

- "JWT tabanlı kimlik doğrulama sistemi için production seviyesinde bir mimari kur."
- "Backend için katmanlı yapı (controller, service, repository) kullan."
- "Güvenlik risklerini açıkla ve klasör yapısı öner."
- "Sonra birlikte adım adım kodlayalım."

Fark burada başlıyor.

## Planı yapay zekâya yaptırın, ama körü körüne değil

Bir projeye başlarken ilk işim kod yazmak değil, plan yaptırmak. İlk mesajım şu: "Kod yazma. Önce proje planı çıkar."

Örnek bir prompt:

```text
Bir mobil uygulama geliştiriyorum. Özellikler:
* Kullanıcı login/register
* Şifreli veri saklama (AES-256)
* Offline çalışma
* Basit UI

Bana şunları ver:
1. Genel mimari (MVVM mi, Clean mi vs)
2. Klasör yapısı
3. Kullanılacak teknolojiler
4. State management önerisi
5. Güvenlik riskleri
6. Bu projeyi adım adım nasıl geliştiririz (roadmap)

Kod yazma. Sadece plan ver.
```

Böylece büyük resmi görmeyi ve projeyi bir bütün olarak düşünmeyi öğrenirsiniz. Üstelik kararları senior bir geliştirici gibi verme refleksi de buradan gelir.

## En önemli beceri: "Neden?" diye sormak

Yapay zekâ size kod verdiğinde yapılabilecek en büyük hata, kod çalıştı diye "tamam" deyip geçmek. Onun yerine şunları sorun:

- "Neden bu yapı seçildi?"
- "Bunu daha basit yapamaz mıyız?"
- "Bu ölçeklenir mi, yoksa production'da patlar mı?"
- "Bu fonksiyonu async yazdın. Sync olsa ne olurdu?"

Gerçek öğrenme o anda başlıyor.

## Yapay zekâ mentor olabilir, ama yöneten sizsiniz

Eskiden forumlarda soru soran biri bazen sert bir dille yargılanır, moral bozan cevaplar alırdı. Şimdi karşınızda sabrı tükenmeyen, aynı detayı istediğiniz kadar yeniden açıklayan bir araç var.

Yalnız bir şartı var: Yapay zekâ kendi başına ne iyi bir emir kulu ne de iyi bir mentor. Başka bir deyişle, onu iyi yapan, sizin sorduğunuz sorular.

## Bitirip yayına almak

Kaç kurs bitirdiğiniz kimsenin umurunda olmaz, hatta kaç proje yaptığınız da. Bakılan şey, ne yayımladığınızdır.

Hedefiniz şu olsun: Küçük bir şey yapın, bitirin ve yayımlayın. Söz dizimiyle uğraşmayı ve boilerplate kod yazmayı büyük ölçüde yapay zekâya bırakabilirsiniz. Siz de ürün fikrine, kullanıcı deneyimine ve problemi çözmeye odaklanırsınız.

## Adım adım yöntem

1. Küçük bir proje seçin.
2. Mimariyi yapay zekâya kurdurun.
3. Kodu onunla birlikte yazın.
4. Her satırı sorgulayın.
5. Projeyi bitirin ve deploy edin.
6. Yeni bir projeye geçin, aynı döngüyü tekrarlayın.

## Asıl mesele nasıl kullandığınız

Eğitim izlemek size hazır olduğunuzu hissettirir, proje yapmak ise sizi geliştirir. Farkı aslında yapay zekâyı kullanmanız değil, onu nasıl kullandığınız belirler.

Doğru soruları sorduğunuzda yapay zekâ, kod yazdırdığınız bir junior olmaktan çıkar; size düşünmeyi öğreten senior bir mentora dönüşür.
