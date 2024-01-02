"use client";
import React, { useState } from "react";
import { useAuth, useSignUp } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "@/components/ui/Footer";
import { OAuthStrategy } from "@clerk/nextjs/server";
import { prisma } from "@/utils/Utility";
import toast, { Toaster } from "react-hot-toast";

interface Props {
    strategy: OAuthStrategy;
    provider: string;
    logoUrl: string;
}

interface UserInfo {
    type: string;
    plan?: string;
    config?: {
        config1: string;
        config2: string;
        config3: string;
    };
    custom?: boolean;
}

export default function SignUpForm() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState("");
    const router = useRouter();

    const state = useAuth();
    if (state.isLoaded && state.isSignedIn) {
        router.push("/");
    }

    const getUserInfo = async (): Promise<UserInfo> => {
        const searchParam = useSearchParams();
        let type: string = searchParam.get("type") || "explorer";

        let userInfo: UserInfo = { type };

        if (
            type === "membership" ||
            (type === "web" && searchParam.get("plan"))
        ) {
            userInfo.plan = searchParam.get("plan")!;
        }

        if (
            type === "hosting" &&
            searchParam.get("config1") &&
            searchParam.get("config2") &&
            searchParam.get("config3")
        ) {
            userInfo.config = {
                config1: searchParam.get("config1")!,
                config2: searchParam.get("config2")!,
                config3: searchParam.get("config3")!,
            };
        }

        return userInfo;
    };

    getUserInfo().then((res) => {
        console.log(res);
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!isLoaded) {
            return;
        }

        try {
            await signUp.create({
                emailAddress,
                password,
            });

            await signUp.prepareEmailAddressVerification({
                strategy: "email_code",
            });

            setPendingVerification(true);
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2));
            toast.error(
                err.errors[0].longMessage.replace(
                    "email_address",
                    "Email address"
                ) || "Something went wrong."
            );
        }
    };

    // This verifies the user using email code that is delivered.
    const onPressVerify = async (e: any) => {
        e.preventDefault();
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification(
                {
                    code,
                }
            );
            if (completeSignUp.status !== "complete") {
                console.log(JSON.stringify(completeSignUp, null, 2));
            }
            if (completeSignUp.status === "complete") {
                await setActive({ session: completeSignUp.createdSessionId });
                if (completeSignUp.createdUserId) {
                    await prisma.user.create({
                        data: {
                            id: completeSignUp.createdUserId,

                            member: false,
                            hostingClient: false,
                            webClient: false,
                        },
                    });
                }
                router.push("/");
            }
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    const signInWith = (strategy: OAuthStrategy) => {
        if (!signUp) return router.push("/");
        return signUp.authenticateWithRedirect({
            strategy,
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/",
        });
    };

    const SignUpOAuthButtons = ({ strategy, provider, logoUrl }: Props) => {
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
    };

    return (
        <>
            <Toaster
                position="top-center"
                toastOptions={{
                    style: { background: "#0f0f0f", color: "#fff" },
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                }}
            />
            <main className="h-[90vh] w-full bg-gradient-to-b from-black to-[#101010]/30">
                <div className="h-full flex flex-col items-center justify-center">
                    {!pendingVerification && (
                        <>
                            <h1 className="text-white text-center leading-header tracking-text-default text-[28px] font-bold">
                                Create an account
                            </h1>
                            <div>
                                <form className="pt-9">
                                    <div className="flex gap-x-[23px]">
                                        <div className="account-form_wrapper pt-[22px]">
                                            <label
                                                htmlFor="email"
                                                className="account-form_label"
                                            >
                                                Name{" "}
                                                <span className="text-red-400">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                onChange={(e) =>
                                                    setEmailAddress(
                                                        e.target.value
                                                    )
                                                }
                                                id="email"
                                                name="email"
                                                type="email"
                                                className="account-form_input !w-[190px]"
                                            />
                                        </div>
                                        <div className="account-form_wrapper pt-[22px]">
                                            <label
                                                htmlFor="number"
                                                className="account-form_label"
                                            >
                                                Phone number
                                            </label>
                                            <input
                                                // onChange={(e) =>
                                                //     setEmailAddress(
                                                //         e.target.value
                                                //     )
                                                // }
                                                id="number"
                                                name="number"
                                                type="number"
                                                className="account-form_input !w-[190px]"
                                            />
                                        </div>
                                    </div>
                                    <div className="account-form_wrapper pt-[22px]">
                                        <label
                                            htmlFor="email"
                                            className="account-form_label"
                                        >
                                            Email{" "}
                                            <span className="text-red-400">
                                                *
                                            </span>
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
                                    <div className="account-form_wrapper pt-[22px]">
                                        <label
                                            htmlFor="password"
                                            className="account-form_label"
                                        >
                                            Password{" "}
                                            <span className="text-red-400">
                                                *
                                            </span>
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
                                    <button
                                        className="account-form_submit !mt-[35px]"
                                        onClick={handleSubmit}
                                    >
                                        Continue
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
                                    <SignUpOAuthButtons
                                        strategy="oauth_google"
                                        provider="Google"
                                        logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                                    />
                                    <SignUpOAuthButtons
                                        strategy="oauth_github"
                                        provider="Github"
                                        logoUrl="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png"
                                    />
                                    <SignUpOAuthButtons
                                        strategy="oauth_discord"
                                        provider="Discord"
                                        logoUrl="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    {pendingVerification && (
                        <>
                            <h1 className="text-white text-center leading-header tracking-text-default text-[28px] font-bold">
                                Verify email
                            </h1>
                            <p className="font-light text-white/80 text-center w-96 pt-3 text-sm">
                                An email has been sent to you with a
                                verification code. This step is required in
                                order to create your account.
                            </p>
                            <form>
                                <input
                                    value={code}
                                    placeholder="Code"
                                    className="account-form_input w-full mt-7"
                                    onChange={(e) => setCode(e.target.value)}
                                />
                                <button
                                    onClick={onPressVerify}
                                    className="account-form_submit !mt-[10px]"
                                >
                                    Submit
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </main>
            <Footer tBorder={true} />
        </>
    );
}
