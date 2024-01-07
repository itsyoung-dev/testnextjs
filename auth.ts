import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { prisma } from "@/utils/Utility";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    ...authConfig,
});
