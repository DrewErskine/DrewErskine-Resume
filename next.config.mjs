const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add CSS support for CSS modules
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
