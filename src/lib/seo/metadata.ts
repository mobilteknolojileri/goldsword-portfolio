import { SEO_DEFAULTS } from "@/config/seo";
import { SITE_CONFIG } from "@/config/site";
import { getKeywords } from "./keywords";

export interface Metadata {
  title?: string | { default: string; template: string };
  description?: string;
  keywords?: string[];
  [key: string]: any;
}

interface GenerateMetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  locale?: string;
  type?: "website" | "article" | "profile";
  keywords?: string[];
}

function resolveUrl(baseUrl: string, value?: string): string {
  if (!value) return baseUrl;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `${baseUrl}${value.startsWith("/") ? "" : "/"}${value}`;
}

export function generateMetadata({
  title,
  description,
  path = "",
  image = SEO_DEFAULTS.defaultOgImage,
  locale = SITE_CONFIG.locale,
  type = "website",
  keywords = [],
}: GenerateMetadataProps): Metadata {
  const baseUrl = (import.meta as any).env.PUBLIC_SITE_URL || SITE_CONFIG.url;
  const url = resolveUrl(baseUrl, path);
  const fullTitle = `${title}${SEO_DEFAULTS.blogTitleSuffix}`;
  const allKeywords = [...getKeywords(locale), ...keywords];
  const imageUrl = resolveUrl(baseUrl, image);

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.author,
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
    openGraph: {
      type,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      url,
      title: fullTitle,
      description,
      siteName: `${SITE_CONFIG.name} Portfolio`,
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
    },
    verification: {
      google: (import.meta as any).env.PUBLIC_GOOGLE_VERIFICATION,
    },
    themeColor: "#4f46e5",
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": baseUrl,
      },
    },
    metadataBase: new URL(baseUrl),
  };
}

export const defaultMetadata: Metadata = generateMetadata({
  title: "Gaziantep Freelancer Yazılım ve Web Tasarım",
  description: SITE_CONFIG.description,
  locale: "tr",
});

export const qusafeMetadata: Metadata = generateMetadata({
  title: "QuSafe - Şifreli Kasa | Güvenli Parola ve Dosya Yönetimi",
  description:
    "Fotoğraf gizleme, şifre saklama ve güvenli not yönetimi. AES-256-GCM şifreleme ve biyometrik kilit açma ile veri güvenliği.",
  path: "/qusafe",
  image: "/qusafe-icon.png",
  locale: "tr",
  keywords: [
    "şifreli kasa",
    "parola yöneticisi",
    "dosya gizleme",
    "güvenli notlar",
    "aes-256",
    "zero knowledge",
  ],
});

export const aesteraMetadata: Metadata = generateMetadata({
  title: "Legends of Aestera | 2D Platform Aksiyon Oyunu",
  description:
    "Red ve Robinhood ile epik bir macera. El yapımı bölümler, dinamik düşmanlar ve boss savaşları içeren piksel platform oyunu.",
  path: "/legends-of-aestera",
  image: "/assets/projects/legends-of-aestera/hero.webp",
  locale: "tr",
  keywords: ["2d platform oyunu", "aksiyon oyunu", "pixel art", "indie game", "unity game"],
});

export const kafadarMetadata: Metadata = generateMetadata({
  title: "Kafadar | Arkadaşlık Testi",
  description:
    "Quiz oluştur, paylaş ve skor karşılaştır. Gen Z odaklı eğlenceli arkadaşlık testi uygulaması.",
  path: "/kafadar",
  image: "/assets/projects/kafadar-mobile/icon.webp",
  locale: "tr",
  keywords: ["arkadaşlık testi", "quiz uygulaması", "arkadaş quiz", "friendship test"],
});
