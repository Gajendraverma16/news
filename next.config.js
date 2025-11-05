/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`${process.env.NEXT_PUBLIC_API_URL}`],
    unoptimized: true, // keep this if you want images unoptimized
  },
  trailingSlash: true,
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/sitemap-generator');
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision'),
    };
    return config;
  },
};

// ⚠️ Do NOT set nextConfig.output = 'export' — keeps API routes working
module.exports = nextConfig;
