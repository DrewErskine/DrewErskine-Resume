/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/drew.erskin-react',  // Update this to your repository name
  assetPrefix: '/drew.erskin-react/',  // Update this to your repository name
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config;
  },
};

export default nextConfig;
