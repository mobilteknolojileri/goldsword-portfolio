import { Metadata } from 'next'
import { getKeywords } from './keywords'

interface GenerateMetadataProps {
    title: string
    description: string
    path?: string
    image?: string
    locale?: string
    type?: 'website' | 'article' | 'profile'
    keywords?: string[]
}

export function generateMetadata({
    title,
    description,
    path = '',
    image = '/logo.png',
    locale = 'en',
    type = 'website',
    keywords = []
}: GenerateMetadataProps): Metadata {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goldsword.dev'
    const url = `${baseUrl}${path}`
    const fullTitle = `${title} | goldsword`

    const allKeywords = [
        ...getKeywords(locale),
        ...keywords
    ]

    return {
        title: fullTitle,
        description,
        keywords: allKeywords,
        authors: [{ name: 'goldsword' }],
        creator: 'goldsword',
        publisher: 'goldsword',
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: url,
        },
        openGraph: {
            type,
            locale: locale === 'tr' ? 'tr_TR' : 'en_US',
            url,
            title: fullTitle,
            description,
            siteName: 'goldsword Portfolio',
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
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [`${baseUrl}${image}`],
        },
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
        },
    }
}

export const defaultMetadata: Metadata = generateMetadata({
    title: 'Full Stack Developer | Mobile & Web Development',
    description: 'Professional freelance developer specializing in mobile apps, web development, AI integration, and game development. 20+ successful projects. Expert in Flutter, React Native, Next.js, Unity.',
    locale: 'en'
})