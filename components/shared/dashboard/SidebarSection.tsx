import { ReactNode } from "react";

interface Props {
    header: string;
    topDivider?: boolean;
    bottomDivider?: boolean;
    children: ReactNode;
}

const SidebarSection = ({
    header,
    children,
    topDivider,
    bottomDivider,
}: Props) => {
    return (
        <>
            {topDivider && (
                <div className="h-[1px] w-[calc(100%-40px)] bg-white/10 mx-auto my-5"></div>
            )}
            <div className="pl-5 text-secondary-gray font-medium text-[13px]">
                {header}
            </div>
            <div className="flex flex-col pt-1.5">{children}</div>
            {bottomDivider && (
                <div className="h-[1px] w-[calc(100%-40px)] bg-white/10 mx-auto my-5"></div>
            )}
        </>
    );
};

export default SidebarSection;
