'use client'

import { useState, useEffect } from 'react'
import PdfOverlayViewer from './PdfOverlayViewer'

interface PdfViewerProps {
    url: string
    isOpen: boolean
    onClose: () => void
    title?: string
}

const PdfViewer = ({ url, isOpen, onClose, title }: PdfViewerProps) => {
    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)
    const [error, setError] = useState<string | null>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [viewMode, setViewMode] = useState<'iframe' | 'overlay'>('overlay')

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        }
        checkMobile()
    }, [])

    useEffect(() => {
        if (isOpen && url) {
            setIsLoading(true)
            setLoadingProgress(0)
            setError(null)

            const xhr = new XMLHttpRequest()
            xhr.open('GET', url, true)
            xhr.responseType = 'blob'

            xhr.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percentComplete = Math.round((event.loaded / event.total) * 100)
                    setLoadingProgress(percentComplete)
                }
            }

            xhr.onload = () => {
                if (xhr.status === 200) {
                    setLoadingProgress(100)
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 300)
                } else {
                    setError('PDF yüklenemedi')
                    setIsLoading(false)
                }
            }

            xhr.onerror = () => {
                setError('Bağlantı hatası')
                setIsLoading(false)
            }

            xhr.send()

            const scrollY = window.scrollY
            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollY}px`
            document.body.style.width = '100%'
            document.body.style.overflow = 'hidden'

            return () => {
                xhr.abort()
                document.body.style.position = ''
                document.body.style.top = ''
                document.body.style.width = ''
                document.body.style.overflow = ''
                window.scrollTo(0, scrollY)
            }
        }
    }, [isOpen, url])

    const handleViewPdf = () => {
        if (isMobile) {
            window.open(url, '_blank')
        }
    }

    if (!isOpen) return null

    if (viewMode === 'overlay' && !isLoading && !error) {
        return <PdfOverlayViewer url={url} isOpen={isOpen} onClose={onClose} title={title} />
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={onClose}
        >
            <div
                className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white dark:bg-dark-800 rounded-xl shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-700 flex-shrink-0">
                    <h3 className="text-xl font-bold text-heading truncate">{title || 'PDF Görüntüleyici'}</h3>
                    <div className="flex items-center gap-2">
                        {!isMobile && !isLoading && !error && (
                            <button
                                onClick={() => setViewMode(viewMode === 'overlay' ? 'iframe' : 'overlay')}
                                className="px-3 py-2 text-sm bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition"
                                title={viewMode === 'overlay' ? 'Normal Görünüm' : 'Overlay Görünümü'}
                            >
                                {viewMode === 'overlay' ? '📄 Normal' : '📖 Overlay'}
                            </button>
                        )}
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition"
                            aria-label="Kapat"
                        >
                            <svg className="w-6 h-6 text-heading" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex-1 relative">
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-dark-900 z-10">
                            <div className="w-16 h-16 border-4 border-gray-200 dark:border-dark-700 border-t-primary-600 rounded-full animate-spin"></div>
                            <p className="mt-4 text-lg font-semibold text-heading">PDF Yükleniyor...</p>

                            <div className="mt-3">
                                <span className="text-3xl font-bold text-primary-600">{loadingProgress}%</span>
                            </div>

                            <div className="w-64 h-2 bg-gray-200 dark:bg-dark-700 rounded-full mt-4 overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full transition-all duration-300 ease-out"
                                    style={{ width: `${loadingProgress}%` }}
                                ></div>
                            </div>

                            <p className="mt-3 text-sm text-muted">
                                {loadingProgress < 100 ? 'İndiriliyor...' : 'Hazırlanıyor...'}
                            </p>
                        </div>
                    )}

                    {error && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-dark-900">
                            <svg className="w-16 h-16 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <p className="text-lg font-semibold text-heading mb-2">{error}</p>
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition"
                            >
                                Kapat
                            </button>
                        </div>
                    )}

                    {!isLoading && !error && (
                        <>
                            {isMobile ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-dark-900 p-6">
                                    <svg className="w-20 h-20 text-primary-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <p className="text-lg font-semibold text-heading mb-2 text-center">PDF Hazır</p>
                                    <p className="text-sm text-muted mb-6 text-center max-w-sm">
                                        PDF dosyasını görüntülemek için butona tıklayın
                                    </p>
                                    <button
                                        onClick={handleViewPdf}
                                        className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition font-medium"
                                    >
                                        PDF'i Görüntüle
                                    </button>
                                </div>
                            ) : (
                                <iframe
                                    src={`${url}#toolbar=1&navpanes=1&view=FitH`}
                                    className="w-full h-full border-0"
                                    title={title || 'PDF Document'}
                                />
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PdfViewer