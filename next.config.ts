import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.226.1', '192.168.226.1:3000'],
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
