"use server";
import { prisma } from "@/Utils/Utility";
import { revalidatePath } from "next/cache";

interface Params {
    userId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
    path: string;
}

export async function updateUser({
    userId,
    username,
    name,
    bio,
    image,
    path,
}: Params): Promise<void> {
    try {
        await prisma.user.upsert({
            where: {
                id: userId,
            },
            update: {
                username: username.toLowerCase(),
                name,
                bio,
                image,
                onboarded: true,
            },
            create: {
                id: userId,
                username: username.toLowerCase(),
                name,
                bio,
                image,
                onboarded: true,
            },
        });

        if (path === "/profile/edit") {
            revalidatePath(path);
        }
    } catch (error: any) {
        throw new Error(`Failed to upsert user: ${error.message}`);
    }
}
