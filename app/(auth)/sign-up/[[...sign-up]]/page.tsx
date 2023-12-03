import { SignUp } from "@clerk/nextjs";


export const metadata = {
    title: "Sign Up - BinnenNederland"
};

export default function Page() {
    return <SignUp appearance={{
        elements: {
            formButtonPrimary: 'bg-orange-400 hover:bg-orange-500'
        }
    }}/>;
};
