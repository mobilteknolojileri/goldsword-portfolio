'use client'

import { useState, useEffect } from 'react'

interface PdfViewerProps {
    url: string
    isOpen: boolean
    onClose: () => void
    title?: string
}

const PdfViewer = ({ url, isOpen, onClose, title }: PdfViewerProps) => {
    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)
    const [pdfBlob, setPdfBlob] = useState<string>('')

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true)
            setLoadingProgress(0)
            setPdfBlob('')

            // PDF'i fetch ile indir ve ilerlemeyi takip et
            const loadPdf = async () => {
                try {
                    const response = await fetch(url)
                    const reader = response.body?.getReader()
                    const contentLength = +(response.headers.get('Content-Length') ?? 0)

                    if (!reader) {
                        throw new Error('Stream reader not available')
                    }

                    let receivedLength = 0
                    const chunks: Uint8Array[] = []

                    while (true) {
                        const { done, value } = await reader.read()

                        if (done) break

                        chunks.push(value)
                        receivedLength += value.length

                        // İlerlemeyi hesapla ve güncelle
                        if (contentLength) {
                            const progress = Math.round((receivedLength / contentLength) * 100)
                            setLoadingProgress(progress)
                        }
                    }

                    // Tüm chunk'ları birleştir
                    const chunksAll = new Uint8Array(receivedLength)
                    let position = 0
                    for (const chunk of chunks) {
                        chunksAll.set(chunk, position)
                        position += chunk.length
                    }

                    // Blob oluştur ve URL'e çevir
                    const blob = new Blob([chunksAll], { type: 'application/pdf' })
                    const blobUrl = URL.createObjectURL(blob)
                    setPdfBlob(blobUrl)
                    setLoadingProgress(100)
                    setIsLoading(false)
                } catch (error) {
                    console.error('PDF yükleme hatası:', error)
                    setIsLoading(false)
                }
            }

            loadPdf()

            // Body scroll'unu engelle
            document.body.style.overflow = 'hidden'
        }

        // Cleanup: Modal kapandığında scroll'u geri aç ve blob URL'i temizle
        return () => {
            document.body.style.overflow = 'unset'
            if (pdfBlob) {
                URL.revokeObjectURL(pdfBlob)
            }
        }
    }, [isOpen, url])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={onClose}>
            <div
                className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white dark:bg-dark-800 rounded-xl shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-700 flex-shrink-0">
                    <h3 className="text-xl font-bold text-heading truncate">{title || 'PDF Görüntüleyici'}</h3>
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

                {/* PDF Container */}
                <div className="flex-1 relative">
                    {/* Loading */}
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-dark-900 z-10">
                            <div className="w-16 h-16 border-4 border-gray-200 dark:border-dark-700 border-t-primary-600 rounded-full animate-spin"></div>
                            <p className="mt-4 text-lg font-semibold text-heading">PDF Yükleniyor...</p>

                            {/* Yüzde Göstergesi */}
                            <div className="mt-3">
                                <span className="text-3xl font-bold text-primary-600">{loadingProgress}%</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-64 h-2 bg-gray-200 dark:bg-dark-700 rounded-full mt-4 overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full transition-all duration-300 ease-out"
                                    style={{ width: `${loadingProgress}%` }}
                                ></div>
                            </div>

                            {/* Dosya Boyutu Bilgisi (Opsiyonel) */}
                            <p className="mt-3 text-sm text-muted">
                                {loadingProgress < 100 ? 'İndiriliyor...' : 'Hazırlanıyor...'}
                            </p>
                        </div>
                    )}

                    {/* PDF Iframe */}
                    {pdfBlob && (
                        <iframe
                            src={`${pdfBlob}#toolbar=0`}
                            className="w-full h-full border-0"
                            title={title || 'PDF Document'}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default PdfViewer
