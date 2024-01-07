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

export const login = async (values: z.infer<typeof LoginValidation>) => {
    const validatedFields = LoginValidation.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password } = validatedFields.data;

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

    // TODO: Send verification token email
    // TODO: Onboarding

    return { success: "User created" };
};
