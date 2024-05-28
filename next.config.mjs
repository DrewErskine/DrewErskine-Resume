import { config } from 'dotenv';

config(); // Load .env file if present

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  output: 'export',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devtool = 'source-map'; // Enable source maps in development
    }
    return config;
  },
};

export default nextConfig;
