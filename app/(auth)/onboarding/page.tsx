import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
    const user = await currentUser();

    const userInfo = {};

    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        name: userInfo?.name || userInfo?.firstName || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl,
    };
    return (
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
    );
};

export default Page;
