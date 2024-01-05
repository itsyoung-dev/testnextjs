"use client";
import React, { SyntheticEvent, useState } from "react";
import { useSignIn, useUser } from "@clerk/nextjs";
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
    const router = useRouter();

    const { isLoaded, signIn, setActive } = useSignIn();
    const { user } = useUser();

    if (user && !user.passwordEnabled) router.back();

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
                    toast.error(
                        "2FA is required, this UI does not handle that."
                    );
                } else if (result.status === "complete") {
                    setActive({ session: result.createdSessionId });
                    toast.success("You succesfully changed your password.");
                    setComplete(true);
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
                            className="account-form_wrapper pt-14"
                            onSubmit={!successfulCreation ? create : reset}
                        >
                            {!successfulCreation && !complete && (
                                <>
                                    <label
                                        htmlFor="email"
                                        className="account-form_label"
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

                                    <button className="account-form_submit">
                                        Reset your password
                                    </button>
                                </>
                            )}

                            {successfulCreation && !complete && (
                                <>
                                    <label
                                        htmlFor="password"
                                        className="account-form_label"
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
                                        className="account-form_label"
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

                                    <button className="account-form_submit">
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
