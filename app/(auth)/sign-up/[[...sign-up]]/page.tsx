import { SignUp } from "@clerk/nextjs";

export const metadata = {
    title: "Sign Up - BinnenNederland",
};

export default function Page() {
    return (
        <SignUp
            appearance={{
                elements: {
                    formButtonPrimary:
                        "bg-primary-blurple hover:bg-primary-blurple/40",
                },
            }}
        />
    );
}
