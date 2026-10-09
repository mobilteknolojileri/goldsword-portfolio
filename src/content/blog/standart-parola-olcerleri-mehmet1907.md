---
title: "Standart Parola Ölçerlerin Atladığı: mehmet1907 Sorunu"
description: "Standart zxcvbn, mehmet1907 gibi Türkçe kalıpları zayıf saymıyor. 2.564 gerçek parolanın %30'unun kırıldığı çalışmayı, 5 milyonu aşkın sızıntı verisini ve noktalı/noktasız I sorununun çözümünü yazdım."
date: 2026-05-03
updated: 2026-10-07
tags:
  [
    "security",
    "react-native",
    "password-strength",
    "open-source",
    "turkish",
    "zxcvbn",
    "case-study",
  ]
category: "case-study"
heroImage: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2400&auto=format&fit=crop"
draft: false
intent: "guide"
---

_Bu yazı `react-native-password-intelligence@0.3.0` sürümünü anlatıyor. 0.4 sürümünde analiz motorunu framework'ten bağımsız [`password-intelligence`](https://www.npmjs.com/package/password-intelligence) paketine taşıdım; React Native paketi artık bunun üstüne ölçer bileşenini ve hook'u ekliyor._

Standart `zxcvbn`, `mehmet1907` parolasına 4 üzerinden 2 veriyor; `karakartal2023` ve `askim34istanbul` ise tam puan alıyor. Oysa ad ile kulüp yılı, Türkçe sızıntı listelerinde en sık görülen kalıplar arasında.

Bu yazıda 2.564 gerçek Türk parolasının analizinden çıkan sonuçları, standart ölçerlerin yakalayamadığı `İSTANBUL`, `IBRAHIM` gibi kalıpları ve sıfırdan yazdığım `react-native-password-intelligence@0.3.0` kütüphanesinin bu açığı nasıl kapattığını anlatıyorum.

## Sorun: zxcvbn Türkçe bilmiyor

`zxcvbn`, Dropbox'ın 2012'de yayımladığı ve sektörde standart kabul edilen parola gücü tahmincisi. Parolada sözlük kelimelerini (l33t dönüşümleri dâhil), klavye kalıplarını, tekrarları, ardışık dizileri ve tarihleri arıyor, sonra parolanın kaç tahminde bulunabileceğini hesaplıyor. Ne var ki bir şeyi bilmiyor: Türk kullanıcıların parolalarını gerçekte nasıl seçtiğini.

Aşağıdaki parolaları zxcvbn'e verdiğinizde hiçbirini zayıf bulmuyor, hatta ikisine tam puan veriyor:

| Parola            | Standart zxcvbn | Kütüphane (0.3.0) | Kalıp                            |
| ----------------- | --------------- | ----------------- | -------------------------------- |
| `mehmet1907`      | 2 (Fair)        | 1 (Weak)          | ad + Fenerbahçe'nin kuruluş yılı |
| `karakartal2023`  | 4 (Strong)      | 1 (Weak)          | Beşiktaş'ın lakabı               |
| `askim34istanbul` | 4 (Strong)      | 1 (Weak)          | romantik kelime + plaka kalıbı   |
| `cimbom1905`      | 2 (Fair)        | 1 (Weak)          | Galatasaray'ın lakabı            |
| `İSTANBUL34`      | 3 (Good)        | 0 (Very Weak)     | şehir + plaka                    |

Standart zxcvbn sütunundaki skorlar `@zxcvbn-ts/core` 3.0.4 ile, ortak ve İngilizce sözlükler yüklenerek ölçüldü; Dropbox'ın orijinal `zxcvbn` 4.4.2 sürümü de aynı skorları veriyor. Kütüphane sütunu ise `react-native-password-intelligence@0.3.0` sürümünün sonucu.

`İSTANBUL34` özellikle öğretici; ona biraz sonra döneceğim.

## Akademik veri: 2.564 gerçek parola, %30'u kırıldı

Türkçe parola güvenliği üzerine ilk büyük ampirik çalışmayı Korkmaz ve Dalkılıç yaptı (EMO bildirisi). Çalışmada 2.564 gerçek Türk kullanıcı parolası şifrelendi ve John the Ripper ile kırılmaya çalışıldı:

- Parolaların %30'u (777 parola) bir ay içinde kırıldı.
- %5'i daha ilk 15 dakikada kırıldı.
- Kırılan parolaların %73'ü yalnızca rakamdan oluşuyordu.
- Kırılan parolaların %96'sı 6 karakter ya da daha kısaydı. Belirleyici eşik 7 karakter.
- Parolaların %45'i tam 8 karakterdi; Türk kullanıcılarda 8 karaktere belirgin bir eğilim var.
- Parolaların yalnızca %12'sinde Türkçeye özgü bir karakter (`ç ğ ı ö ş ü`) vardı, ama bu %12'nin %90'ı kırılamadı.

Son madde güçlü bir işaret: Türkçe karakter kullanmak parolanın kırılmasını belirgin biçimde zorlaştırıyor, çünkü `rockyou.txt` gibi herkesin elindeki kelime listelerinde bu karakterler nadir geçiyor.

Daha geniş bir veri seti de var. Utku Şen, `turkce-wordlist` projesinde RockYou ve başka sızıntılardan 5.017.676 Türk kullanıcı parolası topladı. Sıklık dağılımına bakıldığında en çok görülen kalıplar şunlar:

```
123456besiktas / besiktas123    → kulüp adı + sayı suffix
galatasaray1905 / fenerbahce1907 → kulüp + kuruluş yılı
askim123 / canim123              → romantik + sayı
karakartal / cimbom              → fan slang
mehmet07 / fatma34               → ad + 2 hane sayı
38409282 / 19071907              → saf 8-haneli sayı
```

Kısa olan `cimbom` ve tekrar kalıbına takılan `19071907` dışında hiçbiri zxcvbn-ts'te zayıf sayılmıyor, kalanlar 2 ya da 3 alıyor. Çünkü bu kalıplar zxcvbn'in yerleşik sözlüğünde yok.

## Asıl tuzak: noktalı ve noktasız I

Bir kullanıcı parolasını Türkçe klavyede `İSTANBUL34` diye yazsın. Baştaki harf noktalı büyük `İ`, yani U+0130.

Beklenen şu: zxcvbn parolayı küçük harfe çevirir, sözlükteki `istanbul34` plaka kalıbıyla eşleştirir ve zayıf olarak işaretler.

Olan ise şu:

```js
"İSTANBUL34".toLowerCase();
// → "i̇stanbul34"  (i + combining dot above U+0307)

"istanbul34".indexOf("i̇stanbul34");
// → -1  (eşleşmiyor!)
```

`String.prototype.toLowerCase()` Unicode kurallarına uyuyor ama Türkçe yerel ayarını hesaba katmıyor. `İ` harfini `i` yerine `i̇` (i ve birleşik nokta) yapıyor. Ortaya çıkan metin sözlükteki kayıtla bayt bayt eşleşmiyor, eşleşme olmayınca da skor 3 dönüyor.

Tersi de var. Bir kullanıcı İngilizce klavyede `IBRAHIM` yazsın (sıradan ASCII I):

```js
"IBRAHIM".toLowerCase();
// → "ibrahim"  ✓ (dictionary'de "ibrahim" var, eşleşir)

"IBRAHIM".toLocaleLowerCase("tr-TR");
// → "ıbrahım"  (Türkçe locale: I → ı dotless)
// dictionary'de "ıbrahım" yok → eşleşmiyor!
```

İki klavye, birbirinin tersi iki tuzak. Diğer bir deyişle, yalnızca `toLowerCase()` kullanırsanız `İSTANBUL`'u, yalnızca `toLocaleLowerCase('tr-TR')` kullanırsanız `IBRAHIM`'i kaçırırsınız.

## Çözüm: iki ayrı küçük harf dönüşümü

`react-native-password-intelligence` içinde iki dönüşümü de çalıştırıyorum: standart olanı ve tr-TR yerel ayarlı olanı. Hangisi daha kötümser skor verirse onu döndürüyorum:

```ts
const standardForm = truncated.toLowerCase();
const turkishForm = truncated.toLocaleLowerCase("tr-TR");

const standardResult = zxcvbn(standardForm, mergedUserInputs);
if (standardForm === turkishForm) return standardResult;

const turkishResult = zxcvbn(turkishForm, mergedUserInputs);
return turkishResult.score < standardResult.score ? turkishResult : standardResult;
```

İki dönüşüm yalnızca girdide büyük `I` ya da `İ` varsa farklı sonuç veriyor. Dolayısıyla çoğu durumda ikinci zxcvbn çağrısı hiç yapılmıyor. Performans maliyeti çok düşük, iki durum da kapsanıyor.

Test sonuçları:

```ts
expect(analyzePassword("istanbul34").score).toBeLessThanOrEqual(2); // ✓ 0
expect(analyzePassword("İSTANBUL34").score).toBeLessThanOrEqual(2); // ✓ 0  (önceden 3 idi)
expect(analyzePassword("IBRAHIM").score).toBeLessThanOrEqual(1); // ✓ 0
expect(analyzePassword("YILMAZ").score).toBeLessThanOrEqual(1); // ✓ 0
```

## 12 kategorilik Türkçe tehdit katmanı

zxcvbn'in çekirdek motorunu sarmalıyorum; Türkçeye özgü sözlükleri de ona seçenek olarak veriyorum:

```ts
zxcvbnOptions.setOptions({
  translations: trTranslations,
  dictionary: {
    ...commonDictionary, // language-common'dan
    turkish_names: trDict.commonNames, // 157 ad + 15 lakap
    turkish_surnames: trDict.commonSurnames, // 382 soyad (TÜİK kaynaklı)
    turkish_teams: trDict.footballTeams, // Süper Lig + slang
    turkish_cities: trDict.cityNames,
    turkish_plate_patterns: trDict.platePatterns, // 34, 06, 27 + il
    turkish_cultural: trDict.culturalKeywords, // 1453, 1923, atatürk
    turkish_keyboard: trDict.keyboardWalks,
    turkish_romantic: trDict.romanticTerms, // aşkım, canım, hayatım
    turkish_religious: trDict.religiousNationalistic, // breach corpus dokümante
    turkish_common: trDict.commonPasswords, // şifre, parola, admin
    turkish_zodiac: trDict.zodiacSigns,
    turkish_brands: trDict.brands, // Turkcell, Akbank, Trendyol
  },
});
```

Soyadı sözlüğünü 60 kayıttan 382'ye çıkardım. Aynı listeyi faker-js'e de gönderdim: `faker-js/faker#3839` numaralı PR, 3 bakımcının onayıyla ve hiç değişiklik istenmeden birleştirildi (commit `f433771`). Artık iki ayrı paket aynı veri setini kullanıyor; bu da bir tür çapraz doğrulama.

## Test, kapsam ve kaynak doğrulaması

Güvenlik kütüphanesi olduğu için test tarafını sıkı tuttum:

- 127 test (önceki sürümde 33'tü, %285 artış).
- Kapsam: komutlarda %99, dallarda %95, fonksiyonlarda %100, satırlarda %100.
- 30 girdilik bir skor regresyon snapshot'ı: Sözlük genişletmesi canlıdaki skorları sessizce kaydırırsa CI başarısız oluyor.
- Sıkı TypeScript ayarları: `exactOptionalPropertyTypes`, `noImplicitOverride`, `isolatedModules`, `useDefineForClassFields`, `noPropertyAccessFromIndexSignature`.
- Tree-shaking desteği (`sideEffects: false`): Yalnızca `analyzePassword` fonksiyonunu import eden biri `<PasswordMeter>` bileşenini ve hook'u kendi paketine almıyor.
- Uzun girdiye karşı DoS koruması: 1024 karakteri aşan kısım kesiliyor, böylece zxcvbn'in O(n²) maliyeti UI thread'ini kilitleyemiyor.

İlk sürümü `npm publish --provenance` ile yayımladım. GitHub Actions üzerinde OIDC ve Trusted Publisher kurulu olduğu için token kullanılmıyor. Kaynak doğrulaması (provenance) kaydını [Sigstore'da kontrol edebilirsiniz](https://search.sigstore.dev/?logIndex=1429649148):

```bash
npm view react-native-password-intelligence@0.3.0
# dist.attestations.url alanını kontrol edin: SLSA v1.0 attestation
```

## Performans bütçesi

Bu kadar sözlük eklemek performanstan ödün vermeyi gerektirmedi:

| İşlem                                          | Maliyet                                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| İlk çağrı (soğuk başlangıç)                    | ~30–80 ms (zxcvbn seçeneklerinin kaydı ve sözlüklerin kurulması)                     |
| Sonraki çağrılar                               | genelde ~1–10 ms, en kötü durumda ~50 ms                                             |
| Hook, aynı girdiyle yeniden render edildiğinde | tek bir `JSON.parse`                                                                 |
| `<PasswordMeter score={s} />` (hazır skorla)   | analiz hiç çalışmaz, maliyet sıfır                                                   |
| Paket boyutu                                   | 12 kategori; kendi kodu küçültülmüş ~16 KB, bağımlılıklarla birlikte gzip'li ~236 KB |

Bu boyutun %94'ü zxcvbn-ts'in ortak sözlüğünden geliyor: 49 bin parola ve 7.776 diceware kelimesi. 0.4'te bu parola listesini en sık görülen 4.000 parolaya indirdim; paketin gzip'li boyutu ~37 KB'a düştü.

`<PasswordMeter score={s} />` özellikle önemli: Skor sunucuda hesaplandıysa istemcide analiz hiç başlatılmıyor. Hook bile çağrılmıyor, ekrana yalnızca animasyonlu çubuk çiziliyor.

## Sonuç ve sıradaki adımlar

`İSTANBUL34` ve `IBRAHIM` için artık skor 0 dönüyor; `mehmet1907` ve `karakartal2023` de 1'e (zayıf) iniyor.

Genişletilmiş sözlükler, iki yerel ayarlı harf dönüşümü ve boyutu sınırlı özel sözlük API'si v0.3.0 ile yayımlandı. Sıradaki v0.3.x sürümleri için yol haritasında şunlar var: popüler diziler ve filmler için bir kategori (Bahar, Kızılcık Şerbeti), Spotify Türkiye'de en çok dinlenen sanatçılar (Semicenk, Lvbel C5), Süper Lig'in gol kralları ve lisans incelemesinden sonra Utku Şen'in 5 milyonu aşkın parola içeren sızıntı listesi.

Bu işin bir de portföy tarafı var. Türkçe konuşan bir geliştiricinin portföyüne “uluslararası projede kullanılıyor” satırının nasıl girebileceğini de denemiş oldum: faker-js'e birleştirilen PR sayesinde aynı soyadı listesi hem kendi paketimde hem de 15 binden fazla yıldızı olan faker-js'te kullanılıyor. Bu da dar bir alana yönelik sözlük çalışmasının ölçeklenebildiğini gösteriyor.

### Bağlantılar

- [npm: react-native-password-intelligence](https://www.npmjs.com/package/react-native-password-intelligence)
- [GitHub deposu](https://github.com/mobilteknolojileri/react-native-password-intelligence)
- [v0.3.0 sürüm notları](https://github.com/mobilteknolojileri/react-native-password-intelligence/releases/tag/v0.3.0)
- [faker-js#3839 (birleştirilen PR)](https://github.com/faker-js/faker/pull/3839)
- [Sigstore'daki kaynak doğrulaması kaydı](https://search.sigstore.dev/?logIndex=1429649148)

### Kaynaklar

- Korkmaz ve Dalkılıç: [Türkçe parolaların analizi (EMO bildirisi)](https://www.emo.org.tr/ekler/bba22d7120cef86_ek.pdf)
- Utku Şen: [`turkce-wordlist`](https://github.com/utkusen/turkce-wordlist) (5 milyonu aşkın parola içeren sızıntı listesi)
- NIST SP 800-63B v4: [güncel parola yönergeleri](https://pages.nist.gov/800-63-4/sp800-63b.html)
- OWASP ASVS 5.0 V6: [kimlik doğrulama](https://github.com/OWASP/ASVS/blob/master/5.0/en/0x15-V6-Authentication.md)
