import SidebarSection from "@/components/shared/dashboard/SidebarSection";
import {
    ArrowLeftEndOnRectangleIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    CreditCardIcon,
    CursorArrowRaysIcon,
    HomeIcon,
    PhoneArrowDownLeftIcon,
    ServerStackIcon,
} from "@heroicons/react/24/outline";
import SidebarLink from "@/components/shared/dashboard/SidebarLink";
import { TemplateOutline } from "heroicons-react";
import { LogoutButton } from "@/components/auth/LogoutButton";

const Sidebar = () => {
    return (
        <div className="bg-[#0c0c0c] w-72 border-r border-white/10 pt-8 self-start fixed bottom-0 left-0 h-[calc(100vh-75px)]  max-md:hidden z-20">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <SidebarSection header="MAIN MENU" divider={true}>
                        <SidebarLink
                            icon={<HomeIcon className="w-5 text-[#ffffffdb]" />}
                            href="/"
                            label="Home"
                        />
                        <SidebarLink
                            icon={
                                <CursorArrowRaysIcon className="w-5 text-[#ffffffdb]" />
                            }
                            href="/"
                            label="Affiliate Program"
                        />
                        <SidebarLink
                            icon={
                                <ChartPieIcon className="w-5 text-[#ffffffdb]" />
                            }
                            href="/"
                            label="Statistics"
                        />
                        <SidebarLink
                            icon={
                                <CreditCardIcon className="w-5 text-[#ffffffdb]" />
                            }
                            href="/"
                            label="Invoices"
                        />
                        <SidebarLink
                            icon={
                                <Cog6ToothIcon className="w-5 text-[#ffffffdb]" />
                            }
                            href="/"
                            label="Settings"
                        />
                    </SidebarSection>
                    <SidebarSection header="SERVICES" divider={true}>
                        <SidebarLink
                            icon={
                                <TemplateOutline className="w-5 text-[#ffffffdb]" />
                            }
                            href="/"
                            label="Web builder"
                        />
                        <SidebarLink
                            icon={
                                <ServerStackIcon className="w-5 text-[#ffffffdb]" />
                            }
                            href="/"
                            label="Hosting"
                        />
                    </SidebarSection>
                    <SidebarSection header="MORE" divider={false}>
                        <SidebarLink
                            icon={
                                <PhoneArrowDownLeftIcon className="w-5 text-[#ffffffdb]" />
                            }
                            href="/"
                            label="Support"
                        />
                        <LogoutButton>
                            <SidebarLink
                                icon={
                                    <ArrowLeftEndOnRectangleIcon className="w-5 text-[#ffffffdb]" />
                                }
                                href="/"
                                label="Log out"
                            />
                        </LogoutButton>
                    </SidebarSection>
                </div>
                <div className="pl-5 pb-5 h-full flex justify-end flex-col font-medium">
                    <p className="text-secondary-gray text-[12px]">
                        ©2024 The North Solution
                    </p>
                    <p className="text-primary-blurple text-[12px] pt-1">
                        <a className="hover:opacity-80" href="/">
                            About
                        </a>{" "}
                        |{" "}
                        <a className="hover:opacity-80" href="/">
                            Terms
                        </a>{" "}
                        |{" "}
                        <a className="hover:opacity-80" href="/">
                            Privacy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
