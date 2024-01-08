import { inter } from "@/constants/font";
import "@/public/styles/main.scss";
import NavBar from "@/components/shared/NavBar";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

export const metadata: Metadata = {
    title: "The North Solution | Auth",
    description: "Bouw snel en simpel een professionele website.",
};

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();
    return (
        <SessionProvider session={session}>
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
                    <div className="">
                        <NavBar />
                        <Toaster
                            position="top-center"
                            toastOptions={{
                                style: { background: "#0f0f0f", color: "#fff" },
                                success: {
                                    duration: 3000,
                                },
                                error: {
                                    duration: 5000,
                                },
                            }}
                        />
                        {children}
                    </div>
                </body>
            </html>
        </SessionProvider>
    );
}
