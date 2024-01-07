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
import { reset } from "@/actions/auth.actions";
import { Input } from "../ui/input";
import { ResetValidation } from "@/lib/validations/reset";

export const ResetForm = () => {
    const [showTwoFactor, setShowTwoFactor] = useState(false);
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ResetValidation>>({
        resolver: zodResolver(ResetValidation),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (values: z.infer<typeof ResetValidation>) => {
        startTransition(() => {
            reset(values).then((data) => {
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
                            Forgot your password?
                        </h1>
                        <p className="font-light text-white/80 text-center w-96 pt-3 text-sm">
                            We will send you a link where you can reset your
                            password.
                        </p>
                        <Form {...form}>
                            <form
                                className="pt-5"
                                onSubmit={form.handleSubmit(onSubmit)}
                            >
                                <div className="flex flex-col">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="account-form_label">
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        disabled={isPending}
                                                        placeholder="john.doe@example.com"
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
                                    Send reset email
                                </button>
                            </form>
                        </Form>
                    </div>
                </div>
            </main>
        </>
    );
};
