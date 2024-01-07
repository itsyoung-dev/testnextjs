"use client";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/ui/Footer";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/auth.actions";
import toast from "react-hot-toast";
import { BarLoader } from "react-spinners";
import Link from "next/link";

const NewVerificationForm = () => {
    const searchParams = useSearchParams();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        if (success || error) return;

        if (!token) return toast.error("Missing token");
        newVerification(token)
            .then((data) => {
                if (data?.success) {
                    toast.success(data.success);
                    setSuccess(true);
                }
                if (data?.error && !data?.success) {
                    toast.error(data.error);
                    setError(true);
                }
            })
            .catch(() => {
                toast.error("Something went wrong");
            });
    }, [token, success, error]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <>
            <main className="h-[90vh] w-full bg-gradient-to-b from-black to-[#101010]/30">
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="m-auto max-w-lg flex flex-col items-center justify-center">
                        <h1 className="text-white text-center leading-header tracking-text-default text-[28px] font-bold">
                            Verifying email address
                        </h1>
                        <p className="font-light text-white/80 text-center w-96 pt-3 text-sm">
                            Email verification is essential in order to keep the
                            website safe and secure.
                        </p>
                        {!success && !error ? (
                            <BarLoader
                                color="#fff"
                                className="w-48 mt-6 mx-auto"
                            />
                        ) : (
                            <Link
                                href={"/login"}
                                className="mt-4 tex-center mx-auto text-primary-blurple hover:text-primary-blurple/80 duration-200 leading-text-default tracking-text-default font-bold text-[15px]"
                            >
                                Log in now
                            </Link>
                        )}
                    </div>
                </div>
            </main>
            <Footer tBorder={true} />
        </>
    );
};

export default NewVerificationForm;
