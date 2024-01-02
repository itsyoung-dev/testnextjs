import { fetchUser } from "@/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";
import Footer from "@/components/ui/Footer";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (userInfo?.onboarded) redirect("/");

    const userData = {
        id: user.id,
        username: userInfo ? userInfo?.username : user.username,
        name: userInfo ? userInfo?.name : user.firstName ?? "",
        bio: userInfo ? userInfo?.bio : "",
        image: userInfo ? userInfo?.image : user.imageUrl,
    };

    return (
        <>
            <main className="flex py-48 flex-col">
                <div className="flex flex-col max-w-3xl">
                    <h1 className="text-primary-white text-lg">Onboarding</h1>
                    <p className="mt-3 text-regular text-light-2 text-primary-white">
                        Complete your profile now to get started.
                    </p>
                </div>
                <section className="mt-9 bg-white/10 p-10">
                    <AccountProfile user={userData} btnTitle="Continue" />
                </section>
            </main>
            <Footer tBorder={false} />
        </>
    );
};

export default Page;
