"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";

import { LoginValidation } from "@/lib/validations/login";
import { SignupValidation } from "@/lib/validations/signup";

import { prisma } from "@/utils/Utility";
import { getUserByEmail } from "@/actions/user.actions";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const login = async (values: z.infer<typeof LoginValidation>) => {
    const validatedFields = LoginValidation.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password } = validatedFields.data;

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
        return { error: "Invalid fields!" };
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
        return { error: "Token does not exist!" };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
        return { error: "Token has expired!" };
    }

    const existingUser = await getUserByEmail({ email: existingToken.email });

    if (!existingUser) {
        return { error: "Email does not exist!" };
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
