/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverComponentsExternalPackages: ['@prisma/client'],
  },
};

module.exports = nextConfig;
