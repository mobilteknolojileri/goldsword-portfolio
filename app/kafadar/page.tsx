"use client";

import Link from "next/link";

const features = [
    {
        title: "Quiz Oluştur",
        description: "Sorularını yaz, doğru cevapları belirle, quizini oluştur.",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                />
            </svg>
        ),
    },
    {
        title: "Link ile Paylaş",
        description:
            "WhatsApp, Instagram, SMS — tek tıkla arkadaşlarına gönder.",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
            </svg>
        ),
    },
    {
        title: "Skorları Gör",
        description:
            "Kimler çözdü, kaç puan aldı? Leaderboard ile karşılaştır.",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
            </svg>
        ),
    },
    {
        title: "Challenge Gönder",
        description:
            "\"Seni ne kadar tanıyorum?\" diye arkadaşına meydan oku!",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
            </svg>
        ),
    },
    {
        title: "Emoji Avatar",
        description: "24 farklı emoji arasından avatarını seç.",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
    {
        title: "5 Renk Teması",
        description: "Rose, Violet, Ocean, Emerald, Amber — tarzını seç.",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
            </svg>
        ),
    },
];

const highlights = [
    "Konfeti animasyonu — yüksek skorda kutlama 🎉",
    "Gen Z skor yorumları — 6 kademeli eğlenceli geri bildirim",
    "Deep link — kafadar.app/q/slug ile direkt quiz'e eriş",
    "Dark/Light mode — otomatik sistem algılama",
    "Skeleton loader — pürüzsüz yükleme",
];

export default function KafadarPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 pb-20">
            {/* Hero Section */}
            <section className="text-center pt-10 pb-20 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[120px] -z-10 rounded-full" />

                <div className="text-8xl mb-10">💗</div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Kafadar —{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                        Arkadaşlık Testi
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Arkadaşlarının seni ne kadar tanıdığını test et! Quiz oluştur,
                    paylaş, skorları karşılaştır.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <button className="flex items-center justify-center gap-3 bg-slate-800/50 backdrop-blur-md border border-slate-700 text-white px-8 py-4 rounded-2xl font-bold opacity-50 cursor-not-allowed">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                        </svg>
                        <div className="text-left">
                            <p className="text-[10px] uppercase tracking-wider opacity-60 leading-none mb-1">
                                Yakında
                            </p>
                            <p className="text-lg leading-none">Google Play</p>
                        </div>
                    </button>

                    <button className="flex items-center justify-center gap-3 bg-slate-800/50 backdrop-blur-md border border-slate-700 text-white px-8 py-4 rounded-2xl font-bold opacity-50 cursor-not-allowed">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                        <div className="text-left">
                            <p className="text-[10px] uppercase tracking-wider opacity-60 leading-none mb-1">
                                Yakında
                            </p>
                            <p className="text-lg leading-none">App Store</p>
                        </div>
                    </button>
                </div>
            </section>

            {/* Features Grid */}
            <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                {features.map((feature, i) => (
                    <div
                        key={i}
                        className="group p-8 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:border-rose-500/50 transition-all hover:bg-slate-800/50"
                    >
                        <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform group-hover:bg-rose-500 group-hover:text-white">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </section>

            {/* Highlights */}
            <section className="bg-gradient-to-br from-rose-900/40 to-slate-900/40 rounded-[2.5rem] border border-rose-500/20 p-10 md:p-16 mb-20 relative overflow-hidden text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        Neden Kafadar?
                    </h2>
                    <p className="text-lg text-slate-300 mb-12">
                        Gen Z için tasarlandı. Eğlenceli, hızlı ve paylaşılabilir.
                        Arkadaşlıklarını test et, challenge gönder, gülümseten sonuçları gör.
                    </p>

                    <div className="space-y-6 text-left max-w-lg mx-auto">
                        {highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-4 text-slate-200">
                                <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-4 h-4 text-rose-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <span className="font-medium">{h}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Links */}
            <section className="flex flex-wrap justify-center gap-4">
                <Link
                    href="/kafadar/privacy-policy"
                    className="px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
                >
                    Gizlilik Politikası
                </Link>
                <Link
                    href="/kafadar/terms-of-service"
                    className="px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
                >
                    Kullanım Şartları
                </Link>
                <Link
                    href="/kafadar/delete-account"
                    className="px-6 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all"
                >
                    Hesap Silme
                </Link>
            </section>
        </div>
    );
}
