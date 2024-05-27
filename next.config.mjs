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
      oneOf: [
        {
          // Apply loaders for CSS modules
          include: /\.module\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]__[hash:base64:5]',
                },
              },
            },
            'postcss-loader',
          ],
        },
        {
          // Apply loaders for global CSS
          exclude: /\.module\.css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
