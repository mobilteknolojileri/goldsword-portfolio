import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Portfolyo - goldsword',
    description: '12+ farklı alanda tamamladığım projeler. Mobile, Web, AI, Game Development ve daha fazlası.',
    keywords: 'portfolio, projeler, mobile development, web development, flutter, react native, next.js, unity',
    openGraph: {
        title: 'Portfolyo - goldsword',
        description: '12+ farklı alanda tamamladığım projeler',
        type: 'website'
    }
}

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}