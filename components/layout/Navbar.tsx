'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_ITEMS } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNavClick = (href: string) => {
        if (href.startsWith('/')) {
            setIsMenuOpen(false)
        } else {
            // Eğer ana sayfada değilsek, önce ana sayfaya git
            if (window.location.pathname !== '/') {
                window.location.href = '/' + href
            } else {
                scrollToSection(href)
            }
            setIsMenuOpen(false)
        }
    }

    return (
        <nav id="navbar" className="fixed top-0 w-full z-40 transition-all duration-300 bg-white/90 dark:bg-dark-900/90 backdrop-blur-md">
            <div className="section-container section-padding">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-40 h-12 sm:w-48 sm:h-14 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="goldsword"
                                fill
                                sizes="(max-width: 640px) 160px, 192px"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {NAV_ITEMS.map((item) => (
                                item.href.startsWith('/') ? (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-lg font-semibold text-heading hover:text-primary-600 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <button
                                        key={item.href}
                                        onClick={() => handleNavClick(item.href)}
                                        className="text-lg font-semibold text-heading hover:text-primary-600 transition-colors"
                                    >
                                        {item.label}
                                    </button>
                                )
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 text-heading"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {NAV_ITEMS.map((item) => (
                            item.href.startsWith('/') ? (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block w-full text-left px-3 py-3 rounded-lg text-lg font-semibold text-heading hover:bg-gray-50 dark:hover:bg-dark-800"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className="block w-full text-left px-3 py-3 rounded-lg text-lg font-semibold text-heading hover:bg-gray-50 dark:hover:bg-dark-800"
                                >
                                    {item.label}
                                </button>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
