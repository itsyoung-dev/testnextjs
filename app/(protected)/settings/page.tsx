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
        <main className="pb-12">
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
                        <TabsTrigger value="account">Account</TabsTrigger>
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
        </main>
    );
};

export default SettingsPage;
