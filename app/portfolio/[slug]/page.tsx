import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import ThemeToggle from '@/components/layout/ThemeToggle'
import Badge from '@/components/ui/Badge'
import { PROJECTS } from '@/lib/constants'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params
    const project = PROJECTS.find(p => p.slug === slug)

    if (!project) {
        return {
            title: 'Proje Bulunamadı - goldsword',
            description: 'Aradığınız proje bulunamadı.'
        }
    }

    return {
        title: `${project.title} - goldsword Portfolio`,
        description: project.description,
        keywords: [...project.technologies, project.category].join(', '),
        openGraph: {
            title: project.title,
            description: project.description,
            images: project.image ? [project.image] : [],
            type: 'article'
        }
    }
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params
    const project = PROJECTS.find(p => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
            <Navbar />
            <ThemeToggle />

            <main className="pt-24 pb-16">
                <div className="section-container section-padding">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8 transition-colors"
                    >
                        <FaArrowLeft />
                        Portfolyoya Dön
                    </Link>

                    <div className="bg-white dark:bg-dark-800 border-2 border-gray-200 dark:border-dark-700 rounded-2xl mb-8 overflow-hidden shadow-lg">
                        <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                        <div className="p-8 sm:p-10 md:p-12">
                            <div className="max-w-4xl">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-heading mb-4">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-body leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            {project.detailedDescription && (
                                <div className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-dark-700">
                                    <h2 className="text-2xl font-bold text-heading mb-4">Proje Hakkında</h2>
                                    <p className="text-body leading-relaxed">
                                        {project.detailedDescription}
                                    </p>
                                </div>
                            )}

                            {project.features && project.features.length > 0 && (
                                <div className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-dark-700">
                                    <h2 className="text-2xl font-bold text-heading mb-4">Geliştirdiklerim</h2>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 text-body">
                                                <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.challenges && (
                                <div className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-dark-700">
                                    <h2 className="text-2xl font-bold text-heading mb-4">Teknik Zorluklar</h2>
                                    <p className="text-body leading-relaxed">
                                        {project.challenges}
                                    </p>
                                </div>
                            )}

                            {project.screenshots && project.screenshots.length > 0 && (
                                <div className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-dark-700">
                                    <h2 className="text-2xl font-bold text-heading mb-4">Ekran Görüntüleri</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {project.screenshots.map((screenshot, index) => (
                                            <div key={index} className="relative aspect-[9/16] rounded-lg overflow-hidden border-2 border-gray-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors bg-gray-100 dark:bg-dark-900">
                                                <Image
                                                    src={screenshot}
                                                    alt={`${project.title} - Ekran görüntüsü ${index + 1}`}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 640px) 100vw, 50vw"
                                                    loading="lazy"
                                                    quality={80}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-dark-700 sticky top-24">
                                <h3 className="text-xl font-bold text-heading mb-4">Proje Bilgileri</h3>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-medium text-muted mb-1">Kategori</p>
                                        <Badge variant="primary">{project.category}</Badge>
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-muted mb-2">Tech Stack</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <Badge key={index}>{tech}</Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {project.links && project.links.length > 0 && (
                                        <div>
                                            <p className="text-sm font-medium text-muted mb-2">Link</p>
                                            <div className="space-y-2">
                                                {project.links.map((link, index) => (
                                                    <a
                                                        key={index}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                                                    >
                                                        <FaExternalLinkAlt size={14} />
                                                        {link.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}