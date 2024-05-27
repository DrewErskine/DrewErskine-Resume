// next.config.mjs
import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false, // Ensure images are optimized by Next.js
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    });

    return config;
  },
};

export default nextConfig;
