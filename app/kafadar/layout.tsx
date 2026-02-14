import Link from "next/link";
import Image from "next/image";
import { kafadarMetadata } from "@/lib/seo/metadata";

export const metadata = kafadarMetadata;

export default function KafadarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#0F172A] flex flex-col">
            {/* Header */}
            <header className="border-b border-white/10 sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/kafadar" className="flex items-center gap-3">
                        <span className="text-2xl">💗</span>
                        <span className="text-white font-semibold text-lg">Kafadar</span>
                    </Link>
                    <nav className="flex gap-4 text-sm">
                        <Link
                            href="/kafadar/privacy-policy"
                            className="text-slate-400 hover:text-rose-400 transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/kafadar/terms-of-service"
                            className="text-slate-400 hover:text-rose-400 transition-colors"
                        >
                            Terms
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                        <p>© 2026 Kafadar. All rights reserved.</p>
                        <a
                            href="mailto:schwerttr@gmail.com"
                            className="hover:text-rose-400 transition-colors"
                        >
                            schwerttr@gmail.com
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
