import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@next-auth/prisma-adapter"], // Apenas se usar Prisma
  },
  typescript: {
    ignoreBuildErrors: true, // Opcional (caso tenha erros de TypeScript no build)
  },
};

export default nextConfig;
