import AffiliateBanner from "@/components/homepage/AffiliateBanner";
import CTA from "@/components/homepage/CTA";
import CenteredFeatures from "@/components/homepage/CenteredFeatures";
import FrequentlyAskedQuestions from "@/components/homepage/FrequentlyAskedQuestions";
import Footer from "@/components/shared/Footer";
import React from "react";

const AffiliatePage = () => {
    return (
        <>
            <AffiliateBanner />
            <CenteredFeatures />
            <FrequentlyAskedQuestions />
            <CTA />
            <Footer tBorder />
        </>
    );
};

export default AffiliatePage;
