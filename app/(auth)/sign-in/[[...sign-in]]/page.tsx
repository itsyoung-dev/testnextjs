import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/router";

export const metadata = {
    title: "Sign in | The North Solution",
};

export default function Page() {
    const { isLoaded, signIn } = useSignIn();

    if (!isLoaded) {
        // Handle loading state
        return null;
    }
    return <main></main>;
}
