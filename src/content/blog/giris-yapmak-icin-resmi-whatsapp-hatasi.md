---
title: "Giriş Yapmak İçin Resmi WhatsApp Uygulamasına Sahip Olmanız Gerekir Hatası"
description: "Play Store'dan indirdiğiniz WhatsApp giriş yaptırmıyor. Sebep uygulamada değil, telefonda: Bootloader kilidi açıkken cihaz doğrulamadan geçemiyor. Hesabınıza bir şey olmaz, banka uygulamaları da aynı yerde takılır."
date: 2026-08-26
updated: 2026-10-07
tags: ["android", "whatsapp", "bootloader", "root", "custom rom", "xiaomi"]
category: "android"
draft: false
faq:
  - question: "WhatsApp'ı Play Store'dan indirdim, neden resmî uygulama istiyor?"
    answer: "Çünkü baktığı şey uygulama değil, cihaz. Telefon her açılışta yazılımının değiştirilip değiştirilmediğini bildirir, WhatsApp da giriş sırasında bu bildirime bakar. Bootloader kilidi açıksa bildirim olumsuz çıkar. Uygulamanız gerçekten resmî; hata mesajı yanlış yeri gösteriyor."
  - question: "Bu yüzden hesabım kapanır mı?"
    answer: "Hayır. Bu durumda ne yasak var ne de kapanma, yalnızca o telefondan giriş yapılamıyor. Aynı numarayla başka bir telefonda giriş yapabiliyorsanız sorunun cihazda olduğu zaten kanıtlanmış olur. Konuşma geçmişiniz de yerinde."
  - question: "Hatayı görünce dışarıdan APK indirmeli miyim?"
    answer: "Hayır. Mesaj resmî uygulama istediği için insanlar internette arayıp bir yerden kurulum dosyası indirir; bu dosya GB WhatsApp gibi değiştirilmiş bir kopyaysa ya da kaynağı belli değilse uyarı bu sefer haklı çıkar. Hesabınızın yasaklanma riski de yazışmalarınızın tehlikeye girmesi de asıl orada başlar. WhatsApp'ın kendi sitesindeki APK resmîdir ama sorunu o da çözmez; telefonunuzdaki Play Store sürümü zaten doğru sürüm."
  - question: "Root ya da custom ROM'dan vazgeçmem mi gerekiyor?"
    answer: "Gerekmiyor. Sorunu kilit açık, root ve ROM yerinde kalacak şekilde çözerim; telefon sıfırlanmaz, verileriniz gitmez. Tek uyarım kalıcılıkla ilgili: Bu kontroller uygulama ve sistem güncellemeleriyle değişir, bugün geçen bir cihaz aylar sonra yeniden takılabilir. Bunu baştan söylerim."
  - question: "Banka uygulamam da açılmıyor, bağlantılı mı?"
    answer: "Evet, sebep aynı. Banka ve ödeme uygulamaları ile bazı oyunlar cihaza aynı soruyu sorar ve aynı yerde takılır. WhatsApp'taki mesaj resmî uygulamadan bahsettiği için ayrı bir sorun sanılıyor, ama değil. Bu yüzden biri düzeltilince ötekiler de çoğu zaman onunla birlikte düzelir."
  - question: "Telefonu ikinci elden aldım, kilidin açık olduğunu nereden bileyim?"
    answer: "Açılışta kısa bir uyarı ekranı geçiyorsa ya da telefon stok görünmesine rağmen bu tür uygulamalar açılmıyorsa kilit büyük ihtimalle açıktır. İkinci el telefonlarda sık rastlanan durum şu: Satıcı ROM yüklemiş, sonra kilidi kapatmamış. Modeli ve birkaç ekran görüntüsünü gönderirseniz bakıp söylerim."
intent: "troubleshooting"
---

WhatsApp'ı Play Store'dan kurdunuz, başka hiçbir yerden değil. Numaranızı girdiniz, doğrulama kodunu beklerken ekrana şu geldi: _"Giriş yapmak için resmi WhatsApp uygulamasına sahip olmanız gerekir."_

Oysa telefonda zaten resmî uygulama yüklü, indirdiğiniz yer de doğru.

Sorun sandığınız şey değil. Uygulamayla ilgisi yok, telefonla ilgili. Mesaj da başka bir durum için yazıldığından sizi yanlış yere yönlendiriyor.

## Mesajın sizi yönlendirdiği yer tehlikeli

Ekranda "resmi WhatsApp uygulaması" yazınca çoğu kişi internette arama yapar ve bir yerden kurulum dosyası indirir. Uyarıyı ciddiye aldığını, hatta doğru olanı yaptığını düşünür.

Aslında yapılabilecek en kötü şey bu. Telefonunuzdaki Play Store sürümü zaten resmî; aramada karşınıza çıkanların bir kısmı ise GB WhatsApp, WhatsApp Plus gibi değiştirilmiş kopyalar ya da kaynağı belli olmayan sitelerden inen dosyalardır. Böyle bir dosyayı kurduğunuzda mesaj ilk kez haklı çıkar ve asıl riskler o zaman başlar: Hesabınız gerçekten yasaklanabilir, telefonunuzdaki bütün yazışmalara erişen uygulamanın kaynağı da artık belirsizdir.

WhatsApp'ın kendi sitesinde (whatsapp.com/android) yayımladığı kurulum dosyası da resmîdir, ama aynı uygulama olduğu için bu sorunu o da çözmez. Telefonunuzdaki uygulamaya dokunmayın, sorun onda değil.

## Sorun uygulamada değil, cihazın kimliğinde

Android telefonlar her açılışta kendi durumlarını bildirir: Yüklü yazılım üreticinin verdiği yazılım mı, değiştirilmiş mi, açılış zinciri bozulmuş mu. Hassas iş yapan uygulamalar bu bildirime bakar.

Bootloader kilidi (telefonun yalnızca üreticinin imzaladığı yazılımı çalıştırmasına izin veren kilit) açıksa bu bildirim olumsuz çıkar. Kilidin açık olması "bu cihazın yazılımı değiştirilmiş olabilir" demektir ve cihaz bunu dürüstçe söyler. Root'lamış olmanız da, custom ROM kurmuş olmanız da, hatta yalnızca kilidi açıp başka hiçbir şey yapmamış olmanız da aynı sonucu verir.

WhatsApp girişte bu olumsuz bildirimi görür ve telefondaki kopyanın değiştirilmiş olabileceğini varsayar. Gösterdiği mesaj, gerçekten sahte bir WhatsApp kullananlar için yazılmış. Siz o gruptan değilsiniz ama uygulama ikisini birbirinden ayırmaz.

**WhatsApp girişinin takıldığı yol:**

1. **Açılış.** Telefon kendi durumunu bildirir: Yazılımı üreticinin verdiği mi, değiştirilmiş mi.
2. **Kilit açık.** Bootloader kilidi açıksa bildirim olumsuz çıkar. Root ya da ROM gerekmez.
3. **WhatsApp.** Girişte bu bildirime bakar ve kopyanın değiştirilmiş olabileceğini varsayar.
4. **Resmî uygulama uyarısı.** Ekrana gelen mesaj uygulamayı suçlar; oysa sorun cihazın bildiriminde.

Başka bir deyişle, doğru cümle şu olurdu: "Bu cihaz kendini doğrulayamıyor." Ekranda yazan ise "resmi uygulamaya sahip değilsiniz." İkisi çok farklı şeyler; insanların yanlış çözüme gitmesinin tek sebebi de aradaki bu fark.

## Hesabınıza bir şey olmuyor

Bu sayfayı açanların çoğu aynı şeyden korkar: Hesabım kapanacak mı? Bu durumda hayır.

Yasak yok, geri sayım yok, kalıcı kapanma yok. Numaranız da konuşma geçmişiniz de yerinde; karşı taraf bir sorun yaşadığınızı bile bilmiyor. Kısacası olan tek şey, o telefondan giriş yapılamaması.

Bunu beş dakikada kendiniz doğrulayabilirsiniz: Aynı numarayla başka bir telefondan girin. Girebiliyorsanız hesabınızda bir sorun yok, sorunun telefonda olduğu da kesinleşmiş olur. Üstelik bu ayrımı baştan yapmış olmanız, sonra konuşacaklarımızın yarısını halleder.

## Aynı yerde takılan başka uygulamalar

Cihazdan bu bildirimi isteyen tek uygulama WhatsApp değil. Banka ve ödeme uygulamaları, bazı oyunlar ve bir kısım abonelik uygulaması da aynı soruyu sorar ve aynı yerde takılır.

Belirtiler farklı görünür: Biri "cihazınız güvenli değil" der, biri hiçbir şey demeden kapanır, WhatsApp ise resmî uygulamadan bahseder. Ne var ki üçü de aynı şeyi söylüyor.

Bunun pratikteki sonucu şu: Bu sorunlar tek tek çözülmez, kaynak düzeltilince çoğu zaman birlikte düzelir.

## Kilidin açık olduğunu bilmiyor olabilirsiniz

Kilidi kendiniz açtıysanız bunu zaten biliyorsunuz. Öte yandan ikinci el telefonlarda kilit sık sık açık gelir: Satıcı ya da önceki sahibi ROM yüklemiş, sonra kilidi kapatmamıştır. Telefon dışarıdan stok, yani hiç dokunulmamış gibi görünür; uygulamalar ise öyle olmadığını bilir.

Açılışta kısa bir uyarı ekranı geçiyorsa ilk işaret budur. Emin değilseniz modeli ve birkaç ekran görüntüsünü gönderin, bakıp söyleyeyim.

## Kalan iş ne

Yaptığım iş, telefonu bu kontrolden geçer hâle getirmek.

Kilit açık kalır. Root da custom ROM da yerinde kalır; telefon sıfırlanmaz, verileriniz gitmez. Ödemek zorunda olduğunuzu sandığınız bedeli ödemezsiniz.

Kalıcılık konusunda söz veremem: Bu kontroller uygulama ve sistem güncellemeleriyle değişir. Dolayısıyla bugün geçen bir cihaz aylar sonra yeniden takılabilir. Sonradan sürpriz olmasın diye bunu baştan söylüyorum.

Bana yazarken telefonun modelini, Android sürümünü ve cihazda ne yapıldığını belirtin, hatanın ekran görüntüsünü de gönderin. Ne olduğunu çoğu zaman bunlardan anlarım.

Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.
