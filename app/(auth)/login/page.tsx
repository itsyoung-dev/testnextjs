import { LoginForm } from "@/components/auth/LoginForm";
import Footer from "@/components/shared/Footer";

const LoginPage = () => {
    return (
        <>
            <LoginForm />
            <Footer tBorder={true} />
        </>
    );
};

export default LoginPage;
