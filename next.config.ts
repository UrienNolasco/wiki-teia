import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "@prisma/client",
      "@next-auth/prisma-adapter",
    ], // Adicione ambos
  },
  typescript: {
    ignoreBuildErrors: true, // Temporário (remova depois que resolver)
  },
};

export default nextConfig;
