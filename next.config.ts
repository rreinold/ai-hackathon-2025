import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(process.env.NODE_ENV !== 'development' && {
    basePath: '/ai-hackathon-2025',
  }),
}

export default nextConfig;
