import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";
import React from "react";

const page = () => {
    return <AuthenticateWithRedirectCallback />;
};

export default page;
