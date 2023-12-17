import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-blurple": "#5865F2",
                "primary-black": "#000",
                "primary-white": "#fff",
                "secondary-gray": "#a1a1a1",
            },
            letterSpacing: {
                "text-default": "-2%",
            },
            lineHeight: {
                "text-default": "120%",
                header: "105.3%",
            },
        },
    },
    plugins: [require("@headlessui/tailwindcss")],
};
export default config;

