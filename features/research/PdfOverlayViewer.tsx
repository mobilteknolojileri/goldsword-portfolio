'use client'

import { useState, useEffect, useCallback } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { motion, AnimatePresence } from 'framer-motion'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

if (typeof window !== 'undefined') {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url
    ).toString()
}

interface PdfOverlayViewerProps {
    url: string
    isOpen: boolean
    onClose: () => void
    title?: string
}

const PdfOverlayViewer = ({ url, isOpen, onClose, title }: PdfOverlayViewerProps) => {
    const [numPages, setNumPages] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [scale, setScale] = useState(1.0)
    const [isLoading, setIsLoading] = useState(true)
    const [pageHeight, setPageHeight] = useState(800)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const calculateDimensions = () => {
            const mobile = window.innerWidth < 768
            setIsMobile(mobile)

            const headerHeight = 80
            const footerHeight = 100
            const padding = mobile ? 40 : 80
            const availableHeight = window.innerHeight - headerHeight - footerHeight - padding

            setPageHeight(availableHeight)
            setScale(1.0)
        }

        calculateDimensions()
        window.addEventListener('resize', calculateDimensions)
        return () => window.removeEventListener('resize', calculateDimensions)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages)
        setIsLoading(false)
    }

    const goToNextPage = useCallback(() => {
        if (currentPage < numPages) {
            setCurrentPage(prev => prev + 1)
        }
    }, [currentPage, numPages])

    const goToPrevPage = useCallback(() => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1)
        }
    }, [currentPage])

    const handleZoomIn = () => {
        setScale(prev => Math.min(prev + 0.2, 3.0))
    }

    const handleZoomOut = () => {
        setScale(prev => Math.max(prev - 0.2, 0.5))
    }

    const handleResetZoom = () => {
        setScale(1.0)
    }

    useEffect(() => {
        if (!isOpen) return

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') goToNextPage()
            if (e.key === 'ArrowLeft') goToPrevPage()
            if (e.key === 'Escape') onClose()
            if (e.key === '+' || e.key === '=') handleZoomIn()
            if (e.key === '-') handleZoomOut()
            if (e.key === '0') handleResetZoom()
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [isOpen, goToNextPage, goToPrevPage, onClose])

    useEffect(() => {
        if (!isOpen || !isMobile) return

        let touchStartX = 0
        let touchEndX = 0

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX
        }

        const handleTouchEnd = (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].screenX
            handleSwipe()
        }

        const handleSwipe = () => {
            const swipeThreshold = 50
            if (touchStartX - touchEndX > swipeThreshold) {
                goToNextPage()
            }
            if (touchEndX - touchStartX > swipeThreshold) {
                goToPrevPage()
            }
        }

        document.addEventListener('touchstart', handleTouchStart)
        document.addEventListener('touchend', handleTouchEnd)

        return () => {
            document.removeEventListener('touchstart', handleTouchStart)
            document.removeEventListener('touchend', handleTouchEnd)
        }
    }, [isOpen, isMobile, goToNextPage, goToPrevPage])

    if (!isOpen) return null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="relative w-full h-full flex flex-col">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                            {title || 'PDF Görüntüleyici'}
                        </h3>
                        {!isLoading && (
                            <p className="text-sm text-white/60 mt-1">
                                Sayfa {currentPage} / {numPages}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        {!isMobile && !isLoading && (
                            <>
                                <button
                                    onClick={handleZoomOut}
                                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition text-white"
                                    title="Uzaklaştır (-)"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleResetZoom}
                                    className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition text-white text-sm font-medium"
                                    title="Sıfırla (0)"
                                >
                                    {Math.round(scale * 100)}%
                                </button>
                                <button
                                    onClick={handleZoomIn}
                                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition text-white"
                                    title="Yakınlaştır (+)"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </button>
                            </>
                        )}
                        <button
                            onClick={onClose}
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition text-white"
                            title="Kapat (Esc)"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </motion.div>

                <div
                    className="flex-1 flex items-center justify-center overflow-auto p-4 sm:p-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    {isLoading && (
                        <div className="text-center">
                            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-white text-lg">PDF Yükleniyor...</p>
                        </div>
                    )}

                    <Document
                        file={url}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading=""
                        error={
                            <div className="text-white text-center">
                                <svg className="w-16 h-16 mx-auto mb-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <p className="text-lg mb-4">PDF yüklenemedi</p>
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                                >
                                    Kapat
                                </button>
                            </div>
                        }
                    >
                        <AnimatePresence mode="wait">
                            {!isLoading && (
                                <motion.div
                                    key={currentPage}
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    className="bg-white rounded-lg shadow-2xl overflow-hidden"
                                >
                                    <Page
                                        pageNumber={currentPage}
                                        height={pageHeight}
                                        scale={scale}
                                        renderTextLayer={true}
                                        renderAnnotationLayer={false}
                                        loading=""
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Document>
                </div>

                {!isLoading && numPages > 0 && (
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="border-t border-white/10 p-4 sm:p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-center gap-3 sm:gap-4">
                            <button
                                onClick={goToPrevPage}
                                disabled={currentPage === 1}
                                className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                <span className="hidden sm:inline">Önceki</span>
                            </button>

                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    min={1}
                                    max={numPages}
                                    value={currentPage}
                                    onChange={(e) => {
                                        const page = parseInt(e.target.value)
                                        if (page >= 1 && page <= numPages) {
                                            setCurrentPage(page)
                                        }
                                    }}
                                    className="w-16 px-2 py-2 bg-white/10 border border-white/20 rounded-lg text-center text-white font-bold focus:outline-none focus:border-white/40"
                                />
                                <span className="text-white/60">/ {numPages}</span>
                            </div>

                            <button
                                onClick={goToNextPage}
                                disabled={currentPage === numPages}
                                className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
                            >
                                <span className="hidden sm:inline">Sonraki</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {isMobile && (
                            <p className="text-center text-white/40 text-xs mt-3">
                                👆 Kaydırarak sayfa değiştirebilirsiniz
                            </p>
                        )}
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}

export default PdfOverlayViewer