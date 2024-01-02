import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function Collaboration() {
    return (
        <section className="h-[679px] spacing-default pt-32">
            <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="flex-start flex-col h-[450px] md:h-[383px] max-w-[520px] md:pr-8">
                    <h5 className="text-primary-blurple font-medium tracking-text-default leading-header pb-6 text-base">
                        Collaboration
                    </h5>
                    <h2 className="text-[40px] font-semibold text-primary-white pb-6 leading-text-default">
                        Collaborate with us through our memberships
                    </h2>
                    <p className="text-secondary-gray pb-8 pr-20 tracking-text-default leading-text-default text-base">
                        Explore membership like never before. Get access to
                        source codes, enjoy free hosting, and engage in
                        exclusive collaboration—think of it like our upgraded
                        Patreon memberships. Your enhanced membership starts
                        here.
                    </p>
                    <Link
                        href="/"
                        className="w-[164px] h-[44px] gap-3 flex items-center bg-primary-white rounded-md justify-end flex-shrink-0 text-primary-black font-medium text-sm hover:gap-4 hover:w-[172px] duration-200"
                    >
                        Subscribe now{" "}
                        <ArrowRightIcon className="text-primary-black w-6 h-4 mr-2" />
                    </Link>
                </div>
                <div className="p-4 mx-auto md:mx-0 md:mt-0 items-center justify-center flex">
                    <img
                        src={"/assets/collab-img.jpg"}
                        alt="collab-img"
                        className="w-[550px] h-[550px] lg:w-[730px] lg:h-[435px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

export default Collaboration;
