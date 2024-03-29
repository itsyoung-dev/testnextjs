import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { prisma } from "@/lib/utils";

import { getAccountByUserId, getUserById } from "@/actions/user.actions";
import { UserRole } from "@prisma/client";
import { getTwoFactorConfirmationByUserId } from "@/actions/auth.actions";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
    update,
} = NextAuth({
    pages: {
        signIn: "/login",
        error: "/error",
    },
    events: {
        async linkAccount({ user }) {
            await prisma.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() },
            });
        },
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider !== "credentials") return true;
            const existingUser = await getUserById({ userId: user.id });

            if (!existingUser?.emailVerified) return false;

            if (existingUser.isTwoFactorEnabled) {
                const twoFactorConfirmation =
                    await getTwoFactorConfirmationByUserId(existingUser.id);

                if (!twoFactorConfirmation) return false;

                await prisma.twoFactorConfirmation.delete({
                    where: { id: twoFactorConfirmation.id },
                });
            }

            return true;
        },
        async session({ token, session }) {
            if (token.sub && session.user) session.user.id = token.sub;

            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
            }

            if (session.user) {
                session.user.isTwoFactorEnabled =
                    token.isTwoFactorEnabled as boolean;

                session.user.name = token.name;
                session.user.email = token.email;
                session.user.isOAuth = token.isOAuth as boolean;

                session.user.isMember = token.isMember as boolean;
                session.user.isAffiliate = token.isAffiliate as boolean;
                session.user.isExplorer = token.isExplorer as boolean;
                session.user.isWebClient = token.isWebClient as boolean;
                session.user.isHostingClient = token.isHostingClient as boolean;
            }

            return session;
        },
        async jwt({ token }) {
            if (!token.sub) return token;

            const existingUser = await getUserById({ userId: token.sub });

            if (!existingUser) return token;

            const existingAccount = await getAccountByUserId(existingUser.id);

            token.isOAuth = !!existingAccount;
            token.name = existingUser.name;
            token.email = existingUser.email;
            token.role = existingUser.role;
            token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
            token.isMember = existingUser.member;
            token.isAffiliate = existingUser.affiliate;
            token.isExplorer = existingUser.explorer;
            token.isWebClient = existingUser.webClient;
            token.isHostingClient = existingUser.hostingClient;

            return token;
        },
    },
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    ...authConfig,
});
