import {
    getPasswordResetTokenByEmail,
    getTwoFactorTokenByEmail,
    getVerificationTokenByEmail,
} from "@/actions/auth.actions";
import { prisma } from "@/utils/Utility";

import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";

export const generateTwoFactorToken = async (email: string) => {
    const token = crypto.randomInt(100_000, 1_000_000).toString();
    //  TODO: Change to 15 minutes
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await getTwoFactorTokenByEmail(email);

    if (existingToken) {
        await prisma.twoFactorToken.delete({
            where: {
                id: existingToken.id,
            },
        });
    }

    const twoFactorToken = await prisma.twoFactorToken.create({
        data: {
            email,
            token,
            expires,
        },
    });

    return twoFactorToken;
};

export const generatePasswordResetToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await getPasswordResetTokenByEmail(email);

    if (existingToken) {
        await prisma.passwordResetToken.delete({
            where: {
                id: existingToken.id,
            },
        });
    }

    const passwordResetToken = await prisma.passwordResetToken.create({
        data: {
            email,
            token,
            expires,
        },
    });

    return passwordResetToken;
};

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await getVerificationTokenByEmail(email);

    if (existingToken) {
        await prisma.verificationToken.delete({
            where: {
                id: existingToken.id,
            },
        });
    }

    const verificationToken = await prisma.verificationToken.create({
        data: {
            email,
            token,
            expires,
        },
    });

    return verificationToken;
};
