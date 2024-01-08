import ContactForm from "@/components/forms/ContactForm";
import Blobs from "@/components/ui/blobs";
import Footer from "@/components/shared/Footer";
import React from "react";

export default function ContactPage() {
    return (
        <div>
            <div className="w-full min-h-[90vh] relative flex flex-col justify-center items-center overflow-hidden">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-4xl font-medium text-center text-white">
                        How may we assist you?
                    </h1>
                    <p className="text-secondary-gray max-w-sm text-center">
                        Have a chat with us today about whatever project you’d
                        like.
                    </p>
                </div>
                <ContactForm />
                <Blobs />
            </div>
            <Footer tBorder bgBlack />
        </div>
    );
}
