"use client";

import { useCurrentRole } from "@/lib/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";

interface RoleGateProps {
    children: React.ReactNode;
    allowedRole: UserRole;
}
export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
    const role = useCurrentRole();

    if (role !== allowedRole) {
        return <div></div>;
    }

    return <>{children}</>;
};
