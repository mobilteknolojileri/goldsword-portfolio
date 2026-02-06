"use client";

import Link from "next/link";
import Image from "next/image";

const features = [
    {
        title: "İki Kahraman",
        description: "Red (kılıç) ve Robinhood (ok) karakterleri arasında seçim yapın.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354l1.1 3.383h3.558l-2.877 2.09 1.1 3.383-2.877-2.09-2.877 2.09 1.1-3.383-2.877-2.09h3.558L12 4.354z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
    {
        title: "Tuzaklar & Gizemler",
        description: "Zıplayan variller, testereler ve dikenli engellerle dolu 6+ el yapımı seviye.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
    },
    {
        title: "Akıcı Kontroller",
        description: "Mobil cihazlar için optimize edilmiş pürüzsüz dokunmatik kontroller.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Pixel Art Estetiği",
        description: "Canlı renkler ve detaylı piksel çizimleriyle modern bir retro deneyimi.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Dinamik Düşmanlar",
        description: "Her seviyede strateji gerektiren farklı düşman türleri ve mekanikler.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: "Boss Savaşları",
        description: "Reflekslerinizi ve stratejinizi test eden destansı karşılaşmalar.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
];

export default function AesteraPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 pb-20">
            {/* Hero Section */}
            <section className="text-center pt-10 pb-20 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] -z-10 rounded-full" />

                <div className="relative w-32 h-32 mx-auto mb-10 group">
                    <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    <Image
                        src="/assets/projects/legends-of-aestera/hero.png"
                        alt="Legends of Aestera Logo"
                        fill
                        className="rounded-3xl shadow-2xl relative z-10 transition-transform group-hover:scale-105 duration-500 object-cover"
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Legends of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Aestera</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Kılıç ve yayın gücüyle destansı bir maceraya atılın. Piksel art dünyasında düşmanları alt edin ve efsanenizi yazın.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.schwerttr.aestera"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-all hover:-translate-y-1 shadow-[0_20px_50px_rgba(255,100,0,0.1)]"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                        </svg>
                        <div className="text-left">
                            <p className="text-[10px] uppercase tracking-wider opacity-60 leading-none mb-1">Hemen İndirin</p>
                            <p className="text-lg leading-none">Google Play</p>
                        </div>
                    </a>
                </div>
            </section>

            {/* Features Grid */}
            <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                {features.map((feature, i) => (
                    <div key={i} className="group p-8 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:border-red-500/50 transition-all hover:bg-slate-800/50">
                        <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform group-hover:bg-red-500 group-hover:text-white">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </section>

            {/* Screenshots or Detail Section (Optional) */}
            <section className="bg-gradient-to-br from-red-900/40 to-slate-900/40 rounded-[2.5rem] border border-red-500/20 p-10 md:p-16 mb-20 relative overflow-hidden text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Piksel Macerası Başlıyor</h2>
                    <p className="text-lg text-slate-300 mb-12">
                        Legends of Aestera, retro ruhunu modern mekaniklerle birleştiriyor. Her seviye oyuncuyu farklı bir stratejiye zorlayan el yapımı tasarımlara sahiptir.
                    </p>

                    <div className="flex justify-center gap-4">
                        <div className="px-6 py-3 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-semibold">Unity Engine</div>
                        <div className="px-6 py-3 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 font-semibold">IL2CPP</div>
                    </div>
                </div>
            </section>

            {/* Support Links */}
            <section className="flex flex-wrap justify-center gap-4">
                <Link href="/legends-of-aestera/privacy-policy" className="px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all">Gizlilik Politikası</Link>
                <Link href="/legends-of-aestera/terms-of-service" className="px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all">Kullanım Şartları</Link>
            </section>
        </div>
    );
}
