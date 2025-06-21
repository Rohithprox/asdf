/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', '192.168.1.5'],
    unoptimized: true,
  },
} // <- This closing brace was missing

module.exports = nextConfig // <- This line was missing
