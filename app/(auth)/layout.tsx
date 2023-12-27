import { ClerkProvider } from "@clerk/nextjs";
import { inter } from "@/lib/scripts/font";
import "@/lib/styles/main.scss";
import NavBar from "@/lib/components/ui/NavBar";
import Footer from "@/lib/components/footers/Footer";

export const metadata = {
    description: "The North Solution site description",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <div className="h-full w-full flex flex-col justify-between">
                        <NavBar />
                        {children}
                        <Footer />
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
