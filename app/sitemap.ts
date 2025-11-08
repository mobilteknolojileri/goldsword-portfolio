import { MetadataRoute } from 'next'
import { PROJECTS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mehmetaltinkilic.vercel.app'

    const projectUrls = PROJECTS
        .filter(project => project.slug)
        .map(project => ({
            url: `${baseUrl}/portfolio/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...projectUrls,
    ]
}