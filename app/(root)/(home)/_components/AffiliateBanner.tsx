import React from "react";
import SecondaryLink from "@/components/shared/SecondaryLink";
import Link from "next/link";

const AffiliateBanner = () => {
    return (
        <section>
            <div className="bg-gradient-to-b from-[rgba(69,83,234,0.19)] via-[rgba(31,35,77,0.45)] to-[rgba(17,17,17,0.26)] h-[90vh] w-full border-b border-[#232326]">
                <div className="flex h-[90%] items-center flex-col justify-between pt-44">
                    <div className="flex items-center flex-col justify-center">
                        <h1 className="text-5xl font-bold text-center text-primary-white leading-header">
                            Join our affiliate <br></br>program today
                        </h1>
                        <p className="text-secondary-gray text-lg leading-text-default tracking-text-default text-center mt-7 mb-10">
                            By promoting our services using your unique link,
                            expand
                            <br />
                            your network and receive a 15% commission on each
                            sale
                            <br />
                            that is made.
                        </p>
                        <div className="flex">
                            <Link
                                className="w-32 h-10 rounded-md flex items-center justify-center bg-primary-white text-primary-black mx-3 text-sm"
                                href={{
                                    pathname: "/signup",
                                    query: {
                                        type: "affiliate",
                                    },
                                }}
                            >
                                Join now
                            </Link>
                            <SecondaryLink href="/" content="Read more" />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex flex-col px-[65px]">
                            <img src="/assets/step1_affiliates.png" alt="" />
                            <p className="text-secondary-gray text-[13px] font-medium leading-text-default tracking-text-default text-center mt-4">
                                Become a part of
                                <br /> The North Solution by signing
                                <br />
                                up as an affilaite
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <img
                                src="/assets/step2_affiliates.png"
                                className="border-x border-white/10 px-[65px]"
                                alt=""
                            />
                            <p className="text-secondary-gray text-[13px] font-medium leading-text-default tracking-text-default text-center mt-4">
                                Find a service to share
                                <br /> with your audience using your
                                <br /> personal and unique link
                            </p>
                        </div>
                        <div className="flex flex-col px-[65px]">
                            <img src="/assets/step3_affiliates.png" alt="" />
                            <p className="text-secondary-gray text-[13px] font-medium leading-text-default tracking-text-default text-center mt-4">
                                Cash out up to 10% <br /> from the dashboard for
                                <br />
                                every successful sale
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AffiliateBanner;
