// Checked against GitHub and npm on 2026-10-08

export interface OpenSourceItem {
  kind: "Kütüphane" | "Katkı" | "Model" | "Araç";
  title: string;
  body: string;
  meta?: string;
  links: { label: string; href: string }[];
}

export const OPEN_SOURCE: OpenSourceItem[] = [
  {
    kind: "Kütüphane",
    title: "Türkçeyi tanıyan parola ölçer",
    body: "Türkçe ad, soyadı, takım ve plaka kalıplarını tanıyan parola gücü kütüphanesi. zxcvbn-ts üzerine kurulu; çekirdek paket her JavaScript projesinde, React Native paketi mobil uygulamalarda çalışır.",
    meta: "v0.4.1 · ~37 kB gzip · 230+ test",
    links: [
      {
        label: "React Native paketi",
        href: "https://www.npmjs.com/package/react-native-password-intelligence",
      },
      { label: "Çekirdek paket", href: "https://www.npmjs.com/package/password-intelligence" },
      {
        label: "Canlı demo",
        href: "https://mobilteknolojileri.github.io/react-native-password-intelligence/",
      },
      {
        label: "React Native Directory",
        href: "https://reactnative.directory/package/react-native-password-intelligence",
      },
      {
        label: "GitHub",
        href: "https://github.com/mobilteknolojileri/react-native-password-intelligence",
      },
    ],
  },
  {
    kind: "Katkı",
    title: "zxcvbn-ts için Türkçe dil paketi",
    body: "30 bin sık kelime, 10 bin Vikipedi kelimesi, ad ve soyadı listeleri. Mayıs 2026'da birleştirildi.",
    meta: "@zxcvbn-ts/language-tr",
    links: [
      { label: "PR #315", href: "https://github.com/zxcvbn-ts/zxcvbn/pull/315" },
      { label: "npm", href: "https://www.npmjs.com/package/@zxcvbn-ts/language-tr" },
    ],
  },
  {
    kind: "Katkı",
    title: "faker-js için Türkçe soyadları",
    body: "Türkçe soyadı listesi 198 girdiden 370'e çıktı. Mayıs 2026'da birleştirildi.",
    links: [{ label: "PR #3839", href: "https://github.com/faker-js/faker/pull/3839" }],
  },
  {
    kind: "Model",
    title: "Kumaş kusuru tespiti",
    body: "Fotoğraftaki delikleri bulan YOLOv8 modeli, FastAPI servisi ve Flutter uygulaması. mAP %95,1.",
    links: [
      { label: "GitHub", href: "https://github.com/mobilteknolojileri/fabric-defect-detection" },
    ],
  },
  {
    kind: "Araç",
    title: "Xiaomi bootloader başvurusu",
    body: "Günlük başvuru kotası Pekin saatiyle gece yarısı açılır; araç saati NTP'den alır ve tam o anda başvurur.",
    meta: "GitHub'da 8 yıldız",
    links: [
      { label: "GitHub", href: "https://github.com/mobilteknolojileri/xiaomi-bootloader-unlocker" },
    ],
  },
];
