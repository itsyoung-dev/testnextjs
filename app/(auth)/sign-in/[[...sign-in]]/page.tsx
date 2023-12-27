import { SignIn } from "@clerk/nextjs";

export const metadata = {
    title: "Sign in | The North Solution",
};

export default function Page() {
    return (
        <SignIn
            appearance={{
                elements: {
                    formButtonPrimary:
                        "bg-primary-blurple hover:bg-primary-blurple/40",
                },
            }}
        />
    );
}
