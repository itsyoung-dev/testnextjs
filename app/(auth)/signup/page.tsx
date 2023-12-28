"use client";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Footer from "@/components/ui/Footer";
import { OAuthStrategy } from "@clerk/nextjs/server";

interface Props {
    strategy: OAuthStrategy;
    provider: string;
    logoUrl: string;
}

export default function SignUpForm() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState("");
    const router = useRouter();

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
                /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
                console.log(JSON.stringify(completeSignUp, null, 2));
            }
            if (completeSignUp.status === "complete") {
                await setActive({ session: completeSignUp.createdSessionId });
                router.push("/");
            }
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    function SignUpOAuthButtons({ strategy, provider, logoUrl }: Props) {
        const { signUp } = useSignUp();

        if (!signUp) return;

        const signInWith = (strategy: OAuthStrategy) => {
            return signUp.authenticateWithRedirect({
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
                    <h1 className="text-white text-center leading-header tracking-text-default text-[28px] font-bold">
                        Create an account
                    </h1>
                    {!pendingVerification && (
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
                                                setEmailAddress(e.target.value)
                                            }
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="account-form_input !w-[190px]"
                                        />
                                    </div>
                                    <div className="account-form_wrapper pt-[22px]">
                                        <label
                                            htmlFor="email"
                                            className="account-form_label"
                                        >
                                            Phone number
                                        </label>
                                        <input
                                            onChange={(e) =>
                                                setEmailAddress(e.target.value)
                                            }
                                            id="email"
                                            name="email"
                                            type="email"
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
                                        <span className="text-red-400">*</span>
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
                                        <span className="text-red-400">*</span>
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
                    )}
                    {pendingVerification && (
                        <div>
                            <form>
                                <input
                                    value={code}
                                    placeholder="Code..."
                                    onChange={(e) => setCode(e.target.value)}
                                />
                                <button onClick={onPressVerify}>
                                    Verify Email
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </main>
            <Footer tBorder={true} />
        </>
    );
}
