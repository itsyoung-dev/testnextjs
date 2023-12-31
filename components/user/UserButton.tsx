import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

interface UserProps {
    id: string;
    username: string;
    name: string;
    image: string | null;
    bio: string | null;
    onboarded: boolean;
}

const UserButton = async () => {
    const userData = await currentUser();

    if (!userData) return;
    return (
        <div>
            <Image
                src={userData?.imageUrl}
                height={44}
                width={44}
                alt="Profile Image"
                className="rounded-full cursor-pointer hover:border-primary-blurple border-transparent border-4 duration-200 hover:p-0.5"
            ></Image>
        </div>
    );
};

export default UserButton;
