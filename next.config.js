const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'gcdn.bionluk.com',
            },
            {
                protocol: 'https',
                hostname: 'bgcp.bionluk.com',
            },
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': '.',
        }
        return config
    },
    turbopack: {
        resolveAlias: {
            '@': '.',
        },
    },
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['react-icons', 'framer-motion'],
    },
    compress: true,
    poweredByHeader: false,
}

module.exports = nextConfig