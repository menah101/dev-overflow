/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    domains: ['avatars.githubusercontent.com', '*'],
  },
}

module.exports = nextConfig
