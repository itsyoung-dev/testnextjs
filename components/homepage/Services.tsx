import React from "react";
import software from "../../public/assets/software-services.png";
import host from "../../public/assets/host-services.png";
import web from "../../public/assets/web-services.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface ServiceCardProps {
    image: StaticImageData;
    text: string;
    heading: string;
    href: string;
}

function Services() {
    return (
        <section className="w-full h-full lg:h-[844px] bg-black spacing-default flex-col flex">
            <div className="flex flex-col pt-40 pb-8">
                <h5 className="text-[#5865F2] font-semibold pb-6  text-xs">
                    Services
                </h5>
                <h2 className="font-bold text-4xl text-primary-white">
                    Let us take care of your work
                </h2>
                <p className="text-sm text-secondary-gray max-w-[633px] mt-5">
                    Start your career journey with us. Explore affiliate
                    marketing, job opportunities, and skill-building courses for
                    success.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 items-center justify-center">
                <ServicesCard
                    href="/"
                    heading="Software services"
                    text="From simple automations to sophisticated algorithms."
                    image={software}
                />
                <ServicesCard
                    href="/"
                    heading="Web services"
                    text="Boost your online presence with a professional website."
                    image={web}
                />
                <ServicesCard
                    href="/"
                    heading="Host services"
                    text="Keep your website or software online and protected."
                    image={host}
                />
            </div>
        </section>
    );
}

function ServicesCard({ image, text, heading, href }: ServiceCardProps) {
    return (
        <Link href={"/"}>
            <article className="h-auto rounded-[15px] border border-primary-white/10 flex flex-col service-card">
                <Image
                    className="w-full h-[232px] rounded-t-[15px] object-cover"
                    alt="service card"
                    src={image}
                />
                <div className="p-4 gap-3 h-24 linear-bg">
                    <h3 className="font-semibold text-[18px] tracking-text-default leading-text-default text-primary-white mb-1">
                        {heading}
                    </h3>
                    <span className="flex justify-between">
                        <p className="font-normal text-secondary-gray text-[13px] leading-text-default tracking-text-default w-[222px]">
                            {text}
                        </p>
                        <Link href={href}>
                            <ArrowRightIcon className="text-white w-4 h-4" />
                        </Link>
                    </span>
                </div>
            </article>
        </Link>
    );
}

export default Services;
