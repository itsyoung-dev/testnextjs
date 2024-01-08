"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";

import { LoginValidation } from "@/lib/validations/login";
import { SignupValidation } from "@/lib/validations/signup";

import { prisma } from "@/lib/utils";
import { getUserByEmail } from "@/actions/user.actions";
import { signIn, signOut } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import {
    generatePasswordResetToken,
    generateTwoFactorToken,
    generateVerificationToken,
} from "@/lib/helpers/tokens";
import {
    sendPasswordResetEmail,
    sendTwoFactorTokenEmail,
    sendVerificationEmail,
} from "@/lib/helpers/mail";
import { ResetValidation } from "@/lib/validations/reset";
import { PasswordValidation } from "@/lib/validations/password";

export const login = async (values: z.infer<typeof LoginValidation>) => {
    const validatedFields = LoginValidation.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }

    const { email, password, code } = validatedFields.data;

    const existingUser = await getUserByEmail({ email });

    if (!existingUser || !existingUser.email || !existingUser?.password) {
        return { error: "Email does not exist" };
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(
            existingUser.email
        );

        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        );

        return { success: "Confirmation email sent" };
    }

    if (existingUser.isTwoFactorEnabled && existingUser.email) {
        if (code) {
            const twoFactorToken = await getTwoFactorTokenByEmail(
                existingUser.email
            );

            if (!twoFactorToken) {
                return { error: "Invalid code" };
            }

            if (twoFactorToken.token !== code) {
                return { error: "Invalid code" };
            }

            const hasExpired = new Date(twoFactorToken.expires) < new Date();

            if (hasExpired) {
                return { error: "Code expired" };
            }

            await prisma.twoFactorToken.delete({
                where: { id: twoFactorToken.id },
            });

            const existingConfirmation = await getTwoFactorConfirmationByUserId(
                existingUser.id
            );

            if (existingConfirmation) {
                await prisma.twoFactorConfirmation.delete({
                    where: { id: existingConfirmation.id },
                });
            }

            await prisma.twoFactorConfirmation.create({
                data: {
                    userId: existingUser.id,
                },
            });
        } else {
            const twoFactorToken = await generateTwoFactorToken(
                existingUser.email
            );
            await sendTwoFactorTokenEmail(
                twoFactorToken.email,
                twoFactorToken.token
            );

            return { twoFactor: true };
        }
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" };
                default:
                    return { error: "Something went wrong" };
            }
        }

        throw error;
    }
};

export const signup = async (values: z.infer<typeof SignupValidation>) => {
    const validatedFields = SignupValidation.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail({ email });

    if (existingUser) {
        return { error: "Email already in use" };
    }

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
    );

    // TODO: Onboarding

    return { success: "Confirmation email sent" };
};

export const getVerificationTokenByToken = async (token: string) => {
    try {
        const verificatioNToken = await prisma.verificationToken.findUnique({
            where: { token },
        });

        return verificatioNToken;
    } catch (error) {
        return null;
    }
};

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificatioNToken = await prisma.verificationToken.findFirst({
            where: { email },
        });

        return verificatioNToken;
    } catch (error) {
        return null;
    }
};

export const newVerification = async (token: string) => {
    const existingToken = await getVerificationTokenByToken(token);

    if (!existingToken) {
        return { error: "Token does not exist" };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
        return { error: "Token has expired" };
    }

    const existingUser = await getUserByEmail({ email: existingToken.email });

    if (!existingUser) {
        return { error: "Email does not exist" };
    }

    await prisma.user.update({
        where: { id: existingUser.id },
        data: {
            emailVerified: new Date(),
            email: existingToken.email,
        },
    });

    await prisma.verificationToken.delete({ where: { id: existingToken.id } });

    return { success: "Email verified" };
};

export const reset = async (values: z.infer<typeof ResetValidation>) => {
    const validatedFields = ResetValidation.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid email" };
    }

    const { email } = validatedFields.data;

    const existingUser = await getUserByEmail({ email });

    if (!existingUser)
        return {
            error: "Email not found",
        };

    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token
    );

    return {
        success: "Reset email sent",
    };
};

export const getPasswordResetTokenByToken = async (token: string) => {
    try {
        const passwordResetToken = await prisma.passwordResetToken.findUnique({
            where: { token },
        });

        return passwordResetToken;
    } catch (error) {
        return null;
    }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
    try {
        const passwordResetToken = await prisma.passwordResetToken.findFirst({
            where: { email },
        });

        return passwordResetToken;
    } catch (error) {
        return null;
    }
};

export const newPassword = async (
    values: z.infer<typeof PasswordValidation>,
    token?: string | null
) => {
    try {
        if (!token) {
            return { error: "Missing token" };
        }

        const validatedFields = PasswordValidation.safeParse(values);

        if (!validatedFields.success) {
            return { error: "Invalid fields" };
        }

        const { password } = validatedFields.data;

        const existingToken = await getPasswordResetTokenByToken(token);

        if (!existingToken) {
            return { error: "Missing token" };
        }

        const hasExpired = new Date(existingToken.expires) < new Date();

        if (hasExpired) {
            return { error: "Token has expired" };
        }

        const existingUser = await getUserByEmail({
            email: existingToken.email,
        });

        if (!existingUser) {
            return { error: "Email does not exist" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.update({
            where: { id: existingUser.id },
            data: { password: hashedPassword },
        });

        await prisma.passwordResetToken.delete({
            where: { id: existingToken.id },
        });

        return { success: "Password updated" };
    } catch (error) {
        return null;
    }
};

export const getTwoFactorTokenByToken = async (token: string) => {
    try {
        const twoFactorToken = await prisma.twoFactorToken.findUnique({
            where: { token },
        });

        return twoFactorToken;
    } catch (error) {
        return null;
    }
};

export const getTwoFactorTokenByEmail = async (email: string) => {
    try {
        const twoFactorToken = await prisma.twoFactorToken.findFirst({
            where: { email },
        });

        return twoFactorToken;
    } catch (error) {
        return null;
    }
};

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
    try {
        const twoFactorConfirmation =
            await prisma.twoFactorConfirmation.findUnique({
                where: { userId },
            });

        return twoFactorConfirmation;
    } catch (error) {
        return null;
    }
};

export const logout = async () => {
    await signOut();
};
