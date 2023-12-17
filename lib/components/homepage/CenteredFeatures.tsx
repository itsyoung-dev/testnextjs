import React from "react";

const CenteredFeatures = () => {
    return (
        <section>
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
                <div className="w-1/2 mt-11 h-96 bg-black border border-white/10 rounded-md "></div>
            </div>
        </section>
    );
};

export default CenteredFeatures;
