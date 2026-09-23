// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Add this to transpile modern JS in libraries like Framer Motion for older iOS
  transpilePackages: ['framer-motion', 'lucide-react'],
};

export default nextConfig;