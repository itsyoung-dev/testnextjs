"use client";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { SettingsValidation } from "@/lib/validations/settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSettings from "@/app/(protected)/settings/_components/ProfileSettings";
import AuthSettings from "@/app/(protected)/settings/_components/AuthSettings";

const SettingsPage = () => {
    const user = useCurrentUser();
    const form = useForm<z.infer<typeof SettingsValidation>>({
        resolver: zodResolver(SettingsValidation),
        defaultValues: {
            password: undefined,
            newPassword: undefined,
            name: user?.name || undefined,
            email: user?.email || undefined,
            role: user?.role || undefined,
            isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
        },
    });

    return (
        <main>
            <div className="border-b border-white/10 pb-4">
                <h1 className="text-[#ededed] font-medium text-2xl">
                    Account Settings
                </h1>
                <p className="text-base my-2 text-secondary-gray">
                    Change your personal details and settings
                </p>
            </div>
            <div className="mt-8">
                <Tabs defaultValue="profile" className="flex gap-x-8">
                    <TabsList className="gap-y-0.5">
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        {/* <TypeGate allowedType={user?.isOAuth}> */}
                        <TabsTrigger value="account">Account</TabsTrigger>
                        {/* </TypeGate> */}
                        <TabsTrigger value="notifs">Notifications</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile" className="w-full mt-0 px-5">
                        <ProfileSettings form={form} />
                    </TabsContent>
                    <TabsContent value="account" className="w-full mt-0 px-5">
                        <AuthSettings form={form} />
                    </TabsContent>
                    <TabsContent value="notifs" className="w-full mt-0 px-5">
                        <AuthSettings form={form} />
                    </TabsContent>
                </Tabs>
            </div>
            {/* <Form {...form}>
                <form
                    className="space-y-6 pt-8"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="space-y-6">
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-md relative overflow-hidden flex-1">
                            <div className="p-6">
                                <h4 className="text-lg font-semibold text-[#ededed] tracking-normal leading-6">
                                    Display Name
                                </h4>
                                <p className="text-sm my-3 text-[#ededed]">
                                    Please enter your full name, or a display
                                    name you are comfortable with.
                                </p>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
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
                            </div>
                            <div className="bg-[#0a0a0a] border-t border-white/10 overflow-hidden flex items-center justify-between px-6">
                                <div className="py-2">
                                    <p className="text-sm my-3 text-secondary-gray">
                                        Please use 32 characters at maximum.
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
                                </div> */}
            {/* <FormField
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
                                /> */}
            {/* <div className="bg-[#0a0a0a] border border-white/10 rounded-md relative overflow-hidden flex-1">
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
                        <FormField
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
                        />

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
                        className="bg-white px-3.5 py-1.5 rounded-md text-sm hover:opacity-80 duration-200 font-medium float-right"
                    >
                        Save changes
                    </button>
                </form>
            </Form> */}
        </main>
    );
};

export default SettingsPage;

