"use client";

import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Şifreler",
    description: "Hassas şifrelerinizi tek bir güvenli kasada saklayın.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    title: "Güvenli Notlar",
    description: "Gizli notlarınız ve günlükleriniz AES-256 ile koruma altında.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Fotoğraf & Video",
    description: "Medya dosyalarınızı şifreleyerek cihazınızda gizleyin.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Banka Kartları",
    description: "Kredi ve banka kartı bilgilerinize anında ulaşın.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: "Kimlik Kasası",
    description: "Pasaport, ehliyet ve kimlik bilgileriniz dijital kasanızda.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    ),
  },
  {
    title: "2FA Doğrulama",
    description: "TOTP kodları ile ekstra güvenlik katmanı sağlayın.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const securityFeatures = [
  "AES-256-GCM ile cihaz üzerinde şifreleme",
  "Argon2id ile ana şifre türetme",
  "Face ID / Parmak izi ile hızlı kilit açma",
  "Zero-Knowledge mimari (Sadece siz erişirsiniz)",
  "Güvenlik Sağlığı analizi ve skorlama",
];

export default function QuSafePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-20">
      {/* Hero Section */}
      <section className="text-center pt-10 pb-20 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] -z-10 rounded-full" />

        <div className="relative w-32 h-32 mx-auto mb-10 group">
          <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <Image
            src="/assets/projects/qusafe-mobile/icon.png"
            alt="QuSafe Logo"
            fill
            className="rounded-3xl shadow-2xl relative z-10 transition-transform group-hover:scale-105 duration-500"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          QuSafe - <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Şifreli Kasa</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Fotoğraf gizleme, gizli şifre ve not günlüğü. Modern güvenlik standartlarıyla korunan dijital kasanız.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.schwerttr.qusafe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all hover:-translate-y-1 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider opacity-60 leading-none mb-1">Hemen İndirin</p>
              <p className="text-lg leading-none">Google Play</p>
            </div>
          </a>

          <button className="flex items-center justify-center gap-3 bg-slate-800/50 backdrop-blur-md border border-slate-700 text-white px-8 py-4 rounded-2xl font-bold opacity-50 cursor-not-allowed">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider opacity-60 leading-none mb-1">Yakında</p>
              <p className="text-lg leading-none">App Store</p>
            </div>
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
        {features.map((feature, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/50 transition-all hover:bg-slate-800/50">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform group-hover:bg-indigo-500 group-hover:text-white">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Security Details */}
      <section className="bg-gradient-to-br from-indigo-900/40 to-slate-900/40 rounded-[2.5rem] border border-indigo-500/20 p-10 md:p-16 mb-20 relative overflow-hidden text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Neden QuSafe?</h2>
          <p className="text-lg text-slate-300 mb-12">
            Bankalarla aynı şifreleme standardını (AES-256) kullanan QuSafe, verilerinizin asla şifresiz olarak
            cihazdan çıkmamasını sağlar.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              {securityFeatures.slice(0, 3).map((f, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">{f}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {securityFeatures.slice(3).map((f, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Support Links */}
      <section className="flex flex-wrap justify-center gap-4">
        <Link href="/qusafe/privacy-policy" className="px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all">Gizlilik Politikası</Link>
        <Link href="/qusafe/terms-of-service" className="px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all">Kullanım Şartları</Link>
        <Link href="/qusafe/delete-account" className="px-6 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all">Hesap Silme</Link>
      </section>
    </div>
  );
}
