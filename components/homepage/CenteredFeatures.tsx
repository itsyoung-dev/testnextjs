import React from "react";
import { CheckCircle } from "heroicons-react";

const CenteredFeatures = () => {
    return (
        <section className="bg-gradient-to-b from-black via-transparent to-[#0B0B0B/6]">
            <div className="py-40 flex justify-center flex-col items-center">
                <div className="flex flex-col">
                    <p className="text-primary-blurple text-center leading-text-default tracking-text-default font-medium text-base">
                        Our program
                    </p>
                    <h2 className="text-[32px] leading-header text-primary-white font-bold text-center mt-4 ">
                        Here is what you will get
                    </h2>
                    <p className="text-secondary-gray text-center leading-text-default tracking-text-default font-medium text-base mt-6">
                        Lorem ipsum dolor sit amet consectetur. Tempor vivamus
                        proin
                        <br /> non tincidunt integer at turpis. Scelerisque
                        cursus mauris.
                    </p>
                </div>
                <div className="w-1/2 mt-11 h-96 bg-black border border-white/10 rounded-md bg-[url('/assets/graph.png')] bg-contain bg-[25rem_4rem] bg-no-repeat">
                    <div className="h-full flex flex-col justify-center px-10 w-[40%]">
                        <h3 className="text-primary-white leading-header text-left font-semibold text-xl">
                            Affiliate Marketing Program
                        </h3>
                        <p className="text-secondary-gray w-full leading-text-default tracking-text-default mt-3">
                            Lorem ipsum dolor sit amet consectetur. Purus augue
                            mauris porttitor et. Et sapien sit arcu pharetra
                            quis donec auctor vulputate sit.
                        </p>

                        <div className="flex justify-start mt-6 gap-x-3">
                            <CheckCircle className="text-primary-white" />
                            <p className="text-primary-white font-medium text-[13px]">
                                15% commission per successful sale
                            </p>
                        </div>
                        <div className="flex mt-2 gap-x-3">
                            <CheckCircle className="text-primary-white" />
                            <p className="text-primary-white font-medium text-[13px]">
                                Access to analytics
                            </p>
                        </div>
                        <div className="flex gap-x-4">
                            <a
                                href="/"
                                className="w-32 h-9 rounded-md flex items-center justify-center bg-primary-white text-primary-black text-sm mt-8"
                            >
                                Join now
                            </a>
                            <a
                                href="/"
                                className="w-32 h-9 rounded-md flex items-center justify-center bg-primary-white/10 text-primary-white text-sm mt-8"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CenteredFeatures;
