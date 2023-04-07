/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['images.pexels.com', 'pexels.com']
  },
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY
  }
}

module.exports = nextConfig
