export default function Page() {
    return (
        <main>
            <h1 className="text-[#ededed] font-medium text-2xl">
                Affiliate Performance Metrics
            </h1>
            <div className="mt-8 w-full bg-[#0a0a0a] h-40 border-white/10 rounded-md border flex items-center justify-evenly gap-x-2">
                <div className="bg-white/10 w-1/5 h-2/3 rounded-md flex items-center justify-center gap-x-6">
                    <div className="h-20 w-20 bg-white"></div>
                    <div className="flex flex-col justify-center">
                        <p>Today's sales</p>
                        <h3>
                            $14,245 <span>+11%</span>
                        </h3>
                    </div>
                </div>
                <div className="bg-white/10 w-1/5 h-2/3"></div>
                <div className="bg-white/10 w-1/5 h-2/3"></div>
                <div className="bg-white/10 w-1/5 h-2/3"></div>
            </div>
        </main>
    );
}

