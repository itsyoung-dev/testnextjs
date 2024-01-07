import * as z from "zod";

export const PasswordValidation = z.object({
    password: z.string().min(6, {
        message: "Minimum of 6 characters required",
    }),
});
