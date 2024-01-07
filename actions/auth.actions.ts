"use server";
import * as z from "zod";

import { LoginValidation } from "@/lib/validations/login";
import { SignupValidation } from "@/lib/validations/signup";

export const login = async (values: z.infer<typeof LoginValidation>) => {
    const validatedFields = LoginValidation.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    return { success: "Email sent!" };
};

export const signup = async (values: z.infer<typeof SignupValidation>) => {
    const validatedFields = SignupValidation.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    return { success: "Email sent!" };
};
