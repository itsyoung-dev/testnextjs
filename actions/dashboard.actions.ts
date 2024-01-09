"use server";

import * as z from "zod";
import { currentUser } from "@/lib/helpers/auth";
import { SettingsValidation } from "@/lib/validations/settings";
import { getUserById } from "./user.actions";
import { prisma } from "@/lib/utils";

export const settings = async (values: z.infer<typeof SettingsValidation>) => {
    const user = await currentUser();

    if (!user) {
        return { error: "Unauthorized" };
    }

    const dbUser = await getUserById({ userId: user.id });

    if (!dbUser) {
        return { error: "Unauthorized" };
    }

    await prisma.user.update({
        where: { id: dbUser.id },
        data: {
            ...values,
        },
    });

    return { success: "Settings updated" };
};
