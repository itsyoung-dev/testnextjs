import * as z from "zod";

export const UserValidation = z.object({
    email: z
        .string()
        .min(3, { message: "MINIMUM 3 CHARACTERS" })
        .max(30, { message: "MAXIMUM 30 CHARACTERS" })
        .email(),
    password: z
        .string()
        .min(3, { message: "MINIMUM 3 CHARACTERS" })
        .max(30, { message: "MAXIMUM 30 CHARACTERS" }),
});
