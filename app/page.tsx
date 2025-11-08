'use client'

import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/features/hero'
import Experience from '@/features/experience'
import Research from '@/features/research'
import Testimonials from '@/features/testimonials'
import Contact from '@/features/contact'
import SmoothScroll from '@/components/effects/SmoothScroll'
import ScrollReveal from '@/components/effects/ScrollReveal'
import ProgressBar from '@/components/effects/ProgressBar'
import ThemeToggle from '@/components/layout/ThemeToggle'
import { getServiceSchema } from '@/lib/seo/schema'

export default function Home() {
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50
            const navbar = document.getElementById('navbar')
            if (navbar) {
                if (scrolled) {
                    navbar.classList.add('shadow-lg', '!bg-white/95', 'dark:!bg-dark-900/95', '!backdrop-blur-md')
                    navbar.classList.remove('bg-white/80', 'dark:bg-dark-900/80', 'backdrop-blur-sm')
                } else {
                    navbar.classList.remove('shadow-lg', '!bg-white/95', 'dark:!bg-dark-900/95', '!backdrop-blur-md')
                    navbar.classList.add('bg-white/80', 'dark:bg-dark-900/80', 'backdrop-blur-sm')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const schema = getServiceSchema('en')
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.text = JSON.stringify(schema)
        document.head.appendChild(script)

        return () => {
            document.head.removeChild(script)
        }
    }, [])

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white dark:bg-dark-900">
                <ProgressBar />
                <Navbar />
                <ThemeToggle />

                <main>
                    <ScrollReveal>
                        <Hero />
                    </ScrollReveal>

                    <ScrollReveal>
                        <Experience />
                    </ScrollReveal>

                    <ScrollReveal>
                        <Research />
                    </ScrollReveal>

                    <ScrollReveal>
                        <Testimonials />
                    </ScrollReveal>

                    <ScrollReveal>
                        <Contact />
                    </ScrollReveal>
                </main>

                <footer className="py-8 border-t border-gray-200 dark:border-dark-800 bg-white dark:bg-dark-900">
                    <div className="section-container section-padding">
                        <p className="text-center text-body">
                            © 2025 goldsword. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </SmoothScroll>
    )
}