'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import ThemeToggle from '@/components/layout/ThemeToggle'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import HoverCard from '@/components/effects/HoverCard'
import { PROJECTS } from '@/lib/constants'
import { getPortfolioSchema } from '@/lib/seo/schema'
import Image from 'next/image'
import { FaArrowLeft } from 'react-icons/fa'

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All')

    useEffect(() => {
        const schema = getPortfolioSchema(PROJECTS, 'en')
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.text = JSON.stringify(schema)
        document.head.appendChild(script)

        return () => {
            document.head.removeChild(script)
        }
    }, [])

    const categories = ['All', 'Mobile', 'Web', 'Game', 'Backend', 'SEO']

    const filteredProjects = selectedCategory === 'All'
        ? PROJECTS
        : PROJECTS.filter(project => project.category.includes(selectedCategory))

    return (
        <div className="min-h-screen bg-white dark:bg-dark-900">
            <Navbar />
            <ThemeToggle />

            <main className="pt-24 pb-16">
                <div className="section-container section-padding">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold mb-8 transition-colors"
                    >
                        <FaArrowLeft />
                        Ana Sayfaya Dön
                    </Link>

                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-heading">
                            Portfolyom
                        </h1>
                        <p className="text-lg text-body max-w-3xl mx-auto">
                            12+ farklı alanda tamamladığım projeler. Her biri gerçek müşteriler için geliştirilmiş,
                            üretim ortamında çalışan projelerdir.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-12 max-w-6xl mx-auto">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2.5 rounded-full font-semibold transition-all text-sm sm:text-base ${selectedCategory === category
                                        ? 'bg-primary-600 text-white shadow-lg'
                                        : 'bg-gray-200 dark:bg-dark-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-dark-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <HoverCard key={index} className="h-full">
                                <Card hover className="h-full">
                                    <div className="group h-full flex flex-col">
                                        <div className={`h-56 bg-gradient-to-br ${project.color} rounded-t-xl relative overflow-hidden flex-shrink-0`}>
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.title} - Proje görseli`}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    loading="lazy"
                                                    quality={75}
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-black/20">
                                                    {project.category}
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6 flex flex-col flex-1">
                                            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2 flex-1">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                                    <Badge
                                                        key={techIndex}
                                                        variant={techIndex === 0 ? 'primary' : 'default'}
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <Badge variant="default">
                                                        +{project.technologies.length - 3}
                                                    </Badge>
                                                )}
                                            </div>

                                            {project.slug ? (
                                                <a
                                                    href={`/portfolio/${project.slug}`}
                                                    className="block w-full py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all text-center shadow-sm hover:shadow-md"
                                                >
                                                    Detayları Gör
                                                </a>
                                            ) : (
                                                <button className="w-full py-2.5 bg-gray-200 dark:bg-dark-700 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white text-gray-800 dark:text-gray-200 font-semibold rounded-lg transition-all">
                                                    Detayları Gör
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            </HoverCard>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    )
}