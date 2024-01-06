export default function BannerNorth() {
    return (
        <div className="relative flex justify-center select-none">
            <div className="h-[279px] md:h-[379px] w-full mt-[100px] border-t border-white/10 border-b flex flex-col justify-center items-center gap-3">
                <span className="text-3xl md:text-6xl font-extrabold text-white/90 tracking-wide">
                    THE NORTH SOLUTION
                </span>
                <span
                    className="text-3xl md:text-6xl font-extrabold tracking-wide"
                    style={{
                        WebkitTextStroke: "1px #fff",
                        WebkitTextStrokeWidth: "2px",
                    }}
                >
                    THE NORTH SOLUTION
                </span>
                <span
                    className="text-3xl md:text-6xl font-extrabold tracking-wide"
                    style={{
                        WebkitTextStroke: "1px #fff",
                        WebkitTextStrokeWidth: "2px",
                    }}
                >
                    THE NORTH SOLUTION
                </span>
            </div>
            <div className="absolute w-[90px] h-[90px] md:w-[125px] md:h-[125px] bg-white -bottom-10 md:-bottom-16 rounded-lg flex justify-center items-center">
                <img
                    src="/assets/tns_logo_black_white.png"
                    alt="The North Solution Logo Black White"
                    className="w-[35%]"
                />
            </div>
        </div>
    );
}
