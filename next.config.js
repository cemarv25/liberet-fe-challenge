/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.themealdb.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
