'use client'

import { useState } from 'react'
import PdfViewer from './PdfViewer'

const Research = () => {
    const [pdfModal, setPdfModal] = useState<{ isOpen: boolean; url: string; title: string }>({
        isOpen: false,
        url: '',
        title: ''
    })

    const openPdf = (url: string, title: string) => {
        setPdfModal({ isOpen: true, url, title })
    }

    const closePdf = () => {
        setPdfModal({ isOpen: false, url: '', title: '' })
    }

    return (
        <section id="research" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-dark-900">
            <div className="section-container section-padding">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-heading tracking-tight">Akademik Çalışmalar</h2>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-dark-700">
                        <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-4 sm:p-6 text-white">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                                Willow Quantum Chip and Post-Quantum Security
                            </h3>
                            <a
                                href="https://www.iksadeurope.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/90 hover:text-white hover:underline transition-all inline-flex items-center gap-1"
                            >
                                12. Uluslararası Avrupa Temel Bilimlerde İleri Araştırmalar Kongresi
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                            <p className="text-white/90 mt-2">Mayıs 2025 - Tiran, Arnavutluk</p>
                        </div>

                        <div className="p-6">
                            <p className="text-body mb-2">
                                <span className="font-semibold text-heading">Not:</span> Bildiri metni ve sunum slaytları tarafımca hazırlanmıştır.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
                                <button
                                    onClick={() => openPdf('/assets/research/willow-quantum-fulltext.pdf', 'Tam Metin - Willow Quantum')}
                                    className="p-4 bg-gray-50 dark:bg-dark-900 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition border border-gray-200 dark:border-dark-700"
                                >
                                    <p className="text-lg font-bold mb-2 text-heading">📄 Tam Metin</p>
                                    <p className="text-sm text-muted">PDF Görüntüle</p>
                                </button>

                                <button
                                    onClick={() => openPdf('/assets/research/willow-quantum-slides.pdf', 'Sunum - Willow Quantum')}
                                    className="p-4 bg-gray-50 dark:bg-dark-900 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition border border-gray-200 dark:border-dark-700"
                                >
                                    <p className="text-lg font-bold mb-2 text-heading">🎯 Sunum</p>
                                    <p className="text-sm text-muted">Slaytları Gör</p>
                                </button>

                                <button
                                    onClick={() => openPdf('/assets/research/conference-certificate.pdf', 'Konferans Katılım Sertifikası')}
                                    className="p-4 bg-gray-50 dark:bg-dark-900 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition border border-gray-200 dark:border-dark-700"
                                >
                                    <p className="text-lg font-bold mb-2 text-heading">🏆 Sertifika</p>
                                    <p className="text-sm text-muted">Katılım Belgesi</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PdfViewer
                url={pdfModal.url}
                isOpen={pdfModal.isOpen}
                onClose={closePdf}
                title={pdfModal.title}
            />
        </section>
    )
}

export default Research
