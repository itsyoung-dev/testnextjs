"use client";
import { prisma } from "@/utils/Utility";
import Link from "next/link";
import React from "react";

const MemberPage = () => {
    return (
        <div className="absolute top-60 left-40">
            <Link
                href={{
                    pathname: "/signup",
                    query: {
                        type: "membership",
                        plan: "pro",
                    },
                }}
                className="text-white"
            >
                Get started
            </Link>
        </div>
    );
};

export default MemberPage;
