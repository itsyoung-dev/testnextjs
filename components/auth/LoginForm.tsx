"use client";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { z } from "zod";
import { LoginValidation } from "@/lib/validations/login";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Social } from "./Social";
import { login } from "@/actions/auth.actions";
import { Input } from "../ui/input";

export const LoginForm = () => {
    const [showTwoFactor, setShowTwoFactor] = useState(false);
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginValidation>>({
        resolver: zodResolver(LoginValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginValidation>) => {
        startTransition(() => {
            login(values).then((data) => {
                if (data?.error) toast.error(data.error);
                if (data?.success) toast.success(data.success);
            });
        });
    };

    // const searchParams = useSearchParams();
    // searchParams.get("error") === "OAuthAccountNotLinked"
    //     ? toast.error("Email already in use with different provider!")
    //     : ""; // TODO: fix error handling

    return (
        <>
            <main className="h-screen w-full bg-gradient-to-b from-black to-[#101010]/30 pt-4">
                <div className="h-full flex flex-col items-center justify-center">
                    <div>
                        <h1 className="text-white text-center leading-header tracking-text-default text-[28px] font-bold">
                            Log in to your account
                        </h1>
                        <Form {...form}>
                            <form
                                className="pt-10"
                                onSubmit={form.handleSubmit(onSubmit)}
                            >
                                {showTwoFactor && (
                                    <div className="flex flex-col">
                                        <FormField
                                            control={form.control}
                                            name="code"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="account-form_label">
                                                        Two Factor Code
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            disabled={isPending}
                                                            placeholder="123456"
                                                            className="account-form_input focus-visible:ring-0"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                )}
                                {!showTwoFactor && (
                                    <>
                                        <div className="flex flex-col">
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="account-form_label">
                                                            Email address
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                disabled={
                                                                    isPending
                                                                }
                                                                type="email"
                                                                className="account-form_input focus-visible:ring-0"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="flex flex-col pt-[22px]">
                                            <FormField
                                                control={form.control}
                                                name="password"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="account-form_label">
                                                            Password
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                disabled={
                                                                    isPending
                                                                }
                                                                type="password"
                                                                className="account-form_input focus-visible:ring-0"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
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
                                    </>
                                )}
                                <button
                                    className="account-form_submit"
                                    disabled={isPending}
                                    type="submit"
                                >
                                    {showTwoFactor ? "Confirm" : "Sign in"}
                                </button>
                            </form>
                            {!showTwoFactor && (
                                <>
                                    <div className="mt-[47px] flex items-center justify-between w-full">
                                        <span className="bg-white/10 h-[1px] w-[28%]" />
                                        <p className="text-primary-white tracking-text-default leading-text-default text-sm font-normal">
                                            Or continue with
                                        </p>
                                        <span className="bg-white/10 h-[1px] w-[28%]" />
                                    </div>
                                    <Social />
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </main>
        </>
    );
};
