import { ClerkProvider } from "@clerk/nextjs";
import { inter } from "@/constants/font";
import "@/public/styles/main.scss";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/footers/Footer";
import { dark } from "@clerk/themes";

export const metadata = {
    description: "The North Solution site description",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider appearance={{ baseTheme: dark }}>
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
