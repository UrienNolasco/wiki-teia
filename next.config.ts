import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore - Ignora o erro de tipo temporariamente
    turbopack: false,
  },
};

export default nextConfig;
