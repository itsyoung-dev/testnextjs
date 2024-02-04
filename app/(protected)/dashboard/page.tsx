import { currentUser } from "@/lib/helpers/auth";

export default async function Page() {
    const user = await currentUser();
    console.log(user);
    return <></>;
}
