import { SignIn } from "@clerk/nextjs";

export const metadata = {
    title: "Sign In - BinnenNederland"
};

export default function Page() {
    return <SignIn appearance={{
        elements: {
            formButtonPrimary: 'bg-orange-400 hover:bg-orange-500'
        }
    }}/>;
};
