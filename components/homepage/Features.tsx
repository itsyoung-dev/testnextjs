"use client";
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { FeatureImages } from "@/constants/constants";

const Features = () => {
    return (
        <section
            id="features"
            aria-label="Features for building your website"
            className="relative overflow-hidden bg-slate-50 pb-28 pt-20 sm:py-32 border-t border-[#EBEDEF]"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                    <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                        Everything you need to run your books.
                    </h2>
                    <p className="mt-6 text-lg tracking-tight text-orange-100">
                        Well everything you need if you aren't that picky about
                        minor details like tax compliance.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
                    <Tab.Group>
                        <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                            <div
                                className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <Tab.List>
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            <div className="group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10">
                                                <div>
                                                    <h1
                                                        className="font-display text-lg ui-not-focus-visible:outline-none text-blue-600 lg:text-white"
                                                        id="headlessui-tabs-tab-:R2baalla:"
                                                        role="tab"
                                                        aria-selected="true"
                                                        tabIndex={0}
                                                        data-headlessui-state="selected"
                                                        aria-controls="headlessui-tabs-panel-:Rdaalla:"
                                                    >
                                                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"></span>
                                                        Payroll
                                                    </h1>
                                                </div>
                                                <p className="mt-2 hidden text-sm lg:block text-white">
                                                    Keep track of everyone's
                                                    salaries and whether or not
                                                    they've been paid. Direct
                                                    deposit not supported.
                                                </p>
                                            </div>
                                        )}
                                    </Tab>
                                    <Tab>
                                        {({ selected }) => (
                                            <div className="group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                                                <div>
                                                    <h1
                                                        className="font-display text-lg ui-not-focus-visible:outline-none text-blue-100 hover:text-white lg:text-white text-left"
                                                        id="headlessui-tabs-tab-:R2jaalla:"
                                                        role="tab"
                                                        aria-selected="false"
                                                        tabIndex={-1}
                                                        data-headlessui-state=""
                                                        aria-controls="headlessui-tabs-panel-:Rlaalla:"
                                                    >
                                                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"></span>
                                                        Claim expenses
                                                    </h1>
                                                </div>
                                                <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
                                                    All of your receipts
                                                    organized into one place, as
                                                    long as you don't mind
                                                    typing in the data by hand.
                                                </p>
                                            </div>
                                        )}
                                    </Tab>
                                    <Tab>
                                        {({ selected }) => (
                                            <div className="group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                                                <div>
                                                    <h1
                                                        className="font-display text-lg ui-not-focus-visible:outline-none text-blue-100 hover:-text-white lg:text-white"
                                                        role="tab"
                                                        data-headlessui-state
                                                        aria-controls="headlessui-tabs-panel-:Rlaalla:"
                                                    >
                                                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none">
                                                            VAT handling
                                                        </span>
                                                    </h1>
                                                </div>
                                                <p className="mt-2 hidden text-sm lg:block text-white group-hover:text-white">
                                                    We only sell our software to
                                                    companies who don't deal
                                                    with VAT at all, so
                                                    technically we do all the
                                                    VAT stuff they need.
                                                </p>
                                            </div>
                                        )}
                                    </Tab>
                                    <Tab>
                                        {({ selected }) => (
                                            <div className="group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                                                <div>
                                                    <h1
                                                        className="font-display text-lg ui-not-focus-visible:outline-none text-blue-100 hover:-text-white lg:text-white"
                                                        role="tab"
                                                        data-headlessui-state
                                                        aria-controls="headlessui-tabs-panel-:Rlaalla:"
                                                    >
                                                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none">
                                                            Reporting
                                                        </span>
                                                    </h1>
                                                </div>
                                                <p className="mt-2 hidden text-sm lg:block text-white group-hover:text-white">
                                                    Easily export your data into
                                                    an Excel spreadsheet where
                                                    you can do whatever the hell
                                                    you want with it.
                                                </p>
                                            </div>
                                        )}
                                    </Tab>
                                </Tab.List>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <Tab.Panels>
                                {FeatureImages.map((img) => (
                                    <Tab.Panel>
                                        <div role="tabpanel">
                                            <div className="relative sm:px-6 lg:hidden">
                                                <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"></div>
                                                <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                                                    Keep track of everyone's
                                                    salaries and whether or not
                                                    they've been paid. Direct
                                                    deposit not supported.
                                                </p>
                                            </div>
                                            <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-orange-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                                                <img
                                                    fetchPriority="high"
                                                    width={2174}
                                                    height={1464}
                                                    decoding="async"
                                                    src={img.src}
                                                    className="w-full text-transparent"
                                                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                                    alt="Feature"
                                                />
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </div>
                    </Tab.Group>
                </div>
            </div>
        </section>
    );
};

export default Features;
