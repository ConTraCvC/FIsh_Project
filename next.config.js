/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ['localhost'],
  },
  trailingSlash: true,
}

module.exports = nextConfig
