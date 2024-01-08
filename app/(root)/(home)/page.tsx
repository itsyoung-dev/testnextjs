import Footer from "@/components/shared/Footer";
import Careers from "@/app/(root)/_components/homepage/Careers";
import Collaboration from "@/app/(root)/_components/homepage/Collaboration";
import Header from "@/app/(root)/_components/homepage/Header";
import Member from "@/app/(root)/_components/homepage/Member";
import Products from "@/app/(root)/_components/homepage/Products";
import Services from "@/app/(root)/_components/homepage/Services";

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
