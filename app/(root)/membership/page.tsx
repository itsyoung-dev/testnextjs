import BannerNorth from "@/app/(root)/membership/_components/BannerNorth";
import ButtonJoinMember from "@/app/(root)/membership/_components/ButtonJoinMember";
import MembersTiers from "@/app/(root)/membership/_components/MembersTiers";
import TabsTiersAbout from "@/app/(root)/membership/_components/TabsTiersAbout";
import Footer from "@/components/shared/Footer";

 const Member = ({ searchParams }: { searchParams: { tab: string } }) => {
    return (
        <div>
            <BannerNorth />
            <div className="border-b border-white/10 py-24 flex flex-col justify-center items-center relative">
                <h1 className="text-white text-2xl">The North Solutions</h1>
                <span className="text-secondary-gray text-center mt-3 px-10">
                    Creating a programming community for every developer!
                </span>
                <ButtonJoinMember />
                <TabsTiersAbout />
            </div>
            {searchParams.tab === "tiers" || !searchParams.tab ? (
                <MembersTiers />
            ) : (
                <>
                    <div className="py-20 flex flex-col items-center">
                        <div className="">
                            <h2 className="text-white text-3xl font-medium text-center">
                                About Us
                            </h2>
                            <p className="text-secondary-gray text-center mt-3 px-10 text-sm max-w-[600px]">
                                We are a team of developers who are passionate
                                about programming and creating quality content
                                for the community. We are a team of developers
                                who are passionate about programming and
                                creating quality content for the community.
                            </p>
                        </div>
                    </div>
                </>
            )}

            <Footer tBorder />
        </div>
    );
};

export default Member;
