import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/ai-hackathon-2025',
  assetPrefix: '/ai-hackathon-2025',
  images: {
    unoptimized: true,
    loader: 'default',
    path: '/ai-hackathon-2025/_next/image',
  }
}

export default nextConfig;
