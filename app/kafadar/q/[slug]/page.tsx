"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function QuizRedirectPage() {
    const params = useParams();
    const slug = params.slug;

    useEffect(() => {
        if (slug) {
            // Try to redirect to the mobile app
            const deepLink = `kafadar://q/${slug}`;
            window.location.href = deepLink;

            // Optional: If redirection fails (app not installed), we stay on this page
        }
    }, [slug]);

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-500/10 blur-[100px] -z-10 rounded-full" />

            <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-[2.5rem] p-10 text-center shadow-2xl">
                <div className="text-6xl mb-6">💗</div>

                <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    Kafadar'a Yönlendiriliyorsun
                </h1>

                <p className="text-slate-300 mb-8 leading-relaxed">
                    Arkadaşının hazırladığı quizi çözmek için Kafadar mobil uygulamasını açıyoruz.
                </p>

                <div className="space-y-4">
                    <button
                        onClick={() => {
                            if (slug) window.location.href = `kafadar://q/${slug}`;
                        }}
                        className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-rose-500/20"
                    >
                        Uygulamayı Aç
                    </button>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-700"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#0f172a] px-2 text-slate-500 font-bold">Uygulama yüklü değil mi?</span>
                        </div>
                    </div>

                    {/* App Store Message */}
                    <div className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-3xl text-left shadow-inner">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                            </div>
                            <span className="text-white font-bold">App Store</span>
                        </div>
                        <p className="text-slate-200 text-sm font-bold leading-relaxed">
                            Sınavlarımdan sonra Apple Store'a da gelecek! ❤️
                        </p>
                        <p className="text-slate-500 text-[11px] font-bold mt-1 uppercase tracking-wider">
                            Will be on App Store after my exams!
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-2xl opacity-40">
                            <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">iOS</div>
                            <div className="text-slate-400 font-bold text-xs uppercase tracking-tighter">Coming Soon</div>
                        </div>
                        <div className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-2xl opacity-40">
                            <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Android</div>
                            <div className="text-slate-400 font-bold text-xs uppercase tracking-tighter">Coming Soon</div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <Link
                        href="/kafadar"
                        className="text-rose-400 hover:text-rose-300 text-sm font-bold"
                    >
                        ← Kafadar hakkında bilgi al
                    </Link>
                </div>
            </div>
        </div>
    );
}
