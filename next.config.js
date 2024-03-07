const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: true,
        serverActions: {
            bodySizeLimit: '1024mb'
        }
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    }
    // assetPrefix: isProd ? '/static' : ''
};

module.exports = nextConfig;
