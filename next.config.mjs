/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.myntassets.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
