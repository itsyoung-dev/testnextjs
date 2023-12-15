import React from "react";
import Link from "../ui/Link";

const AffiliateBanner = () => {
    return (
        <section>
            <div className="bg-gradient-to-b from-[rgba(69,83,234,0.19)] via-[rgba(31,35,77,0.45)] to-[rgba(17,17,17,0.55)] h-screen w-full">
                <div className="flex h-screen items-center flex-col justify-center">
                    <h1 className="text-5xl font-bold text-center text-primary-white leading-[115%]">
                        Join our affiliate <br></br>program today
                    </h1>
                    <p>
                        By promoting our services using your unique link, expand
                        your network and receive a 15% commission on each sale
                        that is made.
                    </p>
                    <div className="flex">
                        <Link href="/" content="Join now" />
                        <Link
                            href="/"
                            content="Read more"
                            bgHex="fff"
                            bgOpacity="10"
                            textColor="fff"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AffiliateBanner;
