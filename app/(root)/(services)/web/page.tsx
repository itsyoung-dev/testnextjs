import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="absolute top-60 left-40">
            <Link
                href={{
                    pathname: "/signup",
                    query: {
                        type: "web",
                        custom: true,
                    },
                }}
                className="text-white"
            >
                Get started
            </Link>
        </div>
    );
};

export default page;
