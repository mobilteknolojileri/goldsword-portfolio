'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const currentTheme = theme === 'system' ? resolvedTheme : theme

    return (
        <button
            onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 p-3 sm:p-4 bg-white dark:bg-dark-800 text-gray-800 dark:text-yellow-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-200 dark:border-dark-700 hover:border-primary-400 dark:hover:border-yellow-400 z-50"
            aria-label="Toggle theme"
        >
            {currentTheme === 'light' ? <FaMoon size={18} className="sm:w-5 sm:h-5" /> : <FaSun size={18} className="sm:w-5 sm:h-5" />}
        </button>
    )
}

export default ThemeToggle