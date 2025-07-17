import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/your-repository-name', // Replace with your actual repo name
  assetPrefix: '/your-repository-name',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

export default nextConfig;
