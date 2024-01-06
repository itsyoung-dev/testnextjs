import Link from "next/link";
import React from "react";

export default function FrequentlyAskedQuestions() {
    return (
        <section className="w-full border-t border-white/10">
            <div className="py-40 flex justify-center flex-col items-center gap-16 ">
                <div className="flex flex-col">
                    <p className="text-primary-blurple text-center leading-text-default tracking-text-default font-medium text-base">
                        FAQ
                    </p>
                    <h2 className="text-[32px] leading-header text-primary-white font-bold text-center mt-4 ">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-secondary-gray text-center leading-text-default tracking-text-default text-base font-medium mt-6">
                        have a different question and cant’t find the answer
                        you’re looking for? Reach out <br /> to our support team{" "}
                        <Link
                            href={"mailto:test@gmail.com"}
                            className="text-primary-blurple"
                        >
                            sending us an email
                        </Link>{" "}
                        and we’ll get back to you as soon as <br />
                        we can.
                    </p>
                </div>
                <div className="grid grid-cols-3 w-[70%] gap-y-16 gap-x-24 place-items-center">
                    {FAQ.map((faq, index) => (
                        <div className="flex flex-col">
                            <h3 className="text-white mb-2">{faq.question}</h3>
                            <p className="text-secondary-gray max-w-xs text-sm">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const FAQ = [
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
];
