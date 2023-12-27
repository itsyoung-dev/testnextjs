import "@/lib/styles/main.scss";
import NavBar from "@/components/ui/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The North Solution | Affiliate Program",
    description: "Bouw snel en simpel een professionele website.",
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
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
            <body>
                <NavBar />
                {children}
            </body>
        </html>
    );
}

