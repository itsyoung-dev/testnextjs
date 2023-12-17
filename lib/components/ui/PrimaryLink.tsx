import React from "react";

interface LinkProps {
    href: string;
    content: string;
    bgHex?: string;
    textColor?: string;
    bgOpacity?: string;
}

const PrimaryLink: React.FC<LinkProps> = ({
    href,
    content,
    bgHex,
    textColor,
    bgOpacity,
}) => {
    return (
        <a
            href={href}
            className={`w-32 h-10 rounded-md flex items-center justify-center bg-primary-white text-primary-black  mx-3 text-sm`}
        >
            {content}
        </a>
    );
};

export default PrimaryLink;
