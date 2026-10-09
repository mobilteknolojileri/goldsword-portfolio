---
title: "HyperOS Güncellemesinden Sonra Telefon Açılmıyor: Verilerim Gider mi?"
description: "Güncelleme yarıda kaldı, telefon logoda takılı. Bunun ne demek olduğunu, verilerin çoğu zaman neden silinmediğini, kurtarma menüsünde neye dokunmamanız gerektiğini ve hangi noktadan sonra işin bana kaldığını yazdım."
date: 2026-08-26
updated: 2026-10-07
tags: ["android", "xiaomi", "hyperos", "güncelleme", "açılmayan telefon", "veri kurtarma"]
category: "android"
draft: false
faq:
  - question: "Telefon Mi logosunda kaldı, ne kadar beklemeliyim?"
    answer: "Büyük bir güncellemeden sonra ilk açılış normalden uzun sürebilir, o yüzden bir süre beklemek doğru. Süre cihazdan cihaza çok değiştiği için buraya bir rakam yazmıyorum, yanıltır. Ölçü şu: Geçecekse kendiliğinden geçer; ekran uzun süredir hiç değişmiyorsa bundan sonra da kendiliğinden değişmez. O noktada yapılacak şey beklemek değil, telefonu şarja takıp bir kez zorla yeniden başlatmak. Bu da sonuç vermezse gerisi kabloyla ve bilgisayarla yapılan bir iş."
  - question: "Güncellemeden sonra açılmayan telefonun verileri silinir mi?"
    answer: "Kendiliğinden silinmez. Güncelleme yalnızca sistemin bölümüne yazar; fotoğraflar ve uygulama verileri ayrı bir bölümdedir ve telefon açılmasa bile orada kalır. Verileri silen iki şey var: kurtarma menüsünden yapılan sıfırlama ve bazı modellerde cihazı ayağa kaldırmanın tek yolu olan tam sürüm yazma. Tam sürüm yazmayı sizinle konuşmadan yapmam."
  - question: "Kurtarma menüsündeki 'Wipe data / factory reset' seçeneğine basmalı mıyım?"
    answer: "Hayır. O satır telefonu çoğu zaman gerçekten açar ama bunu verileri silerek yapar ve geri dönüşü yoktur. Açılmayan bir telefonda ilk denenecek şey değil, en son konuşulacak şeydir. O ekranda güvenle dokunabileceğiniz tek seçenek 'Reboot'."
  - question: "Bu bir donanım arızası olabilir mi?"
    answer: "Olabilir ama belirtisi farklıdır. Ekranda logo, açılış animasyonu ya da İngilizce bir menü görünüyorsa cihaz çalışıyor demektir ve sorun çoğu zaman yazılımdadır; arızalanan bir depolama çipi de açılış döngüsüne yol açabilir. Ekran hiç yanmıyor, titreşim yok ve şarja takınca da bir şey olmuyorsa büyük ihtimalle donanımdır: ekran, batarya, şarj soketi ya da anakart. Orası ayrı bir tezgâhın işi."
  - question: "Root'lu telefona gelen güncelleme cihazı bozar mı?"
    answer: "Bozabilir; en sık karşılaştığım sebeplerden biri de bu. Resmî güncelleme, yazmaya başlamadan önce sisteme dokunulmamış olmasını bekler. Dolayısıyla root'lu, custom recovery kurulu ya da sistem tarafı değiştirilmiş bir cihazda bu kontrolde takılır. Kimi cihaz güncellemeyi reddedip yoluna devam eder, kimi yarıda kalıp açılmaz hâle gelir."
  - question: "Cihazı göndermem gerekiyor mu?"
    answer: "Çoğu zaman gerekmez. İşin bu kısmı bilgisayara kabloyla bağlı bir telefon üzerinden yürür; bilgisayarınız varsa ona bağlanıp yaparım. Yakınınızda bilgisayar yoksa telefon bana gelir. Hangisinin gerektiğini, modeli ve belirtiyi okuduktan sonra ilk yanıtımda söylerim."
intent: "troubleshooting"
deviceBrand: "Xiaomi"
---

Güncelleme ya bitti ya yarıda kaldı, telefon yeniden başladı ve orada kaldı. Ekranda Mi ya da Redmi logosu var, belki açılış animasyonu dönüp duruyor, belki cihaz kendi kendine kapanıp aynı yerden başlıyor. Elinizde ısınıyor.

Bu tür telefonlara sık bakarım ve ilk soru hep aynıdır: Verilerim gitti mi?

Çoğu zaman gitmemiştir, nedenini aşağıda anlattım. Ama önce yapmamanız gereken bir şey var, çünkü bu sorunu geri dönüşsüz hâle getiren tek hamle çoğu zaman ilk yarım saat içinde yapılır.

## Önce şuna dokunmayın

Telefon açılmayınca çoğu kişi kurtarma ekranına düşer: siyah zemin üstünde, ses tuşlarıyla gezilen İngilizce bir menü. O menüde `Wipe data / factory reset` diye bir satır var ve seçeneklerin içinde en çok işe yarayacakmış gibi görünen de o.

O satıra dokunmayın. Telefonu gerçekten açar ama sorunu çözerek değil, verilerinizi silerek açar. Fotoğraflar, WhatsApp geçmişi, uygulama verileri, hepsi gider. O adımdan sonra geri getirmenin bir yolu yok; bunu ben de yapamam.

O ekranda sizin için güvenli olan tek satır `Reboot` ya da `Reboot to system`. Buna karşın başında `Wipe` veya `Format` geçen her şeyin geri dönüşü yoktur.

İki şey daha. Telefonu arka arkaya yeniden başlatıp sorunun geçmesini beklemeyin: Her zorla kapatma, yarım kalmış bir yazma işleminin üstüne biner. "Format atalım" diyen ilk yere de bırakmayın. O cümle çoğu zaman "ben bakmayacağım" demenin kolay yoludur, bedelini de siz ödersiniz.

## Telefon tam olarak nerede takılı

Ekranda ne gördüğünüz sorunun yarısını söyler; üstelik ayırt etmek için hiçbir şey kurmanız gerekmez.

**Logoda sabit duruyor.** Ekranda logo var, hareket yok, cihaz ısınıyor. Sistem başlamaya çalışıyor ve bir yerde takılıyor.

**Logo geliyor, ekran kararıyor, logo yine geliyor.** Buna açılış döngüsü denir. Sistem başlıyor, bir hata alıyor, kendini yeniden başlatıyor, aynı hatayı yine alıyor.

**Siyah ekranda İngilizce bir menü.** Bu kurtarma modu. Kötü haber gibi görünür ama aslında iyi haberdir: Cihaz bir şey çalıştırabiliyor demektir.

**Küçük yazılar, bir çizim ve `fastboot` kelimesi.** Bu, cihazın alt seviye modlarından biri. Buraya düşen telefonların çoğu geri gelir, çünkü bu modda cihazla konuşulabilir.

**Telefonun açılış yolu:**

1. **Açılış yükleyicisi.** Mi ya da Redmi logosu burada çıkar. Fastboot ve kurtarma modu da buradan açılır.
2. **Sistemin yüklenmesi.** Açılış animasyonu döner. Açılış döngüsü bu aşamada yaşanır.
3. **Kilit ekranı.** Telefon açılmıştır. Sorun bundan sonra başlıyorsa açılış sorunu değildir.

Telefon açılırken bu yolu izler. Logo sabit duruyorsa ilk aşamada, animasyon dönüp duruyorsa ikinci aşamada takılmıştır. Fastboot ve kurtarma ekranı ilk aşamadan açılır; bunlardan birini görüyorsanız cihazla hâlâ konuşulabilir.

Beşinci durum ötekilerden ayrı: Ekran hiç yanmıyor, titreşim yok, şarja takınca da bir şey olmuyor. Sebep genelde yazılım değil; ekran, batarya, şarj soketi ya da anakarttır. Orası ayrı bir tezgâhın işi ve ben o işi yapmam. Belirtiler oraya çıkıyorsa bunu ilk yanıtımda söylerim, cihazı boşuna yola çıkarmam.

## Verileriniz neden hâlâ yerinde

Bunun teknik bir sebebi var ve bilmek insanı rahatlatır.

Telefonun depolama alanı bölümlere ayrılmıştır. Android bir bölümde; fotoğraflarınız, mesajlarınız, uygulamalarınız ve içlerindeki veriler başka bir bölümde. Güncelleme yalnızca sistemin bölümüne yazar, verilerinizin bulunduğu bölüme dokunmaz.

Başka bir deyişle telefon açılmıyor olabilir, sistem gerçekten bozulmuş olabilir ve verileriniz yine de yerli yerinde olabilir. Çoğu zaman da öyledir.

Ne var ki bunu bozan iki durum var. Biri yukarıda yazdığım sıfırlama; doğrudan veri bölümünü siler. Diğeri şu: Bazı modellerde ve bazı bölge sürümlerinde cihazı ayağa kaldırmanın elde kalan tek yolu, verileri de silen bir sürüm yazmaktır. Bu bir kaza değil, bir tercih; o yüzden önce sizinle konuşurum. Siz onaylamadan veri silen bir adım atmam.

## Kendi başınıza deneyebilecekleriniz

Buradaki adımların hiçbiri veri silmez, hiçbiri cihazı daha kötü duruma sokmaz. Hatta bir kısmı sorunu çözebilir; çözmeyenler de en azından ihtimalleri daraltır.

1. Telefonu şarja takın ve yarım saat bırakın, tercihen kendi kablosu ve kendi adaptörüyle. Bataryası bitmiş bir telefon, bozulmuş bir telefonla birebir aynı görünür. Güncelleme sırasında pilin erimesi sandığınızdan sık olur.
2. Güç tuşunu 20-30 saniye basılı tutun, yalnızca bir kez. Döngüde takılmış bir açılış bazen bununla düzelir; sonuç vermezse tekrarlamayın.
3. Ekran hiç yanmıyorsa başka bir kablo ve başka bir priz deneyin. Beş dakikalık bu eleme, cihazı yola çıkarmaya değip değmeyeceğini gösterir.
4. Kurtarma ekranına düştüyseniz `Reboot` satırını seçin, gerisine karışmayın.

Bunlar işe yaradıysa mesele kapanmıştır. Yaramadıysa telefon bu noktadan sonra kendi kendine düzelmez.

## Kalan iş ne

Kalanı kabloyla ve bilgisayarla yapılan bir iş.

Özü şu: cihazın hangi modda cevap verdiğini anlamak, o modele ait doğru sürümü bulmak ve doğru sırayla yazmak. Zor olan doğru sürümü bulmak. Nitekim aynı adla satılan bir Redmi Note'un dört ayrı sürümü olabilir ve bunların yazılımları birbirinin yerine geçmez; kutunun üstündeki ad yetmez, cihazın kendi kodu gerekir. Yanlış sürümü yazmak, açılmayan bir telefonu hiç açılmayan bir telefona çevirir.

Çoğu zaman şöyle yaparım: Telefon sizin bilgisayarınıza takılı olur, ben o bilgisayara bağlanırım. Yakınınızda bilgisayar yoksa telefon bana gelir. Hangi yoldan gideceğimiz ilk yanıtta belli olur, iş yarıda kalmaz.

Kendiniz yapmayı düşünüyorsanız tek uyarım şu: İnternetteki rehberlerin çoğu tek bir model için doğrudur, hemen yanındaki model için değil. Burada bir adımı yanlış sırayla atarsanız geri alamazsınız.

Hangi işlere baktığımı, neyi yapmadığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.

## Bu neden oldu

Sebebini bilmek işe yarar, çünkü aşağıdakilerin çoğu tekrar yaşanabilir.

- Güncelleme yarıda kesildi: Pil bitti, cihaz kapandı ya da biri bekleyemeyip telefonu yeniden başlattı. En sık görülen bu.
- Telefon stok değildi. Root'lu, custom recovery kurulu ya da sistemine dokunulmuş bir telefona gelen resmî güncelleme kimi cihazda reddedilir, kimi cihazda yarıda kalır.
- Yüklü sürüm telefonun kendi sürümü değildi. Başka bir bölgenin yazılımını taşıyan cihaz, kendi bölgesinin güncellemesini almaya çalışınca burada takılır.
- Depolama alanı doluydu ve güncelleme kendine yer bulamadığı için yarım yazıldı.

Bir de bunların hiçbiri yokken olanı var: O modele çıkan sürüm hatalıydı. Aynı hafta aynı modelden üç telefon geliyorsa sebep kullanıcıda değildir.
