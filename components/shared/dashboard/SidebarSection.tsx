import { ReactNode } from "react";

interface Props {
    header: string;
    divider: boolean;
    children: ReactNode;
}

const SidebarSection = ({ header, divider, children }: Props) => {
    return (
        <>
            <div className="pl-5 text-secondary-gray font-medium text-[13px]">
                {header}
            </div>
            <div className="flex flex-col pt-1.5">{children}</div>
            {divider && (
                <div className="h-[1px] w-[calc(100%-40px)] bg-white/10 mx-auto my-5"></div>
            )}
        </>
    );
};

export default SidebarSection;
