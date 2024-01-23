"use client";
import * as z from "zod";

import { settings } from "@/actions/dashboard.actions";
import { useSession } from "next-auth/react";
import { useState, useTransition } from "react";
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

const ProfileSettings = ({ form }: { form: any }) => {
    const user = useCurrentUser();
    const [isChanged, setIsChanged] = useState<boolean>(false);

    const handleInputChange = () => {
        setIsChanged(true);
    };

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
                    className="space-y-6"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div>
                        {/* <h4 className="text-2xl font-semibold text-[#ededed] tracking-normal pb-3">
                            Public profile
                        </h4>{" "} */}
                        <div className="p-6 border rounded-md border-white/10 w-full bg-black">
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
                                                className="account-form_input focus-visible:ring-0 !bg-[#0a0a0a]"
                                                onClick={handleInputChange}
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
                                <div className="mt-8 p-6 border rounded-md border-white/10 w-full bg-black">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="account-form_label !text-sm !font-semibold">
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="example@email.com"
                                                        disabled={isPending}
                                                        className="account-form_input focus-visible:ring-0 !bg-[#0a0a0a]"
                                                        onClick={
                                                            handleInputChange
                                                        }
                                                    ></Input>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <p className="text-xs my-3 text-secondary-gray">
                                        Please enter the email address you want
                                        to use to log in with The North
                                        Solution.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-primary-blurple text-primary-white px-4 py-1.5 rounded-md text-sm hover:opacity-80 duration-200 font-medium w-fit"
                    >
                        Update profile
                    </button>
                </form>
            </Form>
        </>
    );
};

export default ProfileSettings;
