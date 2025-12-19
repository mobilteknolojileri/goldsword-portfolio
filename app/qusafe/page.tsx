"use client";

import Link from "next/link";
import Image from "next/image";

export default function QuSafePage() {
  return (
    <div className="text-center">
      {/* App Icon */}
      <div className="relative w-32 h-32 mx-auto mb-8">
        <Image
          src="/qusafe-icon.png"
          alt="QuSafe"
          fill
          className="rounded-3xl shadow-2xl shadow-indigo-500/30"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">QuSafe</h1>
      <p className="text-xl text-slate-300 mb-2">Secure Password Manager</p>
      <p className="text-slate-500 mb-8">
        Your passwords, encrypted and protected.
      </p>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <span className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm">
          🔐 End-to-End Encryption
        </span>
        <span className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm">
          🔒 Biometric Auth
        </span>
        <span className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm">
          ☁️ Cloud Sync
        </span>
      </div>

      {/* Download Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        {/* App Store (Coming Soon) */}
        <a
          href="#"
          aria-disabled="true"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center justify-center gap-3 bg-white/90 text-slate-900 px-6 py-3.5 rounded-xl font-medium shadow-lg
                     opacity-60 cursor-not-allowed select-none"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>

          <div className="text-left">
            <div className="text-xs opacity-70">Download on the</div>
            <div className="flex items-center gap-2 text-base font-semibold -mt-0.5">
              <span>App Store</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900/10 border border-slate-900/10">
                Yakında
              </span>
            </div>
          </div>
        </a>

        {/* Google Play */}
        <a
          href="https://play.google.com/store/apps/details?id=com.schwerttr.qusafe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-medium hover:bg-slate-100 transition-all hover:scale-105 shadow-lg"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
          </svg>
          <div className="text-left">
            <div className="text-xs opacity-70">GET IT ON</div>
            <div className="text-base font-semibold -mt-0.5">Google Play</div>
          </div>
        </a>
      </div>

      {/* Links */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Link
          href="/qusafe/privacy-policy"
          className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:bg-slate-800 hover:border-indigo-500/30 transition-all"
        >
          <div className="w-12 h-12 mx-auto mb-4 bg-indigo-500/10 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
            <svg
              className="w-6 h-6 text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-white font-medium mb-1">Privacy Policy</h3>
          <p className="text-slate-500 text-sm">Gizlilik Politikası</p>
        </Link>

        <Link
          href="/qusafe/terms-of-service"
          className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:bg-slate-800 hover:border-indigo-500/30 transition-all"
        >
          <div className="w-12 h-12 mx-auto mb-4 bg-indigo-500/10 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
            <svg
              className="w-6 h-6 text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-white font-medium mb-1">Terms of Service</h3>
          <p className="text-slate-500 text-sm">Kullanım Şartları</p>
        </Link>

        <Link
          href="/qusafe/delete-account"
          className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:bg-slate-800 hover:border-indigo-500/30 transition-all"
        >
          <div className="w-12 h-12 mx-auto mb-4 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
            <svg
              className="w-6 h-6 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
          <h3 className="text-white font-medium mb-1">Delete Account</h3>
          <p className="text-slate-500 text-sm">Hesap Silme</p>
        </Link>
      </div>
    </div>
  );
}
