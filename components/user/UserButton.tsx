import React from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { ExternalLinkIcon, GearIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const UserButton = () => {
    const user = useCurrentUser();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none !overflow-auto">
                <Avatar className="rounded-full">
                    <AvatarImage src={user?.image || ""} />
                    <AvatarFallback className="bg-[url('https://img.clerk.com/preview.png?size=144&seed=1705274105765&initials=AD&isSquare=true&bgType=marble&bgColor=5865F2&fgType=silhouette&fgColor=FFFFFF&type=user')] bg-contain">
                        {/* <FaUser size={27} className="text-[#E1E2E4] mt-3" /> */}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-60 border border-white/10 py-3 mt-3 rounded-xl"
                align="end"
            >
                <div className="py-2 px-5 text-white font-medium text-base">
                    Hi, {user?.name}
                </div>
                <Link href={"/dashboard"}>
                    <DropdownMenuItem className="py-2 px-5">
                        Dashboard
                    </DropdownMenuItem>
                </Link>
                <Link href={"/settings"}>
                    <DropdownMenuItem className="py-2 px-5 justify-between">
                        Settings
                        <GearIcon className="h-[18px] w-[18px] mr-2" />
                    </DropdownMenuItem>
                </Link>
                <div className="bg-white/10 h-[1px] mx-3 my-2"></div>
                <Link href={"/"}>
                    <DropdownMenuItem className="py-2 px-5 justify-between">
                        Homepage
                        <ExternalLinkIcon className="h-[18px] w-[18px] mr-2" />
                    </DropdownMenuItem>
                </Link>
                <LogoutButton>
                    <DropdownMenuItem className="py-2 px-5">
                        Log out
                    </DropdownMenuItem>
                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserButton;
