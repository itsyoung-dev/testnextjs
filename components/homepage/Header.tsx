import Link from "next/link";
import React from "react";

function Header() {
    return (
        <section className="w-full h-[850px] relative mx-auto landingpage-filter pt-28 border-b border-white/10">
            <div className="items-center pt-32 text-center max-w-xl flex flex-col mx-auto z-20 gap-y-10">
                <h1 className="text-[52px] font-bold text-center text-primary-white leading-header launch-fade">
                    Create, collaborate,<br></br>grow, launch
                </h1>
                <p className="font-normal text-secondary-gray mx-6 lg:w-[580px] text-[18px]">
                    We have faith in the ability to create, work together,
                    evolve, and introduce ideas that have an impact. Come start
                    your success with us right now.
                </p>
            </div>
            <div className="flex items-center justify-center gap-4 pt-14 text-sm">
                <Link
                    href={"/"}
                    className="w-[114px] h-11 text-primary-black rounded-md bg-white hover:bg-white/70 font-normal flex items-center justify-center"
                >
                    Get started
                </Link>
                <Link
                    href={"/"}
                    className="w-[114px] h-11 rounded-md text-primary-white bg-white/10 font-normal flex items-center justify-center hover:bg-white/20"
                >
                    Learn more
                </Link>
            </div>
            <div className="lg:w-[547px]lg:h-[271px] flex gap-2 md:gap-6 lg:gap-10 pt-[13.5rem] items-center justify-center mx-auto">
                <span>
                    <h3 className="text-primary-white text-[24px] font-medium tracking-text-default leading-text-default">
                        146+
                    </h3>
                    <p className="text-secondary-gray text-[13px] pt-2.5">
                        projects done
                    </p>
                </span>
                <div className="w-[0.6px] h-16 bg-white/10 mx-4" />
                <span>
                    <h3 className="text-primary-white text-[24px] font-medium tracking-text-default leading-text-default">
                        100m+
                    </h3>
                    <p className="text-secondary-gray text-[13px] pt-2.5">
                        lines written
                    </p>
                </span>
                <div className="w-[0.6px] h-16 bg-white/10 mx-4" />
                <span>
                    <h3 className="text-primary-white text-[24px] font-medium tracking-text-default leading-text-default">
                        10+
                    </h3>
                    <p className="text-secondary-gray text-[13px] pt-2.5">
                        years experience
                    </p>
                </span>
            </div>
        </section>
    );
}

export default Header;
