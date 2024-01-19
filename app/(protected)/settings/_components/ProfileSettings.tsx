"use client";
import * as z from "zod";

import { settings } from "@/actions/dashboard.actions";
import { useSession } from "next-auth/react";
import { useTransition } from "react";
import { SettingsValidation } from "@/lib/validations/settings";
import toast from "react-hot-toast";
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
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { Switch } from "@/components/ui/switch";

const ProfileSettings = ({ form }: { form: any }) => {
    const user = useCurrentUser();

    const { update } = useSession();
    const [isPending, startTransition] = useTransition();

    const onSubmit = (values: z.infer<typeof SettingsValidation>) => {
        startTransition(() => {
            settings(values)
                .then((data) => {
                    if (data.error) {
                        toast.error(data?.error);
                    }

                    if (data.success) {
                        update();
                        toast.success(data?.success);
                    }
                })
                .catch((err) => toast.error("Something went wrong"));
        });
    };
    return (
        <>
            <Form {...form}>
                <form
                    className="space-y-2"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div>
                        <h4 className="text-2xl font-semibold text-[#ededed] tracking-normal pb-3">
                            Public profile
                        </h4>{" "}
                        <div className="pt-6 border-t border-white/10">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="account-form_label !text-sm !font-semibold">
                                            Display name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Your name"
                                                disabled={isPending}
                                                className="account-form_input focus-visible:ring-0 !bg-primary-black"
                                            ></Input>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <p className="text-xs my-3 text-secondary-gray">
                                Please enter your full name, or a display name
                                you are comfortable with.
                            </p>
                        </div>
                        {user?.isOAuth === false && (
                            <>
                                <div className="bg-[#0a0a0a] border border-white/10 rounded-md relative overflow-hidden flex-1">
                                    <div className="p-6">
                                        <h4 className="text-lg font-semibold text-[#ededed] tracking-normal leading-6">
                                            Email
                                        </h4>
                                        <p className="text-sm my-3 text-[#ededed]">
                                            Please enter the email address you
                                            want to use to log in with Vercel.
                                        </p>
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="example@email.com"
                                                            disabled={isPending}
                                                            className="account-form_input focus-visible:ring-0 !bg-primary-black"
                                                        ></Input>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="bg-[#0a0a0a] border-t border-white/10 overflow-hidden flex items-center justify-between px-6">
                                        <div className="py-2">
                                            <p className="text-sm my-3 text-secondary-gray">
                                                We will email you to verify the
                                                change.
                                            </p>
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-white px-3.5 py-1.5 rounded-md text-sm hover:opacity-80 duration-200 font-normal float-right"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
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
                                                    placeholder="example@email.com"
                                                    type="email"
                                                    disabled={isPending}
                                                    className="account-form_input focus-visible:ring-0"
                                                ></Input>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="bg-[#0a0a0a] border border-white/10 rounded-md relative overflow-hidden flex-1">
                                    <div className="p-6">
                                        <h4 className="text-lg font-semibold text-[#ededed] tracking-normal leading-6">
                                            Password
                                        </h4>
                                        <p className="text-sm my-3 text-[#ededed]">
                                            Please enter your full name, or a
                                            display name you are comfortable
                                            with.
                                        </p>
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="account-form_label">
                                                        Current password
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="******"
                                                            disabled={isPending}
                                                            className="account-form_input focus-visible:ring-0 !bg-primary-black"
                                                        ></Input>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="newPassword"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="account-form_label">
                                                        New password
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="******"
                                                            disabled={isPending}
                                                            className="account-form_input focus-visible:ring-0 !bg-primary-black"
                                                        ></Input>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="bg-[#0a0a0a] border-t border-white/10 overflow-hidden flex items-center justify-between px-6">
                                        <div className="py-2">
                                            <p className="text-sm my-3 text-secondary-gray">
                                                We will email you to verify the
                                                change.
                                            </p>
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-white px-3.5 py-1.5 rounded-md text-sm hover:opacity-80 duration-200 font-normal float-right"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                        {user?.isOAuth === false && (
                            <FormField
                                control={form.control}
                                name="isTwoFactorEnabled"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                        <div className="space-y-0.5">
                                            <FormLabel>
                                                Two Factor Authentication
                                            </FormLabel>
                                            <FormDescription>
                                                Enable two factor authentication
                                                for your account
                                            </FormDescription>
                                        </div>
                                        <FormControl>
                                            <Switch
                                                disabled={isPending}
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-[#ededed] px-3.5 py-1.5 rounded-md text-sm hover:opacity-80 duration-200 font-normal w-fit"
                    >
                        Update profile
                    </button>
                </form>
            </Form>
        </>
    );
};

export default ProfileSettings;

