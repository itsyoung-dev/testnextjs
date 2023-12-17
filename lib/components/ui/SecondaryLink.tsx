import React from "react";

interface LinkProps {
    href: string;
    content: string;
    bgHex?: string;
    textColor?: string;
    bgOpacity?: string;
}

const SecondaryLink: React.FC<LinkProps> = ({
    href,
    content,
    bgHex,
    textColor,
    bgOpacity,
}) => {
    return (
        <a
            href={href}
            className={`w-32 h-10 rounded-md flex items-center justify-center bg-primary-white/10 text-primary-white mx-3 text-sm`}
        >
            {content}
        </a>
    );
};

export default SecondaryLink;
