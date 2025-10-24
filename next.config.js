/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vkm.co.za',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig