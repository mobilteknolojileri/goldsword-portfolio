import Link from "next/link";
import Image from "next/image";
import { aesteraMetadata } from "@/lib/seo/metadata";

export const metadata = aesteraMetadata;

export default function AesteraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/legends-of-aestera" className="flex items-center gap-3">
            <Image
              src="/assets/projects/legends-of-aestera/hero.png"
              alt="Legends of Aestera"
              width={36}
              height={36}
              className="rounded-lg object-cover"
            />
            <span className="text-white font-semibold text-lg">
              Legends of Aestera
            </span>
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link
              href="/legends-of-aestera/privacy-policy"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legends-of-aestera/terms-of-service"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
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
            <p>© 2026 goldsword. All rights reserved.</p>
            <a
              href="mailto:schwerttr@gmail.com"
              className="hover:text-indigo-400 transition-colors"
            >
              schwerttr@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
