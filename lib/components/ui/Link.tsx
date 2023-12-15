import React from "react";

interface LinkProps {
    href: string;
    content: string;
    bgHex?: string;
    textColor?: string;
    bgOpacity?: string;
}

const Link: React.FC<LinkProps> = ({
    href,
    content,
    bgHex,
    textColor,
    bgOpacity,
}) => {
    return (
        <a
            href={href}
            className={`w-32 h-10 rounded-md flex items-center justify-center ${
                bgHex ? `bg-[#${bgHex}]/${bgOpacity}` : "bg-primary-white"
            } ${textColor ? `text-[#${textColor}]` : "bg-primary-black"}`}
        >
            {content}
        </a>
    );
};

export default Link;
