/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove static export to fix redirect issues
    // output: 'export',
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Remove trailing slash to prevent redirect issues
    // trailingSlash: true,
    output: 'export',
    trailingSlash: true,
};

export default nextConfig;
