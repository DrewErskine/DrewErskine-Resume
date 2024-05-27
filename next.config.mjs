// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false, // Ensure images are optimized by Next.js
  },
  webpack: (config, { isServer }) => {
    // Custom webpack configurations can go here if needed, but avoid custom CSS loaders
    return config;
  },
};

export default nextConfig;
