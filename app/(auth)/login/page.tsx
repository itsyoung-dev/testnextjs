import { LoginForm } from "@/components/auth/LoginForm";
import Footer from "@/components/ui/Footer";

const LoginPage = () => {
    return (
        <>
            <LoginForm />
            <Footer tBorder={true} />
        </>
    );
};

export default LoginPage;
