"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord, FaGithub } from "react-icons/fa";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");

    const onClick = (provider: "google" | "github" | "discord") => {
        signIn(provider, {
            callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        });
    };

    return (
        <div className="mt-[31px] flex gap-[25px]">
            <button
                className="border border-white/10 rounded-md h-14 w-full hover:bg-white/10 duration-200"
                onClick={() => onClick("google")}
            >
                <div className="flex justify-center text-primary-white items-center gap-x-2">
                    <FcGoogle className="w-5 h-5" />
                    <p className="font-normal text-sm tracking-text-default pt-[3px]">
                        Google
                    </p>
                </div>
            </button>
            <button
                className="border border-white/10 rounded-md h-14 w-full hover:bg-white/10 duration-200"
                onClick={() => onClick("github")}
            >
                <div className="flex justify-center text-primary-white items-center gap-x-2">
                    <FaGithub className="w-5 h-5" />
                    <p className="font-normal text-sm tracking-text-default pt-[3px]">
                        Github
                    </p>
                </div>
            </button>
            <button
                className="border border-white/10 rounded-md h-14 w-full hover:bg-white/10 duration-200"
                onClick={() => onClick("discord")}
            >
                <div className="flex justify-center text-primary-white items-center gap-x-2">
                    <FaDiscord className="w-5 h-5 text-primary-blurple" />
                    <p className="font-normal text-sm tracking-text-default pt-[3px]">
                        Discord
                    </p>
                </div>
            </button>
        </div>
    );
};
