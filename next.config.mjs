/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'], // Ensure all necessary extensions are included
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  experimental: {
    appDir: true, // Enable the App Directory feature
  },
  basePath: process.env.NODE_ENV === 'production' ? '/dmerskine19.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dmerskine19.github.io/' : '',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Example webpack custom configuration
    return config;
  },
};

export default nextConfig;
