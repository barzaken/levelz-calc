import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instagram.fhfa4-1.fna.fbcdn.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
