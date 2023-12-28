"use client";
import React, { SyntheticEvent, useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import type { NextPage } from "next";
import Footer from "@/components/ui/Footer";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignInPage: NextPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const [successfulCreation, setSuccessfulCreation] = useState(false);
    const [complete, setComplete] = useState(false);
    const [errorState, setErrorState] = useState(false);
    const [secondFactor, setSecondFactor] = useState(false);
    const router = useRouter();

    const { isLoaded, signIn, setActive } = useSignIn();

    if (!isLoaded) {
        return null;
    }

    async function create(e: SyntheticEvent) {
        e.preventDefault();
        await signIn
            ?.create({
                strategy: "reset_password_email_code",
                identifier: email,
            })
            .then((_) => {
                setSuccessfulCreation(true);
            })
            .catch((err) => {
                console.error("error", err.errors[0].longMessage);
                toast.error("Something went wrong. Password may be unset.");
            });
    }

    async function reset(e: SyntheticEvent) {
        e.preventDefault();
        await signIn
            ?.attemptFirstFactor({
                strategy: "reset_password_email_code",
                code,
                password,
            })
            .then((result) => {
                if (result.status === "needs_second_factor") {
                    setSecondFactor(true);
                    toast.error(
                        "2FA is required, this UI does not handle that."
                    );
                } else if (result.status === "complete") {
                    setActive({ session: result.createdSessionId });
                    toast.success("You succesfully changed your password.");
                    router.push("/login");
                } else {
                    console.log(result);
                }
            })
            .catch((err) => {
                console.error("error", err.errors[0].longMessage);
                toast.error("Something went wrong. Password may be unset.");
            });
    }

    return (
        <>
            <main className="h-[90vh] w-full bg-gradient-to-b from-black to-[#101010]/30">
                <div className="h-full flex flex-col items-center justify-center">
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
                    <div
                        style={{
                            margin: "auto",
                            maxWidth: "500px",
                        }}
                    >
                        <h1 className="text-white text-center leading-header tracking-text-default text-[28px] font-bold">
                            Reset your password
                        </h1>
                        {!successfulCreation && !complete && (
                            <p className="font-light text-white/80 text-center w-96 pt-3 text-sm">
                                Enter the email address associated with your
                                account and we'll send you a link to reset your
                                password.
                            </p>
                        )}
                        <form
                            className="flex flex-col pt-14"
                            onSubmit={!successfulCreation ? create : reset}
                        >
                            {!successfulCreation && !complete && (
                                <>
                                    <label
                                        htmlFor="email"
                                        className="text-white text-[13px] font-medium leading-text-default tracking-text-default pb-2 focus:outline-none"
                                    >
                                        Your email address
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                        className="account-form_input"
                                    />

                                    <button className="w-full bg-primary-blurple hover:bg-primary-blurple/70 duration-200 text-primary-white h-[40px] mt-[17px] rounded-md leading-text-default tracking-text-default font-normal text-[15px]">
                                        Reset your password
                                    </button>
                                </>
                            )}

                            {successfulCreation && !complete && (
                                <>
                                    <label
                                        htmlFor="password"
                                        className="text-white text-[13px] font-medium leading-text-default tracking-text-default pb-2 focus:outline-none"
                                    >
                                        New password
                                    </label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                        className="account-form_input"
                                    />

                                    <label
                                        htmlFor="password"
                                        className="text-white text-[13px] font-medium leading-text-default tracking-text-default pb-2 pt-3 focus:outline-none"
                                    >
                                        Reset password code
                                    </label>
                                    <input
                                        type="text"
                                        value={code}
                                        onChange={(e) =>
                                            setCode(e.target.value)
                                        }
                                        required
                                        className="account-form_input"
                                    />

                                    <button className="w-full bg-primary-blurple hover:bg-primary-blurple/70 duration-200 text-primary-white h-[40px] mt-[17px] rounded-md leading-text-default tracking-text-default font-normal text-[15px]">
                                        Reset
                                    </button>
                                </>
                            )}
                        </form>
                        {/* <p className="text-primary-white text-sm text-center pt-6">
                            Don't have an account?{" "}
                            <Link
                                href={"/signup"}
                                className="text-primary-blurple"
                            >
                                Sign up
                            </Link>
                        </p> */}
                    </div>
                </div>
            </main>
            <Footer tBorder={true} />
        </>
    );
};

export default SignInPage;
