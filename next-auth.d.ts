import { UserRole } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
    role: UserRole;
    isTwoFactorEnabled: boolean;
    isOAuth: boolean;
    isMember: boolean;
    isExplorer: boolean;
    isAffiliate: boolean;
    isWebClient: boolean;
    isHostingClient: boolean;
};

declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    }
}
