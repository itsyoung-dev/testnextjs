import { Check } from "heroicons-react";
import { FC } from "react";

export interface TierCardProps {
    name: string;
    desc: string;
    tag?: string;
    price: number;
    bannerUrl: string;
    features: string[];
    annually?: boolean;
    priceAnnually?: number;
}

const TierCard: FC<TierCardProps> = ({ ...card }) => {
    const formattedPrice = (price: number) => {
        if (price.toString().includes(".")) {
            return `$${price.toFixed(2)}`;
        } else {
            return `$${price}`;
        }
    };

    return (
        <div className="relative">
            {card.tag && (
                <>
                    <div className="absolute z-[2] flex justify-center items-center w-full -top-4">
                        <span className="bg-white py-2 px-4 text-xs rounded-full font-bold">
                            {card.tag}
                        </span>
                    </div>
                    <div className="absolute -z-[1] inset-0 bg-gradient-to-t from-[#0B0B0B] to-white rounded-xl"></div>
                </>
            )}
            <div
                className={`w-[378px] h-[672px] flex flex-col border border-white/10 rounded-xl overflow-hidden ${
                    card.tag
                        ? "relative"
                        : "bg-gradient-to-t from-[#0B0B0B] to-transparent"
                }`}
            >
                <div className="relative z-[1] h-full bg-gradient-to-t from-[#0B0B0B] to-black">
                    <div className="select-none">
                        <img
                            src={card.bannerUrl}
                            className="w-full h-[155px] object-cover"
                        />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <h3 className="text-white text-lg">{card.name}</h3>
                        <p className="text-secondary-gray text-sm">
                            {card.desc}
                        </p>
                        <div className="py-4">
                            <span className="text-white text-4xl font-medium">
                                {formattedPrice(
                                    card.annually
                                        ? card.priceAnnually || 0
                                        : card.price
                                )}
                            </span>
                            <span className="text-secondary-gray text-sm">
                                {card.annually ? "/year" : "/month"}
                            </span>
                        </div>
                        <button className="bg-white text-black font-bold rounded-md py-2">
                            Suscribe
                        </button>
                        <div>
                            <h4 className="text-white text-base mt-[50px]">
                                Everything from earlier tiers and
                            </h4>
                            <ul className="text-lg text-secondary-gray mt-4 flex flex-col gap-3">
                                {card.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-2"
                                    >
                                        <Check className="w-5 h-5 stroke-white text-white" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TierCard;
