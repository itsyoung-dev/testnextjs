import * as z from "zod";

import { UserRole } from "@prisma/client";

export const SettingsValidation = z
    .object({
        name: z.optional(z.string()),
        isTwoFactorEnabled: z.optional(z.boolean()),
        role: z.enum([
            UserRole.ADMIN,
            UserRole.USER,
            UserRole.MANAGER,
            UserRole.STAFF,
        ]),
        email: z.optional(z.string().email()),
        password: z.optional(z.string().min(6)),
        newPassword: z.optional(z.string().min(6)),
    })
    .refine(
        (data) => {
            if (data.password && !data.newPassword) {
                return false;
            }

            return true;
        },
        {
            message: "New password is required!",
            path: ["newPassword"],
        }
    )
    .refine(
        (data) => {
            if (data.newPassword && !data.password) {
                return false;
            }

            return true;
        },
        {
            message: "Password is required!",
            path: ["password"],
        }
    );
