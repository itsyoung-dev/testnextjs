import { NavLinks } from "@/lib/scripts/constants";
import Image from "next/image";
import React from "react";

const NavBar = () => {
    return (
        <header className="py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <a href="">
                            <Image
                                src={"/assets/tns_logo_white_transparent.png"}
                                alt="Logo"
                                width={32}
                                height={32}
                            />
                        </a>
                        <div className="hidden md:flex md:gap-x-5">
                            {NavLinks.map((link) => (
                                <React.Fragment key={link.key}>
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-x-1 rounded-lg px-2 py-1 text-sm text-secondary-gray hover:text-primary-white/[88%] duration-200"
                                    >
                                        {link.text}{" "}
                                        {link.flyout ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-3.5 h-3.5 text-white/40"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        ) : null}
                                    </a>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <div className="hidden md:block">
                            <a
                                href="/login"
                                className="inline-block rounded-lg px-2 py-1 text-sm text-secondary-gray hover:text-primary-white/[88%] duration-200"
                            >
                                Contact
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <a
                                href="/login"
                                className="inline-block rounded-md px-3 py-1.5 text-sm text-secondary-gray hover:text-primary-white duration-200 border border-white/20 hover:border-white/10 hover:bg-white/10 "
                            >
                                Log in
                            </a>
                        </div>
                        <a
                            href="/qqqeeaawwwwwwwwsignup"
                            className="group inline-flex items-center justify-center rounded-md py-1.5 px-3 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-black hover:opacity-80 duration-200"
                        >
                            <span>Sign up</span>
                        </a>
                        <div className="-mr-1 md:hidden"></div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
