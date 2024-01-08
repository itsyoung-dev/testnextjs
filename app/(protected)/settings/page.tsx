"use client";

import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const SettingsPage = () => {
    const user = useCurrentUser();

    const onClick = () => {
        signOut();
    };

    return (
        <div>
            <button onClick={onClick} type="submit">
                Sign out
            </button>
        </div>
    );
};

export default SettingsPage;
