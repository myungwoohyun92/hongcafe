/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['lh3.googleusercontent.com', 'localhost'],
        remotePatterns: [
            new URL('https://kr.object.ncloudstorage.com/**'), 
            new URL('https://img.hongcafe.com/**'), 
            new URL('https://hongcafe-korea.gcdn.ntruss.com/**'), 
        ],
    },
};

export default nextConfig;
