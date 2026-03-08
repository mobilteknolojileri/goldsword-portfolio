"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import PdfViewer from "@/features/research/PdfViewer";

const Experience = () => {
  const [pdfModal, setPdfModal] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: "",
    title: "",
  });

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
  });
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: internshipRef, isVisible: internshipVisible } = useScrollAnimation({
    threshold: 0.2,
  });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  /* const openPdf = (url: string, title: string) => {
    setPdfModal({ isOpen: true, url, title });
  }; */

  const closePdf = () => {
    setPdfModal({ isOpen: false, url: "", title: "" });
  };

  return (
    <section id="experience" className="bg-white py-12 dark:bg-dark-800 sm:py-16 md:py-20">
      <div className="section-container section-padding">
        <h2
          ref={titleRef}
          className={`text-heading mb-8 text-center text-3xl font-bold tracking-tight transition-all duration-700 sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl lg:text-6xl ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Deneyim & Eğitim
        </h2>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div
              ref={educationRef}
              className={`rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-700 dark:border-dark-700 dark:bg-dark-900 sm:p-6 md:p-8 ${
                educationVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <h3 className="text-heading mb-3 text-xl font-bold sm:mb-4 sm:text-2xl md:text-3xl">
                Mobil Teknolojileri
              </h3>
              <p className="mb-2 text-base font-semibold text-primary-600 sm:text-lg">
                Trakya Üniversitesi
              </p>
              <p className="text-muted mb-4 text-sm sm:mb-6 sm:text-base">2023 - 2025</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-5 dark:border-amber-800 dark:from-amber-900/20 dark:to-yellow-900/20">
                  <div className="flex flex-col items-center justify-center space-y-1.5">
                    <p className="text-sm font-medium uppercase tracking-wide text-amber-700 dark:text-amber-300">
                      Mezuniyet GPA
                    </p>
                    <div className="flex items-baseline gap-1">
                      <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">3.79</p>
                      <p className="text-lg font-semibold text-amber-700 dark:text-amber-500">
                        /4.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-5 dark:border-amber-800 dark:from-amber-900/20 dark:to-yellow-900/20">
                  <div className="flex flex-col items-center justify-center space-y-1.5">
                    <p className="text-sm font-medium uppercase tracking-wide text-amber-700 dark:text-amber-300">
                      100 Üzerinden
                    </p>
                    <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">94.75</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={internshipRef}
              className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all delay-150 duration-700 dark:border-dark-700 dark:bg-dark-900 ${
                internshipVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <h3 className="text-heading mb-3 text-2xl font-bold">Yazılım Geliştirici Stajyeri</h3>
              <a
                href="https://sechard.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 inline-flex items-center gap-1 font-semibold text-primary-600 hover:underline"
              >
                SecHard Bilgi Teknolojileri
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <p className="text-muted mb-4">Bahar 2026 (16 Hafta)</p>
              <ul className="text-body mb-4 space-y-1">
                <li>• Docker mikro-servis mimarileri (DevOps)</li>
                <li>• Node.js API geliştirme</li>
                <li>• Angular dashboard tasarımı</li>
                <li>• MongoDB veri modelleme</li>
              </ul>
            </div>

            <div
              ref={statsRef}
              className={`rounded-xl border-2 border-primary-100 bg-white p-8 shadow-lg transition-all delay-300 duration-700 dark:border-primary-900/30 dark:bg-dark-900 ${
                statsVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <h3 className="text-heading mb-8 flex items-center gap-3 text-2xl font-extrabold">
                <span className="h-8 w-2 rounded-full bg-primary-600"></span>
                Freelance İstatistiklerim
              </h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="rounded-2xl bg-primary-50/50 p-4 text-center dark:bg-primary-900/10">
                  <p className="text-4xl font-black text-primary-600 dark:text-primary-400">5.0</p>
                  <p className="text-subheading mt-1 font-bold">Puan</p>
                  <p className="text-muted mt-2 text-xs font-medium">⭐⭐⭐⭐⭐</p>
                </div>
                <div className="rounded-2xl bg-primary-50/50 p-4 text-center dark:bg-primary-900/10">
                  <p className="text-4xl font-black text-primary-600 dark:text-primary-400">21</p>
                  <p className="text-subheading mt-1 font-bold">Değerlendirme</p>
                </div>
                <div className="rounded-2xl bg-primary-50/50 p-4 text-center dark:bg-primary-900/10">
                  <p className="text-4xl font-black text-primary-600 dark:text-primary-400">30+</p>
                  <p className="text-subheading mt-1 font-bold">Proje</p>
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
  );
};

export default Experience;
