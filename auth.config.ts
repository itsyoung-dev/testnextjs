import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginValidation } from "@/lib/validations/login";
import { getUserByEmail } from "@/actions/user.actions";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginValidation.safeParse(credentials);

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;

                    const user = await getUserByEmail({ email });
                    if (!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password
                    );

                    if (passwordsMatch) return user;
                }

                return null;
            },
        }),
    ],
} satisfies NextAuthConfig;
