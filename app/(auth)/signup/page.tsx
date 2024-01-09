import Footer from "@/components/shared/Footer";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
    return (
        <>
            <SignupForm />
            <Footer tBorder={true} />
        </>
    );
}
