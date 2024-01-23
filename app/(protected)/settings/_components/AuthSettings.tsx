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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { UserRole } from "@prisma/client";

const AuthSettings = ({ form }: { form: any }) => {
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
                            Change password
                        </h4>
                        <div className="pt-6 border-t border-white/10 gap-y-4 flex flex-col">
                            <p className="text-sm text-secondary-gray">
                                Export all repositories and profile metadata for
                                @Kajgit. Exports will be available for 7 days.
                            </p>
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="account-form_label !text-sm !font-semibold">
                                            Current password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="******"
                                                disabled={isPending}
                                                className="account-form_input focus-visible:ring-0 !bg-[#0a0a0a]"
                                                type="password"
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
                                        <FormLabel className="account-form_label !text-sm !font-semibold">
                                            New password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="******"
                                                disabled={isPending}
                                                type="password"
                                                className="account-form_input focus-visible:ring-0 !bg-[#0a0a0a]"
                                            ></Input>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <button
                                type="submit"
                                className="bg-[#ededed] px-3.5 py-1.5 rounded-md text-sm hover:opacity-80 duration-200 font-normal w-fit"
                            >
                                Update password
                            </button>
                        </div>
                        {user?.isOAuth === false && (
                            <div className="mt-12">
                                <h4 className="text-2xl font-semibold text-[#ededed] tracking-normal pb-3">
                                    Two Factor Authentication
                                </h4>
                                <div className="pt-6 border-t border-white/10 gap-y-4 flex flex-col">
                                    <p className="text-sm text-secondary-gray">
                                        Export all repositories and profile
                                        metadata for @Kajgit. Exports will be
                                        available for 7 days.
                                    </p>
                                    <FormField
                                        control={form.control}
                                        name="isTwoFactorEnabled"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm !border-white/10 bg-[#0a0a0a]">
                                                <div className="space-y-0.5">
                                                    <FormLabel className="account-form_label !text-sm !text-secondary-gray">
                                                        Toggle two factor
                                                        authentication for your
                                                        account
                                                    </FormLabel>
                                                </div>
                                                <FormControl>
                                                    <Switch
                                                        className="!border-white/10 "
                                                        disabled={isPending}
                                                        checked={field.value}
                                                        onCheckedChange={
                                                            field.onChange
                                                        }
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <button
                                        type="submit"
                                        className="bg-[#ededed] px-3.5 py-1.5 rounded-md text-sm hover:opacity-80 duration-200 font-normal w-fit"
                                    >
                                        Update 2FA
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>New Password</FormLabel>
                                    <Select
                                        disabled={isPending}
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a role" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value={UserRole.ADMIN}>
                                                Admin
                                            </SelectItem>
                                            <SelectItem value={UserRole.USER}>
                                                User
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}

                        <div>
                            <h4 className="text-2xl font-semibold text-[#F85149] tracking-normal pb-3 pt-12">
                                Delete account
                            </h4>
                            <div className="pt-6 border-t border-white/10 gap-y-1 flex flex-col">
                                <p className="text-sm text-secondary-gray">
                                    Permanently remove your Personal Account and
                                    all of its contents from the database.{" "}
                                </p>
                                <p className="text-sm text-secondary-gray">
                                    This action is not reversible, so please
                                    continue with caution.
                                </p>
                                <button
                                    type="submit"
                                    className=" border-white/20 border text-[#F85149] mt-4 px-3.5 py-1.5 rounded-md text-sm hover:opacity-80 duration-200 font-normal w-fit"
                                >
                                    Delete account
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default AuthSettings;
