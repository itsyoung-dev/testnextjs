import { currentUser } from "@/lib/helpers/auth";
import React from "react";

const ServerPage = async () => {
    const user = await currentUser();

    return <div>{JSON.stringify(user)}</div>;
};

export default ServerPage;
