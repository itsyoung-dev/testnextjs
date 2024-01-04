"use server";
import { prisma } from "@/utils/Utility";

interface SearchParams {
    userId: string;
}

interface CreationParams {
    userId: string;
    options: object;
}

export async function getUserInfoById({ userId }: SearchParams) {
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

export async function createUser({ userId, options }: CreationParams) {
    try {
        const user = await prisma.user.create({
            data: {
                id: userId,
            },
        });

        return user;
    } catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
}

export async function deleteUser({ userId }: SearchParams) {
    try {
        await prisma.user.delete({
            where: {
                id: userId,
            },
        });
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
