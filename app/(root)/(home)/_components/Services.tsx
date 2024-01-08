import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface ServiceCardProps {
    image?: string;
    text: string;
    heading: string;
    href: string;
}

function Services() {
    return (
        <section className="w-full h-full lg:h-[844px] bg-black flex-col flex border-b border-white/10 pb-8">
            <div className="spacing-default">
                <div className="flex flex-col pt-40 pb-2">
                    <h5 className="text-primary-blurple font-medium tracking-text-default leading-header pb-4 text-base">
                        Services
                    </h5>
                    <h2 className="text-[40px] font-semibold text-primary-white pb-4 leading-text-default">
                        Let us take care of your work
                    </h2>
                    <p className="text-secondary-gray pb-8 tracking-text-default leading-text-default text-base">
                        Start your career journey with us. Explore affiliate
                        marketing, job opportunities, and skill-<br></br>
                        building courses for success.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 items-center justify-center">
                    <ServicesCard
                        href="/"
                        heading="Software services"
                        text="From simple automations to sophisticated algorithms."
                    />
                    <ServicesCard
                        href="/"
                        heading="Web services"
                        text="Boost your online presence with a professional website."
                    />
                    <ServicesCard
                        href="/"
                        heading="Host services"
                        text="Keep your website or software online and protected."
                    />
                </div>
            </div>
        </section>
    );
}

function ServicesCard({ text, heading, href }: ServiceCardProps) {
    return (
        <Link href={"/"}>
            <div className="group h-auto rounded-[15px] border border-primary-white/10 flex flex-col duration-200 service-card hover:scale-105">
                <img
                    className="w-full h-[232px] rounded-t-[15px] object-cover service-card-image "
                    alt="service card"
                    src={"/assets/code.jpg"}
                />
                <div className="p-4 gap-3 h-24 linear-bg border-t border-white/10">
                    <h3 className="font-semibold text-[18px] tracking-text-default leading-text-default text-primary-white mb-1.5">
                        {heading}
                    </h3>
                    <span className="flex justify-between">
                        <p className="font-normal text-secondary-gray text-[14px] leading-text-default tracking-text-default w-[265px]">
                            {text}
                        </p>
                        <ArrowRightIcon className="text-white w-4 h-4 service-arrow-r" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default Services;
