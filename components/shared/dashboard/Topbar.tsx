"use client";

import UserButton from "@/components/user/UserButton";
import {
    BellIcon,
    DocumentIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { usePathname } from "next/navigation";
import { indexxedSearchPages } from "@/constants/search";

interface Props {
    pageName: string;
    href: string;
}

const Topbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredPages, setFilteredPages] = useState<Props[]>([]);

    const handleInputChange = (e: any) => {
        const query = e.target.value;
        setSearchQuery(query);

        const filteredResults = indexxedSearchPages.filter((page) =>
            page.pageName.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredPages(filteredResults);
    };

    const path = usePathname();
    const splittedPath = path.split("/").filter(Boolean);
    return (
        <nav className="w-full h-[75px] bg-[#0a0a0a] border-b border-white/10 sticky top-0 z-20">
            <div className="flex justify-between items-center w-full h-full px-5">
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Image
                            src="/assets/tns_logo_white_transparent.png"
                            className=""
                            height={32}
                            width={32}
                            alt="Logo"
                        />
                    </Link>
                    {splittedPath.map((p, index) => {
                        const fullPath = `/${splittedPath
                            .slice(0, index + 1)
                            .join("/")}`;
                        return (
                            <div
                                key={index}
                                className="flex flex-row items-center"
                            >
                                <span className="font-semibold text-xl text-[#ffffff24] px-4">
                                    /
                                </span>
                                <Link href={fullPath}>
                                    <h2 className="text-[#ffffffd9] text-base hover:text-primary-white duration-200">
                                        {p.charAt(0).toUpperCase() + p.slice(1)}
                                    </h2>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <div className="flex items-center">
                    <Dialog>
                        <DialogTrigger>
                            <div className="w-64 bg-black border rounded-md border-white/10 hover:bg-white/5 h-9 flex justify-start flex-row items-center">
                                <span className="text-secondary-gray flex pl-3 text-sm">
                                    <MagnifyingGlassIcon className="w-4 font-bold mr-3" />
                                    Search...
                                </span>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] max-h-[300px] p-0 !bg-[#0a0a0a] rounded-md text-primary-white border-white/10">
                            <MagnifyingGlassIcon className="w-4 font-bold mr-3 absolute left-4 top-4 text-secondary-gray z-10" />
                            <input
                                id="name"
                                className="w-full bg-[#0a0a0a] h-12 pl-11 text-sm focus:outline-none border-b rounded-t-[8px] border-white/10 absolute top-0"
                                placeholder="Search a page or section..."
                                onChange={handleInputChange}
                            />
                            <div className="w-full mt-12 px-2 py-1 overflow-auto">
                                <p className="px-1.5 py-2 text-secondary-gray text-xs font-medium">
                                    Pages
                                </p>
                                {searchQuery.length > 0
                                    ? filteredPages.map((p) => (
                                          <Link key={p.href} href={p.href}>
                                              <div className="w-full py-3 px-2 hover:bg-white/10 flex gap-x-2 cursor-pointer duration-200 rounded-md">
                                                  <DocumentIcon className="w-5 h-5 text-secondary-gray" />
                                                  <span className="text-sm pt-[1.5px]">
                                                      {p.pageName}
                                                  </span>
                                              </div>
                                          </Link>
                                      ))
                                    : indexxedSearchPages.map((p) => (
                                          <Link key={p.href} href={p.href}>
                                              <div className="w-full py-3 px-2 hover:bg-white/10 flex gap-x-2 cursor-pointer duration-200 rounded-md">
                                                  <DocumentIcon className="w-5 h-5 text-secondary-gray" />
                                                  <span className="text-sm pt-[1.5px]">
                                                      {p.pageName}
                                                  </span>
                                              </div>
                                          </Link>
                                      ))}
                            </div>
                        </DialogContent>
                    </Dialog>
                    <Link href={"/notifications"}>
                        <div className="mx-4 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer duration-200">
                            <BellIcon className="text-secondary-gray w-[19px] h-auto" />
                        </div>
                    </Link>
                    <UserButton />
                </div>
            </div>
        </nav>
    );
};

export default Topbar;
