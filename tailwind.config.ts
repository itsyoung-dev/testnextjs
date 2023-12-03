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
        },
    },
    plugins: [require("@headlessui/tailwindcss")],
};
export default config;

