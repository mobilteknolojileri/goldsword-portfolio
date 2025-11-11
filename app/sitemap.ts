import { MetadataRoute } from 'next'
import { PROJECTS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goldsword.dev'
    const now = new Date()

    const projectUrls = PROJECTS
        .filter(project => project.slug)
        .map(project => ({
            url: `${baseUrl}/portfolio/${project.slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))

    return [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...projectUrls,
    ]
}