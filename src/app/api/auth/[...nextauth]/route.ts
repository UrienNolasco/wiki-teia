import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";
import { db } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
