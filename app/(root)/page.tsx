import Footer from "@/components/footers/Footer";
import Careers from "@/components/homepage/Careers";
import Collaboration from "@/components/homepage/Collaboration";
import Header from "@/components/homepage/Header";
import Member from "@/components/homepage/Member";
import Products from "@/components/homepage/Products";
import Services from "@/components/homepage/Services";

export default function Page() {
    return (
        <>
            <Header />
            <Collaboration />
            <Careers />
            <Member />
            <Services />
            <Products />
            <Footer />
        </>
    );
}
