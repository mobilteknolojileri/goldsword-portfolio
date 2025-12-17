import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'QuSafe - Secure Password Manager',
    description: 'QuSafe is a secure password manager app for iOS and Android.',
}

export default function QuSafeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-[#0F172A] flex flex-col">
            {/* Header */}
            <header className="border-b border-white/10 sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/qusafe" className="flex items-center gap-3">
                        <Image
                            src="/qusafe-icon.png"
                            alt="QuSafe"
                            width={36}
                            height={36}
                            className="rounded-lg"
                        />
                        <span className="text-white font-semibold text-lg">QuSafe</span>
                    </Link>
                    <nav className="flex gap-4 text-sm">
                        <Link href="/qusafe/privacy-policy" className="text-slate-400 hover:text-indigo-400 transition-colors">
                            Privacy
                        </Link>
                        <Link href="/qusafe/terms-of-service" className="text-slate-400 hover:text-indigo-400 transition-colors">
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
                        <p>© 2025 QuSafe. All rights reserved.</p>
                        <a href="mailto:schwerttr@gmail.com" className="hover:text-indigo-400 transition-colors">
                            schwerttr@gmail.com
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
