---
title: "Banka Uygulaması Açılmıyor: Cihazınız Güvenli Değil Hatası"
description: "Banka uygulaması açılmıyor, 'cihazınız güvenli değil' diyor, banka da bir sorun görmüyor. Aynı anda oyunlar, yayın uygulamaları ve bazı resmî uygulamalar da bozulduysa sebep tek: Telefon kendini doğrulayamıyor."
date: 2026-08-26
updated: 2026-10-07
tags: ["android", "banka uygulaması", "bootloader", "root", "custom rom", "cihaz doğrulama"]
category: "android"
draft: false
faq:
  - question: "Banka uygulamam açılmıyor ama internet bankacılığı tarayıcıda çalışıyor, neden?"
    answer: "Çünkü tarayıcı cihaza soru sormaz, uygulama sorar. Banka uygulaması açılmadan önce telefonun kendi durumunu bildirmesini bekler; bildirim olumsuz gelirse kendini kapatır. Öte yandan tarayıcıdan girişte böyle bir kontrol yok. Hesabınızda ve paranızda bir sorun olmadığının en hızlı kanıtı da bu."
  - question: "Bankayı aradım, onlar bir sorun görmüyor. Ne oluyor?"
    answer: "Görmemeleri normal, çünkü sorun onların tarafında değil. Hesabınız açık, kartınız açık, kayıtlarında da bir engel yok. Uygulama, telefonunuz doğrulamadan geçemediği için açılmıyor ve çağrı merkezinin bunu görmesinin yolu yok. Çoğu görüşme de burada tıkanır."
  - question: "Root yapmadım, telefonu ikinci elden aldım. Yine de olur mu?"
    answer: "Evet, hatta sık görülür. Satıcı ya da önceki sahibi cihazın kilidini açıp ROM yüklemiş, sonra kilidi kapatmamış olabilir. Telefon dışarıdan tamamen normal görünür ama uygulamalar öyle olmadığını bilir. Açılışta kısa bir uyarı ekranı geçiyorsa ilk işaret budur; modeli ve birkaç ekran görüntüsünü gönderirseniz bakıp söylerim."
  - question: "Param ya da hesap bilgilerim risk altında mı?"
    answer: "Bu uyarı yüzünden hayır. Uyarı, uygulamanın doğrulayamadığı bir sistemde çalışmayı reddettiğini gösterir; hesabınıza birinin girdiğini değil. Hesabınız, paranız, kartınız ve kayıtlarınız bundan etkilenmez, telefondaki verileriniz de yerinde. Telefonu ikinci el aldıysanız ve üstündeki ROM'u kimin kurduğunu bilmiyorsanız bu ayrı bir risktir; telefonu üreticinin orijinal yazılımına döndürmek ya da kontrol ettirmek iyi olur."
  - question: "Netflix ve oyunlar da düzgün çalışmıyor, bağlantılı mı?"
    answer: "Evet, bağlantılı. Aynı doğrulamaya bakan başka uygulama grupları da var: Oyunlar açılmıyor ya da hesap bağlamıyor, yayın uygulamalarında görüntü düşük çözünürlükte kalıyor ya da uygulama mağazada hiç çıkmıyor. Belirtiler farklı ama kaynak tek, o yüzden çoğu zaman birlikte düzelirler."
  - question: "Telefonla temassız ödeme geri gelir mi?"
    answer: "Çoğu zaman gelmez. Diğer uygulamalar düzeldikten sonra bile telefonla ödeme çalışmamaya devam edebilir, çünkü orası ayrıca ve daha sıkı denetlenir. Denemenin zararı yok ama baştan söz vermem. Kartınız bundan etkilenmez; çalışmayan tek şey telefonla ödeme."
  - question: "Vize biyometri uygulaması sürekli kapanıyor, aynı sebep mi?"
    answer: "Büyük ihtimalle evet. Resmî kimlik ve biyometri uygulamaları bu doğrulamayı en sıkı isteyenlerdendir; açılır açılmaz kapanan bir vize uygulaması çoğu zaman bu yüzden kapanır. Umre ve hac başvurusunda bu adım atlanamadığı için burada zamanla yarışırsınız."
intent: "troubleshooting"
---

Bankanın uygulaması açılmıyor. Ya hiçbir şey demeden kapanıyor ya da bir uyarı gösteriyor: "cihazınız güvenli değil", "bu uygulama değiştirilmiş cihazlarda çalışmaz" ya da doğrudan "rootlu cihaz" diye bir şey.

Bankayı arıyorsunuz. Onlar bir sorun görmüyor: Hesap açık, kart açık, kayıtlarda engel yok. Uygulamayı silip yeniden kurmanızı söylüyorlar; silip kuruyorsunuz, değişen bir şey olmuyor.

Sorun bankada değil, telefonda. Büyük ihtimalle telefona ne olduğunu da bilmiyorsunuz.

## Önce şunu ayırın: Sorun telefonunuzda mı, bankanın sunucusunda mı

Bunu birkaç dakikada anlayabilirsiniz ve cevap, sonrasını tamamen değiştirir.

Aynı hesaba bilgisayardan, tarayıcıyla girin. Açılıyorsa hesabınızda bir sorun yok. Sonra aynı uygulamayı başka bir telefona kurup giriş yapın; orada çalışıyorsa sorun kesinlikle sizin telefonunuzda.

İkinci ve daha güçlü işaret şu: Bu sorun tek bir uygulamada kalmaz. Aklınıza gelmeyecek uygulamalar aynı dönemde bozulmaya başlar ve insanlar bunları birbiriyle ilişkilendirmez.

## Aynı anda bozulan başka şeyler

Hepsi cihaza aynı soruyu sorar ama her biri bunu başka bir belirtiyle belli eder. Listede size tanıdık gelen birden fazla satır varsa teşhis zaten konmuş demektir.

**Banka ve ödeme uygulamaları.** Açılmıyor ya da açılıp işlem adımında takılıyor. En çok şikâyet edilen ve en çok fark edilen taraf burası.

**Telefonla temassız ödeme.** Kart eklenmiyor ya da eklenmiş kart ödeme anında çalışmıyor.

**Oyunlar.** Bir kısmı hiç açılmıyor, bir kısmı açılıyor ama hesap bağlamıyor ya da oynarken atıyor.

**Yayın ve abonelik uygulamaları.** Burada durum biraz farklı: Uygulama çoğu zaman açılıyor ama görüntü düşük çözünürlükte kalıyor, bazı içerikler hiç oynamıyor ya da uygulama mağazada aranınca hiç çıkmıyor.

**Resmî kimlik ve biyometri uygulamaları.** Bu grup doğrulamayı en sıkı isteyenlerden. Tipik örnek, vize başvurusunda kullanılan biyometrik kayıt uygulamalarının açılır açılmaz kapanması. Umre ve hac başvurusunda bu adım atlanamadığı için iş bir de zamanla yarışa döner.

WhatsApp da aynı yerde takılıyor ama bunu kendi diliyle söylüyor; [o mesajın ne anlama geldiğini ayrı yazdım](/blog/giris-yapmak-icin-resmi-whatsapp-hatasi).

## Sebep: Cihaz kendini doğrulayamıyor

Android telefonlar açılırken kendi durumlarını bildirir: Üstündeki yazılım üreticinin verdiği yazılım mı, sonradan değiştirilmiş mi. Hassas iş yapan uygulamalar açılmadan önce bu bildirime bakar. Banka açısından bu oldukça mantıklı bir kontrol, çünkü değiştirilmiş bir telefonda ekrandaki rakamın doğru olduğunu kimse garanti edemez.

Bildirimin olumsuz çıkmasının sebebi, telefonun açılış kilidinin (buna bootloader kilidi denir) açılmış olması. Kilit kapalıyken cihaz yalnızca üreticinin imzaladığı yazılımı çalıştırır. Kilit açılınca başka yazılımları da çalıştırabilir ve bunu her açılışta dürüstçe bildirir.

Kilit açıldıktan sonra cihaza başka bir şey yapılmış olması şart değil. Telefonun root'lanmış olması, custom ROM kurulmuş olması ya da yalnızca kilidin açılıp öyle bırakılmış olması aynı sonucu verir. Kısacası uygulama bunları ayırmaz, tek bir şeye bakar.

**Banka uygulamasının takıldığı yol:**

1. **Açılış.** Telefon kendi durumunu bildirir: Yazılımı üreticinin verdiği mi, değiştirilmiş mi.
2. **Kilit açık.** Açılış kilidi açıksa bildirim olumsuz çıkar. Root ya da ROM gerekmez.
3. **Banka uygulaması.** Açılmadan önce bu bildirime bakar.
4. **Güvenli değil.** Bildirim olumsuzsa uygulama kapanır ya da cihazın güvenli olmadığını söyler.

## "Ben root falan yapmadım" diyorsanız

Bu cümleyi sık duyarım, söyleyenler de çoğu zaman haklıdır.

En sık rastlanan durum ikinci el telefon. Satıcı ya da önceki sahibi kilidi açıp bir ROM yüklemiş, sonra kilidi kapatmamış. Telefon kutusundan yeni çıkmış gibi görünür, menülerde bir tuhaflık yoktur; ne var ki uygulamalar durumu bilir.

İkincisi, bir tanıdığa "şunu bir hızlandır" diye verilmiş telefon. Ne yapıldığı konuşulmamıştır, sonucu aylar sonra bir banka uygulamasıyla ortaya çıkar.

İki durumda da sizin bir hata yapmış olmanız gerekmez. Telefonun ne durumda olduğu, açılışta kısa süre görünen bir uyarı ekranından ya da birkaç ekran görüntüsünden anlaşılır.

## Kaybettiğiniz bir şey yok

Bunu açıkça söylemem gerekiyor, çünkü "cihazınız güvenli değil" cümlesi insanın aklına önce kötü şeyleri getirir.

Bu uyarı bir güvenlik ihlali olduğunu göstermez; hesabınıza birinin girdiği anlamına da gelmez. Aslında olan şey tam tersi: Uygulama fazla temkinli davranıyor ve doğrulayamadığı bir sistemde çalışmayı reddediyor.

Bu uyarı hesabınıza, paranıza, kartlarınıza ve banka kayıtlarınıza dokunmaz. Telefonun içindeki verilere de. Etkilenen tek şey, o uygulamanın o telefonda çalışması.

Bununla birlikte telefonu ikinci el aldıysanız ve üstündeki ROM'u kimin kurduğunu bilmiyorsanız bu, uyarıdan bağımsız ayrı bir risktir; telefonu üreticinin orijinal yazılımına döndürmek ya da kontrol ettirmek iyi olur.

## Kalan iş ne

Yaptığım iş, telefonu bu kontrolden geçer hâle getirmek.

Kilit açık kalır. Telefonda ne varsa yerinde kalır; cihaz sıfırlanmaz, verileriniz gitmez. Kaynak düzelince uygulamaların çoğu da tek tek uğraşmadan birlikte düzelir.

Ama hepsi değil. Telefonla temassız ödeme çoğu zaman geri gelmez. Bazı banka uygulamaları da düzeltmeden sonra açılmamaya devam eder, çünkü kendi kontrolünü ayrıca yapan bir azınlık var. Hangi uygulamanın bu azınlıkta olduğu denemeden bilinmez. Bakarım, sonucu söylerim; olmayacaksa olmayacağını da söylerim.

Kalıcılık konusunda söz veremem: Bu kontroller uygulama ve sistem güncellemeleriyle değişir. Dolayısıyla bugün geçen bir cihaz aylar sonra yeniden takılabilir. Sonradan sürpriz olmasın diye bunu baştan söylüyorum.

Tersi de yaptığım işlerden: kilit açmak, custom ROM kurmak, root'lamak. Bunu isterseniz önce neleri kaybedeceğinizi konuşuruz: Garanti düşer, cihaz sıfırlanır ve bu sayfada anlatılan durum ortaya çıkar. Bunları duyunca vazgeçen de oluyor, o da iyi bir sonuç.

Bana yazarken telefonun modelini, Android sürümünü ve bildiğiniz kadarıyla geçmişini belirtin, hatanın ekran görüntüsünü de gönderin. Ne olduğunu söylemem için çoğu zaman bu kadarı yeter.

Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.
