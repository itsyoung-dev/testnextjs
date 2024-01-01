import React from "react";
import Link from "next/link";

function Member() {
    return (
        <section className="w-full h-[292px] overflow-clip mx-auto p-16 relative z-10 bg-black border-t-[1px] border-b-[1px] border-primary-white/10 bg-[url('/assets/CTA.png')] bg-cover bg-no-repeat flex items-center">
            {/* <div className="member-right-blob absolute left-20 top-[160px] spacing-default" />
            <div className="member-left-blob absolute right-[300px] bottom-[120.693px]" /> */}
            <div className="flex justify-center md:justify-between w-full spacing-default items-center">
                <div className="z-10 flex flex-col gap-4 md:text-left">
                    <h2 className="text-[40px] font-bold text-primary-white tracking-text-default leading-text-default">
                        Become a member
                    </h2>
                    <p className="mt-1 text-[17px] text-secondary-gray max-w-[609px] font-normal tracking-text-default leading-text-default">
                        Launch your career with confidence. Join us today for
                        exciting opportunities and a pathway to professional
                        success.
                    </p>
                    <div className="md:hidden z-10 gap-4 ml-10 text-sm items-center justify-center flex">
                        <Link
                            className="w-[153px] items-center flex justify-center h-[41px] bg-primary-white rounded-md text-primary-black"
                            href={"/"}
                        >
                            Subscribe now
                        </Link>
                        <Link
                            className="w-[153px] items-center flex justify-center h-[41px] bg-primary-white/10 rounded-md border-[1px] border-primary-white/10 text-primary-white"
                            href={"/"}
                        >
                            See benefits
                        </Link>
                    </div>
                </div>
                <div className="md:flex flex-col gap-4 ml-10 text-sm hidden">
                    <Link
                        className="w-[153px] items-center flex justify-center h-[41px] bg-primary-white rounded-md text-primary-black"
                        href={"/"}
                    >
                        Subscribe now
                    </Link>
                    <Link
                        className="w-[153px] items-center flex justify-center h-[41px] bg-primary-white/10 rounded-md border-[1px] border-primary-white/10 text-primary-white"
                        href={"/"}
                    >
                        See benefits
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Member;
