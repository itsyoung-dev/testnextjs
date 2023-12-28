"use client";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function SignInForm() {
    const { isLoaded, signIn, setActive } = useSignIn();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    // start the sign In process.
    const form = useForm<z.infer<typeof UserValidation>>({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleSubmit = async (e: any) => {
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
                /*Investigate why the login hasn't completed */
                console.log(result);
            }
        } catch (err: any) {
            console.error("error", err.errors[0].longMessage);
        }
    };

    return (
        <main className="h-screen w-full bg-gradient-to-b from-black to-[101010]">
            <div className="h-full flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-white text-center leading-header tracking-text-default text-[28px] font-bold">
                        Log in to your account
                    </h1>
                    <form className="pt-10">
                        <div className="flex flex-col">
                            <label
                                className="text-white text-[13px] font-medium leading-text-default tracking-text-default pb-2 focus:outline-none"
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
                                className="text-white text-[13px] font-medium leading-text-default tracking-text-default pb-2"
                                htmlFor="email"
                            >
                                Password
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                className="account-form_input"
                            />
                        </div>
                        <button onClick={handleSubmit}>Sign In</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
