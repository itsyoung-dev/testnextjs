import NavBar from "@/components/ui/NavBar";
import "@/lib/styles/main.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The North Solution | Public",
    description: "Bouw snel en simpel een professionele website.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}
