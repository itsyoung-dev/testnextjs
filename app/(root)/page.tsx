import Footer from "@/lib/components/footers/Footer";
import Careers from "@/lib/components/homepage/Careers";
import Collaboration from "@/lib/components/homepage/Collaboration";
import Header from "@/lib/components/homepage/Header";
import Member from "@/lib/components/homepage/Member";
import Products from "@/lib/components/homepage/Products";
import Services from "@/lib/components/homepage/Services";

export default function Page() {
    return <>
    <Header />
    <Collaboration />
    <Careers />
    <Member />
    <Services />
    <Products />
    <Footer />
    </>;
}
