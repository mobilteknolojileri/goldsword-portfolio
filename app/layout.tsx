import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_CONFIG } from '@/lib/constants'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true
})

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    keywords: 'Full Stack Developer, AI Engineer, Flutter, Unity, Python, React, Next.js, Mobile Developer',
    authors: [{ name: SITE_CONFIG.name }],
    openGraph: {
        title: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
        description: SITE_CONFIG.description,
        type: 'website',
        locale: 'tr_TR',
        siteName: SITE_CONFIG.name,
        images: [
            {
                url: '/logo.png',
                width: 1024,
                height: 1024,
                alt: 'goldsword logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
        description: SITE_CONFIG.description,
        images: ['/logo.png'],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr" suppressHydrationWarning data-scroll-behavior="smooth">
            <body className={inter.className}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}