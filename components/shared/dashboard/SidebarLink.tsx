import Link from "next/link";
import React from "react";

interface Props {
    icon: any;
    href: string;
    label: string;
}

const SidebarLink = ({ icon, href, label }: Props) => {
    return (
        <Link href={href}>
            <div className=" w-full pl-5 py-2.5 text-secondary-gray flex items-center hover:bg-white/10 duration-200">
                <div className="flex items-center gap-x-3">
                    <div className="bg-white/10 rounded-md w-9 h-9 flex items-center justify-center">
                        {icon}
                    </div>
                    <span>{label}</span>
                </div>
            </div>
        </Link>
    );
};

export default SidebarLink;
