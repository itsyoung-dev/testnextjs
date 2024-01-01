"use client";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import * as z from "zod";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { OAuthStrategy } from "@clerk/nextjs/server";

interface Props {
    strategy: OAuthStrategy;
    provider: string;
    logoUrl: string;
}

export default function SignInForm() {
    const { isLoaded, signIn, setActive } = useSignIn();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const form = useForm<z.infer<typeof UserValidation>>({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleEmailSubmit = async (e: any) => {
        e.preventDefault();
        if (!isLoaded) {
            return;
        }

        try {
            const result = await signIn.create({
                identifier: emailAddress,
                password,
            });

            if (result.status === "complete") {
                console.log(result);
                await setActive({ session: result.createdSessionId });
                router.push("/");
            } else {
                //TODO Investigate why the login hasn't completed
                console.log(result);
            }
        } catch (err: any) {
            console.error("error", err.errors[0].longMessage);
        }
    };

    const signInWith = async (strategy: OAuthStrategy) => {
        return await signIn?.authenticateWithRedirect({
            strategy,
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/",
        });
    };

    function SignInOAuthButtons({ strategy, provider, logoUrl }: Props) {
        const { signIn } = useSignIn();

        if (!signIn) return;

        const signInWith = (strategy: OAuthStrategy) => {
            return signIn.authenticateWithRedirect({
                strategy,
                redirectUrl: "/sso-callback",
                redirectUrlComplete: "/",
            });
        };

        return (
            <button
                className="border border-white/10 rounded-md h-14 w-full hover:bg-white/10 duration-200"
                onClick={() => signInWith(strategy)}
            >
                <div className="flex justify-center text-primary-white items-center gap-x-2">
                    <img
                        src={logoUrl}
                        className="h-[17px] w-auto"
                        alt="Provider Logo"
                    />
                    <p className="font-normal text-sm tracking-text-default pt-[3px]">
                        {provider}
                    </p>
                </div>
            </button>
        );
    }

    return (
        <>
            <main className="h-[90vh] w-full bg-gradient-to-b from-black to-[#101010]/30">
                <div className="h-full flex flex-col items-center justify-center">
                    <div>
                        <h1 className="text-white text-center leading-header tracking-text-default text-[28px] font-bold">
                            Log in to your account
                        </h1>
                        <form className="pt-10">
                            <div className="flex flex-col">
                                <label
                                    className="account-form_label"
                                    htmlFor="email"
                                >
                                    Email address
                                </label>
                                <input
                                    onChange={(e) =>
                                        setEmailAddress(e.target.value)
                                    }
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="account-form_input"
                                />
                            </div>
                            <div className="flex flex-col pt-[22px]">
                                <label
                                    className="account-form_label"
                                    htmlFor="email"
                                >
                                    Password
                                </label>
                                <input
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="account-form_input"
                                />
                            </div>
                            <div className="flex w-full flex-row-reverse pt-[18px]">
                                <Link
                                    href={"/reset-password"}
                                    className="text-primary-blurple hover:text-primary-blurple/80 duration-200 leading-text-default tracking-text-default font-bold text-[13px]"
                                >
                                    {" "}
                                    Forgot password?
                                </Link>
                            </div>
                            <button
                                onClick={handleEmailSubmit}
                                className="account-form_submit"
                            >
                                Sign in
                            </button>
                            <div className="mt-[47px] flex items-center justify-between w-full">
                                <span className="bg-white/10 h-[1px] w-[28%]" />
                                <p className="text-primary-white tracking-text-default leading-text-default text-sm font-normal">
                                    Or continue with
                                </p>
                                <span className="bg-white/10 h-[1px] w-[28%]" />
                            </div>
                        </form>
                        <div className="mt-[31px] flex gap-[25px]">
                            <SignInOAuthButtons
                                strategy="oauth_google"
                                provider="Google"
                                logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                            />
                            <SignInOAuthButtons
                                strategy="oauth_github"
                                provider="Github"
                                logoUrl="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png"
                            />
                            <SignInOAuthButtons
                                strategy="oauth_discord"
                                provider="Discord"
                                logoUrl="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer tBorder={true} />
        </>
    );
}
