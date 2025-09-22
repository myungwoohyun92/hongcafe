/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['lh3.googleusercontent.com', 'localhost'],
        remotePatterns: [
            new URL('https://kr.object.ncloudstorage.com/**'), 
            new URL('https://img.hongcafe.com/**'), 
        ],
    },
};

export default nextConfig;
