'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import PdfViewer from '@/features/research/PdfViewer'

const Experience = () => {
    const [pdfModal, setPdfModal] = useState<{ isOpen: boolean; url: string; title: string }>({
        isOpen: false,
        url: '',
        title: ''
    })

    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 })
    const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation({ threshold: 0.2 })
    const { ref: internshipRef, isVisible: internshipVisible } = useScrollAnimation({ threshold: 0.2 })
    const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 })

    const openPdf = (url: string, title: string) => {
        setPdfModal({ isOpen: true, url, title })
    }

    const closePdf = () => {
        setPdfModal({ isOpen: false, url: '', title: '' })
    }

    return (
        <section id="experience" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-dark-800">
            <div className="section-container section-padding">
                <h2
                    ref={titleRef}
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-heading tracking-tight transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    Deneyim & Eğitim
                </h2>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        <div
                            ref={educationRef}
                            className={`bg-white dark:bg-dark-900 p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 dark:border-dark-700 transition-all duration-700 ${educationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                }`}
                        >
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-heading">Mobil Teknolojileri</h3>
                            <p className="text-primary-600 font-semibold mb-2 text-base sm:text-lg">Trakya Üniversitesi</p>
                            <p className="text-muted mb-4 sm:mb-6 text-sm sm:text-base">2023 - 2025</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-5 rounded-lg border border-amber-200 dark:border-amber-800">
                                    <div className="flex flex-col items-center justify-center space-y-1.5">
                                        <p className="text-sm font-medium text-amber-700 dark:text-amber-300 uppercase tracking-wide">Mezuniyet GPA</p>
                                        <div className="flex items-baseline gap-1">
                                            <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">3.79</p>
                                            <p className="text-lg font-semibold text-amber-700 dark:text-amber-500">/4.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-5 rounded-lg border border-amber-200 dark:border-amber-800">
                                    <div className="flex flex-col items-center justify-center space-y-1.5">
                                        <p className="text-sm font-medium text-amber-700 dark:text-amber-300 uppercase tracking-wide">100 Üzerinden</p>
                                        <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">94.75</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            ref={internshipRef}
                            className={`bg-white dark:bg-dark-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-dark-700 transition-all duration-700 delay-150 ${internshipVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                                }`}
                        >
                            <h3 className="text-2xl font-bold mb-3 text-heading">Yazılım Geliştirici Stajyeri</h3>
                            <a
                                href="https://sechard.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 font-semibold mb-2 hover:underline inline-flex items-center gap-1"
                            >
                                SecHard Bilgi Teknolojileri
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                            <p className="text-muted mb-4">Bahar 2025 (16 Hafta)</p>
                            <ul className="space-y-1 text-body mb-4">
                                <li>• Docker mikro-servis mimarileri (DevOps)</li>
                                <li>• Node.js API geliştirme</li>
                                <li>• Angular dashboard tasarımı</li>
                                <li>• MongoDB veri modelleme</li>
                            </ul>
                        </div>

                        <div
                            ref={statsRef}
                            className={`bg-gradient-to-r from-primary-600 to-accent-600 p-6 rounded-xl text-white shadow-lg transition-all duration-700 delay-300 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                }`}
                        >
                            <h3 className="text-2xl font-bold mb-6">Freelance İstatistiklerim</h3>
                            <div className="grid grid-cols-3 gap-4 sm:gap-6">
                                <div className="text-center">
                                    <p className="text-3xl font-bold">5.0</p>
                                    <p className="text-white/80 text-sm sm:text-base">Puan</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold">17</p>
                                    <p className="text-white/80 text-sm sm:text-base">Değerlendirme</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold">20+</p>
                                    <p className="text-white/80 text-sm sm:text-base">Proje</p>
                                </div>
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

export default Experience