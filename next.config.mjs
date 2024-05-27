/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/dmerskine19.github.io',
  assetPrefix: '/dmerskine19.github.io/',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Example webpack custom configuration
    return config;
  },
};

module.exports = nextConfig;
