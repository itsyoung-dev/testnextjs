"use client";
import { NavLinks } from "@/lib/scripts/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header
            className={`py-8 fixed w-full top-0 ${
                showNavbar ? "" : "bg-black/30"
            } duration-200 ease-in-out`}
        >
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <a href="">
                            <Image
                                src={"/assets/tns_logo_white_transparent.png"}
                                alt="Logo"
                                width={35}
                                height={35}
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
                                className="inline-block rounded-md px-4 py-1 text-sm text-primary-white duration-200 bg-white/10 border border-white/10 hover:border-white/20 shadow-md shadow-black/60"
                            >
                                Log in
                            </a>
                        </div>
                        <a
                            href="/qqqeeaawwwwwwwwsignup"
                            className="group inline-flex items-center justify-center rounded-md py-1 px-4 text-sm font-normal focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-primary-blurple text-primary-white hover:opacity-80 duration-200 shadow-md shadow-primary-black/60"
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
