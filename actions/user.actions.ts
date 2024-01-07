"use server";
import { prisma } from "@/utils/Utility";

interface CreationParams {
    userId: string;
    options: object;
}

export async function getUserById({ userId }: { userId: string }) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });

        return user;
    } catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
}

export async function getUserByEmail({ email }: { email: string }) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
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

export async function deleteUser({ userId }: { userId: string }) {
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
