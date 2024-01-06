import PrimaryLink from "../ui/PrimaryLink";

export default function CTA() {
    //

    return (
        <div
            className="flex justify-around items-center py-24 w-full"
            style={{
                background:
                    "linear-gradient(180deg, rgba(88, 101, 242, 0.2) 11.73%, rgba(83, 97, 249, 0.126) 100%)",
            }}
        >
            <span className="text-white text-3xl font-bold">
                Interested in becoming an affiliate?
            </span>
            <a
                href="/"
                className="w-32 h-9 rounded-md flex items-center justify-center bg-primary-white text-primary-black text-sm"
            >
                Start earning now
            </a>
        </div>
    );
}
