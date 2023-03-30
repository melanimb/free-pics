/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['images.pexels.com', 'pexels.com']
  }
}

module.exports = nextConfig
