"use client";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { z } from "zod";
import { SignupValidation } from "@/lib/validations/signup";
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
import { signup } from "@/actions/auth.actions";
import { Input } from "../ui/input";

export const SignupForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const urlError =
        searchParams.get("error") === "OAuthAccountNotLinked"
            ? "Email already in use with different provider!"
            : "";

    const [showTwoFactor, setShowTwoFactor] = useState(false);
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            email: "",
            password: "",
            name: "",
            phone_number: 0,
        },
    });

    const onSubmit = (values: z.infer<typeof SignupValidation>) => {
        startTransition(() => {
            signup(values).then((data) => {
                if (data.error) toast.error(data.error);
                if (data.success) toast.success(data.success);
            });
        });
    };

    return (
        <main className="h-screen w-full bg-gradient-to-b from-black to-[#101010]/30 pt-6">
            <div className="h-full flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-white text-center leading-header tracking-text-default text-[28px] font-bold">
                        Create an account
                    </h1>
                    <Form {...form}>
                        <form
                            className="pt-9"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <div className="flex gap-x-[23px]">
                                <div className="account-form_wrapper pt-[22px]">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="account-form_label">
                                                    Name{" "}
                                                    <span className="text-red-400">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        disabled={isPending}
                                                        type="text"
                                                        className="account-form_input focus-visible:ring-0 !w-[190px]"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="account-form_wrapper pt-[22px]">
                                    <FormField
                                        control={form.control}
                                        name="phone_number"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="account-form_label">
                                                    Phone number
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        disabled={isPending}
                                                        type="number"
                                                        className="account-form_input focus-visible:ring-0 !w-[190px]"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="account-form_wrapper pt-[22px]">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="account-form_label">
                                                Email address{" "}
                                                <span className="text-red-400">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    type="email"
                                                    className="account-form_input focus-visible:ring-0"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="account-form_wrapper pt-[22px]">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="account-form_label">
                                                Password{" "}
                                                <span className="text-red-400">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
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
                            <button
                                className="account-form_submit"
                                disabled={isPending}
                                type="submit"
                            >
                                Continue
                            </button>
                        </form>
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
                    </Form>
                </div>
            </div>
        </main>
    );
};
