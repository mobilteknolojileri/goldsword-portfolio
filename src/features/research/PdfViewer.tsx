"use client";

import { useState, useEffect } from "react";

interface PdfViewerProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const PdfViewer = ({ url, isOpen, onClose, title }: PdfViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && url) {
      setIsLoading(true);
      setLoadingProgress(0);
      setError(null);

      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "blob";

      xhr.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          setLoadingProgress(percentComplete);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          setLoadingProgress(100);
          setTimeout(() => {
            setIsLoading(false);
          }, 300);
        } else {
          setError("PDF yüklenemedi");
          setIsLoading(false);
        }
      };

      xhr.onerror = () => {
        setError("Bağlantı hatası");
        setIsLoading(false);
      };

      xhr.send();

      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        xhr.abort();
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen, url]);

  const handleViewPdf = () => {
    window.open(url, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex h-full max-h-[90vh] w-full max-w-6xl flex-col rounded-xl bg-white shadow-2xl dark:bg-dark-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-shrink-0 items-center justify-between border-b border-gray-200 p-4 dark:border-dark-700">
          <h3 className="text-heading truncate text-xl font-bold">
            {title || "PDF Görüntüleyici"}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-dark-700"
            aria-label="Kapat"
          >
            <svg
              className="text-heading h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="relative flex-1">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white dark:bg-dark-900">
              <p className="text-heading mb-6 text-lg font-semibold">PDF Yükleniyor...</p>

              <div className="mb-4">
                <span className="text-3xl font-bold text-primary-600">{loadingProgress}%</span>
              </div>

              <div className="h-2 w-64 overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary-600 to-accent-600 transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>

              <p className="text-muted mt-4 text-sm">
                {loadingProgress < 100 ? "İndiriliyor..." : "Hazırlanıyor..."}
              </p>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-dark-900">
              <svg
                className="mb-4 h-16 w-16 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="text-heading mb-2 text-lg font-semibold">{error}</p>
              <button
                onClick={onClose}
                className="rounded-lg bg-primary-600 px-4 py-2 text-white transition hover:bg-primary-700"
              >
                Kapat
              </button>
            </div>
          )}

          {!isLoading && !error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-6 dark:bg-dark-900">
              <svg
                className="mb-4 h-20 w-20 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-heading mb-2 text-center text-lg font-semibold">PDF Hazır</p>
              <p className="text-muted mb-6 max-w-sm text-center text-sm">
                PDF dosyasını görüntülemek için butona tıklayın
              </p>
              <button
                onClick={handleViewPdf}
                className="rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition hover:bg-primary-700"
              >
                PDF'i Görüntüle
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
