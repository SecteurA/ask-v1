/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev }) => {
    // Disable webpack cache in development to prevent ENOENT errors
    if (dev) {
      config.cache = false;
    }
    return config;
  }
};

module.exports = nextConfig;