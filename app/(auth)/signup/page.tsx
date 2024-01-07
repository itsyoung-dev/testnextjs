import Footer from "@/components/ui/Footer";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
    return (
        <>
            <SignupForm />
            <Footer tBorder={true} />
        </>
    );
}
