import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/tns_logo_white_black.png";
import Link from "next/link";

interface linkProps {
    name: string;
    href: string;
}

const solutionLinks: linkProps[] = [
    { name: "Reciple", href: "/" },
    { name: "Websites", href: "/" },
    { name: "Software", href: "/" },
    { name: "Hosting", href: "/" },
];
const companyLinks: linkProps[] = [
    { name: "About", href: "/" },
    { name: "Membership", href: "/" },
    { name: "Jobs", href: "/" },
];
const communityLinks: linkProps[] = [
    { name: "Youtube", href: "/" },
    { name: "Github", href: "/" },
    { name: "Discord", href: "/" },
];
const legalLinks: linkProps[] = [
    { name: "Claim", href: "/" },
    { name: "Privacy", href: "/" },
    { name: "Terms", href: "/" },
];

const today = new Date(Date.now()).getFullYear();

interface Props {
    tBorder: boolean;
}

function Footer({ tBorder }: Props) {
    return (
        <div className="w-full h-full spacing-default">
            <div className="md:flex-row md:items-start flex-col items-center flex pt-10 pb-2 border-b border-primary-white/10">
                <div className="md:w-2/5 w-4/5 md:text-left text-center flex flex-col md:items-start items-center pb-8">
                    <Image alt="logo" src={Logo} className="w-10 h-10" />
                    <p className="pt-3 text-secondary-gray text-sm max-w-[265px]">
                        Making the world a better place through constructing
                        elegant hierarchies.
                    </p>
                </div>
                <div className="flex justify-between md:w-[45%] w-full md:gap-12 lg:gap-24 mb-8 text-xs md:text-sm flex-wrap">
                    <div className="  text-white flex flex-col gap-2">
                        <h5>
                            <strong>Solutions</strong>
                        </h5>
                        {solutionLinks.sort().map((link) => (
                            <Link
                                className="text-[#A1A1A1] hover:text-primary-white duration-200"
                                href={link.href}
                                key={link.name}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className=" text-white flex flex-col gap-2">
                        <h5>
                            <strong>Company</strong>
                        </h5>
                        {companyLinks.sort().map((link) => (
                            <Link
                                className="text-[#A1A1A1] hover:text-primary-white duration-200"
                                href={link.href}
                                key={link.name}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className=" text-white flex flex-col gap-2">
                        <h5>
                            <strong>Community</strong>
                        </h5>
                        {communityLinks.sort().map((link) => (
                            <Link
                                className="text-[#A1A1A1] hover:text-primary-white duration-200"
                                href={link.href}
                                key={link.name}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className=" text-white flex flex-col gap-2">
                        <h5>
                            <strong>Legal</strong>
                        </h5>
                        {legalLinks.sort().map((link) => (
                            <Link
                                className="text-[#A1A1A1] hover:text-primary-white duration-200"
                                href={link.href}
                                key={link.name}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <p className="mx-auto max-w-[1440px] text-sm text-secondary-gray py-8">
                © {today} The North Solution. All rights reserved.
            </p>
        </div>
    );
}

export default Footer;
