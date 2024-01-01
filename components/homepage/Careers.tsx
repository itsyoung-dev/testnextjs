import React from "react";
import {
    ShoppingCartIcon,
    ArrowRightIcon,
    ChartBarIcon,
    BriefcaseIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface MarketingCardProps {
    title: string;
    text: string;
    label: string;
    href: string;
    marketIcon: any;
}

function Careers() {
    return (
        <section className="w-full h-auto pb-32 mt-[250px] md:mt-0 bg-gradient-to-b from-black to-[#0a0a0aaa]">
            <div className="spacing-default">
                <div className="justify-center lg:mx-auto flex flex-col items-center mx-6">
                    <div className="max-w-[781px] h-[156px] text-center flex flex-col items-center justify-center mx-6 lg:mx-0">
                        <h5 className="text-primary-blurple font-medium tracking-text-default leading-header pb-6 text-base">
                            Careers
                        </h5>
                        <h2 className="text-[40px] font-semibold text-primary-white pb-5 leading-text-default">
                            Kick-start your career with us
                        </h2>
                        <p className="text-secondary-gray pb-8 px-20 tracking-text-default leading-text-default text-base">
                            Start your career journey with us. Explore affiliate
                            marketing, job opportunities, and skill-building
                            courses for success.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[88px] gap-10 lg:gap-20 items-center justify-center">
                        <MarketingCard
                            href="/"
                            marketIcon={
                                <ShoppingCartIcon className="w-6 h-6" />
                            }
                            text="Enroll in our exciting affiliate program to turn ideas into money. By promoting our services using your unique link, expand your network and receive a 15% commission on each sale that is made."
                            title="Earn with recommending."
                            label="Afilliate Marketing"
                        />
                        <MarketingCard
                            href="/"
                            marketIcon={<BriefcaseIcon className="w-6 h-6" />}
                            title={`Unlock your career's potential.`}
                            label="Job Market"
                            text="Join our brand new job market. Discover opportunities tailored to your ambitions and skill level, and turn every job into a rewarding experience."
                        />
                        <MarketingCard
                            href="/"
                            marketIcon={<ChartBarIcon className="w-6 h-6" />}
                            title="Empower your journey."
                            label="Courses"
                            text="Elevate your coding expertise with our new courses. Unlock a new world of learning designed to propel your skills to new heights, shaping your future in the digital landscape."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function MarketingCard({
    title,
    text,
    label,
    marketIcon,
    href,
}: MarketingCardProps) {
    return (
        <Link href={href}>
            <article className="h-[335px] max-w-sm rounded-[25px] border border-primary-white/10 bg-[#050505] hover:bg-[#090909] duration-200">
                <div className="px-10 py-5">
                    <div className=" mt-6 justify-between flex items-center">
                        <span className="w-11 h-11 rounded-full text-black flex bg-white items-center justify-center">
                            {marketIcon}
                        </span>
                        <div>
                            <ArrowRightIcon className="text-white w-4 h-4" />
                        </div>
                    </div>
                    <h4 className="pt-6 text-sm">
                        <strong className="text-white">Opportunity</strong>{" "}
                        <span className="text-secondary-gray">/ {label}</span>
                    </h4>
                    <h3 className="font-semibold text-[22px] tracking-text-default leading-text-default text-primary-white py-6">
                        {title}
                    </h3>
                    <p className="text-[14px] leading-text-default tracking-text-default text-secondary-gray">
                        {text}
                    </p>
                </div>
            </article>
        </Link>
    );
}

export default Careers;
