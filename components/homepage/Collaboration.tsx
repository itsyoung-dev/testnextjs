import { ArrowRightIcon } from "@heroicons/react/20/solid";

function Collaboration() {
    return (
        <section className="h-[679px] spacing-default pt-32">
            <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="flex-start flex-col h-[450px] md:h-[383px] max-w-[455px] md:pr-8">
                    <h5 className="text-[#5865F2] font-semibold pb-6 text-xs">
                        Collaboration
                    </h5>
                    <h2 className="text-3xl font-bold text-primary-white pb-8">
                        Collaborate with us through our memberships
                    </h2>
                    <p className="text-sm text-secondary-gray pb-8">
                        Explore membership like never before. Get access to
                        source codes, enjoy free hosting, and engage in
                        exclusive collaboration—think of it like our upgraded
                        Patreon memberships. Your enhanced membership starts
                        here.
                    </p>
                    <button className="w-[164px] h-[44px] gap-3 flex items-center bg-primary-white rounded-md justify-end flex-shrink-0 text-primary-black font-bold text-sm">
                        Subscribe now{" "}
                        <ArrowRightIcon className="text-primary-black w-6 h-4 mr-2" />
                    </button>
                </div>
                <div className="p-4 mx-auto md:mx-0 md:mt-0 items-center justify-center flex">
                    <img
                        src={"/assets/collab-img.jpg"}
                        alt="collab-img"
                        className="w-[500px] h-[500px] lg:w-[730px] lg:h-[435] object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

export default Collaboration;
