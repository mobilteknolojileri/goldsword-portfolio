'use client'

import { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = window.scrollY
            const progress = (scrolled / scrollHeight) * 100
            setScrollProgress(progress)
        }

        window.addEventListener('scroll', updateScrollProgress)
        updateScrollProgress()

        return () => window.removeEventListener('scroll', updateScrollProgress)
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200 dark:bg-dark-800">
            <div
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-150"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    )
}

export default ProgressBar