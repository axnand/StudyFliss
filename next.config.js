const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  // assetPrefix: isProd ? '/static' : ''
};

module.exports = nextConfig;
