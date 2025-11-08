import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { generateMetadata } from '@/lib/seo/metadata'
import { getPersonSchema, getOrganizationSchema } from '@/lib/seo/schema'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true
})

export const metadata: Metadata = generateMetadata({
    title: 'Full Stack Developer | Mobile & Web Development',
    description: 'Professional freelance developer specializing in mobile apps (Flutter, React Native), web development (Next.js), AI integration, and game development (Unity). 20+ successful projects with 5.0 rating.',
    locale: 'en',
    keywords: [
        'portfolio',
        'software engineer',
        'freelance programmer',
        'app developer',
        'remote developer',
        'tech consultant'
    ]
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const personSchema = getPersonSchema('en')
    const orgSchema = getOrganizationSchema('en')

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personSchema)
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(orgSchema)
                    }}
                />
            </head>
            <body className={inter.className}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}