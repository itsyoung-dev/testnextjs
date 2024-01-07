"use client";
import { useState, useTransition } from "react";
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
import { newPassword, reset } from "@/actions/auth.actions";
import { Input } from "../ui/input";
import { PasswordValidation } from "@/lib/validations/password";
import { useSearchParams } from "next/navigation";

export const NewPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof PasswordValidation>>({
        resolver: zodResolver(PasswordValidation),
        defaultValues: {
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof PasswordValidation>) => {
        startTransition(() => {
            newPassword(values, token).then((data) => {
                if (data?.error) toast.error(data.error);
                if (data?.success) toast.success(data.success);
            });
        });
    };

    return (
        <>
            <main className="h-screen w-full bg-gradient-to-b from-black to-[#101010]/30 pt-4">
                <div className="h-full flex flex-col items-center justify-center">
                    <div>
                        <h1 className="text-white text-center leading-header tracking-text-default text-[28px] font-bold">
                            Enter a new password
                        </h1>
                        <Form {...form}>
                            <form
                                className="pt-5"
                                onSubmit={form.handleSubmit(onSubmit)}
                            >
                                <div className="flex flex-col">
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
                                                        disabled={isPending}
                                                        className="account-form_input focus-visible:ring-0"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <button
                                    className="account-form_submit"
                                    disabled={isPending}
                                    type="submit"
                                >
                                    Reset password
                                </button>
                            </form>
                        </Form>
                    </div>
                </div>
            </main>
        </>
    );
};
