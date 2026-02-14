import { Metadata } from "next";
import { getKeywords } from "./keywords";

interface GenerateMetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  locale?: string;
  type?: "website" | "article" | "profile";
  keywords?: string[];
}

export function generateMetadata({
  title,
  description,
  path = "",
  image = "/logo.png",
  locale = "en",
  type = "website",
  keywords = [],
}: GenerateMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://goldsword.dev";
  const url = `${baseUrl}${path}`;
  const fullTitle = `${title} | goldsword`;

  const allKeywords = [...getKeywords(locale), ...keywords];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: "goldsword" }],
    creator: "goldsword",
    publisher: "goldsword",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      url,
      title: fullTitle,
      description,
      siteName: "goldsword Portfolio",
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${baseUrl}${image}`],
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
    metadataBase: new URL(baseUrl),
  };
}

export const defaultMetadata: Metadata = generateMetadata({
  title: "Full Stack Developer | Mobil & Web Geliştirme",
  description:
    "Mobil uygulama, web geliştirme, yapay zeka ve oyun geliştirme konularında uzman freelance yazılımcı. QuSafe gibi güvenli çözümler dahil 20+ başarılı proje.",
  locale: "tr",
});

export const qusafeMetadata: Metadata = generateMetadata({
  title: "QuSafe - Şifreli Kasa | Güvenli Parola ve Dosya Yöneticisi",
  description:
    "Fotoğraf gizleme, gizli şifre ve not günlüğü. AES-256-GCM şifreleme, parmak izi/Face ID ve bulut senkronizasyonu ile tam güvenlik.",
  path: "/qusafe",
  image: "/qusafe-icon.png",
  locale: "tr",
  keywords: [
    "şifreli kasa",
    "parola yöneticisi",
    "dosya gizleme",
    "güvenli notlar",
    "AES-256",
    "zero knowledge",
  ],
});

export const aesteraMetadata: Metadata = generateMetadata({
  title: "Legends of Aestera | 2D Platform Aksiyon Oyunu",
  description:
    "Red ve Robinhood ile destansı bir maceraya atılın. 6+ el yapımı bölüm, dinamik düşmanlar ve patron savaşları içeren pikselli platform oyunu.",
  path: "/legends-of-aestera",
  image: "/assets/projects/legends-of-aestera/hero.png",
  locale: "tr",
  keywords: [
    "2d platform",
    "aksiyon oyunu",
    "piksel art",
    "bağımsız oyun",
    "legends of aestera",
    "unity game",
  ],
});

export const kafadarMetadata: Metadata = generateMetadata({
  title: "Kafadar - Arkadaşlık Testi | Arkadaşların Seni Ne Kadar Tanıyor?",
  description:
    "Quiz oluştur, link ile arkadaşlarınla paylaş, skorlarını karşılaştır. Gen Z odaklı eğlenceli arkadaşlık testi uygulaması.",
  path: "/kafadar",
  image: "/assets/projects/kafadar-mobile/icon.png",
  locale: "tr",
  keywords: [
    "arkadaşlık testi",
    "quiz uygulaması",
    "kafadar",
    "arkadaş quiz",
    "seni ne kadar tanıyorum",
    "best friend quiz",
    "friendship test",
  ],
});
