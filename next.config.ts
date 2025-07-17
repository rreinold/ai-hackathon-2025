import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/ai-hackathon-2025', // Replace with your actual repo name
  assetPrefix: '/ai-hackathon-2025',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

export default nextConfig;
