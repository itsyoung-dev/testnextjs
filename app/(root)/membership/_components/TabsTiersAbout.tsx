"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function TabsTiersAbout() {
    const searchParams = useSearchParams();
    const activeTab = searchParams.get("tab") || "tiers";

    return (
        <div className="absolute bottom-0">
            <ul className="flex text-white gap-5 text-sm">
                <Link
                    href={"/members?tab=tiers"}
                    className={
                        activeTab === "tiers"
                            ? "border-b-2 border-primary-white py-1 cursor-pointer"
                            : "py-1 cursor-pointer"
                    }
                >
                    Tiers
                </Link>
                <Link
                    href={"/members?tab=about"}
                    className={
                        activeTab === "about"
                            ? "border-b-2 border-primary-white py-1 cursor-pointer"
                            : "py-1 cursor-pointer"
                    }
                >
                    About
                </Link>
            </ul>
        </div>
    );
}
