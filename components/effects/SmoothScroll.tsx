'use client'

import { useEffect } from 'react'

interface SmoothScrollProps {
    children: React.ReactNode
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
    useEffect(() => {
        const handleSmoothScroll = () => {
            document.documentElement.style.scrollBehavior = 'smooth'
        }

        handleSmoothScroll()

        return () => {
            document.documentElement.style.scrollBehavior = 'auto'
        }
    }, [])

    return <>{children}</>
}

export default SmoothScroll