"use client";

import { useState } from "react";
import PdfViewer from "./PdfViewer";

const Research = () => {
  const [pdfModal, setPdfModal] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: "",
    title: "",
  });

  /* const openPdf = (url: string, title: string) => {
    setPdfModal({ isOpen: true, url, title });
  }; */

  const closePdf = () => {
    setPdfModal({ isOpen: false, url: "", title: "" });
  };

  return (
    <section id="research" className="bg-gray-50 py-12 dark:bg-dark-900 sm:py-16 md:py-20">
      <div className="section-container section-padding">
        <h2 className="text-heading mb-8 text-center text-3xl font-bold tracking-tight sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl lg:text-6xl">
          Akademik Çalışmalar
        </h2>

        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800">
            <div className="p-6 sm:p-10">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                      Bildiri
                    </span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Mayıs 2025
                    </span>
                  </div>

                  <h3 className="text-heading mb-3 text-xl font-bold leading-tight sm:text-2xl">
                    Willow Quantum Chip and Post-Quantum Security
                  </h3>

                  <a
                    href="https://www.iksadeurope.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:underline dark:text-primary-400"
                  >
                    12. Uluslararası Avrupa Temel Bilimlerde İleri Araştırmalar Kongresi →
                  </a>

                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Tiran, Arnavutluk</span>
                  </div>
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

export default Research;
