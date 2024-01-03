"use server";
import { prisma } from "@/utils/Utility";

interface Params {
    userId: string;
}

export async function getUserInfoById({ userId }: Params) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: userId,
            },
        });

        return user;
    } catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
}

// export async function fetchUser(userId: string) {
//     try {
//         return await prisma.user.findFirst({ where: { id: userId } });
//     } catch (error: any) {
//         throw new Error(`Failed to fetch user: ${error.message}`);
//     }
// }
