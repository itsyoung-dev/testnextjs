import * as z from "zod";

export const ResetValidation = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
});
