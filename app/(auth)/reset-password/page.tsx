"use client";
import type { NextPage } from "next";
import Footer from "@/components/ui/Footer";
import { ResetForm } from "@/components/auth/ResetForm";

const SignInPage: NextPage = () => {
    return (
        <>
            <ResetForm />
            <Footer tBorder={true} />
        </>
    );
};

export default SignInPage;
