"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { update } from "@/auth";
import { currentUser } from "@/lib/helpers/auth";
import { SettingsValidation } from "@/lib/validations/settings";
import { getUserByEmail, getUserById } from "./user.actions";
import { prisma } from "@/lib/utils";
import { generateVerificationToken } from "@/lib/helpers/tokens";
import { sendVerificationEmail } from "@/lib/helpers/mail";

export const settings = async (values: z.infer<typeof SettingsValidation>) => {
    const user = await currentUser();

    if (!user) {
        return { error: "Unauthorized" };
    }

    const dbUser = await getUserById({ userId: user.id });

    if (!dbUser) {
        return { error: "Unauthorized" };
    }

    if (user.isOAuth) {
        values.email = undefined;
        values.password = undefined;
        values.newPassword = undefined;
        values.isTwoFactorEnabled = undefined;
    }

    if (values.email && values.email !== user.email) {
        const existingUser = await getUserByEmail({ email: values.email });

        if (existingUser && existingUser.id !== user.id) {
            return { error: "Email already in use!" };
        }

        const verificationToken = await generateVerificationToken(values.email);
        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        );

        return { success: "Verification email sent!" };
    }

    if (values.password && values.newPassword && dbUser.password) {
        const passwordsMatch = await bcrypt.compare(
            values.password,
            dbUser.password
        );

        if (!passwordsMatch) {
            return { error: "Incorrect password!" };
        }

        const hashedPassword = await bcrypt.hash(values.newPassword, 10);
        values.password = hashedPassword;
        values.newPassword = undefined;
    }

    const updatedUser = await prisma.user.update({
        where: { id: dbUser.id },
        data: {
            ...values,
        },
    });

    update({
        user: {
            name: updatedUser.name,
            email: updatedUser.email,
            isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
            role: updatedUser.role,
        },
    });

    return { success: "Settings Updated!" };
};
