"use client";

export default function ContactForm() {
    return (
        <form className="w-[30%] mt-5 gap-y-5 flex flex-col">
            <div className="flex w-full gap-10">
                <div className="flex flex-col w-1/2">
                    <label htmlFor="name" className="text-white text-sm">
                        Full Name
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="bg-[#292929] rounded-md py-2 px-3 text-white outline-none border border-white/10"
                    />
                </div>
                <div className="flex flex-col w-1/2 ml-3">
                    <label htmlFor="email" className="text-white text-sm">
                        Email
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-[#292929] rounded-md py-2 px-3 text-white outline-none border border-white/10"
                    />
                </div>
            </div>
            <div className="flex w-full gap-10">
                <div className="flex flex-col w-1/2">
                    <label htmlFor="phone" className="text-white text-sm">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phone"
                        className="bg-[#292929] rounded-md py-2 px-3 text-white outline-none border border-white/10"
                    />
                </div>
                <div className="flex flex-col w-1/2 ml-3">
                    <label htmlFor="subject" className="text-white text-sm">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="bg-[#292929] rounded-md py-2 px-3 text-white outline-none border border-white/10"
                    />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="message" className="text-white text-sm">
                    Message
                    <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    className="bg-[#292929] rounded-md py-2 px-3 text-white outline-none border border-white/10 w-full h-32 resize-none"
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-primary-blurple text-white py-2 rounded-md w-full"
            >
                Send
            </button>
        </form>
    );
}
