import Footer from "@/components/shared/Footer";
import Careers from "@/app/(root)/(home)/_components/Careers";
import Collaboration from "@/app/(root)/(home)/_components/Collaboration";
import Header from "@/app/(root)/(home)/_components/Header";
import Member from "@/app/(root)/(home)/_components/Member";
import Products from "@/app/(root)/(home)/_components/Products";
import Services from "@/app/(root)/(home)/_components/Services";

export default function Page() {
    return (
        <>
            <Header />
            <Collaboration />
            <Careers />
            <Member />
            <Services />
            <Products />
            <Footer tBorder={true} />
        </>
    );
}
