"use client";

import { RoleGate } from "@/components/auth/RoleGate";
import { UserRole } from "@prisma/client";

const AdminPage = () => {
    const onApiRouteClick = () => {
        fetch("/api/admin").then((response) => {
            if (response.ok) {
                console.log("Okay");
            } else {
                console.log("forbidden");
            }
        });
    };
    return (
        <div>
            <RoleGate allowedRole={UserRole.ADMIN}>
                <div className="">You can see this</div>
            </RoleGate>
            <button onClick={onApiRouteClick}></button>
        </div>
    );
};

export default AdminPage;
