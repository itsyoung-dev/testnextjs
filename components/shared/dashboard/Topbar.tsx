"use client";

import UserButton from "@/components/user/UserButton";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Topbar = () => {
    return (
        <nav className="w-full h-[75px] bg-[#0a0a0a] border-b border-white/10 sticky top-0">
            <div className="flex justify-between items-center w-full h-full px-5">
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Image
                            src="/assets/tns_logo_white_transparent.png"
                            className=""
                            height={32}
                            width={32}
                            alt="Logo"
                        />
                    </Link>
                    <span className="font-semibold text-xl text-[#ffffff24] px-4">
                        /
                    </span>
                    <Link href={"/dashboard"}>
                        <h2 className="text-[#ffffffd9] text-base hover:text-primary-white duration-200">
                            Dashboard
                        </h2>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Dialog>
                        <DialogTrigger>
                            <button className="w-64 bg-black border rounded-md border-white/10 hover:bg-white/5 h-9 flex justify-start flex-row items-center">
                                <span className="text-secondary-gray flex pl-3 text-sm">
                                    <MagnifyingGlassIcon className="w-4 font-bold mr-3" />
                                    Search...
                                </span>
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] h-1/4 p-0 !bg-[#0a0a0a] rounded-md text-primary-white border-white/10">
                            <div className="border rounded-t-md bg-[#0a0a0a]">
                                <input id="name" className="w-full" />
                            </div>
                        </DialogContent>
                    </Dialog>
                    <Link href={"/notifications"}>
                        <div className="mx-4 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer duration-200">
                            <BellIcon className="text-secondary-gray w-[19px] h-auto" />
                        </div>
                    </Link>
                    <UserButton />
                </div>
            </div>
        </nav>
    );
};

export default Topbar;
