import "@/public/styles/main.scss";
import type { Metadata } from "next";
import { inter } from "@/constants/font";
import NavBar from "@/components/ui/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
    title: "The North Solution | Home",
    description: "Bouw snel en simpel een professionele website.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider appearance={{ baseTheme: dark }}>
            <html lang="en">
                <head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="assets/icons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="assets/icons//favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="assets/icons//favicon-16x16.png"
                    />
                    <link rel="manifest" href="assets/icons/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="assets/icons/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </head>
                <body className={inter.className}>
                    <NavBar />
                    <main className="isolate">{children}</main>
                </body>
            </html>
        </ClerkProvider>
    );
}
