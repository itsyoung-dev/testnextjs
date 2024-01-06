"use client";
import { useState } from "react";
import TierCard, { TierCardProps } from "./TierCard";

export default function MembersTiers() {
    const [tiersDuration, setTiersDuration] = useState<"monthly" | "yearly">(
        "monthly"
    );
    return (
        <div className="py-20 flex flex-col items-center">
            <div className="">
                <h2 className="text-white text-3xl font-medium text-center">
                    Choose your membership
                </h2>
                <p className="text-secondary-gray text-center mt-3 px-10 text-sm max-w-[600px]">
                    Join us in our journey of creating quality content with your
                    support. Thank you for letting us serve you.
                </p>
            </div>

            <div className="mt-10">
                <div className="flex items-center justify-center pb-12">
                    <div className="w-[180px] h-[38px] rounded-full bg-white/5 border-white/10 border p-1">
                        <button
                            className={`w-1/2 h-full rounded-full  text-sm font-medium ${
                                tiersDuration === "monthly"
                                    ? "bg-white text-black"
                                    : "bg-transparent text-white"
                            }`}
                            onClick={() => setTiersDuration("monthly")}
                        >
                            Monthly
                        </button>
                        <button
                            className={`w-1/2 h-full rounded-full text-sm font-medium ${
                                tiersDuration === "yearly"
                                    ? "bg-white text-black"
                                    : "bg-transparent text-white"
                            }`}
                            onClick={() => setTiersDuration("yearly")}
                        >
                            Yearly
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    {tiers.map((tier) => (
                        <TierCard
                            key={tier.name}
                            {...tier}
                            annually={tiersDuration === "yearly"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

const tiers: TierCardProps[] = [
    {
        bannerUrl: "/assets/tiers/tier_basic.png",
        desc: "This is our base membership where you can access to all our source code, as well as general support!",
        features: [
            "Source Code",
            "Prioritized Text Support",
            "Discord Perks",
            "General Support",
        ],
        name: "Basic",
        price: 7.5,
        priceAnnually: 75,
    },
    {
        bannerUrl: "/assets/tiers/tier_pro.png",
        desc: "This is our Pro tier where you get access to our 24/7 hosting service!",
        features: [
            "24/7 Hosting",
            "Private Discord",
            "Exclusive Giveaways",
            "General Support",
        ],
        name: "Pro",
        price: 10,
        priceAnnually: 75,
        tag: "Most Popular",
    },
    {
        bannerUrl: "/assets/tiers/tier_committed_supporter.png",
        desc: "This is our base membership where you can access to all our source code, as well as general support!",
        features: [
            "24/7 Hosting",
            "Private Discord",
            "Your name at the end of videos",
            "General Support",
        ],
        name: "Committed Supporter",
        price: 15,
        priceAnnually: 75,
    },
];
