import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tiimg.tistatic.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ This skips ESLint errors during Vercel build
  },
};

export default nextConfig;
